import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronRight, Phone, CheckCircle, Shield, Clock, Award } from 'lucide-react'
import SEO from '../components/SEO'
import { FAQSection, faqPageSchema } from '../components/FAQ'
import { siteConfig } from '../lib/siteConfig'
import { serviceDefinitions, countyDefinitions } from '../data/serviceLocationTypes'
import type { ServiceLocationData } from '../data/serviceLocationTypes'

export default function ServiceLocationTemplate({
  serviceSlug,
  data: allData,
}: {
  serviceSlug: string
  data: ServiceLocationData[]
}) {
  const { countySlug } = useParams()

  const data = allData.find(
    (d) => d.serviceSlug === serviceSlug && d.countySlug === countySlug
  )

  if (!data) return <Navigate to="/service-areas" replace />

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: data.serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
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
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${data.countyName}, Texas`,
    },
    description: data.metaDescription,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: data.serviceName,
        item: `${siteConfig.url}${serviceDefinitions.find((s) => s.slug === serviceSlug)?.path ?? '/'}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${data.serviceName} in ${data.countyName}`,
        item: `${siteConfig.url}/${serviceSlug}/${countySlug}`,
      },
    ],
  }

  const otherCounties = countyDefinitions.filter((c) => c.slug !== countySlug)
  const otherServices = serviceDefinitions.filter((s) => s.slug !== serviceSlug)
  const serviceParentPath = serviceDefinitions.find((s) => s.slug === serviceSlug)?.path ?? '/'
  const countyAreaSlug = countyDefinitions.find((c) => c.slug === countySlug)?.areaSlug ?? ''

  return (
    <>
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        path={`/${serviceSlug}/${countySlug}`}
        schema={[serviceSchema, breadcrumbSchema, faqPageSchema(data.faqs)]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-secondary-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <nav className="mb-6 flex items-center gap-2 text-sm text-secondary-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={serviceParentPath} className="hover:text-white transition-colors">{data.serviceName}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-secondary-200">{data.countyName}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {data.heroH1}
          </h1>
          <p className="max-w-2xl text-lg text-secondary-200 mb-8 leading-relaxed">
            {data.heroIntro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              Get a Free Estimate
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call ${siteConfig.phone} — Star Stucco`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-300 hover:bg-secondary-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Local Intro */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
              {data.localIntro.heading}
            </h2>
            {data.localIntro.paragraphs.map((p, i) => (
              <p key={i} className="text-secondary-600 leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4 text-center">
            What's Included With Our {data.serviceName} in {data.countyName}
          </h2>
          <p className="text-secondary-600 text-center mb-12 max-w-2xl mx-auto">
            Every project includes expert craftsmanship, quality materials, and a commitment to lasting results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.whatsIncluded.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 mb-4">
                  <CheckCircle className="h-5 w-5 text-primary-700" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Needs */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4 text-center">
            Common {data.serviceName} Needs in {data.countyName}
          </h2>
          <p className="text-secondary-600 text-center mb-12 max-w-2xl mx-auto">
            {data.commonNeeds.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.commonNeeds.items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-lg bg-secondary-50 p-5"
              >
                <ChevronRight className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-secondary-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-secondary-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-8">
                Why Choose Us for {data.serviceName} in {data.countyName}?
              </h2>
              <ul className="space-y-4">
                {data.whyChooseUs.reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100">
                <Shield className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">Licensed & Insured</h3>
                <p className="text-sm text-secondary-600">Full liability coverage and workers' compensation for every project in {data.countyName}.</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100">
                <Clock className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">20+ Years Experience</h3>
                <p className="text-sm text-secondary-600">Decades of hands-on stucco work across Central Texas residential and commercial properties.</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100 sm:col-span-2">
                <Award className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-secondary-900 mb-2">Certified Applicators</h3>
                <p className="text-sm text-secondary-600">Certified by Sto Corp, Senergy/BASF, Master Wall, Dryvit, and Parex LaHabra for the highest quality results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4 text-center">
            Our {data.serviceName} Process
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            A straightforward approach from start to finish — no surprises, no shortcuts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={data.faqs}
        title={`${data.serviceName} in ${data.countyName} — FAQ`}
        subtitle={`Common questions about ${data.serviceName.toLowerCase()} services in ${data.countyName}, TX.`}
      />

      {/* Other Locations for This Service */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary-900 mb-4 text-center">
            {data.serviceName} in Other Counties
          </h2>
          <p className="text-secondary-600 text-center mb-8">
            We offer {data.serviceName.toLowerCase()} services across Central Texas.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCounties.map((c) => (
              <Link
                key={c.slug}
                to={`/${serviceSlug}/${c.slug}`}
                className="rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-medium text-secondary-700 transition-all hover:border-primary-300 hover:text-primary-700 hover:shadow-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services in This County */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary-900 mb-4 text-center">
            Other Services in {data.countyName}
          </h2>
          <p className="text-secondary-600 text-center mb-8">
            Explore all of our stucco and plaster services available in {data.countyName}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}/${countySlug}`}
                className="flex items-center gap-3 rounded-xl bg-white p-5 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:border-primary-200"
              >
                <ChevronRight className="h-5 w-5 text-primary-600 shrink-0" />
                <span className="font-medium text-secondary-800">{s.name}</span>
              </Link>
            ))}
            <Link
              to={`/service-areas/${countyAreaSlug}`}
              className="flex items-center gap-3 rounded-xl bg-white p-5 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:border-primary-200"
            >
              <ChevronRight className="h-5 w-5 text-primary-600 shrink-0" />
              <span className="font-medium text-secondary-800">All Services in {data.countyName}</span>
            </Link>
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
              Get a Free Estimate
            </Link>
            <a
              href={`${siteConfig.phoneHref}`}
              aria-label={`Call ${siteConfig.phone} — Star Stucco`}
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
