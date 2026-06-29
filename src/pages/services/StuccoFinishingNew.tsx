import { Link } from 'react-router-dom'
import { ChevronRight, Phone, Palette, Sun, Layers, Eye, Paintbrush } from 'lucide-react'
import SEO from '../../components/SEO'
import { FAQSection, faqPageSchema, type FAQ } from '../../components/FAQ'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'

const faqs: FAQ[] = [
  {
    question: 'What stucco finishes are most popular in Austin?',
    answer:
      'Smooth and Santa Barbara finishes are the most popular choices in Austin. Smooth finishes dominate modern and contemporary builds in neighborhoods like East Austin, Mueller, and South Congress, while the hand-troweled Santa Barbara texture is widely used on Hill Country, Mediterranean, and Spanish Colonial style homes in Westlake Hills, Barton Creek, and Tarrytown. Dash finishes remain common for their durability, and sand float textures offer a subtle, uniform appearance that suits a wide range of architectural styles.',
  },
  {
    question: 'Can you match my existing stucco color and texture?',
    answer:
      'Yes. Color and texture matching is one of our core specialties. We replicate existing finishes — including surfaces that have aged and weathered over time — so that repairs, additions, and partial refinishes blend seamlessly with the surrounding stucco. For full refinishing projects, we create on-site samples so you can approve the exact texture and color before any work begins.',
  },
  {
    question: 'Which finish holds up best in Austin heat?',
    answer:
      'Heavier textures like dash and Santa Barbara tend to perform best in Austin\'s intense heat because they hide the hairline cracks that develop from thermal cycling. Their surface variation also helps distribute UV exposure more evenly. Smooth finishes look elegant but are less forgiving — any cracking or imperfection is immediately visible. We recommend smooth finishes only when applied by experienced craftsmen over properly prepared substrates with adequate control joints.',
  },
  {
    question: 'Can existing stucco be refinished?',
    answer:
      'Absolutely. If your existing stucco is structurally sound but has faded color, outdated texture, or surface wear, we can refinish it with a new color coat or texture overlay. Elastomeric coatings are a popular option that refreshes the appearance while adding a waterproof layer. For more dramatic changes, we can apply a new finish coat over the existing brown coat after proper surface preparation.',
  },
  {
    question: 'How much does stucco finishing cost?',
    answer:
      'Stucco finishing costs in Austin vary based on the finish type, wall area, and complexity. A basic re-coat or color coat typically runs $2 to $4 per square foot, while custom textures like hand-troweled smooth or Santa Barbara finishes range from $4 to $7 per square foot due to the labor involved. Full refinishing of a typical Austin home exterior generally falls between $4,000 and $14,000. We provide free estimates with detailed breakdowns.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Finishing & Textures Austin, TX',
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
    'Custom stucco finishes & textures for Austin homes. Smooth, Santa Barbara, dash, lace & sand finishes. Expert color matching. Call (512) 706-9699 today.',
}

const finishTypes = [
  {
    icon: Eye,
    title: 'Smooth Finish',
    desc: 'A sleek, modern look achieved by steel-troweling the finish coat to a flat, uniform surface. Popular on contemporary Austin builds and minimalist designs.',
  },
  {
    icon: Palette,
    title: 'Santa Barbara Finish',
    desc: 'A hand-troweled texture with natural variation and character. The signature finish for Hill Country, Mediterranean, and Spanish Colonial homes across Austin.',
  },
  {
    icon: Layers,
    title: 'Dash Finish',
    desc: 'Stucco is thrown or sprayed onto the surface for a rugged, highly textured look. Extremely durable and excellent at hiding imperfections and hairline cracks.',
  },
  {
    icon: Sun,
    title: 'Sand Float Finish',
    desc: 'A fine, sandy texture created by floating the surface with a sponge or rubber float. Delivers a subtle, uniform appearance that suits many architectural styles.',
  },
  {
    icon: Paintbrush,
    title: 'Lace & Skip Trowel',
    desc: 'Decorative textures created by partially troweling over a dash or stippled base. Lace produces a refined pattern, while skip trowel gives a more organic, hand-crafted feel.',
  },
]

export default function StuccoFinishingNew() {
  return (
    <>
      <SEO
        title="Stucco Finishing & Textures in Austin, TX | Star Stucco of Austin"
        description="Custom stucco finishes & textures for Austin homes. Smooth, Santa Barbara, dash, lace & sand finishes. Expert color matching. Call (512) 706-9699 today."
        path="/stucco-finishing-austin-tx"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-texture-hero.webp"
            alt="Custom stucco finishing on an Austin home exterior"
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
            <span className="text-primary-400">Stucco Finishing</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Stucco Finishing & Textures in Austin, TX
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              The finish coat is what the world sees. Star Stucco of Austin delivers expert stucco textures — from smooth contemporary to hand-troweled Santa Barbara — crafted to complement your home and stand up to Central Texas conditions.
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

      {/* Finish Types Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Stucco Finish Types We Offer
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            Every texture has a character and a practical profile. We help you choose a finish that matches your architectural style and handles Austin's climate.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishTypes.map((item) => (
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

      {/* Climate & Finish Selection */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Choosing the Right Finish for Austin's Climate
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Austin's climate puts unique demands on stucco finishes. South- and west-facing walls endure intense UV exposure and surface temperatures that routinely exceed 140 degrees Fahrenheit during summer months. This extreme thermal cycling causes expansion and contraction that can reveal hairline cracks in smooth finishes within just a few years if the underlying system is not properly designed.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Heavier textures like dash and Santa Barbara handle this movement more gracefully because their surface variation naturally conceals minor cracking. They also tend to resist fading more effectively since the textured surface distributes sunlight rather than reflecting it uniformly. For homeowners who prefer the clean lines of a smooth finish, we recommend integral color coats with UV-stable pigments and a well-planned control joint layout to manage movement.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Color selection matters in Austin, too. Darker stucco colors absorb more heat, increasing thermal stress on the wall system. We often recommend lighter and mid-tone colors for maximum performance, though dark accents can work well in shaded areas or on north-facing walls. Our team provides color samples applied to actual stucco panels so you can see the finish in Austin sunlight before making a final decision.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-project-completed.webp"
                alt="Completed stucco finishing project in Austin"
                className="rounded-2xl shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Color Matching & Refinishing */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Expert Color Matching & Stucco Refinishing
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Whether you need a seamless patch that disappears into your existing wall or a complete <Link to="/stucco-recoat-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">stucco re-coat</Link> that transforms your home's exterior, color and texture matching is essential. Stucco fades and weathers over time — a fresh patch mixed to the manufacturer's original color will look wrong next to a wall that has aged for ten years under Austin sun.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Our finishing team has matched hundreds of unique stucco colors and textures across Austin, including vintage finishes on older Tarrytown homes, custom integral colors on Westlake Hills estates, and acrylic finishes on modern builds in the Domain area. We take samples from the existing wall, account for weathering and UV exposure, and mix custom batches that blend invisibly.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            For homeowners looking to update their stucco appearance without a full <Link to="/stucco-installation-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">reinstallation</Link>, refinishing is often the ideal solution. We can apply a new finish coat over structurally sound existing stucco, changing the texture, color, or both. Elastomeric finish coats add a waterproofing layer while refreshing the look — a popular choice for aging Austin homes that need cosmetic renewal without the cost of full replacement.
          </p>
        </div>
      </section>

      {/* Architectural Styles */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Finishes for Every Austin Architectural Style
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Austin's architectural diversity means no single stucco finish fits every home. The clean, minimal lines of a smooth finish complement the modern farmhouse and contemporary designs popular in East Austin and Mueller. Santa Barbara and lace textures pair naturally with the Mediterranean and Hill Country styles common in Lakeway, Bee Cave, and the surrounding Hill Country communities.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Ranch-style homes — still abundant in neighborhoods throughout South Austin, Round Rock, and Cedar Park — often feature dash or sand float finishes that provide excellent durability with minimal maintenance. For commercial properties and mixed-use developments along corridors like Burnet Road and South Lamar, we offer a full range of finishes including acrylic systems that deliver consistent color and texture across large wall areas.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Not sure which finish is right for your project? Our team will visit your property, assess the architecture and surrounding context, and recommend finishes that enhance your home's curb appeal while providing long-term performance in Austin's demanding climate. We also coordinate with painters, architects, and <Link to="/exterior-stucco-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">general contractors</Link> to ensure the finished product meets everyone's expectations.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        subtitle="Common questions about stucco finishing and textures in Austin."
      />

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'Stucco Finishing', path: '/austin-stucco-finishing', desc: 'Our main stucco finishing services page with full details on textures and finishes.' },
          { label: 'Stucco Re-Coat', path: '/stucco-recoat-austin-tx', desc: 'Refresh your stucco with a professional color coat or elastomeric re-coat.' },
          { label: 'Stucco Installation', path: '/austin-stucco-installation', desc: 'Full stucco installation services for new construction and re-stucco projects.' },
          { label: 'Exterior Stucco Contractor', path: '/exterior-stucco-austin-tx', desc: 'Comprehensive exterior stucco services for Austin homes and businesses.' },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free Stucco Finishing Estimate
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Whether you need a new texture, a color change, or expert matching on a repair, Star Stucco of Austin has you covered. Call (512) 706-9699 or request your free estimate online.
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
