#!/usr/bin/env node
/**
 * Server-side renders every route to unique static HTML.
 * Uses React's renderToString (pure Node.js, no browser binary).
 * Replaces inject-seo.mjs's head-only injection with full-body SSR + helmet head tags + JSON-LD.
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  unlinkSync,
  rmSync,
} from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { build as esbuildBuild } from 'esbuild'
import { execSync } from 'child_process'
import { tmpdir } from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const DIST_SERVER = join(ROOT, 'dist-server')
const SITE_URL = 'https://stuccoaustin.com'


// ── Step 1: Build SSR bundle with Vite ──────────────────────────────

console.log('\n  Building SSR bundle...\n')
execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-server', {
  cwd: ROOT,
  stdio: 'inherit',
})

// ── Step 2: Import the SSR render function ──────────────────────────

const ssrModule = await import(join(DIST_SERVER, 'entry-server.js'))
const render = ssrModule.render

// ── Step 3: Load dynamic route data via esbuild ─────────────────────

async function loadDynamicData() {
  const entryCode = `
    export { blogPosts } from '../src/data/blogPosts.ts'
    export { allCounties } from '../src/data/countyPages.ts'
    export { residentialStuccoData } from '../src/data/service-locations/residential-stucco.ts'
    export { commercialStuccoData } from '../src/data/service-locations/commercial-stucco.ts'
    export { stuccoRepairData } from '../src/data/service-locations/stucco-repair.ts'
    export { eifsContractorData } from '../src/data/service-locations/eifs-contractor.ts'
    export { interiorPlasterData } from '../src/data/service-locations/interior-plaster.ts'
    export { thinStoneVeneerData } from '../src/data/service-locations/thin-stone-veneer.ts'
  `
  const tmpFile = join(tmpdir(), `seo-data-${Date.now()}.mjs`)
  await esbuildBuild({
    stdin: { contents: entryCode, resolveDir: __dirname, loader: 'ts' },
    bundle: true,
    format: 'esm',
    outfile: tmpFile,
    platform: 'node',
    target: 'node18',
    external: ['@supabase/supabase-js', 'react', 'react-dom', 'react-router-dom', 'lucide-react'],
  })
  const mod = await import(tmpFile)
  unlinkSync(tmpFile)
  return mod
}

// ── Route list (single source of truth) ─────────────────────────────

const staticRoutes = [
  { path: '/' },
  { path: '/about' },
  { path: '/contact' },
  { path: '/austin-stucco-services' },
  { path: '/austin-stucco-installation' },
  { path: '/austin-stucco-repair' },
  { path: '/austin-stucco-finishing' },
  { path: '/austin-commercial-stucco' },
  { path: '/eifs-contractor-austin' },
  { path: '/austin-stucco-remediation' },
  { path: '/austin-thin-stone-veneer' },
  { path: '/reviews' },
  { path: '/blog' },
  { path: '/faqs' },
  { path: '/gallery' },
  { path: '/request-commercial-quote' },
  { path: '/service-areas' },
  { path: '/service-area/austin' },
  { path: '/service-area/round-rock' },
  { path: '/service-area/cedar-park' },
  { path: '/service-area/georgetown' },
  { path: '/service-area/pflugerville' },
  { path: '/service-area/westlake' },
]

function getDynamicRoutes(data) {
  const routes = []

  for (const post of data.blogPosts) {
    routes.push({ path: `/blog/${post.slug}` })
  }

  for (const county of data.allCounties) {
    const countyBase = county.slug.replace('-stucco', '')
    routes.push({
      path: `/service-areas/${county.slug}`,
    })
  }

  const serviceLocationSets = [
    { slug: 'residential-stucco', data: data.residentialStuccoData },
    { slug: 'commercial-stucco', data: data.commercialStuccoData },
    { slug: 'stucco-repair', data: data.stuccoRepairData },
    { slug: 'eifs-contractor', data: data.eifsContractorData },
    { slug: 'interior-plaster', data: data.interiorPlasterData },
    { slug: 'thin-stone-veneer', data: data.thinStoneVeneerData },
  ]

  for (const svc of serviceLocationSets) {
    for (const loc of svc.data) {
      routes.push({
        path: `/${svc.slug}/${loc.countySlug}`,
      })
    }
  }

  return routes
}

// ── Head-tag extraction from SSR output ─────────────────────────────
// React 19 + react-helmet-async v3: Helmet children are rendered inline
// in the component output (context object is NOT populated).
//
// During hydrateRoot, React 19 does NOT expect these elements in the DOM
// inside the hydration root:
//   - <title>, <meta>, <link rel=canonical> → React 19 hoists to <head>
//   - <link rel="preload"> → React 19 "float" resource, injected by
//     renderToString but NOT tracked during hydration
//
// Elements that MUST remain in the body (React expects them during hydration):
//   - <script type="application/ld+json"> → rendered by Helmet, not hoisted

function extractHeadTags(ssrHtml) {
  const headTags = []
  let bodyHtml = ssrHtml

  bodyHtml = bodyHtml.replace(/<title(?:\s[^>]*)?>[\s\S]*?<\/title>/g, (m) => {
    headTags.push(m)
    return ''
  })

  bodyHtml = bodyHtml.replace(/<meta\s[^>]*(?:name|property)="[^"]*"[^>]*>/g, (m) => {
    headTags.push(m)
    return ''
  })

  bodyHtml = bodyHtml.replace(/<link\s[^>]*rel="canonical"[^>]*>/g, (m) => {
    headTags.push(m)
    return ''
  })

  // React 19 float resources: renderToString injects <link rel="preload">
  // for high-priority images, but hydrateRoot does NOT expect them in the DOM
  bodyHtml = bodyHtml.replace(/<link\s[^>]*rel="preload"[^>]*\/?>/g, (m) => {
    headTags.push(m)
    return ''
  })

  return { headTags, bodyHtml }
}

// ── HTML injection ──────────────────────────────────────────────────

function injectSSRContent(template, routePath, renderFn, manifest) {
  const ssrHtml = renderFn(routePath)
  const { headTags, bodyHtml } = extractHeadTags(ssrHtml)

  let result = template

  // Replace body content inside <div id="root">
  // Template fallback has no nested <div> tags, so non-greedy match works
  result = result.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    () => `<div id="root">${bodyHtml}</div>`,
  )

  // Remove the hardcoded homepage hero preload on non-homepage routes
  if (routePath !== '/') {
    result = result.replace(
      /\s*<link rel="preload" as="image" href="\/images\/hero-stucco-austin\.webp"[^>]*\/>/,
      '',
    )
  }

  // Filter out hero image preload from SSR tags on homepage (template already has it)
  const filteredHeadTags = routePath === '/'
    ? headTags.filter(t => !t.includes('hero-stucco-austin'))
    : headTags

  if (filteredHeadTags.length > 0) {
    // Remove existing title from template
    const titleStart = result.indexOf('<title>')
    if (titleStart !== -1) {
      const titleEnd = result.indexOf('</title>', titleStart) + '</title>'.length
      result = result.slice(0, titleStart) + result.slice(titleEnd)
    }

    // Remove existing meta description from template
    const descStart = result.indexOf('<meta name="description"')
    if (descStart !== -1) {
      const descEnd = result.indexOf('/>', descStart) + 2
      result = result.slice(0, descStart) + result.slice(descEnd)
    }

    const headStr = filteredHeadTags.join('\n    ')

    // Insert after viewport meta tag (same insertion point as inject-seo.mjs)
    const viewportTag = '<meta name="viewport"'
    const idx = result.indexOf(viewportTag)
    if (idx !== -1) {
      const lineEnd = result.indexOf('/>', idx) + 2
      result = result.slice(0, lineEnd) + '\n    ' + headStr + result.slice(lineEnd)
    }
  }

  // Inject route-specific modulepreload hints to eliminate lazy-load waterfalls
  const preloadTags = getPreloadTags(manifest, routePath, result)
  if (preloadTags) {
    const scriptTag = result.indexOf('<script type="module"')
    if (scriptTag !== -1) {
      result = result.slice(0, scriptTag) + preloadTags + '\n    ' + result.slice(scriptTag)
    }
  }

  return result
}

// ── Route-specific modulepreload injection ─────────────────────────

function loadManifest() {
  const manifestPath = join(DIST, '.vite', 'manifest.json')
  if (!existsSync(manifestPath)) return null
  return JSON.parse(readFileSync(manifestPath, 'utf-8'))
}

function getChunkPreloads(manifest, chunkSrc) {
  if (!manifest || !manifest[chunkSrc]) return []
  const entry = manifest[chunkSrc]
  const preloads = new Set()
  preloads.add('/' + entry.file)
  if (entry.imports) {
    for (const imp of entry.imports) {
      const impEntry = manifest[imp] || Object.values(manifest).find(v => v.file === imp.replace(/^_?/, 'assets/'))
      if (impEntry) {
        preloads.add('/' + impEntry.file)
      } else {
        preloads.add('/' + (imp.startsWith('_') ? 'assets/' + imp.slice(1) : imp))
      }
    }
  }
  return [...preloads]
}

const ROUTE_TO_CHUNK = {
  '/': 'src/pages/Home.tsx',
  '/about': 'src/pages/About.tsx',
  '/contact': 'src/pages/Contact.tsx',
  '/austin-stucco-services': 'src/pages/Services.tsx',
  '/austin-stucco-installation': 'src/pages/services/StuccoInstallation.tsx',
  '/austin-stucco-repair': 'src/pages/services/StuccoRepair.tsx',
  '/austin-stucco-finishing': 'src/pages/services/StuccoFinishing.tsx',
  '/austin-commercial-stucco': 'src/pages/services/CommercialStucco.tsx',
  '/eifs-contractor-austin': 'src/pages/services/EifsContractor.tsx',
  '/austin-stucco-remediation': 'src/pages/services/StuccoRemediation.tsx',
  '/austin-thin-stone-veneer': 'src/pages/services/ThinStoneVeneer.tsx',
  '/reviews': 'src/pages/Reviews.tsx',
  '/blog': 'src/pages/Blog.tsx',
  '/faqs': 'src/pages/FAQs.tsx',
  '/gallery': 'src/pages/Gallery.tsx',
  '/service-areas': 'src/pages/ServiceAreas.tsx',
}

function getPreloadTags(manifest, routePath, html) {
  if (!manifest) return ''
  const chunkSrc = ROUTE_TO_CHUNK[routePath]
  if (!chunkSrc) return ''
  const files = getChunkPreloads(manifest, chunkSrc)
  // Only preload chunks NOT already referenced in the HTML (entry script, existing preloads)
  const newFiles = files.filter(f => {
    if (!f.endsWith('.js')) return false
    return !html.includes(f)
  })
  if (newFiles.length === 0) return ''
  return newFiles
    .map(f => `<link rel="modulepreload" crossorigin href="${f}">`)
    .join('\n    ')
}

// ── Sitemap with git-based lastmod ──────────────────────────────────

const lastmodCache = new Map()

function getGitLastmod(filePath) {
  if (lastmodCache.has(filePath)) return lastmodCache.get(filePath)
  try {
    const date = execSync(`git log -1 --format=%cs -- "${filePath}"`, {
      cwd: ROOT,
      encoding: 'utf-8',
    }).trim()
    const result = date || null
    lastmodCache.set(filePath, result)
    return result
  } catch {
    lastmodCache.set(filePath, null)
    return null
  }
}

function newestOf(...paths) {
  let newest = null
  for (const p of paths) {
    const d = getGitLastmod(p)
    if (d && (!newest || d > newest)) newest = d
  }
  return newest
}

function getRouteLastmod(routePath) {
  if (routePath === '/') return getGitLastmod('src/pages/Home.tsx')

  if (routePath.startsWith('/blog/')) {
    return newestOf('src/data/blogPosts.ts', 'src/data/newBlogPosts1.ts', 'src/data/newBlogPosts2.ts')
  }

  if (routePath.startsWith('/service-areas/')) {
    return newestOf(
      'src/data/countyPages.ts',
      'src/data/counties-group1.ts',
      'src/data/counties-group2.ts',
      'src/data/counties-group3.ts',
      'src/data/counties-group4.ts',
    )
  }

  for (const svc of ['residential-stucco', 'commercial-stucco', 'stucco-repair', 'eifs-contractor', 'interior-plaster', 'thin-stone-veneer']) {
    if (routePath.startsWith(`/${svc}/`)) {
      return getGitLastmod(`src/data/service-locations/${svc}.ts`)
    }
  }

  if (routePath.startsWith('/service-area/')) {
    const city = routePath.split('/').pop()
    const cityMap = {
      austin: 'Austin', 'round-rock': 'RoundRock', 'cedar-park': 'CedarPark',
      georgetown: 'Georgetown', pflugerville: 'Pflugerville', westlake: 'Westlake',
    }
    const fileName = cityMap[city]
    if (fileName) return getGitLastmod(`src/pages/areas/${fileName}.tsx`)
  }

  const serviceMap = {
    '/austin-stucco-installation': 'src/pages/services/StuccoInstallation.tsx',
    '/austin-stucco-repair': 'src/pages/services/StuccoRepair.tsx',
    '/austin-stucco-finishing': 'src/pages/services/StuccoFinishing.tsx',
    '/austin-commercial-stucco': 'src/pages/services/CommercialStucco.tsx',
    '/eifs-contractor-austin': 'src/pages/services/EifsContractor.tsx',
    '/austin-stucco-remediation': 'src/pages/services/StuccoRemediation.tsx',
    '/austin-thin-stone-veneer': 'src/pages/services/ThinStoneVeneer.tsx',
    '/austin-stucco-services': 'src/pages/Services.tsx',
  }
  if (serviceMap[routePath]) return getGitLastmod(serviceMap[routePath])

  const staticMap = {
    '/about': 'src/pages/About.tsx',
    '/contact': 'src/pages/Contact.tsx',
    '/reviews': 'src/pages/Reviews.tsx',
    '/blog': 'src/pages/Blog.tsx',
    '/faqs': 'src/pages/FAQs.tsx',
    '/gallery': 'src/pages/Gallery.tsx',
    '/request-commercial-quote': 'src/pages/CommercialQuote.tsx',
    '/service-areas': 'src/pages/ServiceAreas.tsx',
  }
  if (staticMap[routePath]) return getGitLastmod(staticMap[routePath])

  return null
}

function getPriority(path) {
  if (path === '/') return '1.0'
  if (path === '/austin-stucco-services' || path === '/eifs-contractor-austin') return '0.9'
  if (path.startsWith('/austin-') || path.startsWith('/service-area/')) return '0.8'
  if (path === '/reviews' || path === '/service-areas') return '0.8'
  if (['/about', '/contact', '/blog', '/faqs', '/gallery', '/request-commercial-quote'].includes(path)) return '0.7'
  if (path.startsWith('/service-areas/')) return '0.7'
  if (path.startsWith('/blog/')) return '0.6'
  return '0.6'
}

function generateSitemap(routes) {
  const fallbackDate = new Date().toISOString().slice(0, 10)
  const indexable = routes.filter((r) => !r.noindex)

  const urls = indexable.map((r) => {
    const loc = `${SITE_URL}${r.path}`
    const priority = getPriority(r.path)
    const changefreq = r.path === '/' ? 'daily' : parseFloat(priority) >= 0.8 ? 'weekly' : 'monthly'
    const lastmod = getRouteLastmod(r.path) || fallbackDate
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  console.log('\n  Server-side rendering all pages...\n')

  console.log('  Loading dynamic route data...')
  const dynamicData = await loadDynamicData()
  const dynamicRoutes = getDynamicRoutes(dynamicData)
  const allRoutes = [...staticRoutes, ...dynamicRoutes]
  console.log(`  ${staticRoutes.length} static + ${dynamicRoutes.length} dynamic = ${allRoutes.length} total routes\n`)

  const template = readFileSync(join(DIST, 'index.html'), 'utf-8')
  const manifest = loadManifest()
  if (manifest) console.log('  Manifest loaded — injecting route-specific modulepreload hints')

  let ok = 0
  let fail = 0

  for (const route of allRoutes) {
    try {
      const html = injectSSRContent(template, route.path, render, manifest)
      const outPath =
        route.path === '/'
          ? join(DIST, 'index.html')
          : join(DIST, route.path, 'index.html')
      mkdirSync(dirname(outPath), { recursive: true })
      writeFileSync(outPath, html)
      ok++
      process.stdout.write(`\r  Rendered ${ok + fail}/${allRoutes.length}`)
    } catch (err) {
      fail++
      console.error(`\n  ✗ ${route.path}: ${err.message}`)
    }
  }

  console.log(`\n\n  SSR complete: ${ok} pages rendered${fail ? `, ${fail} failed` : ''}\n`)

  // Sitemap
  const sitemap = generateSitemap(allRoutes)
  writeFileSync(join(DIST, 'sitemap.xml'), sitemap)
  const indexableCount = allRoutes.filter((r) => !r.noindex).length
  console.log(`  Sitemap generated: ${indexableCount} indexable URLs\n`)

  // Clean up server build artifacts
  rmSync(DIST_SERVER, { recursive: true, force: true })
  console.log('  Cleaned up SSR build artifacts\n')

  if (fail) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
