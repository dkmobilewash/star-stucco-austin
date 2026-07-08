import { Link } from 'react-router-dom'
import { CircleCheck as CheckCircle, Shield, Clock, Award, Users, Heart, ChevronRight, Phone, Quote, Star } from 'lucide-react'
import SEO from '../components/SEO'
import { FAQSection, faqPageSchema } from '../components/FAQ'
import { siteConfig } from '../lib/siteConfig'
import { blogPosts } from '../data/blogPosts'
import { reviews, reviewStats } from '../data/reviews'

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
    path: '/austin-thin-stone-veneer',
    image: '/images/stucco-project-completed.webp',
  },
]

const whyChooseUs = [
  { icon: CheckCircle, title: 'Over 9,000 Projects Completed in Texas' },
  { icon: Clock, title: 'Over 20 Years of Experience' },
  { icon: Shield, title: '2-Year Limited Warranty on All Work' },
  { icon: Heart, title: 'Locally and Family-Owned' },
  { icon: Users, title: 'No Subcontractors — We Employ Our Team' },
  { icon: Award, title: 'Fully Insured' },
]

const featuredReviews = reviews.filter((r) => r.text.length > 40).slice(0, 6)

const homeFaqs = [
  {
    question: 'What services does Star Stucco of Austin offer as a stucco contractor in Austin, TX?',
    answer: 'Star Stucco of Austin provides a full range of exterior and interior finishing services, including residential and commercial stucco installation, stucco repair, EIFS (Exterior Insulation and Finish Systems), interior plaster, and thin stone veneer. As a stucco contractor in Austin, TX, we’ve completed over 9,000 projects across Central Texas since 2013.',
  },
  {
    question: 'How long has Star Stucco of Austin been serving Austin, TX?',
    answer: 'We’ve been a trusted stucco contractor in Austin, TX since 2013 — 13 years of experience serving homeowners and businesses throughout Central Texas. Over that time we’ve built our reputation on in-house craftsmanship rather than subcontracted labor.',
  },
  {
    question: 'Are you certified to work with specific stucco and EIFS brands?',
    answer: 'Yes. Our team consists of certified applicators for Sto Corp, Dryvit, Senergy/BASF, Parex, and Master Wall. As a stucco contractor in Austin, TX, maintaining these certifications ensures every project is installed to manufacturer specifications, protecting your warranty coverage.',
  },
  {
    question: 'Do you handle both residential and commercial stucco projects in Austin?',
    answer: 'Star Stucco of Austin is fully equipped to handle both residential homes and commercial properties. Whether you need a stucco contractor in Austin, TX for a single-family home or a large commercial building, our in-house crew manages projects of any size.',
  },
  {
    question: 'What is EIFS and how is it different from traditional stucco?',
    answer: 'EIFS (Exterior Insulation and Finish System) is a multi-layered cladding system that wraps a building in continuous insulation, offering better energy efficiency than traditional stucco. As an EIFS-certified stucco contractor in Austin, TX, we recommend it for property owners looking to lower long-term heating and cooling costs.',
  },
  {
    question: 'What should I do if my stucco is cracking or showing damage?',
    answer: 'Cracking, bulging, or discoloration are signs that moisture may be reaching the underlying structure, and should be addressed quickly. As an experienced stucco contractor in Austin, TX, we offer color-matched repair work backed by a 2-year limited warranty, restoring the affected area while addressing the root cause.',
  },
  {
    question: 'What areas around Austin do you serve?',
    answer: 'We serve Austin and the surrounding communities including Round Rock, Cedar Park, Georgetown, Pflugerville, Westlake, Lakeway, Bee Cave, Dripping Springs, and Kyle, along with Travis, Williamson, Hays, Bell, Burnet, Comal, Bastrop, Llano, Blanco, Gillespie, Caldwell, Lee, Milam, Brazos, McLennan, and Guadalupe counties. Wherever you are in Central Texas, you can count on a reliable stucco contractor in Austin, TX to bring a full professional crew to your site.',
  },
  {
    question: 'Do you use subcontractors, or is this an in-house crew?',
    answer: 'We do not use subcontractors — every technician on your job site is a direct employee of Star Stucco of Austin. This in-house model is central to how we operate as a stucco contractor in Austin, TX, ensuring consistent training, safety standards, and accountability on every project.',
  },
  {
    question: 'Do you offer thin stone veneer and interior plaster services?',
    answer: 'Yes. In addition to exterior stucco and EIFS, we install thin stone veneer and offer interior plaster finishes to give properties a natural, elegant look inside and out. We’re more than just a stucco contractor in Austin, TX — we’re a full-service finishing company.',
  },
  {
    question: 'How can I get a free estimate from a stucco contractor in Austin, TX?',
    answer: 'You can call us directly at (512) 706-9699 for a free estimate, or reach out by email at info@starstuccoaustin.com. As a local stucco contractor in Austin, TX, we prioritize clear communication and a fast response so your project can get started quickly.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://stuccoaustin.com',
  name: 'Star Stucco of Austin',
  url: 'https://stuccoaustin.com',
  telephone: '+15127069699',
  email: siteConfig.email,
  foundingDate: '2013',
  description:
    'Star Stucco of Austin is a stucco contractor in Austin, TX providing residential and commercial stucco, stucco repair, EIFS, interior plaster, and thin stone veneer services across Central Texas.',
  image: 'https://stuccoaustin.com/images/hero-stucco-austin.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5316 W US Hwy 290 Service Rd',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78735',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.238662944720037,
    longitude: -97.83384820366378,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [
    'Austin, TX', 'Round Rock, TX', 'Cedar Park, TX', 'Georgetown, TX',
    'Pflugerville, TX', 'Westlake, TX', 'Lakeway, TX', 'Bee Cave, TX',
    'Dripping Springs, TX', 'Kyle, TX',
    'Travis County, TX', 'Williamson County, TX', 'Bell County, TX',
    'Hays County, TX', 'Burnet County, TX', 'Comal County, TX',
    'Bastrop County, TX', 'Llano County, TX', 'Blanco County, TX',
    'Gillespie County, TX', 'Caldwell County, TX', 'Lee County, TX',
    'Milam County, TX', 'Brazos County, TX', 'McLennan County, TX',
    'Guadalupe County, TX',
  ],
  makesOffer: [
    { '@type': 'Offer', name: 'Residential Stucco' },
    { '@type': 'Offer', name: 'Commercial Stucco' },
    { '@type': 'Offer', name: 'Stucco Repair' },
    { '@type': 'Offer', name: 'EIFS Contractor' },
    { '@type': 'Offer', name: 'Interior Plaster' },
    { '@type': 'Offer', name: 'Thin Stone Veneer' },
  ],
  brand: [
    { '@type': 'Brand', name: 'Sto Corp' },
    { '@type': 'Brand', name: 'Dryvit' },
    { '@type': 'Brand', name: 'Senergy/BASF' },
    { '@type': 'Brand', name: 'Parex' },
    { '@type': 'Brand', name: 'Master Wall' },
  ],
  memberOf: [
    { '@type': 'Organization', name: 'EIMA - Exterior Insulation Manufacturers Association' },
    { '@type': 'Organization', name: 'TLPCA - Texas Lathing and Plastering Contractors Association' },
    { '@type': 'Organization', name: 'National One Coat Stucco Association' },
    { '@type': 'Organization', name: 'Stucco Manufacturers Association' },
    { '@type': 'Organization', name: 'AWCI - Association of the Wall and Ceiling Industry' },
  ],
  sameAs: [
    siteConfig.socialMedia.facebook,
    siteConfig.socialMedia.instagram,
    siteConfig.socialMedia.google,
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: reviewStats.averageRating.toFixed(1),
    reviewCount: reviewStats.totalReviews.toString(),
    bestRating: '5',
    worstRating: '1',
  },
}

export default function Home() {
  return (
    <>
      <SEO
        title="Stucco Contractor Austin, TX | Star Stucco of Austin"
        description="Trusted stucco contractor in Austin, TX since 2013. Residential & commercial stucco, stucco repair, EIFS, interior plaster & stone veneer. In-house crew, 9,000+ projects completed. Call for a free estimate."
        path="/"
        schema={[localBusinessSchema, faqPageSchema(homeFaqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/hero-stucco-austin.webp"
            alt="Professional stucco exterior on a Central Texas home"
            className="h-full w-full object-cover opacity-30"
            width={1200}
            height={504}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Proud to Be a Trusted Name in Central Texas Stucco
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
              Residential and Commercial Stucco Contractor
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-400 mb-4">
              Austin, TX
            </h2>
            <p className="text-lg sm:text-xl text-secondary-200 mb-8 leading-relaxed">
              Your trusted stucco contractor in Austin, TX — expert stucco repair, installation &amp; finishing for homes and businesses across Central Texas since 2013.
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
                Star Stucco of Austin has been serving the Austin area as a stucco contractor
                in Austin, TX since 2013, completing over 9,000 projects across Central Texas.
                We have the expertise to deliver high-quality results that stand the test of
                time. Our commitment to quality and customer satisfaction has earned us
                recognition from leading industry associations including EIMA, TLPCA, and the
                Stucco Manufacturers Association.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8">
                Our team consists of OSHA-trained, CPR-trained, and scaffold-trained
                professionals. We are certified applicators for Sto Corp, Senergy/BASF,
                Master Wall, Dryvit, and Parex LaHabra — and every technician is a direct
                employee, not a subcontractor. All work is backed by a 2-year limited warranty.
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

      {/* Service Areas Section */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Stucco Services Across Central Texas
            </h2>
            <p className="text-secondary-600 text-lg">
              From Austin to the surrounding Hill Country, we provide expert stucco services to homeowners and businesses throughout Central Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-xl font-bold text-secondary-900 mb-4">Cities We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Austin', path: '/service-area/austin' },
                  { name: 'Round Rock', path: '/service-area/round-rock' },
                  { name: 'Cedar Park', path: '/service-area/cedar-park' },
                  { name: 'Georgetown', path: '/service-area/georgetown' },
                  { name: 'Pflugerville', path: '/service-area/pflugerville' },
                  { name: 'Westlake', path: '/service-area/westlake' },
                ].map((area) => (
                  <Link
                    key={area.name}
                    to={area.path}
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-secondary-700 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:text-primary-700"
                  >
                    <ChevronRight className="h-4 w-4 text-primary-600" />
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-secondary-900 mb-4">Counties We Cover</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Travis County', path: '/service-areas/travis-county-stucco' },
                  { name: 'Williamson County', path: '/service-areas/williamson-county-stucco' },
                  { name: 'Hays County', path: '/service-areas/hays-county-stucco' },
                  { name: 'Bell County', path: '/service-areas/bell-county-stucco' },
                  { name: 'Bastrop County', path: '/service-areas/bastrop-county-stucco' },
                  { name: 'Burnet County', path: '/service-areas/burnet-county-stucco' },
                  { name: 'Comal County', path: '/service-areas/comal-county-stucco' },
                  { name: 'Blanco County', path: '/service-areas/blanco-county-stucco' },
                ].map((area) => (
                  <Link
                    key={area.name}
                    to={area.path}
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-secondary-700 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:text-primary-700"
                  >
                    <ChevronRight className="h-4 w-4 text-primary-600" />
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              {reviewStats.averageRating.toFixed(1)} Stars from {reviewStats.totalReviews} Google Reviews
            </h2>
            <p className="text-secondary-600 text-lg">
              Real reviews from real customers across Central Texas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((r) => (
              <div
                key={r.author}
                className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100"
              >
                <Quote className="h-7 w-7 text-primary-200 mb-3" />
                <p className="text-secondary-700 leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                  <p className="text-sm font-semibold text-secondary-900">{r.author}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center rounded-lg border border-secondary-300 px-6 py-3 text-sm font-semibold text-secondary-700 transition-all hover:border-secondary-400 hover:bg-secondary-50"
            >
              Read All Reviews <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
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

      {/* FAQ Section */}
      <FAQSection
        faqs={homeFaqs}
        title="Stucco Contractor in Austin, TX — FAQ"
        subtitle="Common questions about stucco services in Austin, TX and Central Texas."
      />

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
