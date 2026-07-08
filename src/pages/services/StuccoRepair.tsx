import { Link } from 'react-router-dom'
import { CircleCheck as CheckCircle, ChevronRight, Phone, TriangleAlert as AlertTriangle, Droplets, Wrench, Search, Shield, ChevronDown, Star, MapPin, FileText } from 'lucide-react'
import { useState } from 'react'
import SEO from '../../components/SEO'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'
import { ServiceLocationLinks } from '../../components/ServiceLocationLinks'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Repair Austin, TX',
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
    'Professional stucco repair in Austin, TX. We fix cracks, water damage, holes & texture mismatches. Fast turnaround, free estimates.',
  serviceType: 'Stucco Repair',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does stucco repair cost in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stucco repair in Austin typically ranges from $150–$400 for small cracks and isolated damage, up to $800–$2,000+ for larger sections. Factors include the extent of damage, texture matching complexity, and accessibility. We provide free on-site estimates so you get an accurate number before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does stucco repair take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most residential stucco repairs in Austin are completed in one day. Larger repairs or those requiring multiple coats may take 2–3 days, including drying time between coats. We'll give you a clear timeline before we start.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you match my existing stucco texture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Texture matching is one of our specialties. We carry a wide range of textures including sand finish, dash, lace, and smooth coat, and we mix custom colors on-site to blend with your existing stucco as closely as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free stucco repair estimates in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer free on-site estimates for all stucco repair projects in Austin and the surrounding areas including Cedar Park, Round Rock, Pflugerville, and Westlake Hills.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes stucco cracks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common causes are foundation settling, thermal expansion and contraction (especially in Austin's climate), moisture intrusion, and improper original installation. Small hairline cracks are normal; wider cracks or cracks with moisture staining should be addressed promptly to prevent water damage.",
      },
    },
  ],
}

const repairTypes = [
  {
    icon: AlertTriangle,
    title: 'Crack Repair',
    desc: 'Hairline cracks, stair-step fractures, and stress cracks caused by soil settlement and thermal cycling common across Austin properties.',
  },
  {
    icon: Droplets,
    title: 'Water Damage Repair',
    desc: 'Remediation of bubbling, staining, delamination, and mold caused by moisture intrusion from failed flashings and drainage issues.',
  },
  {
    icon: Wrench,
    title: 'Patch & Texture Matching',
    desc: 'Seamless patch repairs that match your existing stucco texture and color so repairs are invisible against the surrounding wall.',
  },
  {
    icon: Search,
    title: 'Stucco Hole Repair',
    desc: 'Full-depth repair of holes from impacts, penetrations, or removed fixtures — rebuilt from lath to finish coat.',
  },
  {
    icon: Shield,
    title: 'Structural Repair',
    desc: 'Large-scale repair of sections compromised by foundation movement, widespread delamination, or deteriorated substrate systems.',
  },
  {
    icon: CheckCircle,
    title: 'Preventative Maintenance',
    desc: 'Proactive sealing, caulking, and treatment programs that stop small vulnerabilities from becoming costly repairs.',
  },
]

const commonIssues = [
  'Hairline cracks from seasonal thermal expansion and contraction',
  "Foundation-related cracking due to Austin's expansive clay soils",
  'Water staining and efflorescence from improper drainage',
  'Delamination and bubbling caused by trapped moisture',
  'Impact damage from hail storms and falling tree limbs',
  'Crumbling or deteriorated stucco on older Austin homes',
]

const faqs = [
  {
    question: 'How much does stucco repair cost in Austin?',
    answer:
      'Stucco repair in Austin typically ranges from $150–$400 for small cracks and isolated damage, up to $800–$2,000+ for larger sections. Factors include the extent of damage, texture matching complexity, and accessibility. We provide free on-site estimates so you get an accurate number before any work begins.',
  },
  {
    question: 'How long does stucco repair take?',
    answer:
      "Most residential stucco repairs in Austin are completed in one day. Larger repairs or those requiring multiple coats may take 2–3 days, including drying time between coats. We'll give you a clear timeline before we start.",
  },
  {
    question: 'Can you match my existing stucco texture?',
    answer:
      'Yes. Texture matching is one of our specialties. We carry a wide range of textures including sand finish, dash, lace, and smooth coat, and we mix custom colors on-site to blend with your existing stucco as closely as possible.',
  },
  {
    question: 'Do you offer free stucco repair estimates in Austin?',
    answer:
      'Yes, we offer free on-site estimates for all stucco repair projects in Austin and the surrounding areas including Cedar Park, Round Rock, Pflugerville, and Westlake Hills.',
  },
  {
    question: 'What causes stucco cracks?',
    answer:
      "The most common causes are foundation settling, thermal expansion and contraction (especially in Austin's climate), moisture intrusion, and improper original installation. Small hairline cracks are normal; wider cracks or cracks with moisture staining should be addressed promptly to prevent water damage.",
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
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-secondary-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function StuccoRepair() {
  return (
    <>
      <SEO
        title="Stucco Repair Austin, TX | Star Stucco | Free Estimates"
        description="Expert stucco crack & damage repair in Austin. Texture matching, waterproofing, HOA-approved work. 35+ 5-star reviews. Get your free estimate today."
        path="/austin-stucco-repair"
        schema={[schema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-repair-hero.webp"
            alt="Stucco repair work on an Austin home exterior"
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
            <span className="text-primary-400">Stucco Repair</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Expert Stucco Repair in Austin, TX — Free Estimates
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            Cracks, water damage, and structural failures fixed right the first time. Star Stucco's Austin repair team addresses the root cause so your stucco stays solid for years — not just weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco of Austin for a free stucco repair estimate"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (512) 706-9699
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400 hover:bg-secondary-800"
            >
              Get a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-b border-secondary-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <span className="text-sm font-medium text-secondary-700">35+ Five-Star Google Reviews</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Shield className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-medium text-secondary-700">Licensed &amp; Insured</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <FileText className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-medium text-secondary-700">Free Estimates</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <MapPin className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-medium text-secondary-700">Serving Austin &amp; Surrounding Areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Austin Stucco Repair Services We Provide
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            Every repair starts with a thorough diagnosis. We identify why the damage occurred and fix the underlying problem — not just the visible symptoms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairTypes.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                  <item.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crack Repair Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Austin Stucco Crack Repair
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Austin sits on some of the most expansive clay soils in Texas. When heavy rains saturate the ground, clay swells and lifts; during long dry spells, it shrinks dramatically. This constant soil movement puts tremendous stress on foundations and exterior walls, driving cracks through stucco surfaces. Homes in East Austin, Circle C Ranch, and neighborhoods along the Balcones Fault zone are especially prone to this type of damage.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Thermal cycling is the second major culprit. Austin summers regularly push past 100°F, and south- and west-facing stucco walls absorb intense heat loads. Over time, the repeated expansion and contraction weakens the stucco bond, creating hairline cracks that widen if left untreated. Water enters these openings and accelerates the damage cycle significantly.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Our crack repairs go beyond surface filling. We remove all compromised material, address any structural issues behind the stucco, and rebuild using materials matched to your existing <Link to="/austin-stucco-finishing" className="text-primary-700 underline hover:text-primary-900 transition-colors">stucco finish</Link>. The result is a seamless, invisible repair.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-repair-closeup.webp"
                alt="Stucco crack repair on an Austin home"
                className="rounded-2xl shadow-lg mb-8"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="rounded-xl bg-white border border-secondary-200 p-6">
                <h3 className="font-display text-lg font-bold text-secondary-900 mb-4">
                  Common Austin Stucco Problems We Fix
                </h3>
                <ul className="space-y-3">
                  {commonIssues.map((issue) => (
                    <li key={issue} className="flex gap-3 text-sm text-secondary-700">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary-600" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Damage Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Water Damage Repair in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Water is stucco's biggest enemy. When moisture breaches the exterior through cracks, failed flashings, or missing caulk, it becomes trapped behind the stucco layer. In Austin's climate — where spring storms can dump inches of rain in hours followed by weeks of intense heat — trapped moisture causes rapid deterioration including mold growth, delamination, wood rot, and metal lath corrosion.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Signs you may have water damage behind your stucco include: dark staining that reappears after painting, bubbling or soft spots when you press on the wall, white crystalline deposits (efflorescence), or a musty smell near exterior walls. None of these should be ignored — the longer moisture stays trapped, the more expensive the eventual repair becomes.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Our water damage repair process starts with moisture testing and source identification. We won't patch over wet stucco — all affected material is removed, the substrate is allowed to dry completely, any rot or corrosion is addressed, new lath and building paper are installed, and we rebuild the <Link to="/austin-stucco-installation" className="text-primary-700 underline hover:text-primary-900 transition-colors">stucco system</Link> from scratch. We also correct the source of intrusion so the problem doesn't return.
          </p>
        </div>
      </section>

      {/* Patch & Texture Matching Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Patch &amp; Texture Matching in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            A poorly matched patch is often more noticeable than the original damage. Getting the texture and color right requires experience, the right materials, and an understanding of how existing stucco has weathered over time. Our Austin team has matched hundreds of unique stucco textures — from classic dash and Santa Barbara finishes to smooth contemporary and hand-applied custom patterns common in Westlake Hills and Tarrytown homes.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            We use the same coatings and application techniques as your original installation wherever possible, and we allow all coats to cure fully before applying paint or sealant. The goal is always a repair that's invisible to anyone who wasn't there to see the damage.
          </p>
        </div>
      </section>

      {/* Preventative Maintenance Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Preventative Stucco Maintenance for Austin Homes
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            The most cost-effective stucco repair is the one you never need. Annual inspections and minor maintenance — fresh caulking at penetrations and control joints, sealant application to micro-cracks before they open up, and ensuring proper grade and drainage away from the foundation — can add years to a stucco exterior with minimal cost.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            We offer maintenance programs for Austin homeowners and <Link to="/austin-commercial-stucco" className="text-primary-700 underline hover:text-primary-900 transition-colors">commercial property</Link> owners who want to stay ahead of damage. Our technicians inspect your full exterior, document any developing issues, and address them before they require significant repair. This is particularly valuable for homes in high-movement areas like Circle C Ranch, Rollingwood, and other neighborhoods built on heavy clay soils.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            Common questions about Austin stucco repair answered by our team.
          </p>
          <div className="rounded-2xl bg-white border border-secondary-200 px-6 sm:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4">
            Stucco Repair Throughout Austin, TX
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-10">
            Soil conditions and building ages vary across Austin, and so do repair needs. Our team understands the specific challenges in every part of town.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['East Austin', 'Circle C Ranch', 'South Congress', 'Barton Hills', 'Hyde Park', 'Tarrytown', 'Westlake Hills', 'Mueller', 'Travis Heights', 'Pflugerville', 'Round Rock', 'Cedar Park'].map((area) => (
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
          { label: 'Stucco Remediation', path: '/austin-stucco-remediation', desc: 'When moisture has gotten behind the stucco, remediation fixes the root cause — not just the surface.' },
          { label: 'Stucco Crack Repair Guide', path: '/blog/stucco-crack-repair-austin', desc: 'Why stucco cracks in Austin, which cracks are serious, and how they are properly repaired.' },
          { label: 'Stucco Repair Cost Guide', path: '/blog/stucco-repair-cost-austin', desc: 'What stucco repair costs in Austin by repair type — and what drives the price.' },
        ]}
      />

      <ServiceLocationLinks serviceSlug="stucco-repair" serviceName="Stucco Repair" />

      {/* CTA Section */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't Let Stucco Damage Get Worse
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Small cracks become big problems when Austin's next heavy rain arrives. Contact Star Stucco for a free inspection and repair estimate before minor damage turns into a costly restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco of Austin for a free stucco repair estimate"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (512) 706-9699
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-secondary-400"
            >
              Schedule a Free Inspection <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
