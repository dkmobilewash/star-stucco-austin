import { Link } from 'react-router-dom'
import { ChevronRight, Phone, MapPin } from 'lucide-react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

export default function GeorgetownArea() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Stucco Services in Georgetown, TX',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Star Stucco of Austin',
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'City',
      name: 'Georgetown',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Williamson County',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.6333,
      longitude: -97.6781,
    },
  }

  return (
    <>
      <SEO
        title="Stucco Services Georgetown, TX | Star Stucco of Austin"
        description="Professional stucco installation, repair, and refinishing in Georgetown, TX. Serving historic downtown, Sun City, and all Williamson County communities."
        path="/service-area/georgetown"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-texture-hero.webp"
            alt="Stucco home in Georgetown Texas"
            className="h-full w-full object-cover opacity-30"
            fetchPriority="high"
            width={1600}
            height={900}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-green-400">Georgetown</span>
          </nav>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Georgetown's Trusted Stucco Professionals
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            From the charm of Georgetown's historic downtown square to the modern developments of Sun City and beyond, we deliver expert stucco craftsmanship that honors this community's character while meeting the demands of rapid growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white/10">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Georgetown Character Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="font-display text-3xl font-bold text-slate-900">Understanding Georgetown's Unique Character</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Georgetown blends Texas heritage with modern living. The historic courthouse square features Victorian-era buildings that require careful restoration techniques, while Sun City's active adult community showcases Mediterranean and stucco-heavy architectural designs throughout its sprawling neighborhoods.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We serve every corner of Georgetown, including Berry Creek's golf course estates, the upscale homes of Cimarron Hills, family-friendly Georgetown Village, and the established community of Serenada. Each neighborhood presents unique stucco challenges we've mastered over years of local experience.
              </p>
              <div className="mt-8 flex items-center gap-2 text-green-700">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Serving all of Georgetown and Williamson County</span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-slate-50 p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="text-center border-b border-slate-200 pb-6">
                    <p className="text-4xl font-bold text-green-600">500+</p>
                    <p className="mt-1 text-slate-600">Georgetown Homes Completed</p>
                  </div>
                  <div className="text-center border-b border-slate-200 pb-6">
                    <p className="text-4xl font-bold text-green-600">15+</p>
                    <p className="mt-1 text-slate-600">Years Serving Williamson County</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-600">4.9/5</p>
                    <p className="mt-1 text-slate-600">Average Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-center text-3xl font-bold text-slate-900">Our Proven Process</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">Every Georgetown project follows our four-step methodology for consistent, exceptional results.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { step: 1, title: 'Consultation', desc: 'We assess your property on-site, discuss design preferences, and provide a detailed written estimate. We also review any HOA guidelines specific to your community.' },
              { step: 2, title: 'Preparation', desc: 'Our crew protects landscaping, preps surfaces, and installs proper lath and moisture barriers. Thorough prep ensures long-lasting adhesion in Central Texas heat.' },
              { step: 3, title: 'Application', desc: 'We apply stucco in proper coats using premium materials rated for Texas climates. Each layer cures appropriately before the next is added.' },
              { step: 4, title: 'Quality Check', desc: 'A final walkthrough with you ensures every detail meets our standards. We document the completed work and provide care instructions for your new stucco.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-center text-3xl font-bold text-slate-900">Georgetown Stucco FAQs</h2>
          <div className="mt-12 space-y-6">
            {[
              { q: 'How much does stucco installation cost in Georgetown?', a: 'Typical stucco installation in Georgetown ranges from $8 to $14 per square foot depending on the finish style and surface preparation needed. Full home exteriors generally run $12,000 to $30,000.' },
              { q: 'How long does a stucco project take?', a: 'Most residential projects take 5 to 10 business days depending on size and weather. Larger Sun City homes or custom finishes in Cimarron Hills may require 2-3 weeks for complete installation.' },
              { q: 'How do I maintain stucco in Central Texas?', a: 'Rinse your stucco annually with a garden hose to remove dust. Inspect for hairline cracks each spring, especially after freeze-thaw cycles. Avoid pressure washing above 1,500 PSI.' },
              { q: 'Will stucco work with my Georgetown HOA requirements?', a: 'Absolutely. We are familiar with HOA guidelines across Sun City, Berry Creek, Georgetown Village, and other managed communities. We help select colors and textures that comply with architectural standards.' },
              { q: 'What warranty do you offer?', a: 'We provide a 5-year workmanship warranty on all installations and honor manufacturer material warranties of up to 10 years. Our warranty covers cracking, delamination, and color fading.' },
            ].map((faq, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-6">
                <h3 className="font-display text-lg font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white">Ready to Transform Your Georgetown Home?</h2>
          <p className="mt-4 text-lg text-green-100">Get a free, no-obligation estimate from Georgetown's preferred stucco contractor.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-700 hover:bg-green-50"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
