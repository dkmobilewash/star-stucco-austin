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

export default function SEO({ title, description, path, schema, ogType, noindex, ogImage }: SEOProps) {
  const url = `${siteConfig.url}${path}`
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []
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
