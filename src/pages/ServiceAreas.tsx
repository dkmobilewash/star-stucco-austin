import { Link } from 'react-router-dom'
import { ChevronRight, Phone, MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'
import { allCounties } from '../data/countyPages'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  telephone: siteConfig.phone,
  url: siteConfig.url,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: 'US',
  },
  areaServed: allCounties.map((c) => ({
    '@type': 'AdministrativeArea',
    name: `${c.county}, TX`,
  })),
}

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="Stucco Service Areas | Central Texas | Star Stucco"
        description="Star Stucco of Austin serves 16 counties across Central Texas. Find expert stucco repair, installation, and finishing near you. Free estimates available."
        path="/service-areas"
        schema={schema}
      />

      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="flex items-center gap-2 text-sm text-secondary-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-400">Service Areas</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/50 border border-primary-700/30 px-4 py-1.5 mb-6">
              <MapPin className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">16 Counties Across Central Texas</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stucco Services Across Central Texas
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              Star Stucco of Austin provides professional stucco repair, installation, and finishing
              across 16 counties in Central Texas. Whether you're in the heart of Austin or the
              Hill Country, our experienced crews deliver quality craftsmanship built for the Texas climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
              >
                Get a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={`${siteConfig.phoneHref}`}
                aria-label={`Call Star Stucco at ${siteConfig.phone}`}
                className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400"
              >
                <Phone className="mr-2 h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Find Stucco Services in Your County
            </h2>
            <p className="text-secondary-600 text-lg">
              Click your county below to learn about the stucco services we offer in your area,
              see the communities we serve, and request a free estimate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCounties.map((county) => (
              <Link
                key={county.slug}
                to={`/service-areas/${county.slug}`}
                className="group rounded-xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors">
                    <MapPin className="h-4 w-4 text-primary-700" />
                  </div>
                  <h3 className="font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors">
                    {county.county}
                  </h3>
                </div>
                <p className="text-sm text-secondary-600 leading-relaxed mb-3">
                  Stucco repair, installation &amp; finishing for homes and businesses in {county.county}, TX.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary-700">
                  View Services <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Why Central Texas Trusts Star Stucco
            </h2>
            <p className="text-secondary-600 text-lg">
              Over 9,000 projects completed across the region with a commitment to quality
              and honest workmanship.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '9,000+', label: 'Projects Completed' },
              { stat: '16', label: 'Counties Served' },
              { stat: '20+', label: 'Years of Experience' },
              { stat: '4.9/5', label: 'Average Rating' },
            ].map((item) => (
              <div key={item.label} className="text-center rounded-xl bg-white p-6 shadow-sm border border-secondary-100">
                <p className="text-3xl font-bold text-primary-700">{item.stat}</p>
                <p className="text-sm text-secondary-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-10 text-center">
            Our Stucco Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Stucco Repair', path: '/austin-stucco-repair', desc: 'Crack repair, patching, and water damage restoration for residential and commercial properties.' },
              { label: 'Stucco Installation', path: '/austin-stucco-installation', desc: 'Complete stucco systems for new construction, remodels, and re-stucco projects.' },
              { label: 'EIFS Contractor', path: '/eifs-contractor-austin', desc: 'Exterior Insulation and Finish Systems — lightweight, energy-efficient cladding.' },
              { label: 'Commercial Stucco', path: '/austin-commercial-stucco', desc: 'Large-scale stucco for retail, office, multi-family, and institutional buildings.' },
              { label: 'Interior Plaster', path: '/austin-stucco-finishing', desc: 'Custom plaster finishes, Venetian plaster, and decorative interior wall treatments.' },
              { label: 'Stucco Remediation', path: '/austin-stucco-remediation', desc: 'Full remediation for systemic stucco failures, moisture intrusion, and structural issues.' },
            ].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="group rounded-2xl bg-secondary-50 p-6 border border-secondary-100 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="font-display text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {l.label}
                </h3>
                <p className="text-sm text-secondary-600 leading-relaxed mb-3">{l.desc}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary-700">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            No matter where you are in Central Texas, Star Stucco of Austin is ready to help
            with your stucco project. Contact us today for a free, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 hover:shadow-lg"
            >
              Get Your Free Estimate
            </Link>
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
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
