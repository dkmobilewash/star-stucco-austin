# Google Search Console Full Audit Prompt — stuccoaustin.com

Use this prompt with the Claude Chrome extension while logged into Google Search Console for the property `www.stuccoaustin.com`.

---

## Prompt

You are performing a comprehensive Google Search Console audit for www.stuccoaustin.com, a stucco contractor serving Austin, TX and surrounding areas. The property is already verified. Walk through every section of Google Search Console and report exactly what needs to be changed, added, or fixed on the website to improve rankings for stucco services in Austin TX and generate more leads. Be specific — give me URLs, exact issues, and actionable fixes.

### 1. Performance Report Audit

Go to **Performance > Search results**. Set the date range to "Last 6 months" (or maximum available). Enable all four metrics: Total clicks, Total impressions, Average CTR, Average position.

**Analyze and report:**

- **Top queries by impressions that have low CTR (below 3%)**: These are keywords where the site appears but doesn't get clicked. For each one, tell me:
  - The exact query
  - Current position, impressions, CTR
  - Which page is ranking for it
  - Whether the page's title tag and meta description match the search intent
  - Specific rewrites for the title tag and meta description to improve CTR (keep under 60 chars for title, 155 chars for description)

- **Top queries by clicks**: List the top 20. For each, note the landing page and whether there's an opportunity to improve position (e.g., position 4-10 keywords that could reach top 3 with optimization).

- **Queries where position is 4-20 ("striking distance" keywords)**: These are the biggest opportunities. For each:
  - The query and current average position
  - The page currently ranking
  - Whether the keyword appears in the page's H1, title tag, and first paragraph
  - Specific content recommendations to move it up (add a section, expand content, add FAQ, improve internal linking)

- **Queries with high impressions but NO clicks**: These might indicate a content gap or poor SERP snippet. For each, recommend whether to optimize the existing page or create a new one.

- **Pages tab**: Click the "Pages" tab in Performance. Identify:
  - Pages with declining clicks over the 6-month period
  - Pages with zero clicks but impressions
  - The top 10 pages by clicks — are they the right pages? (Service pages and cost guides should be top, not generic blog posts)

- **Country/Device breakdown**: Check the Devices tab. If mobile traffic is significantly lower CTR than desktop, flag it — the site may have mobile UX issues affecting click-through.

### 2. URL Inspection

Spot-check these critical pages by entering each URL in the URL Inspection tool:

1. `https://www.stuccoaustin.com/` (homepage)
2. `https://www.stuccoaustin.com/austin-stucco-repair` (repair service)
3. `https://www.stuccoaustin.com/austin-stucco-installation` (installation service)
4. `https://www.stuccoaustin.com/eifs-contractor-austin` (EIFS service)
5. `https://www.stuccoaustin.com/contact` (contact/lead form)
6. `https://www.stuccoaustin.com/blog/stucco-repair-cost-austin` (top cost guide)
7. `https://www.stuccoaustin.com/blog/cost-to-stucco-a-house-austin` (top cost guide)
8. `https://www.stuccoaustin.com/blog/popcorn-ceiling-removal-cost-austin` (highest volume new post)

For each URL, report:
- Is it indexed? If not, why? (Crawled but not indexed, Discovered but not crawled, etc.)
- Last crawl date — if older than 30 days, it needs re-indexing
- Any coverage issues (redirect, soft 404, server error, blocked by robots.txt)
- Whether Google sees the canonical URL correctly
- Whether the page is mobile-friendly
- Any detected structured data and whether it has errors

### 3. Indexing > Pages (Coverage Report)

Go to **Indexing > Pages**. Report:

- **Total indexed pages** vs. total pages on the site (should be ~141 based on sitemap)
- **Not indexed pages** — for each "reason" category, list:
  - How many pages are affected
  - Example URLs
  - Whether these are pages that SHOULD be indexed (real content) or correctly excluded (404s, redirects, utility pages)
- **Specifically flag**:
  - Any service pages or blog posts that are NOT indexed
  - Any "Crawled - currently not indexed" pages — these are the ones Google found but chose not to index. If any are important content pages, we need to improve their quality/uniqueness
  - Any "Discovered - currently not indexed" pages — these haven't been crawled yet. If important, submit them for indexing
  - Any "Duplicate without user-selected canonical" or "Duplicate, Google chose different canonical" — these indicate potential duplicate content issues
  - Any soft 404s on real content pages

### 4. Indexing > Sitemaps

Go to **Indexing > Sitemaps**. Report:

- Is `https://www.stuccoaustin.com/sitemap.xml` submitted and successfully processed?
- How many URLs does Google see in the sitemap vs. how many are indexed?
- Any errors or warnings on the sitemap?
- Last read date — if it hasn't been read recently, resubmit it
- Are there any old/stale sitemaps that should be removed?

### 5. Experience > Page Experience

Check **Experience > Page Experience** and **Core Web Vitals**:

- **Mobile**: Are pages passing Core Web Vitals? If not, which metrics fail (LCP, FID/INP, CLS)?
  - How many URLs are "Poor", "Needs Improvement", "Good"?
  - Example URLs for each failing group
  - For each failing metric, what's the measured value and what's the threshold?
- **Desktop**: Same analysis
- **HTTPS**: Any non-HTTPS pages?
- If Core Web Vitals data is insufficient, note that and recommend running Lighthouse/PageSpeed Insights on the top 5 pages manually

### 6. Enhancements (Structured Data)

Check each enhancement section that appears. The site uses these schema types:
- LocalBusiness (homepage)
- Service (service pages)
- FAQPage (blog posts with FAQs, service pages with FAQs)
- BlogPosting (blog posts)
- BreadcrumbList (all pages)

For each enhancement type, report:
- How many valid items vs. items with errors vs. items with warnings
- Specific error messages and which URLs they affect
- Missing schema types — e.g., if FAQPage isn't showing for blog posts that have FAQs, something is wrong with the markup
- Any "unparsable structured data" errors

**Specifically check:**
- Do all 8 new blog posts (added recently) show valid structured data?
- Are the FAQ schemas being picked up for posts that have them?
- Is the LocalBusiness schema on the homepage valid and complete?

### 7. Links Report

Go to **Links**:

- **External links (backlinks)**:
  - Total count
  - Top linking sites — are they legitimate or spammy?
  - Top linked pages — which pages attract the most links?
  - Are the service pages and cost guides getting any external links, or only the homepage?
  - Any toxic/spammy backlinks that should be disavowed?

- **Internal links**:
  - Top internally linked pages — the homepage, service pages, and cost guides should be at the top
  - Any important pages with very few internal links (orphan pages)?
  - Are the new blog posts showing internal links from other pages?

### 8. Manual Actions & Security Issues

- Check **Security & Manual Actions > Manual actions** — any penalties?
- Check **Security & Manual Actions > Security issues** — any malware or hacking flags?

### 9. Settings & Configuration

- Verify the correct property type (Domain vs URL-prefix)
- Check if there's a preferred domain set (www vs non-www)
- Check if international targeting is set (should be United States)
- Verify ownership method and that verification hasn't lapsed

---

## Output Format

Organize your findings into these priority tiers:

### CRITICAL (fix immediately — blocking indexing or causing errors)
- Issue, affected URL(s), exact fix

### HIGH PRIORITY (significant ranking/traffic impact)
- Issue, affected URL(s), exact fix with specific text/code changes

### MEDIUM PRIORITY (optimization opportunities)
- Issue, affected URL(s), recommended change

### LOW PRIORITY (nice to have)
- Issue, recommendation

### QUICK WINS (easy changes, immediate impact)
- Specific title tag rewrites for better CTR
- Meta description rewrites for striking-distance keywords
- Internal linking additions
- FAQ schema fixes

### CONTENT RECOMMENDATIONS
For each striking-distance keyword (position 4-20):
- Current ranking page
- Current position
- Recommended content additions (word count, sections to add, related keywords to include)
- Internal linking changes

### TECHNICAL FIXES
- Any crawlability issues
- Structured data errors with exact fixes
- Mobile usability problems
- Core Web Vitals failures with recommended fixes

---

## Key Business Context

- **Business**: Star Stucco of Austin (stuccoaustin.com)
- **Primary services**: Stucco repair, stucco installation, EIFS/synthetic stucco, stucco remediation, commercial stucco
- **Service area**: Austin TX, Travis County, and surrounding cities (Round Rock, Cedar Park, Pflugerville, Georgetown, San Marcos, Lakeway, Bee Cave, Dripping Springs, Kyle, Buda, Leander, Liberty Hill, Hutto, Manor, Bastrop, Smithville, Taylor, Elgin, Wimberley, New Braunfels, San Antonio)
- **Target keywords** (high priority): stucco repair austin, stucco contractor austin tx, stucco cost per square foot, stucco repair cost, how much does it cost to stucco a house, popcorn ceiling removal cost, stucco contractors near me, stucco painting cost, EIFS contractor
- **Goal**: Rank top 3 for stucco service keywords in Austin TX, generate more phone calls and contact form submissions
- **Recent changes**: 8 new keyword-targeted blog posts added, 6 existing pages optimized with target keywords, internal cross-linking added across service pages and blog posts. These changes need to be verified as indexed and performing.
- **The site has 141 indexable URLs in the sitemap and 176 total rendered pages**

Be thorough. Don't skip any section. Give me exact, actionable recommendations — not generic SEO advice. Every recommendation should reference a specific URL and include the exact change to make.
