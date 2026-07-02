import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../lib/siteConfig'

interface SEOProps {
  title: string
  description: string
  path: string
  schema?: object | object[]
  ogType?: string
  noindex?: boolean
}

export default function SEO({ title, description, path, schema, ogType, noindex }: SEOProps) {
  const url = `${siteConfig.url}${path}`
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []

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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  )
}
