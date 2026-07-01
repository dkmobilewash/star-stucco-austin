import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'
import { blogPosts } from '../data/blogPosts'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: `${siteConfig.name} Blog`,
  description:
    'Stucco tips, maintenance guides, and industry news for Austin, TX homeowners.',
  url: `${siteConfig.url}/blog`,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${post.slug}`,
  })),
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog() {
  return (
    <>
      <SEO
        title="Stucco Tips & News Austin, TX | Star Stucco of Austin Blog"
        description="Expert stucco tips, maintenance advice, and industry news for Austin, TX homeowners. Learn how to protect and maintain your stucco exterior in the Central Texas climate."
        path="/blog"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-secondary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Our Blog
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Stucco Tips & News
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Practical advice, industry insights, and expert tips to help Austin
              homeowners get the most out of their stucco exteriors.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-secondary-500 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-secondary-100 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={800}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium text-primary-700 mb-2">
                      {formatDate(post.date)}
                    </p>
                    <h2 className="font-display text-lg font-semibold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-secondary-600 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-700">
                      Read More
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
