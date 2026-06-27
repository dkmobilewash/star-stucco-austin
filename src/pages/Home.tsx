import { Link } from 'react-router-dom'
import { CircleCheck as CheckCircle, Shield, Clock, Award, Users, Heart, ChevronRight, Phone, Quote } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'
import { blogPosts } from '../data/blogPosts'

const latestPosts = [...blogPosts]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3)

function formatDate(dateString: string): string {
  return new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const services = [
  {
    title: 'Residential Stucco',
    description: 'We enhance the beauty and durability of your home using high-quality materials and proven techniques.',
    path: '/austin-stucco-installation',
    image: '/images/residential-stucco-austin.webp',
  },
  {
    title: 'Commercial Stucco',
    description: 'We deliver professional exterior results that meet the unique demands of commercial projects.',
    path: '/austin-commercial-stucco',
    image: '/images/commercial-stucco-austin.webp',
  },
  {
    title: 'Stucco Repair',
    description: 'We restore damaged or deteriorating stucco to its original condition using expert techniques.',
    path: '/austin-stucco-repair',
    image: '/images/stucco-repair-closeup.webp',
  },
  {
    title: 'EIFS',
    description: 'We install Exterior Insulation and Finish Systems — lightweight, energy-efficient cladding for any building.',
    path: '/eifs-contractor-austin',
    image: '/images/eifs-stucco-hero.webp',
  },
  {
    title: 'Interior Plaster',
    description: 'We transform living spaces with a range of custom plaster finishes and styles.',
    path: '/austin-stucco-finishing',
    image: '/images/stucco-installation-process.webp',
  },
  {
    title: 'Thin Stone Veneer',
    description: 'We apply natural stone veneer for a durable, elegant finish on any surface.',
    path: '/austin-stucco-installation',
    image: '/images/stucco-project-completed.webp',
  },
]

const whyChooseUs = [
  { icon: CheckCircle, title: 'Over 9,000 Projects Completed in Texas' },
  { icon: Clock, title: 'Over 20 Years of Experience' },
  { icon: Shield, title: 'Warranties With All Work' },
  { icon: Heart, title: 'Locally and Family-Owned' },
  { icon: Users, title: 'No Subcontractors — We Employ Our Team' },
  { icon: Award, title: 'Fully Insured' },
]

const testimonials = [
  { quote: 'Star Stucco has been the easiest contractor I\'ve ever worked with.', author: 'Corey B.' },
  { quote: 'Excellent repair work — I definitely recommend them to anyone in Austin.', author: 'Melanie H.' },
  { quote: 'If you need a plastering job done in Austin, use these guys. Plain and simple.', author: 'John F.' },
  { quote: 'I\'ve used their stucco repair service several times and it always turns out great.', author: 'Andrew W.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
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
  areaServed: siteConfig.serviceAreas.map((area) => ({
    '@type': 'City',
    name: area,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '187',
  },
}

export default function Home() {
  return (
    <>
      <SEO
        title="Austin Stucco Contractor | Repair, Installation & Finishing | Free Estimates"
        description="Top-rated stucco contractor in Austin, TX. Expert stucco repair, installation, finishing & commercial stucco services. Local Austin team. Call for a free estimate today."
        path="/"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/hero-stucco-austin.webp"
            alt="Professional stucco contractor Austin TX"
            className="h-full w-full object-cover opacity-30"
            fetchPriority="high"
            width={1200}
            height={504}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Proud to Be a Trusted Name in Central Texas Stucco
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Austin's Trusted Stucco Contractor
            </h1>
            <p className="text-lg sm:text-xl text-secondary-200 mb-8 leading-relaxed">
              Expert stucco repair, installation &amp; finishing for residential and commercial properties across Austin, TX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="tel:+15127069699"
                aria-label="Call Star Stucco of Austin for a free estimate"
                className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call for a Free Estimate
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-secondary-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-300 hover:bg-secondary-800"
              >
                Get a Free Quote
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <p className="text-secondary-300 text-sm font-medium">(512) 706-9699</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Star Stucco of Austin: Your Trusted Stucco Contractors in Central Texas
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Star Stucco of Austin has been serving the Austin area since 2013 as a trusted
                stucco and plaster contractor throughout Central Texas. We have the expertise
                to deliver high-quality results that stand the test of time. Our commitment to quality and customer satisfaction has
                earned us recognition from leading industry associations including EIMA,
                TLPCA, and the Stucco Manufacturers Association.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8">
                Our team consists of OSHA-trained, CPR-trained, and scaffold-trained
                professionals. We are certified applicators for Sto Corp, Senergy/BASF,
                Master Wall, Dryvit, and Parex LaHabra. Contact us today to see why
                we're the stucco contractor Austin, TX trusts!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
              >
                Contact Us Today
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/stucco-project-austin.webp"
                alt="Star Stucco of Austin team on a project site"
                loading="lazy"
                width={665}
                height={665}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <p className="text-2xl font-bold text-primary-700">9,000+</p>
                <p className="text-xs text-secondary-500">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Why Choose Star Stucco of Austin
            </h2>
            <p className="text-secondary-600 text-lg">
              {siteConfig.tagline}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <item.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="font-semibold text-secondary-900 pt-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Our Stucco &amp; Plaster Services
            </h2>
            <p className="text-secondary-600 text-lg">
              Complete stucco solutions for residential and commercial properties
              throughout Central Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                aria-label={`Learn more about ${service.title} services`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-secondary-100 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Austin, TX`}
                    loading="lazy"
                    width={640}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-700">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">Find Us</h2>
            <p className="text-secondary-600 text-lg">Visit our location in Austin, TX.</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.9494043413783!2d-97.83384819999999!3d30.238519299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4bbb1c3d56d1%3A0x6489b539a0e11ca1!2sStar%20Stucco%20of%20Austin!5e0!3m2!1sen!2sus!4v1779769504148!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Star Stucco of Austin location"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-secondary-600 text-lg">
              Hear from homeowners and businesses across Central Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-xl bg-white p-8 shadow-sm border border-secondary-100"
              >
                <Quote className="h-8 w-8 text-primary-200 mb-4" />
                <p className="text-secondary-700 leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <p className="text-sm font-semibold text-secondary-900">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Latest Stucco Tips &amp; Guides
            </h2>
            <p className="text-secondary-600 text-lg">
              Expert advice for Austin homeowners — from repair costs to EIFS, Dryvit, and moisture remediation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-secondary-100 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium text-primary-700 mb-2">{formatDate(post.date)}</p>
                  <h3 className="font-display text-lg font-semibold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-secondary-600 leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-700">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center rounded-lg border border-secondary-300 px-6 py-3 text-sm font-semibold text-secondary-700 transition-all hover:border-secondary-400 hover:bg-secondary-50"
            >
              View All Articles <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Contact Star Stucco of Austin for a free estimate on your residential or
            commercial stucco project. Over 9,000 projects completed across Central Texas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Get a Free Estimate
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-secondary-400"
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
