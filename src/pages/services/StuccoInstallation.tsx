import { Link } from 'react-router-dom'
import { ChevronRight, Phone, Hop as Home, Shield, Thermometer, MapPin } from 'lucide-react'
import SEO from '../../components/SEO'
import { FAQSection, faqPageSchema, type FAQ } from '../../components/FAQ'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'

const faqs: FAQ[] = [
  {
    question: 'How much does stucco installation cost in Austin?',
    answer:
      'New stucco installation in Austin typically runs about $8 to $15 per square foot depending on the system (traditional three-coat vs. one-coat or EIFS), the finish texture, wall height and accessibility, and prep work required. New construction and full re-stucco projects are quoted per project after an on-site assessment. We provide free, detailed written estimates.',
  },
  {
    question: 'How long does a stucco installation take?',
    answer:
      'A typical residential stucco installation takes one to two weeks. Three-coat systems require curing time between the scratch, brown, and finish coats, so weather and humidity affect the schedule. We confirm a timeline up front and account for Austin’s dry summers and occasional wet spells in our curing plan.',
  },
  {
    question: 'Is stucco a good choice for the Austin climate?',
    answer:
      'Yes. Properly installed stucco performs very well in Central Texas. It offers excellent thermal mass that helps regulate indoor temperatures during hot Austin summers, resists fire and pests, and lasts 50+ years when installed correctly with proper control joints and a quality weather-resistant barrier to handle our expansive clay soils and temperature swings.',
  },
  {
    question: 'Do you handle both new construction and re-stucco projects?',
    answer:
      'Yes. We provide ground-up stucco installation for new construction as well as complete re-stucco of existing exteriors, including removing old siding or failed stucco. Every project meets or exceeds Travis County and City of Austin building code requirements.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Installation Austin, TX',
  provider: {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Austin',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Travis County, TX' },
  },
  description:
    'Professional stucco installation for new construction and re-stucco projects in Austin, TX. Compliant with Travis County building codes.',
  serviceType: 'Stucco Installation',
}

const benefits = [
  { icon: Shield, title: '5-Year Installation Warranty', desc: 'Every new installation backed by our comprehensive warranty covering materials and workmanship.' },
  { icon: Thermometer, title: 'Climate-Optimized Systems', desc: 'Three-coat systems engineered for Austin summers exceeding 100 degrees and seasonal freeze-thaw cycles.' },
  { icon: Home, title: 'New Build & Re-Stucco', desc: 'Full-service installation for ground-up construction and complete re-stucco of existing exteriors.' },
  { icon: MapPin, title: 'Travis County Code Compliant', desc: 'All work meets or exceeds Travis County and City of Austin building code requirements.' },
]

export default function StuccoInstallation() {
  return (
    <>
      <SEO
        title="Residential Stucco Contractor in Austin, TX | Star Stucco of Austin"
        description="Expert residential stucco installation in Austin, TX. New construction & re-stucco for homes across Central Texas. Licensed & insured. Call (512) 706-9699 for a free estimate."
        path="/austin-stucco-installation"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-installation-hero.webp"
            alt="New stucco installation on an Austin home"
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-secondary-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="text-sm text-secondary-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-400">Stucco Installation</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Residential Stucco Contractor in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            From new construction in Mueller to full re-stucco projects in Westlake Hills,
            Star Stucco delivers flawless installations engineered for the Central Texas climate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              Get a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400 hover:bg-secondary-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                New Construction & Re-Stucco Services for Austin Homes
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Austin's building boom stretches from the master-planned communities of Mueller
                to luxury custom builds in Barton Creek Estates. Whether you are breaking ground
                on a new home or replacing aging siding with durable stucco, Star Stucco provides
                full-service installation that meets every Travis County building code requirement.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Our three-coat stucco systems are specifically formulated for the Central Texas
                climate. Austin routinely sees summer temperatures above 105 degrees paired with
                occasional winter freezes and heavy spring rains. We use high-quality Portland
                cement mixtures with flexible polymers that resist thermal expansion cracking and
                moisture intrusion throughout these seasonal extremes.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8">
                We serve neighborhoods across the metro including Westlake Hills, Barton Creek,
                Mueller, Tarrytown, and Travis Heights. Every project begins with a detailed
                on-site assessment where we evaluate substrate conditions, drainage patterns, and
                any site-specific factors that influence long-term stucco performance in the
                Austin area.
              </p>

              <h2 className="font-display text-2xl font-bold text-secondary-900 mb-4">
                Austin Climate Considerations for Stucco Installation
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Stucco installed in Austin must withstand a unique combination of intense UV
                exposure, expansive clay soils, and dramatic temperature swings that can span 50
                degrees in a single day. Our installation process addresses each of these factors
                with proper control joints, high-performance weather-resistant barriers, and curing
                schedules that account for Austin's low-humidity summers.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Travis County code requires specific lath attachment methods, weep screed
                installation at the foundation line, and minimum coating thicknesses. Star Stucco
                exceeds these minimums on every project, ensuring your investment is protected for
                decades.
              </p>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="rounded-2xl bg-secondary-50 border border-secondary-200 p-6 sticky top-8">
                <h3 className="font-display text-lg font-bold text-secondary-900 mb-4">
                  Our Installation Process
                </h3>
                <ol className="space-y-4">
                  {[
                    'On-site assessment and substrate inspection',
                    'Weather-resistant barrier and lath application',
                    'Scratch coat with proper scoring',
                    'Brown coat leveled to true plane',
                    'Finish coat with your chosen texture',
                    'Final inspection and cleanup',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-secondary-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-700 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-6 pt-6 border-t border-secondary-200">
                  <p className="text-sm font-semibold text-secondary-900 mb-2">Ready to start?</p>
                  <Link
                    to="/contact"
                    className="block w-full rounded-lg bg-primary-700 px-4 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-primary-800"
                  >
                    Request a Free Quote
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-12 text-center">
            Why Choose Star Stucco for Your Austin Installation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                  <item.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4">
            Stucco Installation Across Austin Neighborhoods
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-10">
            We install stucco on homes throughout Austin and the surrounding Hill Country
            communities. Our crews are familiar with local HOA requirements, soil conditions,
            and architectural preferences in every part of town.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Westlake Hills', 'Barton Creek', 'Mueller', 'Tarrytown', 'Travis Heights', 'Barton Hills', 'Hyde Park', 'Circle C Ranch', 'South Congress', 'East Austin'].map((area) => (
              <span
                key={area}
                className="rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-medium text-secondary-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} subtitle="Common questions about stucco installation in Austin, answered by our team." />

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'Cost to Stucco a House', path: '/blog/cost-to-stucco-a-house-austin', desc: 'What it costs to stucco a house in Austin by system type and home size.' },
          { label: 'Stucco Finishes Guide', path: '/blog/stucco-finishes-guide', desc: 'Smooth, Santa Barbara, dash, and lace finishes explained — and which suits your home.' },
          { label: 'EIFS / Synthetic Stucco', path: '/eifs-contractor-austin', desc: 'Energy-efficient EIFS as an insulated alternative to traditional stucco.' },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Your Stucco Installation Project Today
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Contact Star Stucco for a free on-site estimate. We will assess your property, discuss
            finish options, and provide a detailed quote with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Schedule Your Free Estimate
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-secondary-400"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
