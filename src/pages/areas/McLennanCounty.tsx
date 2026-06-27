import { Link } from 'react-router-dom'
import { ChevronRight, Phone, MapPin, Star, Shield, Clock } from 'lucide-react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Services in McLennan County, TX',
  provider: {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', postalCode: '78735', addressCountry: 'US' },
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'McLennan County, TX' },
  description: 'Expert stucco services in McLennan County, TX. Serving Waco, Hewitt, Woodway, Bellmead, Lorena, and surrounding communities.',
}

const communities = [
  'Waco', 'Hewitt', 'Woodway', 'Bellmead', 'Lorena',
  'Hillsboro area', 'China Spring', 'Axtell', 'Hallsburg', 'Lacy-Lakeview',
  'West', 'McGregor', 'Riesel', 'Ross', 'Mart',
]

const highlights = [
  { stat: '280+', label: 'McLennan County projects' },
  { stat: '4.8/5', label: 'Average review rating' },
  { stat: '8+', label: 'Years serving the county' },
  { stat: '24hr', label: 'Estimate turnaround' },
]

export default function McLennanCountyArea() {
  return (
    <>
      <SEO
        title="Stucco Contractor McLennan County, TX | Star Stucco of Austin"
        description="Star Stucco of Austin provides expert stucco installation, repair, and finishing throughout McLennan County, TX. Serving Waco, Hewitt, Woodway, and surrounding communities. Free estimates."
        path="/mclennan-county"
        schema={schema}
      />

      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600&fm=webp" alt="McLennan County Texas Waco" className="h-full w-full object-cover opacity-20" fetchPriority="high" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 to-secondary-900/95" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="flex items-center gap-2 text-sm text-secondary-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-400">McLennan County</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/50 border border-primary-700/30 px-4 py-1.5 mb-6">
              <MapPin className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Serving All of McLennan County, TX</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">McLennan County's Trusted Stucco Contractor</h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              From the revitalized neighborhoods of Waco to the growing communities of Hewitt and
              Woodway, Star Stucco brings expert craftsmanship and Central Texas expertise to
              McLennan County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg">
                Get a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <a href={`tel:${siteConfig.phone}`} aria-label={`Call Star Stucco at ${siteConfig.phone}`} className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400">
                <Phone className="mr-2 h-4 w-4" />{siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">Why McLennan County Homeowners Trust Star Stucco</h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Waco's remarkable revitalization over the past decade has brought new energy to
                McLennan County's housing market. From historic Craftsman bungalows near Baylor
                University to new construction in Woodway and Hewitt, the county offers a wide
                range of stucco opportunities.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8">
                McLennan County's Blackland Prairie soils require robust stucco systems with
                adequate control joints. Our crews are thoroughly trained in the application
                requirements for these soil conditions, which are among the most challenging
                in Central Texas.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item) => (
                  <div key={item.label} className="text-center rounded-xl bg-secondary-50 p-4">
                    <p className="text-2xl font-bold text-primary-700">{item.stat}</p>
                    <p className="text-xs text-secondary-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp" alt="Stucco exterior in McLennan County" loading="lazy" className="rounded-2xl shadow-xl" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">Stucco Services in McLennan County</h2>
            <p className="text-secondary-600">Complete stucco solutions for residential and commercial properties throughout McLennan County.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Stucco Installation', path: '/austin-stucco-installation', desc: 'New construction and re-stucco for McLennan County homes engineered for Blackland Prairie conditions.' },
              { title: 'Stucco Repair', path: '/austin-stucco-repair', desc: 'Restoration for older Waco and McLennan County properties, including historic homes.' },
              { title: 'Stucco Finishing', path: '/austin-stucco-finishing', desc: 'Custom textures that complement McLennan County\'s diverse architectural styles.' },
              { title: 'Commercial Stucco', path: '/austin-commercial-stucco', desc: 'Commercial stucco for the growing Waco retail, hospitality, and multi-family market.' },
            ].map((service) => (
              <Link key={service.path} to={service.path} aria-label={`Learn more about ${service.title} in McLennan County`} className="group flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors">
                  <ChevronRight className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1 group-hover:text-primary-700 transition-colors">{service.title}</h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">McLennan County Communities We Serve</h2>
              <p className="text-secondary-600 leading-relaxed mb-8">From Waco's revitalized downtown neighborhoods to the suburbs of Hewitt, Woodway, and Lorena, we cover all of McLennan County.</p>
              <div className="flex flex-wrap gap-2">
                {communities.map((n) => (<span key={n} className="rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-xs font-medium text-secondary-700">{n}</span>))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Star, title: 'Waco Market Expertise', desc: 'Experience with both historic Waco properties and new construction in McLennan County suburbs.' },
                { icon: Shield, title: 'Fully Licensed & Insured', desc: 'Licensed Texas contractor with full coverage for every McLennan County project.' },
                { icon: Clock, title: 'Fast Response', desc: 'Prompt estimates and scheduling for all McLennan County communities.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl bg-secondary-50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <item.icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-secondary-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Get Your Free McLennan County Stucco Estimate</h2>
          <p className="text-primary-100 text-lg mb-8">Trusted by McLennan County homeowners across the Waco metro. Detailed estimates within 24 hours of your on-site consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 hover:shadow-lg">Schedule Your Estimate</Link>
            <a href={`tel:${siteConfig.phone}`} aria-label={`Call Star Stucco at ${siteConfig.phone}`} className="inline-flex items-center justify-center rounded-lg border border-primary-400 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white">
              <Phone className="mr-2 h-4 w-4" />{siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
