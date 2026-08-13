import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../lib/siteConfig'

interface SEOProps {
  title: string
  description: string
  path: string
  schema?: object | object[]
  ogType?: string
  noindex?: boolean
  ogImage?: string
}

const DEFAULT_OG_IMAGE = `${siteConfig.url}/images/hero-stucco-austin.webp`

function buildBreadcrumbSchema(path: string, title: string) {
  if (path === '/') return null
  const name = title.split(' | ')[0]!.trim()
  const items: { name: string; item: string }[] = [
    { name: 'Home', item: siteConfig.url + '/' },
  ]
  if (path.startsWith('/blog/')) {
    items.push({ name: 'Blog', item: siteConfig.url + '/blog' })
    items.push({ name, item: siteConfig.url + path })
  } else if (path.startsWith('/service-areas/') || path.startsWith('/service-area/')) {
    items.push({ name: 'Service Areas', item: siteConfig.url + '/service-areas' })
    items.push({ name, item: siteConfig.url + path })
  } else if (/^\/(residential-stucco|commercial-stucco|stucco-repair|eifs-contractor|interior-plaster|thin-stone-veneer)\//.test(path)) {
    items.push({ name: 'Services', item: siteConfig.url + '/austin-stucco-services' })
    items.push({ name, item: siteConfig.url + path })
  } else {
    items.push({ name, item: siteConfig.url + path })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  }
}

export default function SEO({ title, description, path, schema, ogType, noindex, ogImage }: SEOProps) {
  const url = `${siteConfig.url}${path}`
  const breadcrumb = buildBreadcrumbSchema(path, title)
  const userSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []
  const hasBreadcrumb = userSchemas.some((s: any) => s?.['@type'] === 'BreadcrumbList')
  const schemas = breadcrumb && !hasBreadcrumb ? [...userSchemas, breadcrumb] : userSchemas
  const image = ogImage ?? DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType ?? 'website'} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
