import { Link } from 'react-router-dom'
import { Star, ChevronRight, Phone, Quote } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'
import { reviews, reviewStats } from '../data/reviews'

const reviewsWithText = reviews.filter((r) => r.text.length > 0)

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#business`,
  name: siteConfig.name,
  image: 'https://stuccoaustin.com/images/hero-stucco-austin.webp',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.coordinates.lat,
    longitude: siteConfig.coordinates.lng,
  },
  sameAs: [
    reviewStats.googleUrl,
    siteConfig.socialMedia.facebook,
    siteConfig.socialMedia.instagram,
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: reviewStats.averageRating.toFixed(1),
    reviewCount: reviewStats.totalReviews.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: reviewsWithText.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: r.text,
    datePublished: r.date,
    publisher: { '@type': 'Organization', name: 'Google' },
  })),
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-secondary-200 text-secondary-200'}`}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <>
      <SEO
        title={`Customer Reviews | ${siteConfig.name} | ${reviewStats.averageRating}-Star Rated`}
        description={`Read real Google reviews from ${siteConfig.name} customers. ${reviewStats.totalReviews} reviews with a ${reviewStats.averageRating}-star rating. See why we are Austin's top-rated stucco contractor.`}
        path="/reviews"
        schema={schema}
      />

      {/* Hero */}
      <section className="bg-secondary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Customer Reviews
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-6">
              We take pride in every project. Here is what real customers have to
              say about working with Star Stucco of Austin.
            </p>
            <div className="flex items-center gap-4">
              <StarRating rating={reviewStats.averageRating} />
              <span className="text-white font-semibold text-lg">
                {reviewStats.averageRating.toFixed(1)}
              </span>
              <span className="text-secondary-400">
                ({reviewStats.totalReviews} reviews on Google)
              </span>
            </div>
            <a
              href={reviewStats.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary-300 hover:text-primary-200 transition-colors"
            >
              View all reviews on Google
              <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewsWithText.map((review) => (
              <div
                key={review.author}
                className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100 flex flex-col"
              >
                <Quote className="h-7 w-7 text-primary-200 mb-3 shrink-0" />
                <p className="text-secondary-700 leading-relaxed mb-4 italic flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary-100">
                  <p className="text-sm font-semibold text-secondary-900">
                    {review.author}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating-only summary */}
          <div className="mt-12 text-center">
            <p className="text-secondary-500 text-sm">
              Showing {reviewsWithText.length} of {reviewStats.totalReviews}{' '}
              Google reviews.{' '}
              <a
                href={reviewStats.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                See all on Google
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Get a free estimate on your stucco project and see why Austin
            homeowners rate us {reviewStats.averageRating} stars.
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
              aria-label={`Call ${siteConfig.phone} — Star Stucco`}
              className="inline-flex items-center justify-center rounded-lg border border-primary-400 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-primary-800"
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
