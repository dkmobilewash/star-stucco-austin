import { Link, useParams, Navigate } from 'react-router-dom'
import { ChevronRight, Phone, MapPin, Star, Shield, Clock, CheckCircle, Wrench, AlertTriangle } from 'lucide-react'
import SEO from '../components/SEO'
import { FAQSection, faqPageSchema } from '../components/FAQ'
import { siteConfig } from '../lib/siteConfig'
import { allCounties } from '../data/countyPages'
import { serviceDefinitions } from '../data/serviceLocationTypes'

export default function CountyPage() {
  const { slug } = useParams<{ slug: string }>()
  const data = allCounties.find((c) => c.slug === slug)

  if (!data) return <Navigate to="/service-areas" replace />

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Stucco Services in ${data.county}, TX`,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
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
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${data.county}, TX`,
    },
    description: data.metaDescription,
    serviceType: [
      'Stucco Repair',
      'Stucco Installation',
      'Stucco Crack Repair',
      'Exterior Plaster',
      'EIFS Repair & Installation',
      'Commercial Stucco',
    ],
  }

  const faqSchema = faqPageSchema(data.faqs)

  return (
    <>
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        path={`/service-areas/${data.slug}`}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="flex items-center gap-2 text-sm text-secondary-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-400">{data.county}</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-900/50 border border-primary-700/30 px-4 py-1.5 mb-6">
              <MapPin className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Serving All of {data.county}, TX</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {data.heroH1}
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              {data.heroIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
              >
                Get a Free Stucco Estimate <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label={`Call Star Stucco at ${siteConfig.phone}`}
                className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now: {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                {data.localIntro.heading}
              </h2>
              {data.localIntro.paragraphs.map((p, i) => (
                <p key={i} className="text-secondary-600 leading-relaxed mb-6">
                  {p}
                </p>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
              >
                Request a Free Inspection <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                {data.highlights.map((item) => (
                  <div key={item.label} className="text-center rounded-xl bg-secondary-50 p-6 border border-secondary-100">
                    <p className="text-3xl font-bold text-primary-700">{item.stat}</p>
                    <p className="text-sm text-secondary-600 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Stucco Services We Offer in {data.county}
            </h2>
            <p className="text-secondary-600">
              Professional stucco and plaster solutions for homes and businesses throughout {data.county}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                aria-label={`Learn more about ${service.title} in ${data.county}`}
                className="group flex flex-col rounded-xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors mb-4">
                  <Wrench className="h-5 w-5 text-primary-700" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary-600 leading-relaxed flex-1">{service.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-700">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                {data.whyChooseUs.heading}
              </h2>
              <div className="space-y-4">
                {data.whyChooseUs.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                    <p className="text-secondary-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {[
                { icon: Star, title: 'Local Expertise', desc: `We understand ${data.county} soil types, weather patterns, and building codes for every community.` },
                { icon: Shield, title: 'Fully Licensed & Insured', desc: `Licensed Texas contractor with full liability and workers' compensation coverage for every ${data.county} project.` },
                { icon: Clock, title: 'Fast Response', desc: `Prompt estimates and scheduling for all ${data.county} communities. Most projects begin within 1–2 weeks.` },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl bg-secondary-50 p-5 border border-secondary-100">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <item.icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-secondary-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Common Stucco Problems We Fix in {data.county}
            </h2>
            <p className="text-secondary-600">{data.commonProblems.intro}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.commonProblems.problems.map((problem) => (
              <div key={problem.title} className="rounded-xl bg-white p-5 shadow-sm border border-secondary-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 mb-3">
                  <AlertTriangle className="h-4.5 w-4.5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2 text-sm">{problem.title}</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              How We Work in {data.county}
            </h2>
            <p className="text-secondary-600">
              A clear, straightforward process from first call to finished project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-bold text-lg mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              {data.county} Communities We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {data.communities.map((n) => (
              <span
                key={n}
                className="rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-medium text-secondary-700"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={data.faqs}
        title={`Stucco FAQs for ${data.county}`}
        subtitle={`Answers to common stucco questions from ${data.county} homeowners and property managers.`}
      />

      {/* Services We Offer in This Area */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Explore {data.county} by Service Type
          </h2>
          <p className="text-secondary-600 text-center mb-10">
            Find detailed information about each stucco and plaster service we provide in {data.county}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDefinitions.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}/${slug?.replace('-stucco', '')}`}
                className="group rounded-2xl bg-secondary-50 p-6 border border-secondary-100 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="font-display text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {s.name} in {data.county}
                </h3>
                <span className="inline-flex items-center text-sm font-medium text-primary-700">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            {data.cta.heading}
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            {data.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 hover:shadow-lg"
            >
              Schedule Your Free Estimate
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-primary-400 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
