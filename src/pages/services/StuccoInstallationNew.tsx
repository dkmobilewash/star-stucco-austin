import { Link } from 'react-router-dom'
import { ChevronRight, Phone, Layers, Sun, Shield, Hammer, CircleCheck as CheckCircle } from 'lucide-react'
import SEO from '../../components/SEO'
import { FAQSection, faqPageSchema, type FAQ } from '../../components/FAQ'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'

const faqs: FAQ[] = [
  {
    question: 'How much does stucco installation cost in Austin?',
    answer:
      'Stucco installation in Austin typically costs between $7 and $12 per square foot for a standard three-coat system, depending on the substrate, wall height, accessibility, and chosen finish. One-coat systems may run slightly less, while EIFS installations are generally in the $10–$16 range due to the added insulation layer. For an average 2,000-square-foot home exterior, total costs often fall between $14,000 and $24,000. We provide detailed free estimates so you know exactly what to expect.',
  },
  {
    question: 'How long does stucco installation take?',
    answer:
      'A full stucco installation on a typical Austin home takes between two and four weeks, depending on the size of the project and the system used. Three-coat stucco requires curing time between each layer — usually 24 to 48 hours per coat — which extends the timeline compared to one-coat systems. Weather conditions, particularly Austin\'s summer heat, can also affect scheduling since extreme temperatures require adjusted curing procedures.',
  },
  {
    question: "Is stucco good for Austin's climate?",
    answer:
      "Stucco is an excellent choice for Austin's climate when installed correctly. It handles heat well, provides a degree of thermal mass that helps regulate interior temperatures, and resists fire — a meaningful benefit during Texas drought seasons. The key is proper installation: a well-built stucco system with appropriate moisture barriers, control joints, and flashing details will perform reliably through Austin's intense UV exposure, heavy spring rains, and soil movement.",
  },
  {
    question: "What's the difference between one-coat and three-coat stucco?",
    answer:
      'Three-coat stucco is the traditional system consisting of a scratch coat, brown coat, and finish coat applied over metal lath. It produces a thick, extremely durable shell and is ideal for masonry and concrete substrates. One-coat stucco uses a single base layer of fiber-reinforced Portland cement applied over lath, followed by a finish coat. It installs faster and costs less, and performs well over wood-framed walls with proper moisture management. Both systems are widely used in Austin — the right choice depends on your substrate, budget, and performance goals.',
  },
  {
    question: 'Do you handle new construction and re-stucco?',
    answer:
      'Yes. We install stucco on new construction projects — from custom homes in Westlake to multi-unit developments in East Austin — as well as re-stucco existing homes that need a complete exterior replacement. Re-stucco involves stripping the old system down to the substrate, inspecting and repairing the framing and sheathing, and installing a brand-new stucco system from scratch. Call us at (512) 706-9699 to discuss your project.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Installation Austin, TX',
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
    'Professional stucco installation for Austin homes & businesses. New construction, re-stucco & full exterior systems. Call (512) 706-9699 for a free estimate.',
}

const stuccoSystems = [
  {
    icon: Layers,
    title: 'Three-Coat Stucco',
    desc: 'The traditional system — scratch coat, brown coat, and finish coat over metal lath. Maximum durability and thickness for long-lasting Austin exteriors.',
  },
  {
    icon: Hammer,
    title: 'One-Coat Stucco',
    desc: 'A fiber-reinforced base coat over lath with a finish coat on top. Faster installation, lower cost, and excellent performance on wood-framed walls.',
  },
  {
    icon: Shield,
    title: 'EIFS (Synthetic Stucco)',
    desc: 'Exterior Insulation and Finish System — a lightweight system with built-in insulation that boosts energy efficiency and design flexibility.',
  },
]

export default function StuccoInstallationNew() {
  return (
    <>
      <SEO
        title="Stucco Installation in Austin, TX | Star Stucco of Austin"
        description="Professional stucco installation for Austin homes & businesses. New construction, re-stucco & full exterior systems. Call (512) 706-9699 for a free estimate."
        path="/stucco-installation-austin-tx"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-installation-hero.webp"
            alt="Professional stucco installation on an Austin home"
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
            <span className="text-primary-400">Stucco Installation</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Expert Stucco Installation in Austin, TX
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              From new construction to complete re-stucco projects, Star Stucco of Austin delivers professional stucco installation systems engineered to handle Central Texas heat, soil movement, and driving rain — built right the first time.
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

      {/* Stucco Systems */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Stucco Systems We Install in Austin
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            We work with every major stucco system. The right choice depends on your substrate, budget, and the performance characteristics your project demands.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stuccoSystems.map((item) => (
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

      {/* Installation Process */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Our Stucco Installation Process
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                A stucco installation is only as good as the preparation behind it. Every project we take on in Austin begins with a thorough assessment of the substrate — whether that is concrete masonry, wood framing with sheathing, or an existing cladding that needs to be removed. We evaluate moisture management, structural readiness, and flashing details before any stucco material is mixed.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Substrate preparation is the foundation of a long-lasting stucco exterior. For wood-framed walls, we install two layers of weather-resistive barrier (WRB) — typically Grade D building paper or a modern synthetic housewrap — followed by self-furred metal lath fastened with corrosion-resistant fasteners. Proper lath installation ensures the stucco keys into the mesh and creates a mechanical bond that holds the system to the wall for decades.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Control joints and flashing are critical in Austin's climate. Expansive clay soils cause subtle but persistent building movement, and without proper control joints, that movement will crack the stucco. We install weep screeds at the base of every wall, casing beads at all terminations, and control joints at intervals recommended by the Stucco Manufacturers Association.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Once the substrate is ready, we apply the stucco coats according to the system specifications. For three-coat installations, the scratch coat is scored to provide a bonding surface, the brown coat levels the wall, and the finish coat delivers the final texture and color. Each coat must cure properly — and in Austin's summer heat, that means careful timing, moist curing, and sometimes shading the work area to prevent rapid moisture loss that weakens the final product.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-installation-process.webp"
                alt="Stucco installation process on an Austin home"
                className="rounded-2xl shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Austin Climate Considerations */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Why Proper Installation Matters in Austin's Climate
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Austin's climate is uniquely demanding on exterior cladding systems. Summer surface temperatures on south- and west-facing walls regularly exceed 140 degrees Fahrenheit, while spring storms can deliver several inches of rain in a matter of hours. The region's heavy clay soils — particularly prevalent in neighborhoods like Circle C Ranch, Avery Ranch, and along the Balcones Escarpment — expand and contract with moisture changes, causing persistent foundation and wall movement.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            These conditions make installation quality the single most important factor in how long a stucco exterior lasts. Improperly installed moisture barriers allow water intrusion that leads to <Link to="/austin-stucco-repair" className="text-primary-700 hover:text-primary-800 font-medium">costly stucco repairs</Link> and even full remediation. Missing or poorly placed control joints result in cracking within the first few years. Incorrect curing — rushing the process in Texas heat — produces a weaker, more porous stucco that deteriorates prematurely.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            At Star Stucco of Austin, we design every installation to account for these local conditions. We use elastomeric-compatible base coats where appropriate, specify UV-stable pigments and finishes, and ensure drainage planes function correctly behind the stucco system. Our installations are built to perform in Austin — not just look good on completion day.
          </p>
        </div>
      </section>

      {/* New Construction vs Re-Stucco */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            New Construction & Re-Stucco Services
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We work with Austin homebuilders, general contractors, and homeowners on both new construction and re-stucco projects. For new builds, we coordinate with the framing and weatherproofing trades to ensure the wall system is ready for stucco from the start — avoiding the rework and delays that happen when stucco contractors inherit poorly prepared substrates.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Re-stucco projects involve removing the existing stucco system entirely, inspecting the underlying framing and sheathing for moisture damage or deterioration, making all necessary repairs, and installing a completely new stucco system. This is the right approach when the existing stucco has widespread failure — multiple areas of delamination, persistent moisture intrusion, or damage too extensive for <Link to="/stucco-recoat-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">re-coating</Link> or spot repairs to address.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Whether you are building a custom home in Barton Creek, adding stucco to a remodel in Travis Heights, or replacing failing stucco on a home in Pflugerville, our team has the experience to deliver a finished product that performs for decades. We handle every <Link to="/austin-stucco-finishing" className="text-primary-700 hover:text-primary-800 font-medium">stucco finish and texture</Link> — from smooth contemporary to traditional dash and Santa Barbara.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        subtitle="Common questions about stucco installation in Austin answered by our team."
      />

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'Stucco Repair', path: '/austin-stucco-repair', desc: 'Professional repair for cracks, water damage, and structural stucco failures across Austin.' },
          { label: 'Stucco Finishing & Textures', path: '/austin-stucco-finishing', desc: 'Custom stucco finishes and texture matching for Austin homes.' },
          { label: 'Exterior Stucco Contractor', path: '/exterior-stucco-austin-tx', desc: 'Full-service exterior stucco solutions for Austin homes and businesses.' },
          { label: 'Stucco Re-Coat', path: '/stucco-recoat-austin-tx', desc: 'Refresh your stucco with a professional re-coat or color coat.' },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free Stucco Installation Estimate
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Ready to install stucco on your Austin home or business? Contact Star Stucco for a free on-site estimate. Call us at (512) 706-9699 or schedule online.
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
