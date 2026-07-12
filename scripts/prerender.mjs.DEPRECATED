#!/usr/bin/env node
import { chromium } from 'playwright-core'
import { createServer } from 'http'
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  copyFileSync,
  readdirSync,
} from 'fs'
import { join, dirname, extname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const PORT = 4173
const CONCURRENCY = 5
const SITE_URL = 'https://stuccoaustin.com'

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
}

function findChromium() {
  const pwPath = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers'
  if (existsSync(pwPath)) {
    const dirs = readdirSync(pwPath).filter((d) => d.startsWith('chromium-')).sort()
    if (dirs.length > 0) {
      const chrome = join(pwPath, dirs[dirs.length - 1], 'chrome-linux', 'chrome')
      if (existsSync(chrome)) return chrome
    }
    const linked = join(pwPath, 'chromium', 'chrome-linux', 'chrome')
    if (existsSync(linked)) return linked
  }

  try {
    return execSync('which chromium-browser || which chromium || which google-chrome', {
      encoding: 'utf-8',
    }).trim()
  } catch {
    return null
  }
}

function getRoutes() {
  const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf-8')
  const matches = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  return matches
    .map((m) => m[1].replace(SITE_URL, '') || '/')
    .filter((r) => r !== '/404')
}

function startServer() {
  const fallback = join(DIST, '200.html')
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = req.url.split('?')[0]
      let file = join(DIST, url === '/' ? '200.html' : url)

      if (!extname(file)) {
        if (existsSync(join(file, 'index.html'))) file = join(file, 'index.html')
        else file = fallback
      }
      if (!existsSync(file)) file = fallback

      try {
        const content = readFileSync(file)
        res.writeHead(200, {
          'Content-Type': MIME[extname(file)] || 'application/octet-stream',
        })
        res.end(content)
      } catch {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(PORT, () => resolve(server))
  })
}

function cleanHtml(html) {
  const headEnd = html.indexOf('</head>')
  if (headEnd === -1) return html

  let head = html.slice(0, headEnd)
  const rest = html.slice(headEnd)

  const firstTitleEnd = head.indexOf('</title>')
  if (firstTitleEnd === -1) return html
  const afterFirstTitle = firstTitleEnd + '</title>'.length

  const preconnect = head.indexOf('<link rel="preconnect"')
  if (preconnect === -1 || preconnect <= afterFirstTitle) return html

  head = head.slice(0, afterFirstTitle) + head.slice(preconnect)

  return head + rest
}

async function renderPage(browser, route) {
  const ctx = await browser.newContext()
  const page = await ctx.newPage()
  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle',
      timeout: 30000,
    })
    await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {})
    await page.waitForTimeout(300)
    const raw = await page.content()
    return cleanHtml(raw)
  } finally {
    await ctx.close()
  }
}

async function main() {
  console.log('\n  Prerendering static HTML for SEO...\n')

  const execPath = findChromium()
  if (!execPath) {
    console.log(
      '  No Chromium found — skipping prerender. Install with: npx playwright install chromium'
    )
    return
  }
  console.log(`  Using Chromium: ${execPath}`)

  copyFileSync(join(DIST, 'index.html'), join(DIST, '200.html'))

  const routes = getRoutes()
  console.log(`  Found ${routes.length} routes in sitemap.xml\n`)

  const server = await startServer()
  const browser = await chromium.launch({
    headless: true,
    executablePath: execPath,
  })

  let ok = 0
  let fail = 0

  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const batch = routes.slice(i, i + CONCURRENCY)
    await Promise.all(
      batch.map(async (route) => {
        try {
          const html = await renderPage(browser, route)
          const out =
            route === '/'
              ? join(DIST, 'index.html')
              : join(DIST, route, 'index.html')
          mkdirSync(dirname(out), { recursive: true })
          writeFileSync(out, html)
          ok++
          process.stdout.write(`\r  Rendered ${ok + fail}/${routes.length}`)
        } catch (err) {
          fail++
          console.error(`\n  x ${route}: ${err.message}`)
        }
      })
    )
  }

  await browser.close()
  server.close()

  console.log(
    `\n\n  Prerender complete: ${ok} pages rendered${fail ? `, ${fail} failed` : ''}\n`
  )
  if (fail) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
