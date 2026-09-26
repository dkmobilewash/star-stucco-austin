import { siteConfig } from './siteConfig'

export const BUSINESS_ID = `${siteConfig.url}/#business`

export const fullAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.city,
  addressRegion: siteConfig.address.state,
  postalCode: siteConfig.address.zip,
  addressCountry: 'US',
}

export const businessGeo = {
  '@type': 'GeoCoordinates' as const,
  latitude: siteConfig.coordinates.lat,
  longitude: siteConfig.coordinates.lng,
}

export const businessRef = {
  '@type': 'LocalBusiness' as const,
  '@id': BUSINESS_ID,
  name: siteConfig.name,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: siteConfig.url,
  address: fullAddress,
  geo: businessGeo,
}
