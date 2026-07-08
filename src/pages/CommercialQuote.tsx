import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, CheckCircle, Shield, Clock, Award, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'
import { supabase } from '../lib/supabase'

const commercialServices = [
  'New Construction Stucco',
  'Commercial Stucco Repair',
  'EIFS / Exterior Insulation',
  'Stucco Finishing / Re-Stucco',
  'Interior Plaster',
  'Thin Stone Veneer',
  'Inspection / Consultation',
  'Other',
]

const projectTypes = [
  'Office Building',
  'Retail / Shopping Center',
  'Restaurant',
  'Medical / Healthcare',
  'Multifamily / Apartment',
  'Warehouse / Industrial',
  'Institutional / Government',
  'Mixed-Use Development',
  'Other',
]

export default function CommercialQuote() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    squareFootage: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const { error: dbError } = await supabase.from('commercial_quotes').insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: `Company: ${formData.company}\nProject Type: ${formData.projectType}\nApprox. Sq Ft: ${formData.squareFootage}\nTimeline: ${formData.timeline}\n\n${formData.message}`,
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
        title="Commercial Stucco Quote Austin, TX | Star Stucco of Austin"
        description="Request a free commercial stucco quote from Star Stucco of Austin. New construction, EIFS, stucco repair, and finishing for offices, retail, multifamily, and more across Central Texas."
        path="/request-commercial-quote"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Request a Commercial Stucco Quote',
          description: 'Request a free commercial stucco quote from Star Stucco of Austin.',
          url: `${siteConfig.url}/request-commercial-quote`,
          isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
        }}
      />

      {/* Hero */}
      <section className="bg-secondary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Commercial Services
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Request a Commercial Stucco Quote
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Star Stucco of Austin is a commercial stucco contractor serving
              Austin, TX and Central Texas. From new construction to repairs and
              EIFS, our in-house crew handles projects of any scale.
            </p>
          </div>
        </div>
      </section>

      {/* Why Commercial Clients Choose Us */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm border border-secondary-100">
              <CheckCircle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-secondary-900 text-sm">9,000+ Projects</h3>
                <p className="text-xs text-secondary-600">Completed across Central Texas</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm border border-secondary-100">
              <Shield className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-secondary-900 text-sm">Fully Insured</h3>
                <p className="text-xs text-secondary-600">Liability & workers' comp coverage</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm border border-secondary-100">
              <Clock className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-secondary-900 text-sm">Since 2013</h3>
                <p className="text-xs text-secondary-600">13 years of commercial experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm border border-secondary-100">
              <Award className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-secondary-900 text-sm">Certified Applicators</h3>
                <p className="text-xs text-secondary-600">Sto, Dryvit, Senergy, Parex, Master Wall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-secondary-900 mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-secondary-600 mb-8">
                Fill out the form below and we'll respond with a detailed quote
                within 1–2 business days.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-primary-50 border border-primary-200 p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary-700" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-secondary-900 mb-2">
                    Quote Request Received
                  </h3>
                  <p className="text-secondary-600">
                    We've received your commercial quote request and will get back to
                    you within 1–2 business days. For immediate assistance, call{' '}
                    <a
                      href={`tel:${siteConfig.phone}`}
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
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Contact Name *
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
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="ABC Construction"
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(512) 555-0000"
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
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
                        {commercialServices.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-secondary-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="squareFootage" className="block text-sm font-medium text-secondary-700 mb-2">
                        Approximate Square Footage
                      </label>
                      <input
                        type="text"
                        id="squareFootage"
                        name="squareFootage"
                        value={formData.squareFootage}
                        onChange={handleChange}
                        placeholder="e.g. 5,000 sq ft"
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-secondary-700 mb-2">
                        Desired Timeline
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g. Q3 2026"
                        className="w-full rounded-lg border border-secondary-300 px-4 py-3 text-sm text-secondary-900 placeholder-secondary-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the project — scope of work, building type, any architectural specs, existing conditions, etc."
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
                    {submitting ? 'Submitting...' : 'Request Commercial Quote'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-secondary-50 p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-secondary-900 mb-6">
                  Commercial Services
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Commercial Stucco', path: '/austin-commercial-stucco' },
                    { name: 'EIFS', path: '/eifs-contractor-austin' },
                    { name: 'Stucco Repair', path: '/austin-stucco-repair' },
                    { name: 'Interior Plaster', path: '/austin-stucco-finishing' },
                    { name: 'Thin Stone Veneer', path: '/austin-thin-stone-veneer' },
                  ].map((s) => (
                    <li key={s.name}>
                      <Link
                        to={s.path}
                        className="flex items-center gap-2 text-sm font-medium text-secondary-700 hover:text-primary-700 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-primary-600" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-secondary-50 p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-secondary-900 mb-4">
                  Prefer to Call?
                </h3>
                <p className="text-sm text-secondary-600 mb-4">
                  Reach us directly to discuss your commercial stucco project.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  aria-label={`Call Star Stucco at ${siteConfig.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors">
                    <Phone className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary-900">{siteConfig.phone}</p>
                    <p className="text-xs text-secondary-500">Available 24/7</p>
                  </div>
                </a>
              </div>

              <div className="rounded-2xl bg-secondary-50 p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-secondary-900 mb-4">
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {['Sto Corp', 'Dryvit', 'Senergy/BASF', 'Parex', 'Master Wall'].map((brand) => (
                    <li key={brand} className="flex items-center gap-2 text-sm text-secondary-700">
                      <CheckCircle className="h-4 w-4 text-primary-600 shrink-0" />
                      {brand} Certified
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
