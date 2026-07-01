import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ChevronDown, Phone, Building2, HardHat, Clock, FileCheck, Shield, Wrench } from 'lucide-react'
import SEO from '../../components/SEO'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'
import { ServiceLocationLinks } from '../../components/ServiceLocationLinks'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Stucco Contractor Austin, TX',
  provider: {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Austin',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Travis County, TX' },
  },
  description:
    "Austin's trusted commercial stucco contractor. We handle new construction, exterior finishing, repairs & EIFS for commercial properties. Free estimates.",
  serviceType: 'Commercial Stucco',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of commercial properties do you stucco in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work on all types of commercial properties in the Austin metro including office buildings, retail centers, restaurants, apartment complexes, HOA-managed communities, medical facilities, and mixed-use developments. Our commercial crews are equipped for projects ranging from small storefronts to large multi-story buildings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with general contractors on new construction projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We regularly partner with general contractors, developers, and architects on new commercial construction throughout Austin and surrounding counties. We integrate our work into the overall construction schedule, provide required documentation for inspections, and offer bonding for public and large-scale projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you repair commercial stucco without disrupting tenants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We offer phased work schedules and off-hours crews specifically for occupied commercial properties. Whether it is a retail center, apartment complex, or office building, we plan the work to minimize disruption and keep your business and tenants operational throughout the project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you install EIFS on commercial buildings in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. EIFS (Exterior Insulation and Finish Systems) is one of our core commercial services. We are certified applicators for major EIFS manufacturers including Sto Corp, Senergy/BASF, Master Wall, Dryvit, and Parex LaHabra. EIFS is popular for commercial buildings because it provides excellent insulation, design flexibility, and long-term weather resistance.',
      },
    },
  ],
}

const projectTypes = [
  {
    icon: Building2,
    title: 'Multi-Family & HOA Properties',
    desc: 'Apartment complexes, condominiums, HOA communities, and mixed-use developments. We coordinate with property managers and GCs to meet construction timelines on large-scale residential projects.',
  },
  {
    icon: HardHat,
    title: 'Retail Centers & Restaurants',
    desc: 'Storefronts, shopping centers, and restaurant exteriors that need to look polished and withstand heavy-use environments from The Domain to South Congress Avenue.',
  },
  {
    icon: FileCheck,
    title: 'Office & Medical Buildings',
    desc: 'Professional-grade stucco systems for office buildings, medical facilities, and corporate campuses throughout the Austin metro and surrounding business corridors.',
  },
  {
    icon: Clock,
    title: 'Renovation & Re-Stucco',
    desc: 'Complete exterior re-stucco for aging commercial properties. We work after hours and in phases to minimize disruption to your tenants and business operations.',
  },
  {
    icon: Shield,
    title: 'New Construction Stucco',
    desc: 'Full three-coat and one-coat stucco systems for new commercial builds. IBC compliant, coordinated with your GC, and delivered on schedule.',
  },
  {
    icon: Wrench,
    title: 'Commercial Stucco Repair',
    desc: 'Targeted stucco repair for occupied commercial properties — cracks, water damage, impact damage, and texture restoration for individual sections or entire building exteriors.',
  },
]

const capabilities = [
  'Projects from 5,000 to 500,000+ square feet',
  'Full compliance with IBC and Austin commercial building codes',
  'EIFS (Exterior Insulation and Finish Systems) installation',
  'Scaffolding and multi-story access for buildings up to 10 stories',
  'Phased scheduling to keep businesses operational during work',
  'Coordination with GCs, architects, and building inspectors',
  'Performance and payment bonding for public and large-scale projects',
  'Detailed project documentation and progress reporting',
]

const faqs = [
  {
    question: 'What types of commercial properties do you stucco in Austin?',
    answer:
      'We work on all types of commercial properties in the Austin metro including office buildings, retail centers, restaurants, apartment complexes, HOA-managed communities, medical facilities, and mixed-use developments. Our commercial crews are equipped for projects ranging from small storefronts to large multi-story buildings.',
  },
  {
    question: 'Do you work with general contractors on new construction projects?',
    answer:
      'Yes. We regularly partner with general contractors, developers, and architects on new commercial construction throughout Austin and surrounding counties. We integrate our work into the overall construction schedule, provide required documentation for inspections, and offer bonding for public and large-scale projects.',
  },
  {
    question: 'Can you repair commercial stucco without disrupting tenants?',
    answer:
      'Absolutely. We offer phased work schedules and off-hours crews specifically for occupied commercial properties. Whether it is a retail center, apartment complex, or office building, we plan the work to minimize disruption and keep your business and tenants operational throughout the project.',
  },
  {
    question: 'Do you install EIFS on commercial buildings in Austin?',
    answer:
      'Yes. EIFS (Exterior Insulation and Finish Systems) is one of our core commercial services. We are certified applicators for major EIFS manufacturers including Sto Corp, Senergy/BASF, Master Wall, Dryvit, and Parex LaHabra. EIFS is popular for commercial buildings because it provides excellent insulation, design flexibility, and long-term weather resistance.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-secondary-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-secondary-900 pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="pb-5 text-secondary-600 leading-relaxed">{answer}</p>}
    </div>
  )
}

export default function CommercialStucco() {
  return (
    <>
      <SEO
        title="Commercial Stucco Contractor Austin TX | New Construction & Repair"
        description="Austin's trusted commercial stucco contractor. We handle new construction, exterior finishing, repairs & EIFS for commercial properties. Free estimates. Call (512) 706-9699."
        path="/austin-commercial-stucco"
        schema={[schema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/commercial-building-hero.webp"
            alt="Commercial stucco building in Austin, Texas"
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-secondary-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="text-sm text-secondary-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-400">Commercial Stucco</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Commercial Stucco Services in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            From multi-family developments at The Domain to retail build-outs on South Congress,
            Star Stucco delivers large-scale commercial stucco — new construction, repair, EIFS,
            and exterior finishing — backed by decades of experience and full bonding capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco of Austin for a commercial stucco estimate"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (512) 706-9699
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400 hover:bg-secondary-800"
            >
              Request a Commercial Bid <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Commercial Stucco Services We Provide
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            We partner with general contractors, property developers, and building owners on
            projects of every scale across the Austin metro area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-8 shadow-sm border border-secondary-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-5">
                  <item.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Construction Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Commercial New Construction Stucco in Austin
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Austin's commercial construction market continues to expand at a remarkable pace. New mixed-use developments are reshaping corridors along The Domain, Downtown Austin, the East Riverside corridor, and South Congress Avenue. These projects demand stucco contractors who can mobilize large crews, maintain consistent quality across tens of thousands of square feet, and meet aggressive construction schedules without compromising workmanship.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Star Stucco has the capacity and experience to handle projects ranging from neighborhood retail centers to high-rise mixed-use towers. Our commercial division maintains dedicated crews trained in both traditional three-coat stucco and EIFS systems. We coordinate directly with project managers and superintendents to integrate our work into the overall construction schedule.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                All new construction stucco is installed in full compliance with the International Building Code and local Austin building requirements. We provide detailed documentation and attend inspections alongside your GC to keep the project on track.
              </p>
            </div>
            <div>
              <img
                src="/images/commercial-building-hero.webp"
                alt="Commercial building with professional stucco exterior in Austin"
                className="rounded-2xl shadow-lg mb-8"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="rounded-xl bg-white border border-secondary-200 p-6">
                <h3 className="font-display text-lg font-bold text-secondary-900 mb-4">
                  Our Commercial Capabilities
                </h3>
                <ul className="space-y-3">
                  {capabilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-secondary-700">
                      <ChevronRight className="h-5 w-5 shrink-0 text-primary-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Repair Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Commercial Stucco Repair in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Aging stucco on occupied commercial buildings requires a different approach than residential repair. Retailers, office tenants, and apartment residents cannot simply vacate while repairs take place. Our commercial repair crews are experienced at working around business hours, coordinating access with property managers, and completing work in sections to minimize disruption.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Common commercial stucco issues we address include: facade cracking from building settlement and thermal movement, water intrusion at window and door perimeters, failed EIFS seams and coatings, delamination on multi-story buildings, and impact damage on ground-level retail surfaces.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            We provide detailed written repair assessments for property owners and HOA boards, with photos and scope-of-work documentation suitable for budget planning and board approval. We also work directly with commercial property insurance adjusters when storm or hail damage is involved.
          </p>
        </div>
      </section>

      {/* EIFS Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            EIFS Systems for Austin Commercial Buildings
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            EIFS — Exterior Insulation and Finish Systems — is the most energy-efficient exterior cladding option for commercial buildings in Central Texas. By incorporating a continuous insulation layer beneath the finish coat, EIFS dramatically reduces thermal bridging and energy costs, which matters considerably in Austin's climate where buildings can face sustained 100°F+ temperatures for months at a time.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Star Stucco is a certified applicator for the industry's leading EIFS manufacturers: Sto Corp, Senergy/BASF, Master Wall, Dryvit, and Parex LaHabra. Each system has distinct performance characteristics, and we help project teams select the right system for their building type, climate zone, and design requirements.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            EIFS also offers design flexibility unavailable with traditional stucco: profiles, reveals, trim elements, and radius forms can all be incorporated into the system. This makes it popular for contemporary commercial architecture across Austin's growing business corridors.
          </p>
        </div>
      </section>

      {/* Property Management Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Services for Property Managers &amp; HOAs in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Property management companies and HOA boards have unique needs when it comes to exterior stucco maintenance. Multiple units, multiple stakeholders, budget cycles, and occupied residents all add complexity that a residential-only contractor isn't equipped to handle. Star Stucco has been a preferred vendor for Austin-area property managers and HOA boards since 2013.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We provide annual inspection programs, priority scheduling for urgent repairs, and written assessments formatted for HOA board presentations. For large-scale re-stucco projects on apartment complexes or townhome communities, we develop phased work plans that rotate through the property building by building while residents remain in place.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Our team understands the documentation and COI requirements that property management companies require from vendors, and we carry the insurance coverage and bonding that HOA covenants and commercial lease agreements typically mandate.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Commercial Stucco FAQ
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            Common questions from Austin property owners and commercial contractors.
          </p>
          <div className="rounded-2xl bg-white border border-secondary-200 px-6 sm:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4">
            Commercial Stucco Across the Austin Metro
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-10">
            We serve commercial properties throughout Austin and the surrounding communities,
            from downtown high-rises to suburban retail developments.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Downtown Austin', 'The Domain', 'South Congress', 'East Riverside', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Lakeway', 'Kyle'].map((area) => (
              <span
                key={area}
                className="rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-medium text-secondary-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'EIFS / Synthetic Stucco', path: '/eifs-contractor-austin', desc: 'Commercial EIFS installation and repair for offices, retail, and multifamily buildings.' },
          { label: 'Stucco Remediation', path: '/austin-stucco-remediation', desc: 'Moisture and water-damage remediation for commercial properties and HOAs.' },
          { label: 'Stucco Installation', path: '/austin-stucco-installation', desc: 'Large-scale new stucco installation across the Austin metro.' },
        ]}
      />

      <ServiceLocationLinks serviceSlug="commercial-stucco" serviceName="Commercial Stucco" />

      {/* CTA Section */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Partner with Austin's Commercial Stucco Experts
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Whether you are a general contractor bidding a new development or a property owner
            planning a building refresh, Star Stucco delivers commercial-grade results on
            schedule and on budget. Contact us for a detailed project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco of Austin for a commercial stucco estimate"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (512) 706-9699
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-secondary-400"
            >
              Request a Commercial Bid <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
