import { Link } from 'react-router-dom'
import {
  CircleCheck as CheckCircle,
  ChevronRight,
  Phone,
  Droplets,
  Search,
  Wrench,
  ShieldCheck,
  TriangleAlert as AlertTriangle,
  CloudRain,
} from 'lucide-react'
import SEO from '../../components/SEO'
import { FAQSection, faqPageSchema, type FAQ } from '../../components/FAQ'
import { siteConfig } from '../../lib/siteConfig'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Remediation Austin, TX',
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
    'Professional stucco remediation in Austin, TX. We diagnose and fix moisture intrusion, water damage, and failed stucco systems down to the substrate. Free estimates.',
  serviceType: 'Stucco Remediation',
}

const faqs: FAQ[] = [
  {
    question: 'What is stucco remediation?',
    answer:
      'Stucco remediation is the process of correcting the underlying cause of stucco failure — usually moisture intrusion — rather than just patching the surface. It involves identifying where water is getting in, removing all damaged stucco and any rotted substrate, repairing the wall structure and weather barrier, and rebuilding the stucco system correctly so the problem does not return. It is more comprehensive than a standard repair.',
  },
  {
    question: 'How is stucco remediation different from stucco repair?',
    answer:
      'A stucco repair fixes visible damage like a crack or hole. Stucco remediation addresses the root cause when moisture has penetrated behind the stucco and damaged the sheathing, framing, or insulation. Remediation includes moisture testing, removing affected materials down to sound substrate, correcting the water entry point, and reinstalling the system. If water has reached the wall behind your stucco, remediation — not a surface patch — is what is needed.',
  },
  {
    question: 'How much does stucco remediation cost in Austin?',
    answer:
      'Stucco remediation in Austin typically ranges from about $1,500 to $5,000 per affected section, and more for whole-wall or multi-area projects, depending on how far moisture has spread and whether sheathing or framing must be replaced. Because the cost is driven by hidden damage, we always perform a moisture assessment before quoting. Free on-site estimates are available.',
  },
  {
    question: 'What are the signs my stucco has moisture damage?',
    answer:
      'Common signs include dark staining that returns after painting, soft or spongy spots when you press on the wall, bubbling or cracking finish, white crystalline deposits (efflorescence), a musty smell near exterior walls, and water stains on interior walls or ceilings near the exterior. Any of these warrants a professional moisture inspection before the damage spreads.',
  },
  {
    question: 'Do you offer free stucco remediation estimates in Austin?',
    answer:
      'Yes. Star Stucco of Austin provides free on-site stucco remediation estimates throughout Austin and the surrounding area, including Round Rock, Cedar Park, Georgetown, Westlake, and Lakeway. We will assess the extent of moisture damage and give you a clear written estimate before any work begins.',
  },
]

const signs = [
  {
    icon: Droplets,
    title: 'Staining & Discoloration',
    desc: 'Dark streaks or stains that reappear after painting indicate water is moving through or behind the stucco.',
  },
  {
    icon: AlertTriangle,
    title: 'Soft or Spongy Spots',
    desc: 'Areas that give when pressed signal that moisture has reached and weakened the substrate behind the stucco.',
  },
  {
    icon: CloudRain,
    title: 'Bubbling & Delamination',
    desc: 'Finish that bubbles, blisters, or separates from the wall is a classic sign of trapped moisture.',
  },
  {
    icon: Search,
    title: 'Efflorescence',
    desc: 'White, chalky crystalline deposits on the surface mean water is migrating through the stucco and evaporating.',
  },
]

const process = [
  {
    title: 'Moisture Inspection & Testing',
    desc: 'We use moisture meters and probes to map the full extent of water intrusion — including hidden damage behind the surface — before any work begins.',
  },
  {
    title: 'Source Identification',
    desc: 'We find exactly where water is entering: failed flashing, cracked sealant, missing kick-out diverters, window and door details, or roofline transitions.',
  },
  {
    title: 'Removal of Damaged Material',
    desc: 'All compromised stucco, lath, building paper, and any rotted sheathing or framing are removed back to sound, dry material.',
  },
  {
    title: 'Substrate & Structural Repair',
    desc: 'We replace damaged sheathing and address any framing rot, then allow the wall assembly to dry completely.',
  },
  {
    title: 'Weather Barrier & Flashing Correction',
    desc: 'A new weather-resistant barrier and proper flashing details are installed to fix the original cause of the intrusion.',
  },
  {
    title: 'Stucco System Rebuild',
    desc: 'The stucco system is reinstalled per spec — lath, scratch, brown, and finish coats — and the finish is color- and texture-matched to the surrounding wall.',
  },
  {
    title: 'Sealing & Final Inspection',
    desc: 'All joints and penetrations are sealed, and we walk the completed remediation with you to confirm the problem is resolved.',
  },
]

const causes = [
  'Failed or missing sealant at windows, doors, and penetrations',
  'Improper or missing kick-out and step flashing at rooflines',
  'Cracks from foundation movement on Austin’s expansive clay soils',
  'Inadequate weep screed or drainage at the foundation line',
  'Original installation defects in barrier-style stucco or EIFS',
  'Roof, gutter, and downspout issues directing water onto walls',
]

export default function StuccoRemediation() {
  return (
    <>
      <SEO
        title="Stucco Remediation Austin TX | Damage Repair | Star Stucco"
        description="Expert stucco remediation in Austin, TX. We find and fix moisture intrusion and water damage down to the substrate — not just the surface. Free estimates."
        path="/austin-stucco-remediation"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-repair-hero.webp"
            alt="Stucco remediation in progress on an Austin home exterior"
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
            <span className="text-primary-400">Stucco Remediation</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Stucco Remediation in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            When moisture gets behind your stucco, patching the surface only hides the problem. Star
            Stucco of Austin provides true stucco remediation — we find the source of water intrusion,
            remove all damaged material down to sound substrate, fix the underlying cause, and rebuild
            the system so it lasts. Free on-site moisture assessments throughout the Austin metro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              Get a Free Assessment <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:+15127069699"
              aria-label={`Call Star Stucco of Austin at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400 hover:bg-secondary-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What is remediation */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            What Is Stucco Remediation?
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Stucco remediation is the complete correction of a failing stucco system — not a cosmetic
            patch. When water penetrates behind stucco through cracks, failed sealant, or improper
            flashing, it becomes trapped against the substrate, leading to rot, mold, and structural
            damage that a surface repair will never solve. Remediation diagnoses where the water is
            getting in, removes everything that has been compromised, fixes the root cause, and rebuilds
            the wall correctly.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            In Austin&rsquo;s climate — expansive clay soils that move foundations, intense heat, and
            heavy spring storms — trapped moisture deteriorates walls quickly. If you suspect water
            damage, the worst thing to do is paint or patch over it. Learn more about typical pricing in
            our{' '}
            <Link to="/blog/stucco-repair-cost-austin" className="text-primary-700 underline hover:text-primary-900 transition-colors">
              Austin stucco repair cost guide
            </Link>
            , or compare with our standard{' '}
            <Link to="/austin-stucco-repair" className="text-primary-700 underline hover:text-primary-900 transition-colors">
              stucco repair services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Signs */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Signs Your Stucco Needs Remediation
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            Moisture damage gives warning signs before it becomes a structural problem. If you notice any
            of these, schedule an inspection right away.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {signs.map((item) => (
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

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Our Stucco Remediation Process
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            A thorough, root-cause process that resolves moisture problems for good.
          </p>
          <ol className="space-y-6">
            {process.map((step, i) => (
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

      {/* Causes */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Common Causes of Stucco Moisture Damage in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-6">
            Most stucco moisture problems trace back to a handful of failure points. Our remediation
            always corrects the cause, not just the symptom:
          </p>
          <ul className="space-y-3">
            {causes.map((cause) => (
              <li key={cause} className="flex gap-3 text-secondary-700">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                <span className="leading-relaxed">{cause}</span>
              </li>
            ))}
          </ul>
          <p className="text-secondary-600 leading-relaxed mt-6">
            If your home or building has synthetic stucco, see our{' '}
            <Link to="/eifs-contractor-austin" className="text-primary-700 underline hover:text-primary-900 transition-colors">
              EIFS contractor
            </Link>{' '}
            services for moisture remediation specific to EIFS systems.
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                <Search className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Real Moisture Testing</h3>
              <p className="text-sm text-secondary-600 leading-relaxed">We never cover up wet stucco — every project starts with a documented moisture assessment.</p>
            </div>
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                <Wrench className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Root-Cause Repairs</h3>
              <p className="text-sm text-secondary-600 leading-relaxed">We fix the source of intrusion so the damage does not come back after the next storm.</p>
            </div>
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary-700" />
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">Warranty-Backed Work</h3>
              <p className="text-sm text-secondary-600 leading-relaxed">Licensed, insured, and warrantied remediation across the Austin metro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} subtitle="Common questions about stucco remediation in Austin, answered by our team." />

      {/* CTA */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Stop Stucco Water Damage Before It Spreads
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Trapped moisture only gets worse — and more expensive — with time. Contact Star Stucco of
            Austin for a free moisture assessment and remediation estimate. As your local{' '}
            <Link to="/" className="text-primary-400 underline hover:text-primary-300">Austin stucco contractor</Link>,
            we&rsquo;ll find the problem and fix it right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Request a Free Assessment
            </Link>
            <a
              href="tel:+15127069699"
              aria-label={`Call Star Stucco of Austin at ${siteConfig.phone}`}
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
