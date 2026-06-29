import { Link } from 'react-router-dom'
import { ChevronRight, Phone, Search, Droplets, ShieldCheck, ClipboardList, Home, CircleCheck as CheckCircle } from 'lucide-react'
import SEO from '../../components/SEO'
import { FAQSection, faqPageSchema, type FAQ } from '../../components/FAQ'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'

const faqs: FAQ[] = [
  {
    question: 'How much does a stucco inspection cost in Austin?',
    answer:
      'A standard visual stucco inspection in Austin typically costs between $200 and $500, depending on the size of the home and the number of stories. Invasive or probe testing — where small holes are drilled to check for moisture behind the stucco — generally runs $500 to $1,500 depending on the number of test locations. We provide clear pricing upfront and a detailed written report with every inspection.',
  },
  {
    question: 'When should I get my stucco inspected?',
    answer:
      'We recommend a professional stucco inspection in several situations: before purchasing a stucco home (as part of your due diligence), if you notice cracks, staining, or bubbling on your exterior, after significant storm damage (hail, high winds, or flooding), if your stucco is more than 10-15 years old and has never been inspected, or if you see signs of moisture inside your home near exterior walls. Annual visual self-inspections are also a good practice between professional assessments.',
  },
  {
    question: 'What does a stucco inspection include?',
    answer:
      'Our stucco inspections include a comprehensive visual examination of all stucco surfaces for cracks, staining, efflorescence, delamination, and surface deterioration. We check all flashings, caulk joints, weep screeds, and control joints. We assess drainage and grading at the base of stucco walls. For a more thorough assessment, invasive probe testing measures moisture levels behind the stucco at strategic locations. Every inspection concludes with a detailed written report including photographs, findings, and recommended actions.',
  },
  {
    question: 'Can a stucco inspection prevent costly repairs?',
    answer:
      'Absolutely. Stucco inspections are one of the most cost-effective investments a homeowner can make. Catching moisture intrusion early — before it causes wood rot, mold, or widespread delamination — can save thousands of dollars in repair costs. A $300-$500 inspection that identifies a failing flashing or unsealed penetration can prevent a $5,000-$15,000 remediation project down the road. Early detection is especially important in Austin where heavy spring rains can rapidly accelerate moisture-related damage.',
  },
  {
    question: 'Do I need a stucco inspection before buying a home?',
    answer:
      'We strongly recommend a stucco inspection for any home purchase where stucco is the primary exterior cladding. General home inspectors typically assess stucco only at a surface level and may miss signs of moisture intrusion, improper flashing, or early-stage delamination that a stucco specialist will catch. In Austin, where soil movement and thermal cycling create unique stress on stucco systems, a specialized inspection provides valuable peace of mind and negotiating leverage if issues are found.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Inspection Austin, TX',
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://stuccoaustin.com/#localbusiness',
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
    'Comprehensive stucco inspections for Austin homeowners. Identify moisture, cracks & hidden damage before costly repairs. Call (512) 706-9699 to schedule.',
}

const inspectionSteps = [
  {
    icon: Search,
    title: 'Visual Examination',
    desc: 'Thorough visual inspection of all stucco surfaces, checking for cracks, staining, efflorescence, bubbling, delamination, and surface wear.',
  },
  {
    icon: Droplets,
    title: 'Moisture Assessment',
    desc: 'Non-invasive and invasive moisture testing to detect water intrusion behind the stucco that is invisible from the exterior surface.',
  },
  {
    icon: ShieldCheck,
    title: 'Flashing & Detail Review',
    desc: 'Inspection of all flashings, caulk joints, weep screeds, control joints, and penetrations — the most common sources of stucco failure.',
  },
  {
    icon: ClipboardList,
    title: 'Detailed Report',
    desc: 'A comprehensive written report with photographs, findings, severity assessments, and specific repair recommendations with priority levels.',
  },
]

const commonFindings = [
  'Moisture intrusion behind stucco from failed window flashings',
  'Hairline and structural cracking from foundation movement',
  'Efflorescence indicating water migration through the stucco',
  'Delamination where stucco has separated from the lath system',
  'Missing or deteriorated caulk at penetrations and transitions',
  'Improper grade or drainage directing water against stucco walls',
  'Blocked or missing weep screeds preventing proper wall drainage',
  'Mold or wood rot behind stucco in moisture-compromised areas',
]

export default function StuccoInspection() {
  return (
    <>
      <SEO
        title="Stucco Inspection Austin, TX | Star Stucco of Austin"
        description="Comprehensive stucco inspections for Austin homeowners. Identify moisture, cracks & hidden damage before costly repairs. Call (512) 706-9699 to schedule."
        path="/stucco-inspection-austin-tx"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-damage-signs.webp"
            alt="Stucco inspection identifying damage on an Austin home"
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 to-secondary-900/95" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="flex items-center gap-2 text-sm text-secondary-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/austin-stucco-services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-400">Stucco Inspection</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Professional Stucco Inspection in Austin, TX
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              Hidden moisture, concealed cracks, and failing flashings can cause thousands in damage before you see a single warning sign. A professional stucco inspection from Star Stucco of Austin identifies problems early — before they become expensive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
              >
                Get a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="tel:+15127069699"
                aria-label="Call Star Stucco at (512) 706-9699"
                className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400"
              >
                <Phone className="mr-2 h-4 w-4" />(512) 706-9699
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            What Our Stucco Inspection Includes
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            Our inspections go far beyond what a general home inspector covers. We examine every component of your stucco system to identify current damage and potential vulnerabilities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspectionSteps.map((item) => (
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

      {/* Why Austin Homes Need Inspections */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Why Austin Homes Need Stucco Inspections
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Austin's climate creates a uniquely challenging environment for stucco exteriors. The region's expansive clay soils — particularly prevalent in neighborhoods along the Balcones Escarpment, in Circle C Ranch, and throughout much of South and Southwest Austin — swell during wet periods and shrink during drought. This constant soil movement stresses foundations and exterior walls, creating crack patterns in stucco that can allow moisture to enter the wall system.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Thermal cycling compounds the problem. Austin summers push outdoor temperatures well past 100 degrees Fahrenheit, while south- and west-facing walls can reach surface temperatures exceeding 150 degrees. This repeated heating and cooling causes expansion and contraction that widens cracks over time. Heavy spring rains then drive water into these openings, where it becomes trapped behind the stucco layer.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                The insidious aspect of moisture intrusion is that damage can progress for months or even years before becoming visible from the outside. By the time you see staining, bubbling, or soft spots on the stucco surface, there may already be significant wood rot, mold growth, or corroded lath behind the wall. A professional inspection catches these issues early — often when they are still simple and inexpensive to <Link to="/austin-stucco-repair" className="text-primary-700 hover:text-primary-800 font-medium">repair</Link>.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-repair-closeup.webp"
                alt="Close-up stucco inspection revealing hidden damage"
                className="rounded-2xl shadow-lg mb-8"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="rounded-xl bg-white border border-secondary-200 p-6">
                <h3 className="font-display text-lg font-bold text-secondary-900 mb-4">
                  Common Issues Found During Inspections
                </h3>
                <ul className="space-y-3">
                  {commonFindings.map((finding) => (
                    <li key={finding} className="flex gap-3 text-sm text-secondary-700">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary-600" />
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual vs Invasive Testing */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Visual Inspection vs. Invasive Probe Testing
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We offer two levels of stucco inspection depending on your needs and concerns. A visual inspection is a thorough external examination of all stucco surfaces, flashings, caulk joints, weep screeds, and control joints. It identifies visible damage, notes areas of concern, and assesses the overall condition of the stucco system. This is appropriate for routine maintenance assessments and initial evaluations.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Invasive probe testing goes deeper. Small holes — typically 3/16 inch in diameter — are drilled through the stucco at strategic locations, particularly around windows, doors, roof-to-wall transitions, and any areas where visual inspection raises concerns. A moisture meter probe is inserted to measure moisture content in the substrate behind the stucco. Elevated moisture readings indicate water intrusion that is invisible from the exterior.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We strongly recommend invasive testing in several situations: when purchasing a stucco home (especially homes built between 1995 and 2010 when building code enforcement for moisture barriers was inconsistent), when you see exterior staining or efflorescence, when interior walls near exterior surfaces show signs of moisture, or when previous repairs have been made and you want to verify the problem was fully resolved.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            All test holes are patched and sealed as part of the inspection — there is no lasting damage to your stucco. The small cost of invasive testing can prevent the much larger cost of discovering hidden moisture damage after you have already purchased a home or delayed a repair.
          </p>
        </div>
      </section>

      {/* When to Get Inspected */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            When to Schedule a Stucco Inspection
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            <strong className="text-secondary-900">Before buying a home:</strong> A pre-purchase stucco inspection is one of the smartest investments a buyer can make. General home inspectors are not stucco specialists — they may note visible cracks but typically cannot assess moisture intrusion, flashing integrity, or lath condition. A dedicated stucco inspection gives you a clear picture of the exterior's condition and can provide valuable negotiating leverage if issues are found.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            <strong className="text-secondary-900">After storm damage:</strong> Austin's severe thunderstorms, hail events, and occasional high winds can damage stucco in ways that are not immediately obvious. Impact damage from hail may crack the surface without visible displacement, creating entry points for moisture. Post-storm inspections identify this damage early so it can be addressed through <Link to="/austin-stucco-repair" className="text-primary-700 hover:text-primary-800 font-medium">timely repair</Link> before the next rain event compounds the problem.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            <strong className="text-secondary-900">Aging stucco:</strong> If your stucco is 10 to 15 years old or older and has never been professionally inspected, now is the time. Original flashings and caulk joints have a finite lifespan, and even well-installed stucco systems develop vulnerabilities as components age. An inspection identifies what needs attention now and what to watch going forward — allowing you to budget for maintenance rather than react to emergencies.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            <strong className="text-secondary-900">Visible warning signs:</strong> Staining that reappears after cleaning, white crystalline deposits (efflorescence), bubbling or soft spots, musty smells near exterior walls, or cracks that have widened over time all warrant immediate professional inspection. These symptoms often indicate active moisture intrusion that will cause progressively more damage — and higher <Link to="/austin-stucco-remediation" className="text-primary-700 hover:text-primary-800 font-medium">remediation</Link> costs — if left unaddressed.
          </p>
        </div>
      </section>

      {/* Our Reporting */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Our Inspection Process & Reporting
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Every Star Stucco inspection follows a systematic process designed to evaluate every component of your stucco system. We begin by walking the full perimeter of the building, documenting the overall condition of the stucco and noting any areas of immediate concern. We then conduct a detailed examination of every elevation, checking flashings at windows, doors, roof lines, and utility penetrations.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We inspect weep screeds, control joints, and caulk joints — the details that general inspectors often overlook but that are frequently the source of stucco failures in Austin. We check drainage and grading at the base of every wall and note any conditions that direct water toward rather than away from the stucco system.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Our final report includes clear photographs of every finding, a severity assessment for each issue (cosmetic, moderate, or critical), specific repair recommendations, and priority levels so you know what needs immediate attention versus what can be monitored. For homebuyers, this report is a powerful tool for negotiating repairs or price adjustments with the seller. For existing homeowners, it serves as a maintenance roadmap that helps you protect your investment with targeted, cost-effective action.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        subtitle="Common questions about stucco inspections in Austin answered by our team."
      />

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'Stucco Repair', path: '/austin-stucco-repair', desc: 'Professional stucco repair for cracks, water damage, and structural failures across Austin.' },
          { label: 'Stucco Remediation', path: '/austin-stucco-remediation', desc: 'Full stucco remediation when moisture has compromised the wall system.' },
          { label: 'Exterior Stucco Contractor', path: '/exterior-stucco-austin-tx', desc: 'Comprehensive exterior stucco services for Austin homes and businesses.' },
          { label: 'Stucco Re-Coat', path: '/stucco-recoat-austin-tx', desc: 'Refresh faded or aging stucco with a professional re-coat or color coat.' },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free Stucco Inspection Estimate
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Do not wait for visible damage to tell you something is wrong. Schedule a professional stucco inspection with Star Stucco of Austin. Call (512) 706-9699 or request a quote online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 hover:shadow-lg"
            >
              Schedule Your Estimate
            </Link>
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco at (512) 706-9699"
              className="inline-flex items-center justify-center rounded-lg border border-primary-400 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white"
            >
              <Phone className="mr-2 h-4 w-4" />(512) 706-9699
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
