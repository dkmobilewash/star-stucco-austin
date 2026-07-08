import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, Phone } from 'lucide-react'
import type { JSX } from 'react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'
import { blogPosts } from '../data/blogPosts'

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function renderInline(text: string) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: (string | JSX.Element)[] = []
  let last = 0
  let match: RegExpExecArray | null
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(
      <Link key={match.index} to={match[2]!} className="text-primary-700 underline hover:text-primary-900 transition-colors">
        {match[1]}
      </Link>
    )
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts.length > 0 ? parts : text
}

function renderContent(content: string) {
  const blocks = content.split('\n\n')

  return blocks.map((block, index) => {
    const trimmed = block.trim()

    if (trimmed.startsWith('### ')) {
      return (
        <h3
          key={index}
          className="font-display text-xl font-semibold text-secondary-900 mt-8 mb-3"
        >
          {trimmed.replace('### ', '')}
        </h3>
      )
    }

    if (trimmed.startsWith('## ')) {
      return (
        <h2
          key={index}
          className="font-display text-2xl font-bold text-secondary-900 mt-10 mb-4"
        >
          {trimmed.replace('## ', '')}
        </h2>
      )
    }

    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      return (
        <p
          key={index}
          className="font-semibold text-secondary-900 mt-4 mb-2"
        >
          {trimmed.replace(/\*\*/g, '')}
        </p>
      )
    }

    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').map((line) => line.replace(/^- /, ''))
      return (
        <ul key={index} className="my-4 space-y-2 pl-6">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-secondary-600 leading-relaxed list-disc"
            >
              {renderInline(item)}
            </li>
          ))}
        </ul>
      )
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split('\n').map((line) => line.replace(/^\d+\.\s/, ''))
      return (
        <ol key={index} className="my-4 space-y-2 pl-6">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-secondary-600 leading-relaxed list-decimal"
            >
              {renderInline(item)}
            </li>
          ))}
        </ol>
      )
    }

    if (trimmed.startsWith('|')) {
      const rows = trimmed
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.startsWith('|'))
      const parseCells = (line: string) =>
        line
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((cell) => cell.trim())
      const isSeparator = (line: string) => /^\|?[\s:|-]+\|?$/.test(line) && line.includes('-')
      const header = parseCells(rows[0]!)
      const bodyRows = rows.slice(1).filter((line) => !isSeparator(line)).map(parseCells)
      return (
        <div key={index} className="my-6 overflow-x-auto rounded-2xl border border-secondary-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-secondary-900 text-white">
                {header.map((cell, i) => (
                  <th key={i} className="px-5 py-4 font-semibold">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, r) => (
                <tr key={r} className={r % 2 === 0 ? 'bg-white' : 'bg-secondary-50'}>
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`px-5 py-4 ${c === 0 ? 'font-medium text-secondary-900' : 'text-secondary-600'}`}
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    return (
      <p key={index} className="text-secondary-600 leading-relaxed mb-4">
        {renderInline(trimmed)}
      </p>
    )
  })
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <>
        <SEO
          title="Post Not Found | Star Stucco of Austin Blog"
          description="The blog post you are looking for could not be found."
          path={`/blog/${slug || ''}`}
        />
        <section className="py-32">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl font-bold text-secondary-900 mb-4">
              Post Not Found
            </h1>
            <p className="text-secondary-600 mb-8">
              Sorry, the blog post you're looking for doesn't exist or may have
              been moved.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-800"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    )
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image,
    url: `${siteConfig.url}/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  }

  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  const schema = faqSchema ? [articleSchema, faqSchema] : articleSchema

  return (
    <>
      <SEO
        title={post.seoTitle ?? `${post.title} | ${siteConfig.name} Blog`}
        description={post.seoDescription ?? post.excerpt}
        path={`/blog/${post.slug}`}
        schema={schema}
        ogType="article"
      />

      {/* Hero */}
      <section className="bg-secondary-900 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-secondary-400 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
          <p className="text-sm font-medium text-primary-400 mb-3">
            {formatDate(post.date)}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {post.h1 ?? post.title}
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-96 object-cover"
            width={1600}
            height={900}
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {renderContent(post.content)}

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-secondary-900 mt-10 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="rounded-2xl bg-secondary-50 border border-secondary-200 px-6 sm:px-8 divide-y divide-secondary-200">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="py-5">
                    <h3 className="font-semibold text-secondary-900 mb-2">{faq.question}</h3>
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="bg-secondary-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-secondary-900 mb-4">
            Have Questions About Your Stucco?
          </h2>
          <p className="text-secondary-600 mb-6">
            Our team of Austin stucco experts is ready to help. Get a free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {siteConfig.phone} for a Free Estimate
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-300 px-6 py-3 text-sm font-semibold text-secondary-700 transition-all hover:border-secondary-400 hover:bg-white"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
