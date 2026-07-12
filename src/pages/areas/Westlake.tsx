import { Link } from 'react-router-dom'
import { ChevronRight, Phone, MapPin, Check, X } from 'lucide-react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Premium Stucco Services in Westlake Hills, TX',
  provider: {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Westlake Hills',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Westlake Hills',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Travis County, TX' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2960,
    longitude: -97.8088,
  },
  description: 'Premium stucco installation and finishing for Westlake Hills luxury homes. Specializing in high-end finishes, custom color matching, and estate-quality craftsmanship.',
}

const premiumFinishes = [
  { title: 'Hand-Troweled Santa Barbara', description: 'An old-world finish with subtle organic texture that complements Hill Country limestone. Uniquely crafted by our master artisans for warm, timeless elegance.', image: '/images/new-development-stucco.webp' },
  { title: 'Venetian Smooth', description: 'A polished, refined finish with multiple burnished layers that produce depth and luminosity. Ideal for contemporary Westlake estates seeking sophisticated modern aesthetics.', image: '/images/stucco-installation-process.webp' },
  { title: 'Custom Mediterranean', description: 'Rich textured stucco inspired by coastal villas, tailored to pair with natural stone accents. Perfect for Barton Creek properties seeking European grandeur.', image: '/images/stucco-project-completed.webp' },
]

const comparisonRows = [
  { label: 'Materials', standard: 'Basic pre-mixed stucco', star: 'Premium polymer-modified systems' },
  { label: 'Color Matching', standard: 'Limited catalog colors', star: 'Custom-blended to your specification' },
  { label: 'Warranty', standard: 'Standard 1-year labor', star: 'Comprehensive 5-year guarantee' },
  { label: 'Project Lead', standard: 'Rotating crew members', star: 'Dedicated senior craftsman' },
  { label: 'Surface Prep', standard: 'Pressure wash and patch', star: 'Full substrate analysis and repair' },
  { label: 'Communication', standard: 'Call office for updates', star: 'Direct line to your project manager' },
]

export default function WestlakeArea() {
  return (
    <>
      <SEO
        title="Stucco Services Westlake Hills, TX | Star Stucco of Austin"
        description="Premium stucco installation and finishing for Westlake Hills luxury homes. Expert craftsmanship for high-end estates, custom color matching, and architectural finishes that protect your investment."
        path="/service-area/westlake"
        schema={schema}
      />

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/luxury-home-westlake-hero.webp"
            alt="Luxury estate home with premium stucco exterior in Westlake Hills"
            className="h-full w-full object-cover opacity-15"
            fetchPriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-950/90 via-secondary-900/80 to-secondary-950/95" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="flex items-center gap-2 text-sm text-secondary-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-400">Westlake Hills</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-900/30 border border-accent-600/30 px-4 py-1.5 mb-6">
              <MapPin className="h-4 w-4 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">Westlake Hills, TX</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Stucco for Westlake Hills Estates
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-10">
              Where Hill Country views meet architectural excellence. Star Stucco
              delivers estate-quality finishes for Westlake's finest homes -- from
              Barton Creek waterfront estates to ridgeline residences above Loop 360.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
              >
                Request a Consultation <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={`${siteConfig.phoneHref}`}
                aria-label={`Call ${siteConfig.phone} — Star Stucco`}
                className="inline-flex items-center justify-center rounded-lg border border-secondary-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Luxury Stucco Expertise */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Why Westlake Demands the Highest Quality
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Westlake Hills is home to some of Central Texas's most distinguished
                properties. With homes valued well above $1M, architectural review boards
                that enforce strict standards, and discerning homeowners who accept nothing
                less than perfection, this community requires a contractor who understands
                the stakes.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                From the gated estates of Barton Creek Lakeside and Davenport Ranch to
                the established luxury of Rob Roy, Lost Creek, and Westwood, we have
                earned the trust of Westlake's most particular homeowners. Our team
                specializes in complex multi-story applications, custom color matching
                to existing stone and masonry, and finishes that maintain and enhance
                property value for decades. Every project includes a detailed scope
                review, substrate analysis, and premium material specification tailored
                to your home's unique architectural character.
              </p>
            </div>
            <div>
              <img
                src="/images/luxury-stucco-westlake.webp"
                alt="Luxury home with expertly applied stucco finish in Westlake Hills"
                loading="lazy"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Premium Finishes Showcase */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Premium Finishes for Discerning Homeowners
            </h2>
            <p className="text-secondary-600">Signature finish options selected by Westlake's most prestigious properties.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumFinishes.map((finish) => (
              <div key={finish.title} className="group rounded-2xl bg-white shadow-sm border border-secondary-100 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={finish.image}
                    alt={finish.title}
                    loading="lazy"
                width={800}
                height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-secondary-900 mb-2">{finish.title}</h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">{finish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Star Stucco Difference */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              The Star Stucco Difference
            </h2>
            <p className="text-secondary-600">Why Westlake homeowners choose Star Stucco over standard contractors.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-secondary-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-secondary-900 text-white text-sm font-semibold">
              <div className="p-4" />
              <div className="p-4 text-center border-l border-secondary-700">Standard Contractor</div>
              <div className="p-4 text-center border-l border-secondary-700 bg-primary-800">Star Stucco</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-secondary-50'}`}>
                <div className="p-4 font-medium text-secondary-900">{row.label}</div>
                <div className="p-4 text-center text-secondary-500 border-l border-secondary-100 flex items-center justify-center gap-2">
                  <X className="h-4 w-4 text-secondary-400 shrink-0" />
                  <span>{row.standard}</span>
                </div>
                <div className="p-4 text-center text-secondary-900 border-l border-secondary-100 bg-primary-50/50 flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-primary-600 shrink-0" />
                  <span className="font-medium">{row.star}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Protect Your Westlake Investment
          </h2>
          <p className="text-secondary-300 text-lg mb-10 max-w-2xl mx-auto">
            Your home is more than a residence -- it is a statement. Trust Star Stucco to
            deliver finishes worthy of Westlake's most distinguished properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Schedule Your Consultation
            </Link>
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call ${siteConfig.phone} — Star Stucco`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white"
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
