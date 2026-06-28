import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { siteConfig } from '../lib/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-100" itemScope itemType="https://schema.org/LocalBusiness">
      <meta itemProp="name" content="Star Stucco of Austin" />
      <meta itemProp="telephone" content="(512) 706-9699" />
      <meta itemProp="email" content="info@starstuccoaustin.com" />
      <meta itemProp="url" content="https://stuccoaustin.com" />
      <meta itemProp="priceRange" content="$$" />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content="5316 W US Hwy 290 Service Rd" />
        <meta itemProp="addressLocality" content="Austin" />
        <meta itemProp="addressRegion" content="TX" />
        <meta itemProp="postalCode" content="78735" />
        <meta itemProp="addressCountry" content="US" />
      </div>
      <div className="bg-primary-700 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
          <span className="text-sm font-semibold">Ready to start your stucco project?</span>
          <a href="tel:+15127069699" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-bold text-primary-700 transition-all hover:bg-primary-50">
            <Phone className="h-4 w-4" />
            Call (512) 706-9699
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <img
                src="/images/star-stucco-logo.webp"
                alt={siteConfig.name}
                className="h-16 w-auto invert"
                width={98}
                height={98}
              />
            </div>
            <p className="text-sm leading-relaxed text-secondary-400 mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-sm leading-relaxed text-secondary-400">
              Stucco and plaster contractor serving Central Texas with over 9,000
              projects completed. Residential stucco, commercial stucco, EIFS,
              interior plaster, and stone veneer.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/austin-stucco-installation" className="text-sm hover:text-white transition-colors">
                  Residential Stucco
                </Link>
              </li>
              <li>
                <Link to="/austin-commercial-stucco" className="text-sm hover:text-white transition-colors">
                  Commercial Stucco
                </Link>
              </li>
              <li>
                <Link to="/austin-stucco-repair" className="text-sm hover:text-white transition-colors">
                  Stucco Repair
                </Link>
              </li>
              <li>
                <Link to="/eifs-contractor-austin" className="text-sm hover:text-white transition-colors">
                  EIFS Contractor — Austin
                </Link>
              </li>
              <li>
                <Link to="/austin-stucco-finishing" className="text-sm hover:text-white transition-colors">
                  Interior Plaster
                </Link>
              </li>
              <li>
                <Link to="/austin-stucco-installation" className="text-sm hover:text-white transition-colors">
                  Thin Stone Veneer
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-white transition-colors">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Service Area
            </h3>
            <ul className="space-y-2">
              {siteConfig.serviceCounties.map((county) => (
                <li key={county} className="text-sm text-secondary-400">{county}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phone}`} aria-label={`Call Star Stucco at ${siteConfig.phone}`} className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-primary-500 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} aria-label={`Email Star Stucco at ${siteConfig.email}`} className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-primary-500 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Star+Stucco+of+Austin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Star Stucco of Austin on Google Maps"
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 text-primary-500 shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="h-4 w-4 text-primary-500 shrink-0 mt-0.5" />
                  <span>
                    24 Hours, 7 Days a Week
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-200">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-secondary-200">
            Serving Central Texas — {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
