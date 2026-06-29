import { Link } from 'react-router-dom'
import { ChevronRight, Phone, Paintbrush, Shield, Sun, DollarSign, RefreshCw } from 'lucide-react'
import SEO from '../../components/SEO'
import { FAQSection, faqPageSchema, type FAQ } from '../../components/FAQ'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'

const faqs: FAQ[] = [
  {
    question: 'What is a stucco re-coat?',
    answer:
      'A stucco re-coat is the application of a new finish coat or color coat over existing stucco that is structurally sound but cosmetically worn. It refreshes the appearance — correcting faded color, minor surface erosion, and weathering — without removing and replacing the entire stucco system. The process typically involves cleaning the existing surface, priming for adhesion, and applying one or two coats of new finish material.',
  },
  {
    question: 'How much does re-coating stucco cost in Austin?',
    answer:
      'Stucco re-coating in Austin generally costs between $2 and $5 per square foot, depending on the condition of the existing surface, the type of coating used, and the wall area. A standard re-coat on a typical Austin home exterior runs between $4,000 and $10,000. Elastomeric coatings, which add a waterproofing layer, are at the higher end of that range. We provide free on-site estimates with a detailed cost breakdown.',
  },
  {
    question: 'How long does a stucco color coat last?',
    answer:
      'A professionally applied stucco color coat typically lasts 10 to 15 years in Austin before showing significant fading or wear. Elastomeric coatings can last 15 to 20 years due to their flexibility and UV resistance. Longevity depends on sun exposure, wall orientation, color choice (darker colors fade faster), and whether the coating was properly applied over a clean, primed surface.',
  },
  {
    question: 'Can I change my stucco color without replacing it?',
    answer:
      'Yes. A color coat or re-coat allows you to change your stucco color entirely without replacing the underlying stucco system. As long as the existing stucco is structurally intact — no widespread cracking, delamination, or moisture damage — a new color coat can be applied directly over the old finish after proper cleaning and priming. This is far less expensive and disruptive than a full re-stucco.',
  },
  {
    question: 'When should I re-coat vs. fully repair my stucco?',
    answer:
      'Re-coating is the right choice when your stucco is structurally sound but looks worn — faded color, chalky surface texture, or minor surface erosion. Full repair or remediation is needed when there are cracks penetrating through the stucco, signs of moisture intrusion (staining, bubbling, soft spots), or delamination where the stucco has separated from the lath. Our team inspects the condition of your stucco and recommends the most cost-effective approach.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Re-Coat & Color Coat Austin, TX',
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
    'Refresh your Austin home with a professional stucco re-coat or color coat. Restore faded or aging stucco without full replacement. Call (512) 706-9699.',
}

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost-Effective Renewal',
    desc: 'Re-coating costs a fraction of full stucco replacement while delivering a like-new appearance. Most projects are 50-70% less than a complete re-stucco.',
  },
  {
    icon: Shield,
    title: 'Added Protection',
    desc: 'Elastomeric re-coats add a flexible, waterproof membrane that bridges hairline cracks and prevents moisture intrusion — extending the life of your stucco.',
  },
  {
    icon: Sun,
    title: 'UV & Fade Resistance',
    desc: 'Modern color coats use UV-stable pigments that resist the intense Austin sun far better than original finishes from 10 or 20 years ago.',
  },
  {
    icon: Paintbrush,
    title: 'Updated Appearance',
    desc: 'Change your stucco color or refresh the existing shade. A re-coat is the fastest way to transform your home\'s curb appeal without major construction.',
  },
  {
    icon: RefreshCw,
    title: 'Minimal Disruption',
    desc: 'Most re-coat projects are completed in two to four days with no demolition, no scaffold for weeks, and no exposed wall systems.',
  },
]

export default function StuccoRecoat() {
  return (
    <>
      <SEO
        title="Stucco Re-Coat & Color Coat Austin, TX | Star Stucco of Austin"
        description="Refresh your Austin home with a professional stucco re-coat or color coat. Restore faded or aging stucco without full replacement. Call (512) 706-9699."
        path="/stucco-recoat-austin-tx"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-home-exterior-hero.webp"
            alt="Freshly re-coated stucco home in Austin, TX"
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
            <span className="text-primary-400">Stucco Re-Coat</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Stucco Re-Coat & Color Coat Services in Austin, TX
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              Faded stucco does not always need full replacement. A professional re-coat restores color, adds protection, and transforms your home's exterior at a fraction of the cost. Star Stucco of Austin delivers lasting results.
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

      {/* Benefits Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Why Austin Homeowners Choose Stucco Re-Coating
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            A re-coat delivers dramatic visual improvement and meaningful protection without the cost, timeline, or disruption of a full stucco replacement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item) => (
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

      {/* Re-Coat vs Re-Stucco */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Re-Coat vs. Full Re-Stucco: Which Do You Need?
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                The difference comes down to the condition of your existing stucco. A re-coat is appropriate when the stucco system itself — the scratch coat, brown coat, lath, and moisture barrier — is intact and performing correctly, but the finish coat has degraded. Faded color, chalky texture, minor surface erosion, and cosmetic wear are all conditions that a re-coat addresses effectively.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Full re-stucco or <Link to="/austin-stucco-repair" className="text-primary-700 hover:text-primary-800 font-medium">stucco repair</Link> is needed when the damage goes deeper. Cracks that penetrate through to the lath, areas of delamination where the stucco has separated from the substrate, soft spots indicating moisture trapped behind the wall, and widespread cracking patterns all point to systemic issues that a surface coating cannot solve.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Our team inspects your stucco before recommending a re-coat. We check for moisture, test adhesion, examine crack patterns, and assess the overall condition of the system. If a re-coat will perform well and last, we say so. If the underlying stucco needs repair first, we will tell you that too — and we can handle both the repair and the re-coat as a single project.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-project-completed.webp"
                alt="Stucco re-coat project completed on Austin home"
                className="rounded-2xl shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Our Stucco Re-Coat Process
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            A durable re-coat starts with thorough surface preparation. We pressure wash the existing stucco to remove dirt, chalking, mildew, and loose material. Any hairline cracks are filled, and damaged areas are spot-repaired before the new coating goes on. Skipping this step is the most common reason re-coats fail prematurely — new material applied over a dirty or unstable surface will not bond properly.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            After cleaning and repairs, we apply a bonding primer specifically formulated for cementitious or acrylic stucco surfaces. This primer ensures the new color coat adheres to the existing finish rather than sitting on top of it. For elastomeric coatings, the primer also creates a uniform absorption rate across the wall, preventing blotchy or uneven coverage.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            The re-coat itself is applied in one or two coats depending on the product and the desired finish. Standard color coats are typically a single application, while elastomeric systems often require two coats to achieve the recommended mil thickness for waterproofing performance. We use spray, trowel, or roller application depending on the texture and the product specifications.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            In Austin's hot climate, timing matters. We schedule re-coat applications during optimal temperature and humidity windows — typically early morning during summer months — to ensure proper curing and adhesion. Applying coatings in direct afternoon sun when wall surface temperatures exceed recommended limits leads to premature drying, reduced adhesion, and shorter coating life.
          </p>
        </div>
      </section>

      {/* Austin-Specific Considerations */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Re-Coating in Austin's Climate
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Austin's combination of intense UV radiation and wide temperature swings makes coating selection critical. Standard acrylic color coats work well for refreshing appearance and correcting faded color, but elastomeric coatings are the better long-term investment for most Austin homes. Elastomeric products remain flexible across the temperature range — stretching to bridge hairline cracks that open during cool nights and closing back when walls expand in the heat.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            South- and west-facing walls take the heaviest UV punishment and benefit most from elastomeric re-coats. These walls also experience the most dramatic thermal cycling, which is why they are often the first to show fading and surface wear. A targeted re-coat on just the sun-exposed elevations can be a cost-effective approach for homeowners who want to address the worst areas first.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            We also see strong demand for re-coating from homeowners in neighborhoods like Circle C, Avery Ranch, Steiner Ranch, and other developments where homes were built in the early 2000s. Many of these homes are now 15 to 20 years old — right at the point where original stucco finishes begin to show their age. A professional re-coat restores curb appeal and extends the life of the underlying stucco system, often adding another 10 to 15 years before the next maintenance cycle. For homeowners considering a full <Link to="/stucco-finishing-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">finish update</Link>, a re-coat is the most practical starting point.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        subtitle="Common questions about stucco re-coating and color coats in Austin."
      />

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'Stucco Repair', path: '/austin-stucco-repair', desc: 'Professional stucco repair for cracks, water damage, and structural issues across Austin.' },
          { label: 'Stucco Finishing & Textures', path: '/stucco-finishing-austin-tx', desc: 'Custom stucco finishes and textures for Austin homes and businesses.' },
          { label: 'Exterior Stucco Contractor', path: '/exterior-stucco-austin-tx', desc: 'Full-service exterior stucco solutions for Austin homes and businesses.' },
          { label: 'Stucco Installation', path: '/stucco-installation-austin-tx', desc: 'New stucco installation for Austin new construction and re-stucco projects.' },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free Stucco Re-Coat Estimate
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Give your Austin home a fresh look with a professional stucco re-coat. Call Star Stucco at (512) 706-9699 or schedule a free estimate online today.
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
