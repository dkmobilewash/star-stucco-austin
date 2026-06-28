import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'

export default function NotFound() {
  return (
    <>
      <SEO
        title={`Page Not Found | ${siteConfig.name}`}
        description="The page you are looking for could not be found. Return to our homepage to explore our stucco services in Austin, TX."
        path="/404"
      />

      <section className="py-32 sm:py-40">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-7xl sm:text-9xl font-bold text-secondary-200 mb-6">
            404
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-secondary-600 text-lg mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-300 px-8 py-3.5 text-sm font-semibold text-secondary-700 transition-all hover:border-secondary-400 hover:bg-secondary-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
