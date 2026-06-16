import { Link } from 'react-router-dom'
import { CircleCheck as CheckCircle, ChevronRight, Phone, TriangleAlert as AlertTriangle, Droplets, Wrench, Search, Shield, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

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
        text: 'Stucco repair costs in Austin typically range from $300–$600 for minor crack patching to $1,500–$5,000+ for larger sections with water damage or structural issues. The final price depends on the size of the damaged area, the type of repair needed, accessibility of the wall, and whether any underlying substrate must be replaced. We provide free on-site estimates so you know exactly what to expect before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does stucco repair take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential stucco repairs in Austin are completed in one to two days. Simple crack filling and texture matching can often be done in a single visit. Larger repairs involving water damage remediation, substrate replacement, or multi-coat stucco rebuilding may take two to three days to allow proper curing time between coats. We always confirm the timeline with you upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can stucco be repaired or does it need to be replaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases, stucco can be repaired rather than fully replaced. Isolated cracks, small holes, limited water damage, and texture mismatches are all repairable. Full replacement is only warranted when widespread delamination, extensive moisture intrusion behind the stucco, or complete lath failure has affected large sections of an exterior wall. Our diagnostic inspection will tell you definitively which option is appropriate for your home.',
      },
    },
    {
      '@type': 'Question',
      name: "What causes stucco to crack in Austin's climate?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Austin's expansive clay soils are the primary culprit. When rain saturates the ground, clay swells and lifts; during drought, it shrinks and drops — creating constant foundation movement that stresses stucco walls. Compounding this is Austin's extreme heat: south- and west-facing walls regularly hit 140°F+ surface temperatures, causing repeated thermal expansion and contraction that widens hairline cracks over time. Improper flashing installation, missing control joints, and aging lath systems are additional contributing factors.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free stucco repair estimates in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide free on-site stucco repair estimates throughout Austin and the surrounding area, including Travis County, Williamson County, Hays County, and beyond. Call us at (512) 706-9699 or fill out our online form and we will schedule a visit at your convenience.',
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
      'Stucco repair costs in Austin typically range from $300–$600 for minor crack patching to $1,500–$5,000+ for larger sections with water damage or structural issues. The final price depends on the size of the damaged area, the type of repair needed, accessibility of the wall, and whether any underlying substrate must be replaced. We provide free on-site estimates so you know exactly what to expect before any work begins.',
  },
  {
    question: 'How long does stucco repair take?',
    answer:
      'Most residential stucco repairs in Austin are completed in one to two days. Simple crack filling and texture matching can often be done in a single visit. Larger repairs involving water damage remediation, substrate replacement, or multi-coat stucco rebuilding may take two to three days to allow proper curing time between coats. We always confirm the timeline with you upfront.',
  },
  {
    question: 'Can stucco be repaired or does it need to be replaced?',
    answer:
      'In most cases, stucco can be repaired rather than fully replaced. Isolated cracks, small holes, limited water damage, and texture mismatches are all repairable. Full replacement is only warranted when widespread delamination, extensive moisture intrusion behind the stucco, or complete lath failure has affected large sections of an exterior wall. Our diagnostic inspection will tell you definitively which option is appropriate for your home.',
  },
  {
    question: "What causes stucco to crack in Austin's climate?",
    answer:
      "Austin's expansive clay soils are the primary culprit. When rain saturates the ground, clay swells and lifts; during drought, it shrinks and drops — creating constant foundation movement that stresses stucco walls. Compounding this is Austin's extreme heat: south- and west-facing walls regularly hit 140°F+ surface temperatures, causing repeated thermal expansion and contraction that widens hairline cracks over time. Improper flashing installation, missing control joints, and aging lath systems are additional contributing factors.",
  },
  {
    question: 'Do you offer free stucco repair estimates in Austin?',
    answer:
      'Yes. We provide free on-site stucco repair estimates throughout Austin and the surrounding area, including Travis County, Williamson County, Hays County, and beyond. Call us at (512) 706-9699 or fill out our online form and we will schedule a visit at your convenience.',
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
      {open && (
        <p className="pb-5 text-secondary-600 leading-relaxed">{answer}</p>
      )}
    </div>
  )
}

export default function StuccoRepair() {
  return (
    <>
      <SEO
        title="Austin Stucco Repair | Crack, Water Damage & Patch Experts | Star Stucco"
        description="Professional stucco repair in Austin, TX. We fix cracks, water damage, holes & texture mismatches. Fast turnaround, free estimates. Call (512) 706-9699."
        path="/austin-stucco-repair"
        schema={[schema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=1600&fm=webp"
            alt="Stucco repair work on an Austin home exterior"
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
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
            Stucco Repair in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            Cracks, water damage, and structural failures fixed right the first time. Star Stucco's Austin repair team addresses the root cause so your stucco stays solid for years — not just weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco of Austin for a free stucco repair estimate"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20"
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
                Our crack repairs go beyond surface filling. We remove all compromised material, address any structural issues behind the stucco, and rebuild using materials matched to your existing finish. The result is a seamless, invisible repair.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800&fm=webp"
                alt="Stucco crack repair on an Austin home"
                className="rounded-2xl shadow-lg mb-8"
                loading="lazy"
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
            Our water damage repair process starts with moisture testing and source identification. We won't patch over wet stucco — all affected material is removed, the substrate is allowed to dry completely, any rot or corrosion is addressed, new lath and building paper are installed, and we rebuild the stucco system from scratch. We also correct the source of intrusion so the problem doesn't return.
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
            We offer maintenance programs for Austin homeowners who want to stay ahead of damage. Our technicians inspect your full exterior, document any developing issues, and address them before they require significant repair. This is particularly valuable for homes in high-movement areas like Circle C Ranch, Rollingwood, and other neighborhoods built on heavy clay soils.
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
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
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
