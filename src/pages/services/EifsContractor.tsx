import { Link } from 'react-router-dom'
import {
  CircleCheck as CheckCircle,
  ChevronRight,
  Phone,
  Layers,
  Wrench,
  Droplets,
  Search,
  RefreshCw,
  Building2,
  PaintBucket,
  Shield,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'Round Rock' },
    { '@type': 'City', name: 'Cedar Park' },
    { '@type': 'City', name: 'Georgetown' },
    { '@type': 'City', name: 'Pflugerville' },
    { '@type': 'City', name: 'Westlake' },
  ],
  description:
    'Licensed EIFS contractor serving Austin and Central Texas. Specializing in EIFS installation, repair, replacement, and synthetic stucco systems.',
  priceRange: '$$',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'EIFS Installation and Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
  },
  areaServed: {
    '@type': 'City',
    name: 'Austin',
    containedInPlace: {
      '@type': 'State',
      name: 'Texas',
    },
  },
  description:
    'Professional EIFS (Exterior Insulation and Finish Systems) installation, repair, inspection, and replacement for residential and commercial properties in Austin, TX.',
}

const faqs = [
  {
    question: 'What is EIFS?',
    answer:
      'EIFS stands for Exterior Insulation and Finish System. It is a multi-layer cladding system applied to the outside of a building that provides insulation, weather resistance, and a decorative finish. EIFS is sometimes called synthetic stucco because it looks similar to traditional stucco but is made of different materials, including a foam insulation board, a base coat with fiberglass mesh, and a textured acrylic finish coat.',
  },
  {
    question: 'How is EIFS different from traditional stucco?',
    answer:
      'Traditional stucco is a hard cement-based finish applied directly over a wire lath or masonry substrate. EIFS is a layered system that includes a foam insulation board, which provides significantly better energy efficiency. EIFS is lighter, more flexible, and offers better insulation values (R-values) than traditional stucco. However, EIFS requires specialized installation and repair — not every stucco contractor is qualified to work on it.',
  },
  {
    question: 'How much does EIFS repair cost in Austin?',
    answer:
      'EIFS repair costs in Austin typically range from $8 to $30 per square foot depending on the extent of the damage, accessibility, and whether moisture intrusion has affected the substrate behind the EIFS. Minor crack repairs are on the lower end; full remediation involving water damage and substrate replacement are on the higher end. We offer free on-site estimates for all EIFS repair projects.',
  },
  {
    question: 'Can EIFS be repaired or does it need to be replaced?',
    answer:
      'In most cases, EIFS can be repaired rather than fully replaced. Cracks, impact damage, and localized failures are typically repairable by a qualified EIFS contractor. However, if moisture has penetrated behind the EIFS and damaged the sheathing, a larger section — or full replacement — may be necessary. A proper EIFS inspection will determine which approach is needed.',
  },
  {
    question: 'Do you install Dryvit EIFS systems?',
    answer:
      'Yes. Star Stucco of Austin works with Dryvit, Parex, Sto, and other major EIFS manufacturer systems. We can repair existing systems from any manufacturer and install new EIFS systems using the manufacturer’s specifications.',
  },
  {
    question: 'Is EIFS good for the Austin climate?',
    answer:
      'Yes. EIFS performs well in the Austin climate. Its continuous insulation layer helps reduce heat transfer, which lowers cooling costs during hot Texas summers. Its flexibility also helps it handle the temperature cycling and UV exposure common in Central Texas better than some rigid cladding systems.',
  },
  {
    question: 'How long does EIFS last?',
    answer:
      'Properly installed and maintained EIFS can last 30 to 50 years or more. The finish coat may need repainting every 10 to 15 years depending on sun exposure and environmental conditions. Regular inspection every 2 to 3 years is recommended to catch small cracks before they allow moisture infiltration.',
  },
  {
    question: 'Do you offer free EIFS estimates in Austin?',
    answer:
      'Yes. Star Stucco of Austin offers free on-site EIFS estimates throughout Austin and the surrounding areas including Round Rock, Cedar Park, Georgetown, Pflugerville, Westlake, and Lakeway. Call us or fill out our contact form to schedule your free estimate.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const eifsLayers = [
  {
    title: 'Substrate',
    desc: 'The wall sheathing (typically glass mat gypsum or exterior gypsum board).',
  },
  {
    title: 'Adhesive or Mechanical Attachment',
    desc: 'Secures the insulation board to the substrate.',
  },
  {
    title: 'Expanded Polystyrene (EPS) Insulation Board',
    desc: 'The core insulation layer, available in varying thicknesses.',
  },
  {
    title: 'Base Coat',
    desc: 'A polymer-modified cement applied over the insulation, embedding a fiberglass reinforcing mesh.',
  },
  {
    title: 'Finish Coat',
    desc: 'An acrylic-based textured finish coat available in hundreds of colors and textures.',
  },
]

const services = [
  {
    icon: Layers,
    title: 'EIFS Installation',
    desc: 'New EIFS application for residential and commercial properties. We install complete EIFS wall systems per manufacturer specifications including Dryvit, Parex, Sto, and Master Wall.',
  },
  {
    icon: Wrench,
    title: 'EIFS Repair',
    desc: 'Crack repair, impact damage repair, and finish coat restoration. We match existing textures and colors for seamless repairs.',
  },
  {
    icon: Droplets,
    title: 'EIFS Moisture Remediation',
    desc: 'If water has penetrated your EIFS, we assess the extent of damage, remove and replace affected materials, address the moisture source, and reinstall the system correctly.',
  },
  {
    icon: Search,
    title: 'EIFS Inspection',
    desc: 'Pre-purchase inspections, warranty inspections, and annual maintenance inspections. We identify problem areas before they become expensive failures.',
  },
  {
    icon: RefreshCw,
    title: 'EIFS Replacement',
    desc: 'Full or partial EIFS replacement when repair is not sufficient. We can also transition an existing EIFS system to a different cladding type.',
  },
  {
    icon: PaintBucket,
    title: 'Dryvit Repair & Restoration',
    desc: 'Dryvit is one of the most common EIFS brands on Austin homes. We are experienced in Dryvit system repair, color matching, and restoration.',
  },
  {
    icon: Building2,
    title: 'Commercial EIFS',
    desc: 'Large-scale EIFS installation and repair for commercial buildings, retail centers, office buildings, and multifamily properties throughout Austin.',
  },
  {
    icon: Shield,
    title: 'EIFS Caulking & Sealant',
    desc: 'Proper joint sealants around windows, doors, and penetrations are critical to EIFS performance. We replace failed sealants and ensure all transitions are properly detailed.',
  },
]

const comparison = [
  ['Insulation', 'Continuous EPS foam board — high R-value', 'No built-in insulation'],
  ['Weight', 'Lightweight', 'Heavier (cement-based)'],
  ['Energy efficiency', 'Significantly better', 'Standard'],
  ['Flexibility', 'More flexible, handles movement', 'More rigid, more prone to cracking'],
  ['Repairability', 'Requires EIFS-qualified contractor', 'Most stucco contractors can repair'],
  ['Appearance', 'Nearly identical finish options', 'Traditional look'],
  ['Cost (new install)', 'Moderate to high', 'Moderate'],
  ['Lifespan (maintained)', '30–50+ years', '50+ years'],
  ['Best for', 'Energy-conscious builds, commercial, retrofit', 'Historic properties, masonry over'],
]

const commonProblems = [
  {
    title: 'Cracks at corners and penetrations',
    desc: 'The most common EIFS failure point. Occurs where the system meets windows, doors, outlets, and at inside/outside corners. Proper flashing and sealant detail prevents this; improper installation or sealant failure causes it.',
  },
  {
    title: 'Impact damage',
    desc: 'EIFS finish coats can be damaged by hail, lawn equipment, or physical impact. Repairs are straightforward but must use the correct base coat and matching finish.',
  },
  {
    title: 'Moisture intrusion and substrate damage',
    desc: 'When cracks or failed sealants allow water to reach the substrate, the damage extends beyond the EIFS itself. We perform full moisture assessments before any repair or replacement.',
  },
  {
    title: 'Delamination and bubbling',
    desc: 'When the EIFS layers separate from the substrate or from each other, typically caused by moisture, improper installation, or incompatible materials.',
  },
  {
    title: 'Finish coat fading and chalking',
    desc: 'The acrylic finish coat naturally weathers over time. Recoating with an elastomeric finish restores appearance and adds another waterproofing layer.',
  },
  {
    title: 'Failed caulk joints',
    desc: 'Sealant at all penetrations and transitions has a shorter lifespan than the EIFS itself. Failed caulk is the #1 entry point for water in EIFS systems.',
  },
]

const repairProcess = [
  {
    title: 'Free On-Site Inspection',
    desc: 'We visit your property, assess the full extent of the EIFS damage, probe for moisture where indicated, and provide a detailed written estimate.',
  },
  {
    title: 'Moisture Assessment',
    desc: 'Before any repair, we determine whether moisture has reached the substrate. This step prevents us from covering up hidden damage.',
  },
  {
    title: 'Damage Removal',
    desc: 'We remove the damaged EIFS layers — finish coat, base coat, mesh, and insulation board as needed — back to sound material.',
  },
  {
    title: 'Substrate Repair',
    desc: 'If the substrate (sheathing) has been damaged by moisture, we repair or replace it before reinstalling EIFS.',
  },
  {
    title: 'Insulation Board Installation',
    desc: 'New EPS insulation board is installed and properly adhered or mechanically fastened per manufacturer specification.',
  },
  {
    title: 'Base Coat and Mesh',
    desc: 'Polymer base coat is applied and the fiberglass reinforcing mesh is embedded while wet.',
  },
  {
    title: 'Finish Coat Application',
    desc: 'The finish coat is applied and textured to match the surrounding EIFS. Color matching is performed to ensure a seamless appearance.',
  },
  {
    title: 'Sealant and Flashing',
    desc: 'All penetrations, transitions, and joints are properly sealed with compatible sealant to prevent future water infiltration.',
  },
  {
    title: 'Final Inspection',
    desc: 'We walk through the completed repair with you before we leave.',
  },
]

const whyChoose = [
  'Licensed and insured in Texas',
  'Experience with all major EIFS manufacturers: Dryvit, Parex, Sto, Master Wall, Senergy',
  'Residential and commercial EIFS projects',
  'Free on-site estimates throughout Austin',
  'Color matching and texture matching for seamless repairs',
  'Warranty on all EIFS work',
  'Serving Austin, Round Rock, Cedar Park, Georgetown, Westlake, and surrounding Central Texas areas',
]

const serviceAreas = [
  'Austin, TX',
  'Round Rock, TX',
  'Cedar Park, TX',
  'Georgetown, TX',
  'Pflugerville, TX',
  'Westlake, TX',
  'Lakeway, TX',
  'Bee Cave, TX',
  'Dripping Springs, TX',
  'Kyle, TX',
  'Leander, TX',
  'Buda, TX',
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

export default function EifsContractor() {
  return (
    <>
      <SEO
        title="EIFS Contractor Austin, TX | Synthetic Stucco | Star Stucco of Austin"
        description="Austin's trusted EIFS contractor. Synthetic stucco installation, repair & replacement for homes & businesses. Call (512) 706-9699 for a free estimate."
        path="/eifs-contractor-austin"
        schema={[localBusinessSchema, serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/eifs-stucco-hero.webp"
            alt="EIFS contractor working on exterior wall in Austin TX"
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-secondary-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="text-sm text-secondary-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-400">EIFS Contractor Austin</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Trusted EIFS Contractor in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            Star Stucco of Austin is a licensed EIFS contractor serving Austin and the
            surrounding Texas Hill Country. We install, repair, inspect, and replace Exterior
            Insulation and Finish Systems (EIFS) — also called synthetic stucco — for residential and
            commercial properties throughout the Austin metro area. If your EIFS is cracking,
            separating, showing moisture damage, or needs a full installation, we provide free on-site
            estimates and guaranteed workmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              Get a Free EIFS Estimate <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:+15127069699"
              aria-label={`Call Star Stucco of Austin at ${siteConfig.phone} for a free EIFS estimate`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400 hover:bg-secondary-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What Is EIFS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                What Is EIFS (Synthetic Stucco)?
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                EIFS stands for Exterior Insulation and Finish System. It is a multi-layer exterior
                wall cladding system that provides insulation, moisture management, and a decorative
                finish — all in one integrated system.
              </p>
              <p className="text-secondary-700 font-semibold mb-4">
                An EIFS wall system typically consists of:
              </p>
              <ol className="space-y-4 mb-6">
                {eifsLayers.map((layer, i) => (
                  <li key={layer.title} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                      {i + 1}
                    </span>
                    <span className="text-secondary-600 leading-relaxed">
                      <strong className="text-secondary-900">{layer.title}</strong> — {layer.desc}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="text-secondary-600 leading-relaxed">
                EIFS is sometimes called "synthetic stucco" because the finish coat resembles
                traditional stucco, but the system is structurally and functionally different. EIFS
                offers significantly better energy efficiency than traditional stucco due to its
                continuous insulation layer. Learn more in our guide to{' '}
                <Link
                  to="/blog/what-is-eifs"
                  className="text-primary-700 underline hover:text-primary-900 transition-colors"
                >
                  what EIFS is and how it works
                </Link>
                .
              </p>
            </div>
            <div>
              <img
                src="/images/eifs-wall-system-diagram.svg"
                alt="Diagram showing the five layers of an EIFS wall system"
                className="rounded-2xl shadow-lg w-full"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            EIFS Services We Provide in Austin
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            From new installation to moisture remediation, our team handles every aspect of EIFS for
            Austin homes and commercial properties.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                  <item.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2">{item.title}</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <figure className="mt-12">
            <img
              src="/images/stucco-project-completed.webp"
              alt="Commercial multifamily building clad in EIFS in Austin, TX"
              className="w-full max-h-[28rem] object-cover rounded-2xl shadow-lg"
              loading="lazy"
              width={800}
              height={600}
            />
            <figcaption className="mt-3 text-center text-sm text-secondary-500">
              Commercial and multifamily EIFS installation in the Austin metro.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* EIFS vs Traditional Stucco */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4">
            EIFS vs. Traditional Stucco — Which Is Right for Your Project?
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-8 max-w-3xl">
            Many Austin homeowners and property managers aren't sure whether they have EIFS or
            traditional stucco, or which system makes more sense for their project. Here's a clear
            comparison:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-secondary-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-secondary-900 text-white">
                  <th className="px-5 py-4 font-semibold">Feature</th>
                  <th className="px-5 py-4 font-semibold">EIFS (Synthetic Stucco)</th>
                  <th className="px-5 py-4 font-semibold">Traditional Stucco</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-secondary-50'}
                  >
                    <td className="px-5 py-4 font-medium text-secondary-900">{row[0]}</td>
                    <td className="px-5 py-4 text-secondary-600">{row[1]}</td>
                    <td className="px-5 py-4 text-secondary-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-secondary-600 leading-relaxed mt-8 max-w-3xl">
            Both systems require qualified contractors for best results. If you're unsure which system
            you have or which is right for your project, call us for a free consultation — or read our
            full breakdown of{' '}
            <Link
              to="/blog/eifs-vs-traditional-stucco"
              className="text-primary-700 underline hover:text-primary-900 transition-colors"
            >
              EIFS vs. traditional stucco
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Common EIFS Problems */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4">
            Common EIFS Problems in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-10 max-w-3xl">
            Austin's climate — hot summers, occasional freeze events, and seasonal humidity
            cycles — creates specific stress patterns on EIFS. The most common EIFS problems we repair
            include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonProblems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100"
              >
                <h3 className="font-semibold text-secondary-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-secondary-600 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our EIFS Repair Process */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Our EIFS Repair Process
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            A proven, step-by-step process that fixes the root cause — not just the visible damage.
          </p>
          <img
            src="/images/stucco-repair-hero.webp"
            alt="EIFS installation in progress on a Austin home with scaffolding"
            className="rounded-2xl shadow-lg w-full mb-12"
            loading="lazy"
            width={800}
            height={600}
          />
          <ol className="space-y-6">
            {repairProcess.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-10 text-center">
            Why Choose Star Stucco for EIFS in Austin?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl bg-white p-5 shadow-sm border border-secondary-100"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                <span className="text-sm text-secondary-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            EIFS Frequently Asked Questions
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            Common questions about EIFS in Austin, answered by our team.
          </p>
          <div className="rounded-2xl bg-white border border-secondary-200 px-6 sm:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            EIFS Service Area — Austin and Surrounding Communities
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-10">
            Star Stucco of Austin provides EIFS installation and repair services throughout the greater
            Austin area, including:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {serviceAreas.map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm text-secondary-700">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary-600" />
                {area}
              </li>
            ))}
          </ul>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto">
            Not sure if we serve your area? Call us — we travel throughout Central Texas and the Hill Country for
            EIFS projects.
          </p>
        </div>
      </section>

      {/* Related Resources / Internal Links */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            EIFS Resources & Related Services
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            Learn more about EIFS and our other exterior services for Austin and Central Texas
            properties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Link
              to="/blog/what-is-eifs"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="font-display text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                What Is EIFS?
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">
                A complete guide for Austin homeowners on what EIFS is, how it works, and how to
                tell it apart from traditional stucco.
              </p>
            </Link>
            <Link
              to="/blog/eifs-vs-traditional-stucco"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="font-display text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                EIFS vs. Traditional Stucco
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">
                Cost, durability, energy efficiency, and repair — which exterior system is right for
                your Austin home?
              </p>
            </Link>
            <Link
              to="/blog/eifs-repair-austin"
              className="group rounded-2xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="font-display text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors">
                EIFS Repair in Austin
              </h3>
              <p className="text-sm text-secondary-600 leading-relaxed">
                Repair costs, common EIFS problems in Texas, and what a qualified EIFS contractor does
                during a repair.
              </p>
            </Link>
          </div>
          <p className="text-secondary-600 text-center max-w-3xl mx-auto leading-relaxed">
            We also provide expert{' '}
            <Link
              to="/austin-stucco-repair"
              className="text-primary-700 underline hover:text-primary-900 transition-colors"
            >
              stucco repair services
            </Link>{' '}
            and{' '}
            <Link
              to="/austin-commercial-stucco"
              className="text-primary-700 underline hover:text-primary-900 transition-colors"
            >
              commercial stucco
            </Link>{' '}
            across Central Texas. As your full-service{' '}
            <Link
              to="/"
              className="text-primary-700 underline hover:text-primary-900 transition-colors"
            >
              Austin stucco contractor
            </Link>
            , we're ready to help —{' '}
            <Link
              to="/contact"
              className="text-primary-700 underline hover:text-primary-900 transition-colors"
            >
              contact us for a free estimate
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get a Free EIFS Estimate in Austin
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Ready to fix your EIFS or start a new installation? Star Stucco of Austin provides free,
            no-obligation on-site estimates for all EIFS projects in Austin and the surrounding
            area. We'll assess your system, explain your options, and give you a clear written estimate
            — no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Request a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:+15127069699"
              aria-label={`Call Star Stucco of Austin at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-secondary-400"
            >
              <Phone className="mr-2 h-4 w-4" />
              Or call us at {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
