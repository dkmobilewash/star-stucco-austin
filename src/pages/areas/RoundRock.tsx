import { Link } from 'react-router-dom'
import { ChevronRight, Phone, MapPin, Layers, Paintbrush, Wrench, CircleCheck as CheckCircle } from 'lucide-react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

export default function RoundRockArea() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Stucco Services in Round Rock, TX',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Star Stucco of Austin',
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'City',
      name: 'Round Rock',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Williamson County',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.5083,
      longitude: -97.6789,
    },
  }

  return (
    <>
      <SEO
        title="Stucco Services Round Rock, TX | Star Stucco of Austin"
        description="Professional stucco installation, repair, and finishing in Round Rock, TX. Serving Brushy Creek, Teravista, and all Williamson County communities."
        path="/service-area/round-rock"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-home-roundrock-hero.webp"
            alt="Stucco home in Round Rock, Texas"
            className="h-full w-full object-cover opacity-30"
            fetchPriority="high"
            width={1600}
            height={900}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/service-area" className="hover:text-white">Service Areas</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-green-400">Round Rock</span>
          </nav>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Stucco Services in Round Rock, TX
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Just minutes north of Austin, Round Rock is one of Texas's fastest-growing family-friendly
            communities. With its new construction boom and established neighborhoods, Star Stucco of Austin
            delivers expert stucco solutions built for this thriving city.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call Star Stucco of Austin at ${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Free Estimate
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/stucco-damage-signs.webp"
                alt="Modern stucco homes in Round Rock neighborhood"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                Local Expertise in Round Rock
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Round Rock has transformed from a quiet suburb into a major tech hub, home to Dell Technologies'
                global headquarters and a growing corridor of innovation companies. This growth means
                thousands of new homes and commercial properties that deserve quality stucco craftsmanship.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We serve neighborhoods throughout Round Rock including Brushy Creek, Cat Hollow, Teravista,
                Forest Creek, and Paloma Lake. Our team understands Williamson County building codes and works
                closely with local inspectors to ensure every project meets or exceeds requirements.
              </p>
              <div className="mt-6 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600">
                  Serving all of Round Rock and surrounding Williamson County communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Stucco Services in Round Rock
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Complete stucco solutions for residential and commercial properties across Round Rock.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Layers className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">Stucco Installation</h3>
              <p className="mt-2 text-slate-600">
                New construction and full stucco application for Round Rock homes. Three-coat system
                engineered for Central Texas conditions.
              </p>
              <Link to="/services/installation" className="mt-4 inline-flex items-center gap-1 text-green-600 font-medium hover:text-green-700">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Wrench className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">Stucco Repair</h3>
              <p className="mt-2 text-slate-600">
                Crack repair, patch work, and water damage restoration. We fix stucco problems caused by
                shifting clay soils common in Round Rock.
              </p>
              <Link to="/services/repair" className="mt-4 inline-flex items-center gap-1 text-green-600 font-medium hover:text-green-700">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Paintbrush className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">Stucco Finishing</h3>
              <p className="mt-2 text-slate-600">
                Smooth, sand, dash, and lace finishes. Color matching and custom textures to complement
                Round Rock's diverse architectural styles.
              </p>
              <Link to="/services/finishing" className="mt-4 inline-flex items-center gap-1 text-green-600 font-medium hover:text-green-700">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Soil Challenges Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl text-center">
              Climate & Soil Challenges in Round Rock
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Round Rock sits on the blackland prairie, characterized by expansive clay soils that swell
              when wet and shrink during drought. Near Brushy Creek, limestone substrate adds another
              layer of complexity. Combined with temperature extremes ranging from summer highs above 100F
              to occasional winter freezes, stucco in this area must be applied with expert knowledge of
              local conditions.
            </p>
            <div className="mt-8 space-y-3">
              <h3 className="font-display text-lg font-semibold text-slate-900">Common Issues We Address:</h3>
              <ul className="space-y-3">
                {[
                  'Foundation movement cracks from expansive clay soil',
                  'Moisture intrusion at weep screed and flashing joints',
                  'Thermal expansion cracking from extreme heat cycles',
                  'Efflorescence and staining from limestone groundwater',
                  'Stucco delamination due to improper substrate preparation',
                  'Color fading from intense UV exposure',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready for a Free Stucco Estimate in Round Rock?
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            From Brushy Creek to Teravista, we provide expert stucco services throughout Round Rock.
            Call today for your complimentary consultation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call Star Stucco of Austin at ${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-700 hover:bg-green-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white hover:bg-green-700 transition-colors"
            >
              Get Your Free Estimate
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
