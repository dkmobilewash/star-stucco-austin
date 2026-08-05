import { Link } from 'react-router-dom'
import { ChevronRight, Phone, MapPin, Star, Shield, Clock } from 'lucide-react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Services in Austin, TX',
  provider: {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78701',
      addressCountry: 'US',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Austin',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Travis County, TX' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  description: 'Expert stucco installation, repair, and finishing services in Austin, TX. Serving all Austin neighborhoods including South Congress, East Austin, Mueller, and Westlake Hills.',
}

const neighborhoods = [
  'South Congress', 'East Austin', 'Mueller', 'Hyde Park', 'Tarrytown',
  'Travis Heights', 'Barton Hills', 'Zilker', 'Clarksville', 'Bouldin Creek',
  'South Lamar', 'North Loop', 'Crestview', 'Allandale', 'Rosedale',
]

const projectHighlights = [
  { stat: '800+', label: 'Austin homes completed' },
  { stat: '4.9/5', label: 'Average review rating' },
  { stat: '15+', label: 'Years serving Austin' },
  { stat: '24hr', label: 'Estimate turnaround' },
]

export default function AustinArea() {
  return (
    <>
      <SEO
        title="Stucco Contractor Austin, TX | Repair & Installation"
        description="Star Stucco of Austin is the trusted stucco contractor for Austin, TX homeowners. Expert installation, repair, and finishing services across all Austin neighborhoods. Free estimates."
        path="/service-area/austin"
        schema={schema}
      />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-home-roundrock-hero.webp"
            alt="Austin, Texas skyline with modern architecture"
            className="h-full w-full object-cover opacity-20"
            fetchPriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 to-secondary-900/95" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="flex items-center gap-2 text-sm text-secondary-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-400">Austin</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/50 border border-primary-700/30 px-4 py-1.5 mb-6">
              <MapPin className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Serving All of Austin, TX</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Austin's Premier Stucco Contractor
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              From the bustling streets of South Congress to the tree-lined avenues of
              Tarrytown, Star Stucco delivers expert craftsmanship that protects and
              beautifies Austin homes against the Central Texas climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
              >
                Get a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={`${siteConfig.phoneHref}`}
                aria-label={`Call ${siteConfig.phone} — Star Stucco`}
                className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400"
              >
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Austin Homeowners Trust Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Why Austin Homeowners Trust Star Stucco
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Austin's explosive growth over the past two decades has created a diverse
                architectural landscape -- from the mid-century bungalows of Hyde Park to
                modern constructions in Mueller. Each style presents unique stucco challenges,
                and our team has mastered them all.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8">
                The Austin climate is demanding: UV indices among the highest in Texas,
                clay soils that shift with every drought and deluge cycle, and summer
                temperatures that push stucco materials to their limits. Our systems are
                specifically engineered for these conditions, using polymer-modified mixes
                and flexible control joints that move with your home.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {projectHighlights.map((item) => (
                  <div key={item.label} className="text-center rounded-xl bg-secondary-50 p-4">
                    <p className="text-2xl font-bold text-primary-700">{item.stat}</p>
                    <p className="text-xs text-secondary-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/stucco-project-completed.webp"
                alt="Residential stucco exterior in Austin neighborhood"
                loading="lazy"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services Available in Austin */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Stucco Services Available in Austin
            </h2>
            <p className="text-secondary-600">
              Complete stucco solutions for residential and commercial properties
              throughout the Austin metro area.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Stucco Installation', path: '/austin-stucco-installation', desc: 'New construction and re-stucco for Austin homes. Three-coat systems engineered for Travis County climate conditions.' },
              { title: 'Stucco Repair', path: '/austin-stucco-repair', desc: 'Crack repair, water damage restoration, and structural fixes for Austin properties affected by clay soil movement.' },
              { title: 'Stucco Finishing', path: '/austin-stucco-finishing', desc: 'Custom textures and colors that complement Austin architectural styles from Hill Country to modern.' },
              { title: 'Commercial Stucco', path: '/austin-commercial-stucco', desc: 'Large-scale projects for retail, multi-family, and office buildings across the Austin metro.' },
            ].map((service) => (
              <Link
                key={service.path}
                to={service.path}
                aria-label={`Learn more about ${service.title} in Austin`}
                className="group flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors">
                  <ChevronRight className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Austin Neighborhoods We Serve */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Austin Neighborhoods We Serve
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Whether you live in a 1940s cottage in Bouldin Creek or a contemporary
                custom home near Lady Bird Lake, Star Stucco understands the unique
                characteristics of your neighborhood. We are familiar with local HOA
                guidelines, architectural review boards, and the specific soil and
                drainage conditions in every part of Austin.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8">
                Our Austin crews position out of our South Congress Avenue location,
                allowing us to reach any neighborhood in the city within 30 minutes.
                Same-day estimates are available for most Austin addresses.
              </p>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-secondary-200 bg-white px-3 py-1.5 text-xs font-medium text-secondary-700"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Star, title: 'Local Expertise', desc: 'We know Austin soil types, drainage patterns, and building codes for every part of the city.' },
                { icon: Shield, title: 'Fully Licensed', desc: 'City of Austin licensed contractor with full liability and workers compensation coverage.' },
                { icon: Clock, title: 'Fast Response', desc: 'Same-day estimates for Austin addresses. Most projects begin within 1-2 weeks of approval.' },
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

      {/* Section 5: CTA */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free Austin Stucco Estimate
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Join over 800 Austin homeowners who trust Star Stucco for their exterior
            projects. We provide detailed written estimates within 24 hours of your
            on-site consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 hover:shadow-lg"
            >
              Schedule Your Estimate
            </Link>
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call ${siteConfig.phone} — Star Stucco`}
              className="inline-flex items-center justify-center rounded-lg border border-primary-400 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
