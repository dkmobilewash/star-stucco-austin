import { Link } from 'react-router-dom'
import { ChevronRight, Phone, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'
import { faqPageSchema, type FAQ } from '../../components/FAQ'

const faqs: FAQ[] = [
  {
    question: 'How long does stucco installation take?',
    answer:
      'A typical residential stucco installation in Austin takes two to four weeks depending on the size of the home, the stucco system used, and weather conditions. Three-coat systems require 24 to 48 hours of curing time between each coat, which extends the timeline compared to one-coat systems. We provide a detailed project schedule before work begins and keep you updated throughout the process.',
  },
  {
    question: "What type of stucco is best for Austin's climate?",
    answer:
      "For most Austin homes, a traditional three-coat stucco system provides the best long-term performance. The thick, multi-layer construction handles thermal cycling, UV exposure, and moisture better than thinner systems. For wood-framed walls where weight and cost are considerations, one-coat fiber-reinforced systems also perform well when installed with proper moisture management. EIFS is the best choice when energy efficiency is a top priority, as the built-in insulation significantly reduces cooling costs during Austin's long, hot summers.",
  },
  {
    question: 'Does new stucco add value to a home in Austin, TX?',
    answer:
      "Yes. Stucco is considered a premium exterior cladding in the Austin market, and a professionally installed stucco exterior can increase your home's value by 5-10% depending on the quality of work and the neighborhood. Stucco also has strong curb appeal in Austin's competitive real estate market, and its durability and low maintenance requirements are attractive to buyers. Homes with stucco exteriors in areas like Westlake, Barton Creek, and Tarrytown consistently command higher prices per square foot than comparable homes with other siding types.",
  },
  {
    question: 'What is the difference between 3-coat and one-coat stucco?',
    answer:
      'Three-coat stucco is the traditional system consisting of a scratch coat, brown coat, and finish coat applied over metal lath. It produces a thick, extremely durable shell and is ideal for masonry and concrete substrates. One-coat stucco uses a single base layer of fiber-reinforced Portland cement over lath, followed by a finish coat. It installs faster and costs less, and performs well on wood-framed walls with proper moisture management. Both systems are widely used in Austin — the right choice depends on your substrate, budget, and performance goals.',
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
    'Professional stucco installation for new construction and re-stucco projects in Austin, TX. Call (512) 706-9699 for a free estimate.',
  serviceType: 'Stucco Installation',
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-secondary-200 last:border-0">
      <h3>
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
      </h3>
      {open && (
        <p className="pb-5 text-secondary-600 leading-relaxed">{answer}</p>
      )}
    </div>
  )
}

export default function StuccoInstallation() {
  return (
    <>
      <SEO
        title="Residential Stucco Contractor in Austin, TX | Star Stucco of Austin"
        description="Expert residential stucco installation in Austin, TX. New construction & re-stucco for homes across Central Texas. Licensed & insured. Call (512) 706-9699 for a free estimate."
        path="/austin-stucco-installation"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-installation-hero.webp"
            alt="new stucco installation on Austin TX home by Star Stucco of Austin"
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-secondary-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="flex items-center gap-2 text-sm text-secondary-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/austin-stucco-services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-400">Stucco Installation</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Professional Stucco Installation in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            From new construction in Mueller to full re-stucco projects in Westlake Hills, Star Stucco delivers flawless installations engineered for the Central Texas climate — built right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              Get a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco at (512) 706-9699"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400 hover:bg-secondary-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              (512) 706-9699
            </a>
          </div>
        </div>
      </section>

      {/* Stucco Installation Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Installation Services We Offer in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-10">
            Star Stucco of Austin handles every type of stucco installation project — from ground-up new construction to complete re-stucco of existing exteriors. Each project is engineered for Austin's specific climate conditions and meets or exceeds all Travis County building code requirements.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            New Construction Stucco Installation
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            We work with Austin homebuilders, general contractors, and homeowners on new construction stucco installations throughout the metro area. Our team coordinates with framing and weatherproofing trades to ensure the wall system is properly prepared for stucco from the start — avoiding the costly rework and delays that happen when stucco contractors inherit poorly prepared substrates.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-8">
            From custom homes in Barton Creek and Spanish Oaks to production builds in Easton Park and Whisper Valley, we deliver consistent, high-quality stucco installations on every project regardless of size.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Stucco Installation Over Existing Siding
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Many Austin homeowners choose to replace aging vinyl, wood, or fiber cement siding with stucco for its superior durability, energy efficiency, and curb appeal. This process involves removing the existing siding, inspecting and repairing the underlying sheathing and framing, installing a proper weather-resistive barrier, and building a complete stucco system from scratch.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Re-stucco projects also include homes where the existing stucco has failed beyond <Link to="/austin-stucco-repair" className="text-primary-700 hover:text-primary-800 font-medium">repair</Link> — widespread delamination, persistent moisture intrusion, or deteriorated lath systems that require full replacement rather than spot fixes.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Commercial Stucco Installation Austin, TX
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Star Stucco provides <Link to="/austin-commercial-stucco" className="text-primary-700 hover:text-primary-800 font-medium">commercial stucco installation</Link> for offices, retail centers, restaurants, multi-family developments, and mixed-use projects across the Austin metro area. We handle projects from 1,000 to 100,000+ square feet and coordinate with commercial general contractors on scheduling, phasing, and code compliance.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Commercial installations often use EIFS systems for their energy efficiency advantages and design flexibility, though traditional stucco remains popular for projects where maximum durability and fire resistance are priorities.
          </p>
        </div>
      </section>

      {/* Types of Stucco */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Types of Stucco We Install in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-10">
            We work with every major stucco system on the market. The right choice depends on your substrate, budget, climate performance requirements, and the aesthetic you want to achieve. Here is what we install most frequently in the Austin area.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Traditional 3-Coat Stucco System
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            The traditional three-coat system consists of a scratch coat, brown coat, and finish coat applied over metal lath. It produces the thickest, most durable stucco shell available and is ideal for masonry and concrete substrates. Three-coat stucco handles Austin's thermal cycling and soil movement exceptionally well due to its mass and rigidity. This is our most-requested system for custom homes and high-end residential projects in neighborhoods like Westlake Hills, Barton Creek, and Tarrytown.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            One-Coat Stucco Systems
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            One-coat stucco uses a single base layer of fiber-reinforced Portland cement applied over lath, followed by a finish coat. It installs faster and costs less than three-coat systems while still providing excellent performance on wood-framed walls. The fiber reinforcement adds tensile strength that helps resist cracking from the minor building movement common in Austin homes built on expansive clay soils.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Synthetic & Acrylic Stucco
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Synthetic stucco finishes use acrylic polymers instead of traditional Portland cement for the finish coat. These products offer greater flexibility, superior color retention under Austin's intense UV exposure, and improved resistance to hairline cracking. They are available in a wider range of colors and <Link to="/austin-stucco-finishing" className="text-primary-700 hover:text-primary-800 font-medium">textures</Link> than traditional cementitious finishes and are an excellent choice for both new installations and <Link to="/stucco-recoat-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">re-coating</Link> existing stucco.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            EIFS (Exterior Insulation and Finish System)
          </h3>
          <p className="text-secondary-600 leading-relaxed">
            <Link to="/eifs-contractor-austin" className="text-primary-700 hover:text-primary-800 font-medium">EIFS</Link> is a lightweight system that combines rigid foam insulation with a durable synthetic stucco finish. It delivers the highest energy efficiency of any stucco system — a critical advantage in Austin where cooling costs dominate energy bills from May through October. We are certified installers for Dryvit, Sto, Parex, and Master Wall EIFS systems and handle both residential and commercial EIFS projects.
          </p>
        </div>
      </section>

      {/* Our Installation Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Our Stucco Installation Process
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-8">
                A stucco installation is only as good as the preparation behind it. Every project follows our proven four-step process to ensure your stucco system performs for decades in Austin's demanding climate.
              </p>

              <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                Step 1 — Free Consultation & Design Review
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                We start with a thorough on-site assessment of your property. Our team evaluates the substrate — whether concrete masonry, wood framing with sheathing, or existing cladding that needs removal — and discusses your finish preferences, timeline, and budget. You receive a detailed written proposal with no hidden costs.
              </p>

              <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                Step 2 — Surface Preparation & Lath Installation
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Proper preparation is the foundation of a long-lasting stucco exterior. For wood-framed walls, we install two layers of weather-resistive barrier followed by self-furred metal lath fastened with corrosion-resistant fasteners. We install weep screeds at the base of every wall, casing beads at all terminations, and control joints at intervals specified by the Stucco Manufacturers Association to account for Austin's soil movement and thermal cycling.
              </p>

              <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                Step 3 — Base Coat & Scratch Coat Application
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                For three-coat systems, the scratch coat is applied first and scored to create a bonding surface, then the brown coat levels the wall to a true plane. Each coat must cure properly between applications — and in Austin's summer heat, that means careful timing, moist curing, and sometimes shading the work area to prevent rapid moisture loss that weakens the bond.
              </p>

              <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                Step 4 — Finish Coat, Texture & Color
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                The finish coat delivers your chosen <Link to="/austin-stucco-finishing" className="text-primary-700 hover:text-primary-800 font-medium">texture and color</Link>. We use integral pigments mixed into the finish material rather than surface-applied paint, producing color that runs through the full depth of the coat. Whether you choose smooth, Santa Barbara, dash, sand, or lace, our finishing team applies each texture with the precision and consistency that defines a professional installation.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-installation-process.webp"
                alt="stucco lath and scratch coat installation Austin TX"
                className="rounded-2xl shadow-lg sticky top-8"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Stucco Is Right for Austin */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Why Stucco Is the Right Choice for Austin, TX Homes
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-10">
            Stucco has been a preferred exterior cladding in the Southwest for centuries, and its performance advantages are particularly well suited to Central Texas conditions.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Energy Efficiency in Texas Heat
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Stucco's thermal mass absorbs heat during the day and releases it slowly as temperatures drop, reducing peak cooling loads and smoothing out temperature swings inside your home. In Austin, where air conditioning runs six months of the year or more, this translates to meaningful energy savings. EIFS systems take this further with built-in foam insulation that can improve a wall's R-value by R-4 to R-8, reducing cooling costs by 10-25% compared to conventional siding.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Durability Against Texas Weather & UV
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            A properly installed stucco system lasts 50 to 80 years — far longer than vinyl siding, fiber cement, or wood cladding in the Austin climate. Stucco resists wind, fire, termites, and rot. Its cementitious composition stands up to Austin's extreme UV radiation better than most synthetic materials, and unlike paint, integral stucco color does not peel or flake. When the finish eventually needs refreshing after 10 to 20 years, a <Link to="/stucco-recoat-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">re-coat</Link> extends the system's life without the cost of full replacement.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Low Maintenance Exterior for Austin Homeowners
          </h3>
          <p className="text-secondary-600 leading-relaxed">
            Unlike wood siding that requires regular painting and repair, or vinyl that can warp and crack in Texas heat, stucco requires only periodic inspection and minor maintenance to stay in excellent condition. An annual visual check, prompt repair of any hairline cracks, and occasional cleaning are all it takes. For busy Austin homeowners, stucco delivers one of the lowest total cost of ownership of any exterior cladding option.
          </p>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Installation Cost in Austin, TX
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Stucco installation in Austin typically costs between $8 and $15 per square foot depending on the system type, finish texture, wall height and accessibility, and the amount of prep work required. Three-coat systems are at the higher end of the range due to their additional material and labor. One-coat systems are more economical, and EIFS installations generally fall in the $10 to $16 range because of the added insulation layer.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            For an average 2,000-square-foot Austin home exterior, total installation costs typically range from $16,000 to $30,000. This includes substrate preparation, lath, weather-resistive barrier, all stucco coats, and the finish texture and color of your choice. We provide free, detailed estimates after an on-site assessment — no guesswork, no hidden fees.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            For a comprehensive breakdown of stucco installation costs by system type and home size, see our <Link to="/blog/cost-to-stucco-a-house-austin" className="text-primary-700 hover:text-primary-800 font-medium">cost to stucco a house in Austin</Link> guide.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Installation Service Areas in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Star Stucco of Austin installs stucco on homes and commercial buildings throughout the Austin metropolitan area. We work regularly in Westlake Hills, Barton Creek, Mueller, Tarrytown, Travis Heights, Barton Hills, Hyde Park, Circle C Ranch, South Congress, East Austin, Rollingwood, Steiner Ranch, Avery Ranch, and the Domain area.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We also serve surrounding cities including Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Bee Cave, Dripping Springs, Kyle, Buda, Manor, Leander, and Liberty Hill. Our service area covers Travis County, Williamson County, Hays County, Bastrop County, Bell County, Burnet County, and surrounding Central Texas counties.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Our crews are familiar with local HOA requirements, soil conditions, and architectural preferences in every part of the metro. Whether you are building in a new master-planned community or re-stuccoing a mid-century home in an established neighborhood, we understand the site-specific factors that influence long-term stucco performance in your area.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Why Choose Star Stucco of Austin for Your Installation?
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Star Stucco has completed over 9,000 stucco projects across Central Texas since 2013. We are a family-owned company that employs our own OSHA-trained, scaffold-certified crews — no subcontractors. Every installation carries our comprehensive warranty covering both materials and workmanship, and we are certified applicators for Sto Corp, Senergy/BASF, Master Wall, Dryvit, and Parex LaHabra.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Our installation process is specifically designed for Austin's climate. We account for expansive clay soils, extreme UV exposure, and wide temperature swings in every detail — from control joint placement to curing schedules to weather-resistive barrier selection. When we build your stucco system, it is engineered to perform here, not just anywhere.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Call us at <a href="tel:+15127069699" className="text-primary-700 hover:text-primary-800 font-medium">(512) 706-9699</a> or <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-medium">request a free estimate online</Link> to start your stucco installation project.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Stucco Installation FAQs
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            Common questions about stucco installation in Austin answered by our team.
          </p>
          <div className="rounded-2xl bg-white border border-secondary-200 px-6 sm:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Stucco Services */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Related Stucco Services in Austin, TX
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-6">
            Star Stucco of Austin is your full-service stucco contractor. Beyond installation, we offer repair, finishing, and specialty services across the Austin metro area.
          </p>
          <ul className="space-y-4">
            <li>
              <Link to="/austin-stucco-repair" className="text-primary-700 hover:text-primary-800 font-medium">Stucco Repair Austin, TX</Link>
              <span className="text-secondary-600"> — Expert crack repair, water damage restoration, and seamless texture matching.</span>
            </li>
            <li>
              <Link to="/austin-stucco-finishing" className="text-primary-700 hover:text-primary-800 font-medium">Stucco Finishing & Textures Austin, TX</Link>
              <span className="text-secondary-600"> — Custom textures including smooth, Santa Barbara, dash, sand, and lace finishes.</span>
            </li>
            <li>
              <Link to="/austin-stucco-installation" className="text-primary-700 hover:text-primary-800 font-medium">Residential Stucco Austin, TX</Link>
              <span className="text-secondary-600"> — New construction and re-stucco for Austin-area homes.</span>
            </li>
            <li>
              <Link to="/austin-commercial-stucco" className="text-primary-700 hover:text-primary-800 font-medium">Commercial Stucco Austin, TX</Link>
              <span className="text-secondary-600"> — Large-scale stucco for offices, retail, multi-family, and mixed-use projects.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Your Stucco Installation Project Today
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Contact Star Stucco for a free on-site estimate. We will assess your property, discuss finish options, and provide a detailed quote with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Schedule Your Free Estimate
            </Link>
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco at (512) 706-9699"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-secondary-400"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (512) 706-9699
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
