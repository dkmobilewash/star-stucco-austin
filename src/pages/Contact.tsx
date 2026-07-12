import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'
import { supabase } from '../lib/supabase'

const residentialServices = [
  'Stucco Installation',
  'Stucco Repair',
  'Stucco Finishing',
  'EIFS',
  'Interior Plaster',
  'Thin Stone Veneer',
  'Inspection / Consultation',
  'Other',
]

const commercialServices = [
  'Commercial Stucco',
  'Commercial Stucco Repair',
  'EIFS / Exterior Insulation',
  'Stucco Finishing',
  'Inspection / Consultation',
  'Other',
]

const businessHours = [
  { day: 'Every Day', hours: '24 Hours' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
  },
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const initialType = searchParams.get('type') === 'commercial' ? 'commercial' : 'residential'

  const [quoteType, setQuoteType] = useState<'residential' | 'commercial'>(initialType)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const serviceOptions = quoteType === 'residential' ? residentialServices : commercialServices

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleTypeChange = (type: 'residential' | 'commercial') => {
    setQuoteType(type)
    setFormData((prev) => ({ ...prev, service: '' }))
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const table = quoteType === 'residential' ? 'residential_quotes' : 'commercial_quotes'
    const { error: dbError } = await supabase.from(table).insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    })

    setSubmitting(false)

    if (dbError) {
      setError('Something went wrong. Please try again or call us directly.')
      return
    }

    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Contact Star Stucco of Austin | Free Estimate Austin, TX"
        description="Contact Star Stucco of Austin for a free stucco estimate. Call (512) 706-9699 or fill out our form. Serving Austin, TX and Travis County with expert stucco services."
        path="/contact"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-secondary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Get Your Free Stucco Estimate
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Ready to start your stucco project? Reach out today for a free,
              no-obligation estimate. We typically respond within 2 business
              hours and can schedule a site visit within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-secondary-900 mb-6">
                Request a Free Estimate
              </h2>

              {/* Quote Type Toggle */}
              {!submitted && (
                <div className="flex rounded-xl border border-secondary-200 p-1 mb-8 w-fit">
                  <button
                    type="button"
                    onClick={() => handleTypeChange('residential')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      quoteType === 'residential'
                        ? 'bg-primary-700 text-white shadow-sm'
                        : 'text-secondary-600 hover:text-secondary-900'
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTypeChange('commercial')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      quoteType === 'commercial'
                        ? 'bg-primary-700 text-white shadow-sm'
                        : 'text-secondary-600 hover:text-secondary-900'
                    }`}
                  >
                    Commercial
                  </button>
                </div>
              )}

              {submitted ? (
                <div className="rounded-2xl bg-primary-50 border border-primary-200 p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-secondary-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-secondary-600">
                    We've received your {quoteType} quote request and will get back to you within 2
                    business hours. If you need immediate assistance, call us at{' '}
                    <a
                      href={`${siteConfig.phoneHref}`}
                      className="font-semibold text-primary-700 hover:text-primary-800"
                    >
                      {siteConfig.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-secondary-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-secondary-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-secondary-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(512) 555-0000"
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-secondary-700 mb-2"
                      >
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project — approximate square footage, type of work needed, timeline, etc."
                      className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto rounded-lg bg-primary-700 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting…' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="rounded-2xl bg-secondary-50 p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-secondary-900 mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a
                      href={`${siteConfig.phoneHref}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors">
                        <Phone className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary-900">Phone</p>
                        <p className="text-sm text-secondary-600">{siteConfig.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors">
                        <Mail className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary-900">Email</p>
                        <p className="text-sm text-secondary-600">{siteConfig.email}</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                        <MapPin className="h-5 w-5 text-primary-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary-900">Address</p>
                        <p className="text-sm text-secondary-600">
                          {siteConfig.address.street}
                          <br />
                          {siteConfig.address.city}, {siteConfig.address.state}{' '}
                          {siteConfig.address.zip}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div className="rounded-2xl bg-secondary-50 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Clock className="h-5 w-5 text-primary-700" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-secondary-900">
                    Business Hours
                  </h3>
                </div>
                <ul className="space-y-3">
                  {businessHours.map((item) => (
                    <li
                      key={item.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="font-medium text-secondary-700">{item.day}</span>
                      <span className="text-secondary-600">{item.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-secondary-500">
                  Emergency stucco repair available 24/7. Call{' '}
                  <a
                    href={`${siteConfig.phoneHref}`}
                    className="font-medium text-primary-700 hover:text-primary-800"
                  >
                    {siteConfig.phone}
                  </a>{' '}
                  for urgent needs.
                </p>
              </div>

              {/* Google Maps */}
              <div className="rounded-2xl bg-secondary-50 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <MapPin className="h-5 w-5 text-primary-700" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-secondary-900">
                    Find Us
                  </h3>
                </div>
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.9494052241766!2d-97.83642312443878!3d30.23851927482644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4bbb1c3d56d1%3A0x6489b539a0e11ca1!2sStar%20Stucco%20of%20Austin!5e0!3m2!1sen!2sus!4v1783551506725!5m2!1sen!2sus"
                    width="600"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Star Stucco of Austin location on Google Maps"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
