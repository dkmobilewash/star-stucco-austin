#!/usr/bin/env node
/**
 * Injects per-page SEO tags (<title>, <meta>, <link rel="canonical">, OG tags)
 * into copies of dist/index.html for each route. No browser needed — runs on
 * any build environment including Vercel.
 *
 * Dynamic page data (blog posts, county pages, service-location pages) is loaded
 * from the TypeScript source files via esbuild.
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  unlinkSync,
} from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'
import { tmpdir } from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const SITE_URL = 'https://stuccoaustin.com'
const SITE_NAME = 'Star Stucco of Austin'

// ── Static routes with hardcoded SEO data ────────────────────────────

const staticRoutes = [
  {
    path: '/',
    title: 'Stucco Contractors in Austin, TX | Star Stucco | Free Estimates',
    description: 'Austin\'s top-rated stucco contractor. 35+ 5-star reviews, licensed & insured. Repair, installation & finishing. Call for a free same-week estimate.',
  },
  {
    path: '/about',
    title: 'About Star Stucco of Austin | Austin\'s Trusted Stucco Contractor',
    description: 'Learn about Star Stucco of Austin, a family-owned stucco contractor with 15+ years serving Travis County. Expert installation, repair, and finishing across the Austin metro area.',
  },
  {
    path: '/contact',
    title: 'Contact Star Stucco of Austin | Free Estimate Austin, TX',
    description: 'Contact Star Stucco of Austin for a free stucco estimate. Call (512) 706-9699 or fill out our form. Serving Austin, TX and Travis County with expert stucco services.',
  },
  {
    path: '/austin-stucco-services',
    title: 'Stucco Services Austin, TX | Star Stucco of Austin',
    description: 'Comprehensive stucco services in Austin, TX -- installation, repair, finishing, and commercial projects. Expert stucco contractors serving Travis County and the Austin metro area.',
  },
  {
    path: '/austin-stucco-installation',
    title: 'Stucco Installation Austin, TX | New Construction | Star Stucco',
    description: 'Professional stucco installation for new builds & renovations in Austin. 3-coat & synthetic systems. Licensed contractor, free estimates, 5-star rated.',
  },
  {
    path: '/austin-stucco-repair',
    title: 'Stucco Repair Austin, TX | Star Stucco | Free Estimates',
    description: 'Expert stucco crack & damage repair in Austin. Texture matching, waterproofing, HOA-approved work. 35+ 5-star reviews. Get your free estimate today.',
  },
  {
    path: '/austin-stucco-finishing',
    title: 'Stucco Finishing Austin, TX | Textures & Coatings | Star Stucco',
    description: 'Custom stucco finishes in Austin — smooth, sand, dash & designer textures. Expert color matching & finish coats. Free estimates, licensed & insured.',
  },
  {
    path: '/austin-commercial-stucco',
    title: 'Commercial Stucco Contractor Austin, TX | Star Stucco',
    description: 'Commercial stucco installation & repair in Austin. Multi-family, retail & office buildings. Licensed, bonded & insured. Free commercial estimates.',
  },
  {
    path: '/eifs-contractor-austin',
    title: 'EIFS Contractor Austin TX | Synthetic Stucco Installation & Repair | Star Stucco',
    description: 'Austin\'s trusted EIFS contractor. Star Stucco installs, repairs & replaces synthetic stucco (EIFS) for homes & businesses. Free estimates.',
  },
  {
    path: '/austin-stucco-remediation',
    title: 'Stucco Remediation Austin TX | Moisture & Water Damage Repair | Star Stucco',
    description: 'Expert stucco remediation in Austin, TX. We find and fix moisture intrusion and water damage down to the substrate — not just the surface. Free estimates.',
  },
  {
    path: '/austin-thin-stone-veneer',
    title: 'Thin Stone Veneer Austin, TX | Star Stucco of Austin',
    description: 'Professional thin stone veneer installation in Austin, TX. Fireplace surrounds, accent walls, exterior facades, and outdoor kitchens. Natural and manufactured stone. Free estimates.',
  },
  {
    path: '/reviews',
    title: 'Customer Reviews | Star Stucco of Austin | 5-Star Rated',
    description: 'Read real Google reviews from Star Stucco of Austin customers. 30 five-star reviews from homeowners and businesses across Central Texas. See why we are Austin\'s top-rated stucco contractor.',
  },
  {
    path: '/blog',
    title: 'Stucco Tips & News Austin, TX | Star Stucco of Austin Blog',
    description: 'Expert stucco tips, maintenance advice, and industry news for Austin, TX homeowners. Learn how to protect and maintain your stucco exterior in the Central Texas climate.',
  },
  {
    path: '/faqs',
    title: 'Stucco FAQs | Star Stucco of Austin | Austin, TX',
    description: 'Frequently asked questions about stucco, EIFS, stone veneer, and interior plaster services in Austin, TX. Get answers from Star Stucco of Austin — trusted stucco contractor since 2013.',
  },
  {
    path: '/gallery',
    title: 'Stucco Project Gallery | Star Stucco of Austin | Austin, TX',
    description: 'Browse completed stucco projects by Star Stucco of Austin — residential, commercial, stucco repair, EIFS, and stone veneer work across Central Texas. See our craftsmanship firsthand.',
  },
  {
    path: '/request-commercial-quote',
    title: 'Commercial Stucco Quote Austin, TX | Star Stucco of Austin',
    description: 'Request a free commercial stucco quote from Star Stucco of Austin. New construction, EIFS, stucco repair, and finishing for offices, retail, multifamily, and more across Central Texas.',
  },
  {
    path: '/service-areas',
    title: 'Stucco Service Areas in Central Texas | Star Stucco of Austin',
    description: 'Star Stucco of Austin serves 16 counties across Central Texas. Find expert stucco repair, installation, and finishing near you. Free estimates available.',
  },
  {
    path: '/service-area/austin',
    title: 'Stucco Contractor Austin, TX | Installation, Repair & Finishing',
    description: 'Star Stucco of Austin is the trusted stucco contractor for Austin, TX homeowners. Expert installation, repair, and finishing services across all Austin neighborhoods. Free estimates.',
  },
  {
    path: '/service-area/round-rock',
    title: 'Stucco Services Round Rock, TX | Star Stucco of Austin',
    description: 'Professional stucco installation, repair, and finishing in Round Rock, TX. Serving Brushy Creek, Teravista, and all Williamson County communities.',
  },
  {
    path: '/service-area/cedar-park',
    title: 'Stucco Contractor Cedar Park, TX | Star Stucco of Austin',
    description: 'Expert stucco contractor serving Cedar Park, TX. Installation, repair, and custom finishes for homes and businesses in Williamson County.',
  },
  {
    path: '/service-area/georgetown',
    title: 'Stucco Services Georgetown, TX | Star Stucco of Austin',
    description: 'Professional stucco installation, repair, and refinishing in Georgetown, TX. Serving historic downtown, Sun City, and all Williamson County communities.',
  },
  {
    path: '/service-area/pflugerville',
    title: 'Stucco Contractor Pflugerville, TX | Star Stucco of Austin',
    description: 'Expert stucco installation, repair, and EIFS systems in Pflugerville, TX. Serving Blackhawk, Falcon Pointe, Villages of Hidden Lake, and all Travis County communities.',
  },
  {
    path: '/service-area/westlake',
    title: 'Stucco Services Westlake Hills, TX | Star Stucco of Austin',
    description: 'Premium stucco installation and finishing for Westlake Hills luxury homes. Expert craftsmanship for high-end estates, custom color matching, and architectural finishes that protect your investment.',
  },
]

// ── Build dynamic data from TypeScript sources via esbuild ───────────

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

  await build({
    stdin: {
      contents: entryCode,
      resolveDir: __dirname,
      loader: 'ts',
    },
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

const DISTANT_COUNTIES = new Set([
  'brazos-county', 'mclennan-county', 'milam-county', 'lee-county',
  'caldwell-county', 'gillespie-county', 'llano-county', 'guadalupe-county',
])

function getDynamicRoutes(data) {
  const routes = []

  // Blog posts
  for (const post of data.blogPosts) {
    routes.push({
      path: `/blog/${post.slug}`,
      title: post.seoTitle ?? `${post.title} | ${SITE_NAME} Blog`,
      description: post.seoDescription ?? post.excerpt,
    })
  }

  // County pages
  for (const county of data.allCounties) {
    const countyBase = county.slug.replace('-stucco', '')
    routes.push({
      path: `/service-areas/${county.slug}`,
      title: county.seoTitle,
      description: county.metaDescription,
      noindex: DISTANT_COUNTIES.has(countyBase),
    })
  }

  // Service-location pages (6 service types x N counties)
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
        title: loc.seoTitle,
        description: loc.metaDescription,
        noindex: DISTANT_COUNTIES.has(loc.countySlug),
      })
    }
  }

  return routes
}

// ── HTML injection ───────────────────────────────────────────────────

function injectSeoTags(html, route) {
  const url = `${SITE_URL}${route.path}`

  const tags = [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
  ]

  if (route.noindex) {
    tags.push(`<meta name="robots" content="noindex, nofollow" />`)
  } else {
    tags.push(`<link rel="canonical" href="${url}" />`)
  }

  const ogImage = `${SITE_URL}/images/hero-stucco-austin.webp`

  tags.push(
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
  )

  if (route.schema) {
    const schemaData = Array.isArray(route.schema) ? route.schema : [route.schema]
    for (const s of schemaData) {
      tags.push(`<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    }
  }

  const seoTags = tags.join('\n    ')

  let result = html
  const titleStart = result.indexOf('<title>')
  if (titleStart !== -1) {
    const titleEnd = result.indexOf('</title>', titleStart) + '</title>'.length
    result = result.slice(0, titleStart) + result.slice(titleEnd)
  }
  const descStart = result.indexOf('<meta name="description"')
  if (descStart !== -1) {
    const descEnd = result.indexOf('/>', descStart) + 2
    result = result.slice(0, descStart) + result.slice(descEnd)
  }

  const viewportTag = '<meta name="viewport"'
  const idx = result.indexOf(viewportTag)
  if (idx === -1) return result

  const lineEnd = result.indexOf('/>', idx) + 2
  return result.slice(0, lineEnd) + '\n    ' + seoTags + result.slice(lineEnd)
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// ── Sitemap generation ──────────────────────────────────────────────

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
  const today = new Date().toISOString().slice(0, 10)
  const indexable = routes.filter((r) => !r.noindex)

  const urls = indexable.map((r) => {
    const loc = `${SITE_URL}${r.path}`
    const priority = getPriority(r.path)
    const changefreq = r.path === '/' ? 'daily' : parseFloat(priority) >= 0.8 ? 'weekly' : 'monthly'
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  console.log('\n  Injecting SEO tags into HTML pages...\n')

  const indexHtml = readFileSync(join(DIST, 'index.html'), 'utf-8')

  console.log('  Loading dynamic route data...')
  const dynamicData = await loadDynamicData()
  const dynamicRoutes = getDynamicRoutes(dynamicData)

  const allRoutes = [...staticRoutes, ...dynamicRoutes]
  console.log(`  ${staticRoutes.length} static + ${dynamicRoutes.length} dynamic = ${allRoutes.length} total routes\n`)

  let ok = 0

  for (const route of allRoutes) {
    const html = injectSeoTags(indexHtml, route)
    const outPath =
      route.path === '/'
        ? join(DIST, 'index.html')
        : join(DIST, route.path, 'index.html')

    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, html)
    ok++
  }

  console.log(`  SEO injection complete: ${ok} pages written\n`)

  const sitemap = generateSitemap(allRoutes)
  writeFileSync(join(DIST, 'sitemap.xml'), sitemap)
  const indexableCount = allRoutes.filter((r) => !r.noindex).length
  console.log(`  Sitemap generated: ${indexableCount} indexable URLs written to dist/sitemap.xml\n`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
