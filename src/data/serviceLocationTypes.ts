export interface ServiceLocationData {
  serviceSlug: string
  countySlug: string
  serviceName: string
  countyName: string
  seoTitle: string
  metaDescription: string
  heroH1: string
  heroIntro: string
  localIntro: {
    heading: string
    paragraphs: string[]
  }
  whatsIncluded: {
    items: { title: string; description: string }[]
  }
  commonNeeds: {
    intro: string
    items: { title: string; description: string }[]
  }
  whyChooseUs: {
    reasons: string[]
  }
  process: {
    steps: { title: string; description: string }[]
  }
  faqs: { question: string; answer: string }[]
  cta: {
    heading: string
    description: string
  }
}

export const serviceDefinitions = [
  { slug: 'residential-stucco', name: 'Residential Stucco', path: '/austin-stucco-installation' },
  { slug: 'commercial-stucco', name: 'Commercial Stucco', path: '/austin-commercial-stucco' },
  { slug: 'stucco-repair', name: 'Stucco Repair', path: '/austin-stucco-repair' },
  { slug: 'eifs-contractor', name: 'EIFS Contractor', path: '/eifs-contractor-austin' },
  { slug: 'interior-plaster', name: 'Interior Plaster', path: '/austin-stucco-finishing' },
  { slug: 'thin-stone-veneer', name: 'Thin Stone Veneer', path: '/austin-thin-stone-veneer' },
] as const

export const countyDefinitions = [
  { slug: 'travis-county', name: 'Travis County', areaSlug: 'travis-county-stucco' },
  { slug: 'williamson-county', name: 'Williamson County', areaSlug: 'williamson-county-stucco' },
  { slug: 'bell-county', name: 'Bell County', areaSlug: 'bell-county-stucco' },
  { slug: 'burnet-county', name: 'Burnet County', areaSlug: 'burnet-county-stucco' },
  { slug: 'llano-county', name: 'Llano County', areaSlug: 'llano-county-stucco' },
  { slug: 'hays-county', name: 'Hays County', areaSlug: 'hays-county-stucco' },
  { slug: 'comal-county', name: 'Comal County', areaSlug: 'comal-county-stucco' },
  { slug: 'bastrop-county', name: 'Bastrop County', areaSlug: 'bastrop-county-stucco' },
  { slug: 'blanco-county', name: 'Blanco County', areaSlug: 'blanco-county-stucco' },
  { slug: 'gillespie-county', name: 'Gillespie County', areaSlug: 'gillespie-county-stucco' },
  { slug: 'caldwell-county', name: 'Caldwell County', areaSlug: 'caldwell-county-stucco' },
  { slug: 'lee-county', name: 'Lee County', areaSlug: 'lee-county-stucco' },
  { slug: 'milam-county', name: 'Milam County', areaSlug: 'milam-county-stucco' },
  { slug: 'brazos-county', name: 'Brazos County', areaSlug: 'brazos-county-stucco' },
  { slug: 'mclennan-county', name: 'McLennan County', areaSlug: 'mclennan-county-stucco' },
  { slug: 'guadalupe-county', name: 'Guadalupe County', areaSlug: 'guadalupe-county-stucco' },
] as const
