import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface RelatedLink {
  label: string
  path: string
  desc: string
}

export function RelatedLinks({
  links,
  title = 'Related Services & Guides',
}: {
  links: RelatedLink[]
  title?: string
}) {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-secondary-900 mb-10 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="group rounded-2xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-lg hover:-translate-y-1"
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
  )
}
