import { Link } from 'react-router-dom'
import { ChevronRight, Phone, MapPin, Star, ClipboardCheck, Compass, HardHat, Shield, Building2, Hop as HomeIcon } from 'lucide-react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

export default function CedarParkArea() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Stucco Contractor in Cedar Park, TX',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Star Stucco of Austin',
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'City',
      name: 'Cedar Park',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Williamson County',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.5052,
      longitude: -97.8203,
    },
  }

  return (
    <>
      <SEO
        title="Stucco Contractor Cedar Park, TX | Star Stucco of Austin"
        description="Expert stucco contractor serving Cedar Park, TX. Installation, repair, and custom finishes for homes and businesses in Williamson County."
        path="/service-area/cedar-park"
        schema={schema}
      />

      {/* Hero Section with Stats Bar */}
      <section className="relative bg-slate-900 pb-12 pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920&fm=webp"
            alt="Beautiful stucco exterior in Cedar Park, Texas"
            className="h-full w-full object-cover opacity-25"
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
            <span className="text-green-400">Cedar Park</span>
          </nav>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Stucco Contractor in Cedar Park, TX
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Cedar Park deserves stucco work that matches its standard of excellence. Star Stucco of Austin
            brings trusted craftsmanship to every residential and commercial project in this vibrant community.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-xl bg-white/10 backdrop-blur-sm p-6">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-green-400">500+</p>
              <p className="mt-1 text-sm text-slate-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-green-400">15+</p>
              <p className="mt-1 text-sm text-slate-300">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-green-400">4.9</p>
              <p className="mt-1 text-sm text-slate-300">Star Rating</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-green-400">100%</p>
              <p className="mt-1 text-sm text-slate-300">Licensed & Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Cedar Park Section - Alternating Layout */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                Serving Cedar Park's Growing Community
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Cedar Park has experienced remarkable growth, evolving into one of Central Texas's most
                desirable cities. From the entertainment district around the H-E-B Center to the bustling
                Lakeline Mall corridor, the city blends suburban comfort with urban amenities.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our team serves homeowners across Cedar Park's premier neighborhoods including Ranch at
                Brushy Creek, Cypress Canyon, Twin Creeks, Buttercup Creek, and Anderson Mill. Whether
                you're building new or refreshing an existing home, we understand the aesthetic and
                structural needs of properties in this area.
              </p>
              <div className="mt-6 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600">
                  Proudly serving Cedar Park, Leander, and all surrounding Williamson County areas
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/1539581/pexels-photo-1539581.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp"
                alt="Cedar Park Texas residential neighborhood with stucco homes"
                className="rounded-2xl shadow-lg w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Timeline/Steps Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Process for Cedar Park Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Every stucco project follows our proven five-step process to ensure quality results.
            </p>
          </div>
          <div className="mt-14 max-w-3xl mx-auto">
            {[
              { step: '1', title: 'Assessment', desc: 'On-site evaluation of your property, substrate conditions, and project scope. We identify potential challenges specific to Cedar Park soils and climate.', icon: ClipboardCheck },
              { step: '2', title: 'Design', desc: 'Custom finish selection, color consultation, and detailed project planning. We help you choose the perfect stucco style for your home.', icon: Compass },
              { step: '3', title: 'Installation', desc: 'Expert application using our three-coat system with proper lath, scratch coat, brown coat, and finish. Built to withstand Central Texas weather.', icon: HardHat },
              { step: '4', title: 'Inspection', desc: 'Thorough quality check ensuring proper thickness, adhesion, and finish consistency. We meet all Williamson County building code requirements.', icon: ClipboardCheck },
              { step: '5', title: 'Warranty', desc: 'Comprehensive workmanship warranty with ongoing support. We stand behind every Cedar Park project we complete.', icon: Shield },
            ].map((item, index) => (
              <div key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
                {index < 4 && (
                  <div className="absolute left-6 top-12 h-full w-px bg-green-200" />
                )}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Residential & Commercial Stucco in Cedar Park
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored stucco solutions for every type of Cedar Park property.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp"
                alt="Residential stucco home in Cedar Park"
                className="h-48 w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <HomeIcon className="h-6 w-6 text-green-600" />
                  <h3 className="font-display text-2xl font-semibold text-slate-900">Residential</h3>
                </div>
                <p className="mt-3 text-slate-600">
                  From custom new builds in Cypress Canyon to repairs on established homes in Buttercup Creek,
                  we handle all residential stucco needs with attention to curb appeal and long-term durability.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> New home stucco installation</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> Exterior crack and patch repair</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> Re-stucco and color updates</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> Custom texture and finish work</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp"
                alt="Commercial stucco building in Cedar Park"
                className="h-48 w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="p-8">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-green-600" />
                  <h3 className="font-display text-2xl font-semibold text-slate-900">Commercial</h3>
                </div>
                <p className="mt-3 text-slate-600">
                  Professional stucco services for Cedar Park offices, retail centers, restaurants, and
                  multi-family properties. We work around your business schedule to minimize disruption.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> Storefront and facade stucco</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> Multi-unit residential complexes</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> EIFS installation and repair</li>
                  <li className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500" /> Large-scale commercial projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Get Started on Your Cedar Park Stucco Project
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            From Ranch at Brushy Creek to Twin Creeks, we are Cedar Park's trusted stucco professionals.
            Contact us today for a free, no-obligation estimate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call Star Stucco of Austin at ${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Request Free Estimate
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
