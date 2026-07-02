import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { countyDefinitions } from '../data/serviceLocationTypes'

export function ServiceLocationLinks({ serviceSlug, serviceName }: { serviceSlug: string; serviceName: string }) {
  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
          Where We Offer {serviceName}
        </h2>
        <p className="text-secondary-600 text-center mb-10 max-w-2xl mx-auto">
          We provide {serviceName.toLowerCase()} services throughout Central Texas. Select your county to learn more.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {countyDefinitions.map((county) => (
            <Link
              key={county.slug}
              to={`/${serviceSlug}/${county.slug}`}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-secondary-700 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:text-primary-700 hover:border-primary-200"
            >
              <ChevronRight className="h-4 w-4 text-primary-600 shrink-0" />
              {county.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
