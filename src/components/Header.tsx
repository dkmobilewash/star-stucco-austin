import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { siteConfig } from '../lib/siteConfig'

const stuccoDropdown = [
  { label: 'Residential Stucco', path: '/austin-stucco-installation' },
  { label: 'Commercial Stucco', path: '/austin-commercial-stucco' },
  { label: 'Stucco Repair', path: '/austin-stucco-repair' },
  { label: 'EIFS Contractor — San Antonio', path: '/eifs-contractor-san-antonio' },
]

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Stucco', path: '/austin-stucco-services', dropdown: stuccoDropdown },
  { label: 'EIFS', path: '/eifs-contractor-san-antonio' },
  { label: 'Interior Plaster', path: '/austin-stucco-finishing' },
  { label: 'Stone Veneer', path: '/austin-stucco-installation' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/image-removebg-preview.png"
              alt={siteConfig.name}
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary-700 ${
                      location.pathname === link.path
                        ? 'text-primary-700'
                        : 'text-secondary-600'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-52">
                      <div className="rounded-lg bg-white shadow-lg border border-secondary-100 py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-secondary-600 hover:bg-secondary-50 hover:text-primary-700 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path + link.label}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary-700 ${
                    location.pathname === link.path
                      ? 'text-primary-700'
                      : 'text-secondary-600'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-secondary-700"
            >
              <Phone className="h-4 w-4 text-primary-600" />
              {siteConfig.phone}
            </a>
            <Link
              to="/contact"
              className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Free Estimate
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-secondary-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-secondary-100 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.path + link.label}>
                <Link
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-secondary-700 hover:bg-secondary-50'
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-4 py-2 text-sm text-secondary-500 hover:bg-secondary-50 hover:text-primary-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-secondary-100">
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label={`Call Star Stucco at ${siteConfig.phone}`}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-secondary-700"
              >
                <Phone className="h-4 w-4 text-primary-600" />
                {siteConfig.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-lg bg-primary-700 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get a Free Estimate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
