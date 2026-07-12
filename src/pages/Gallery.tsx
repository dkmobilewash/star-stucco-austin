import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'

type Category = 'all' | 'residential' | 'commercial' | 'repair' | 'eifs' | 'stone-veneer'

interface GalleryImage {
  src: string
  alt: string
  category: Exclude<Category, 'all'>
  caption: string
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/residential-stucco-austin.webp',
    alt: 'Residential stucco installation on an Austin, TX home',
    category: 'residential',
    caption: 'Residential Stucco Installation — Austin, TX',
  },
  {
    src: '/images/stucco-home-exterior-hero.webp',
    alt: 'Stucco home exterior in Central Texas',
    category: 'residential',
    caption: 'Custom Stucco Exterior — Central Texas',
  },
  {
    src: '/images/luxury-stucco-westlake.webp',
    alt: 'Luxury stucco home in Westlake Hills, TX',
    category: 'residential',
    caption: 'Luxury Stucco Finish — Westlake Hills',
  },
  {
    src: '/images/luxury-home-westlake-hero.webp',
    alt: 'High-end stucco exterior on Westlake estate',
    category: 'residential',
    caption: 'Estate Stucco Application — Westlake',
  },
  {
    src: '/images/cedar-park-stucco-home.webp',
    alt: 'Stucco home exterior in Cedar Park, TX',
    category: 'residential',
    caption: 'Residential Stucco — Cedar Park, TX',
  },
  {
    src: '/images/stucco-home-roundrock-hero.webp',
    alt: 'Stucco home exterior in Round Rock, TX',
    category: 'residential',
    caption: 'Residential Stucco — Round Rock, TX',
  },
  {
    src: '/images/hero-stucco-austin.webp',
    alt: 'Professional stucco exterior on a Central Texas home',
    category: 'residential',
    caption: 'Stucco Exterior — Austin, TX',
  },
  {
    src: '/images/commercial-stucco-austin.webp',
    alt: 'Commercial stucco project in Austin, TX',
    category: 'commercial',
    caption: 'Commercial Stucco — Austin, TX',
  },
  {
    src: '/images/commercial-building-hero.webp',
    alt: 'Commercial building with stucco exterior finish',
    category: 'commercial',
    caption: 'Commercial Stucco Exterior — Central Texas',
  },
  {
    src: '/images/new-development-stucco.webp',
    alt: 'New construction stucco on a commercial development',
    category: 'commercial',
    caption: 'New Construction Stucco — Austin Area',
  },
  {
    src: '/images/stucco-repair-closeup.webp',
    alt: 'Close-up of professional stucco repair work in Austin',
    category: 'repair',
    caption: 'Stucco Repair — Close-Up Detail',
  },
  {
    src: '/images/stucco-repair-hero.webp',
    alt: 'Stucco repair project in Austin, TX',
    category: 'repair',
    caption: 'Stucco Repair Project — Austin, TX',
  },
  {
    src: '/images/stucco-damage-signs.webp',
    alt: 'Signs of stucco damage requiring repair',
    category: 'repair',
    caption: 'Stucco Damage Assessment — Before Repair',
  },
  {
    src: '/images/eifs-stucco-hero.webp',
    alt: 'EIFS exterior insulation and finish system installation',
    category: 'eifs',
    caption: 'EIFS Installation — Central Texas',
  },
  {
    src: '/images/stucco-project-completed.webp',
    alt: 'Completed stone veneer project in Austin, TX',
    category: 'stone-veneer',
    caption: 'Stone Veneer Installation — Austin, TX',
  },
  {
    src: '/images/stucco-texture-hero.webp',
    alt: 'Custom stucco texture and finishing detail',
    category: 'residential',
    caption: 'Custom Stucco Texture — Finish Detail',
  },
  {
    src: '/images/stucco-installation-hero.webp',
    alt: 'Stucco installation in progress on a residential project',
    category: 'residential',
    caption: 'Stucco Installation in Progress',
  },
  {
    src: '/images/stucco-installation-process.webp',
    alt: 'Interior plaster application process',
    category: 'residential',
    caption: 'Interior Plaster Application',
  },
  {
    src: '/images/stucco-project-austin.webp',
    alt: 'Star Stucco of Austin project site',
    category: 'residential',
    caption: 'Project Site — Austin, TX',
  },
]

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'repair', label: 'Stucco Repair' },
  { value: 'eifs', label: 'EIFS' },
  { value: 'stone-veneer', label: 'Stone Veneer' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <>
      <SEO
        title="Stucco Project Gallery | Star Stucco of Austin | Austin, TX"
        description="Browse completed stucco projects by Star Stucco of Austin — residential, commercial, stucco repair, EIFS, and stone veneer work across Central Texas. See our craftsmanship firsthand."
        path="/gallery"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Stucco Project Gallery',
          description: 'Browse completed stucco projects by Star Stucco of Austin across Central Texas.',
          url: `${siteConfig.url}/gallery`,
          isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
        }}
      />

      {/* Hero */}
      <section className="bg-secondary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Our Work
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Stucco Project Gallery
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Browse completed residential and commercial stucco projects across
              Austin, TX and Central Texas. Over 9,000 projects completed since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                aria-pressed={activeCategory === cat.value}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? 'bg-primary-700 text-white shadow-sm'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img) => (
              <div
                key={img.src}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-secondary-100 transition-all hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-secondary-800">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-secondary-500 py-12">
              No projects found for this category.
            </p>
          )}
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4 text-center">
            Our Team at Work
          </h2>
          <p className="text-secondary-600 text-center mb-12 max-w-2xl mx-auto">
            Every project is completed by our in-house crew — no subcontractors.
            OSHA-trained, CPR-trained, and scaffold-trained professionals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/star-stucco-team-group.webp"
                alt="Star Stucco of Austin team members"
                loading="lazy"
                width={665}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/star-stucco-team-working.webp"
                alt="Star Stucco of Austin crew working on a stucco project"
                loading="lazy"
                width={665}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Stucco Project?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Get a free estimate from a trusted stucco contractor in Austin, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 hover:shadow-lg"
            >
              Get a Free Estimate
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-white/50 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-primary-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
