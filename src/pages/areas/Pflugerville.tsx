import { Link } from 'react-router-dom'
import { Phone, MapPin, Hammer, PaintBucket, Wrench, Layers, Building2 } from 'lucide-react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

export default function PflugervilleArea() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Stucco Contractor in Pflugerville, TX',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Star Stucco of Austin',
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'City',
      name: 'Pflugerville',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Travis County',
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.4394,
      longitude: -97.6200,
    },
  }

  return (
    <>
      <SEO
        title="Stucco Contractor Pflugerville, TX | Star Stucco of Austin"
        description="Expert stucco installation, repair, and EIFS systems in Pflugerville, TX. Serving Blackhawk, Falcon Pointe, Villages of Hidden Lake, and all Travis County communities."
        path="/service-area/pflugerville"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-project-completed.webp"
            alt="Modern stucco home exterior in Pflugerville Texas"
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
            width={1600}
            height={900}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-6 inline-block rounded-full bg-green-600/90 px-4 py-1.5 text-sm font-medium text-white">
            Serving Pflugerville Since 2011
          </div>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Pflugerville Stucco Installation & Repair
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            From Stone Hill Town Center to the booming SH-130 growth corridor, we provide premium stucco solutions for Pflugerville's thriving family community. Quality craftsmanship that stands up to Texas weather.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            aria-label={`Call Star Stucco at ${siteConfig.phone}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* Growth & Development Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/new-development-stucco.webp"
              alt="New residential development with stucco exteriors"
              className="h-72 w-full object-cover"
              loading="lazy"
                width={800}
                height={600}
            />
          </div>
          <h2 className="font-display mt-10 text-3xl font-bold text-slate-900">A Community Transformed</h2>
          <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
            Pflugerville has evolved from a quiet small town into one of Central Texas's most dynamic suburbs. This rapid growth brings diverse architectural styles and a strong demand for durable, attractive stucco exteriors across residential and commercial properties.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">Established Neighborhoods</h3>
              <p className="mt-2 text-sm text-slate-600">Serving Blackhawk, Falcon Pointe, and Bohls Place with stucco repair and restoration for maturing homes that need refresh or crack repair.</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">New Developments</h3>
              <p className="mt-2 text-sm text-slate-600">Working with builders in Villages of Hidden Lake, Avalon, and new 130-corridor communities to deliver flawless stucco on new construction.</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">Wells Branch & Beyond</h3>
              <p className="mt-2 text-sm text-slate-600">Covering Wells Branch MUD and surrounding areas where 1990s-era stucco homes benefit from modern refinishing techniques and updated color palettes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-center text-3xl font-bold text-slate-900">Our Pflugerville Services</h2>
          <p className="mt-4 text-center text-slate-600">Complete stucco solutions for every need, from new builds to full restoration.</p>
          <div className="mt-12 space-y-4">
            {[
              { icon: Building2, title: 'New Construction Stucco', desc: 'Partner with your builder for flawless stucco application on new homes. We coordinate with framing and inspection schedules to keep your project on track across Pflugerville developments.' },
              { icon: PaintBucket, title: 'Exterior Re-Stucco', desc: 'Transform aging exteriors with a complete re-stucco application. We remove failing material, address underlying issues, and apply fresh stucco with your choice of modern finishes and colors.' },
              { icon: Wrench, title: 'Crack & Damage Repair', desc: 'Address hairline cracks, impact damage, and moisture intrusion with precision repairs that blend seamlessly with existing stucco. Essential maintenance for Pflugerville homes on expansive clay soils.' },
              { icon: Layers, title: 'Custom Finishing', desc: 'Choose from smooth, sand, lace, dash, or Santa Barbara finishes. We match existing textures for repairs or create entirely new looks for renovation projects throughout the Pflugerville area.' },
              { icon: Hammer, title: 'EIFS Systems', desc: 'Exterior Insulation and Finish Systems for energy-efficient commercial and residential properties. Ideal for the newer mixed-use developments along the SH-130 corridor.' },
            ].map((service, i) => (
              <div key={i} className="rounded-lg bg-white border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-slate-600">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Knowledge Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/stucco-repair-closeup.webp"
                alt="Stucco application detail work"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900">Local Knowledge Matters</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Pflugerville sits on blackland prairie soils known for significant expansion and contraction with moisture changes. This soil movement creates unique stress on exterior cladding, making proper installation techniques critical for stucco longevity.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Properties near Gilleland Creek and low-lying areas face additional moisture considerations that we account for with enhanced drainage planes and vapor barriers. For the newer EIFS systems common along the 130-corridor commercial developments, we ensure proper detailing at transitions and penetrations.
              </p>
              <div className="mt-6 flex items-center gap-2 text-green-700">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Proudly serving all Pflugerville neighborhoods</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white">Get Your Free Pflugerville Stucco Estimate</h2>
          <p className="mt-4 text-lg text-slate-300">Whether you need new installation or expert repairs, our team is ready to help.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-400 px-8 py-4 font-semibold text-white hover:bg-slate-800">
              Request Online Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
