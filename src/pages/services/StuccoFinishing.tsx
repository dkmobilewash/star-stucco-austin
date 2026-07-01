import { Link } from 'react-router-dom'
import { ChevronRight, Phone, Palette, Sun, Layers, Eye } from 'lucide-react'
import SEO from '../../components/SEO'
import { FAQSection, faqPageSchema, type FAQ } from '../../components/FAQ'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'

const faqs: FAQ[] = [
  {
    question: 'What stucco finishes are most popular in Austin?',
    answer:
      'Smooth and Santa Barbara finishes are the most requested in Austin. Smooth finishes suit modern builds in areas like South Congress and East Austin, while the hand-troweled Santa Barbara texture is popular on Hill Country and Spanish Colonial style homes in Westlake Hills and Barton Creek. Dash, sand, and lace finishes are also common for their durability and ability to hide imperfections.',
  },
  {
    question: 'Can you match my existing stucco texture and color?',
    answer:
      'Yes. Texture and color matching is one of our specialties. We replicate existing finishes — including aged and weathered surfaces — so repairs and additions blend seamlessly. For full refinishes, we provide on-site samples so you can see the exact texture and color before we begin.',
  },
  {
    question: 'Which stucco finish holds up best in the Austin climate?',
    answer:
      'Heavier textures like dash and Santa Barbara tend to handle Austin’s intense UV and thermal cycling especially well because they hide hairline movement and minor imperfections. Smooth finishes look stunning but require expert application to resist cracking. We help you choose a finish that fits both your architectural style and long-term durability.',
  },
  {
    question: 'Can an existing stucco finish be changed or refreshed?',
    answer:
      'Yes. We can re-coat or refinish existing stucco to update the texture or color, and apply elastomeric finishes that refresh appearance while adding a waterproofing layer. An on-site assessment determines whether a re-coat or a more involved refinish is the right approach.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Finishing & Textures Austin, TX',
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
    'Custom stucco finishes and textures in Austin, TX. Smooth, Santa Barbara, dash, sand, and lace finishes. Color matching for Hill Country, Spanish, and Modern architectural styles.',
  serviceType: 'Stucco Finishing',
}

const finishes = [
  {
    name: 'Smooth Finish',
    desc: 'A sleek, contemporary surface popular on modern Austin builds. Requires master-level trowel work for a flawless result. Ideal for clean-lined architecture in the South Congress and East Austin design corridors.',
  },
  {
    name: 'Santa Barbara Finish',
    desc: 'A hand-troweled texture with subtle variation that evokes traditional Mediterranean and Spanish Colonial style. A favorite for Westlake Hills and Barton Creek estates.',
  },
  {
    name: 'Dash Finish',
    desc: 'Aggregate material dashed onto wet stucco for a uniform, textured surface. Excellent at hiding minor imperfections and highly durable against Austin weather extremes.',
  },
  {
    name: 'Sand Finish',
    desc: 'A fine-grained texture created with a sponge or foam float. Offers a warm, natural appearance that pairs well with Hill Country stone accents and earth-toned palettes.',
  },
  {
    name: 'Lace Finish',
    desc: 'Material is applied and then partially knocked down to create an organic, lace-like pattern. One of the most popular residential textures across the Austin metro area.',
  },
]

const benefits = [
  { icon: Palette, title: 'Expert Color Matching', desc: 'We match existing stucco colors precisely using custom-tinted integral pigments and field-verified samples.' },
  { icon: Sun, title: 'UV-Resistant Pigments', desc: 'Austin\'s intense sun fades lesser products quickly. We use fade-resistant pigments rated for extreme UV exposure.' },
  { icon: Layers, title: 'Multiple Texture Options', desc: 'From glassy smooth to heavy dash, we execute every standard and custom texture to your exact specification.' },
  { icon: Eye, title: 'Architectural Style Expertise', desc: 'We understand Hill Country, Spanish Colonial, Modern, and Transitional styles and recommend finishes that complement each one.' },
]

export default function StuccoFinishing() {
  return (
    <>
      <SEO
        title="Stucco Finishing & Textures Austin, TX | Star Stucco of Austin"
        description="Custom stucco finishes and textures in Austin, TX. Smooth, Santa Barbara, dash, sand, and lace finishes with expert color matching. Complementing Hill Country, Spanish, and Modern architecture."
        path="/austin-stucco-finishing"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-texture-hero.webp"
            alt="Beautifully finished stucco wall with warm texture"
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
            <span className="text-primary-400">Stucco Finishing & Textures</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Stucco Finishing & Textures in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            The finish is what the world sees. Star Stucco offers smooth, Santa Barbara, dash,
            sand, lace, and custom textures that complement Austin's diverse architectural
            landscape -- from Hill Country limestone homes to sleek modern builds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              Explore Finish Options <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400 hover:bg-secondary-800"
            >
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Finishes Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Stucco Finish Styles We Offer
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-14">
            Each finish creates a distinctly different aesthetic. We bring sample boards to every
            consultation so you can see and feel each texture before making a decision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishes.map((finish) => (
              <div
                key={finish.name}
                className="rounded-xl bg-white p-6 shadow-sm border border-secondary-100 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
                  {finish.name}
                </span>
                <p className="text-sm text-secondary-600 leading-relaxed">{finish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Matching & Architecture Content */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Color Matching & Austin Architectural Styles
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Getting the right color is just as important as choosing the right texture.
                Star Stucco uses integral pigments mixed directly into the finish coat, producing
                color that runs through the full depth of the material rather than sitting on top
                as paint does. This means small chips or scratches remain virtually invisible.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Austin's architecture is wonderfully diverse. In Westlake Hills and Barton Creek,
                you will find Hill Country homes that blend native limestone with warm sand- and
                cream-toned stucco. Neighborhoods like Hyde Park and Travis Heights feature
                Spanish Colonial and Mediterranean revivals where hand-troweled Santa Barbara
                finishes in terracotta and ochre tones are most at home. And in East Austin's
                growing design corridor, smooth white and charcoal finishes complement the
                clean geometry of modern construction.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                We prepare physical color samples cured in actual Austin sunlight so you see
                exactly how your chosen shade will look on the wall, not just under showroom
                lighting. For repair and patch work, we can match existing stucco color and
                texture so the repaired area blends seamlessly with the original surface.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-project-completed.webp"
                alt="Variety of stucco textures and colors on display"
                className="rounded-2xl shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-12 text-center">
            Why Star Stucco for Your Finish Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* FAQ Section */}
      <FAQSection faqs={faqs} subtitle="Common questions about stucco finishes and textures in Austin, answered by our team." />

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'Stucco Finishes Guide', path: '/blog/stucco-finishes-guide', desc: 'A deeper look at each finish type — smooth, Santa Barbara, dash, and lace.' },
          { label: 'Stucco Installation', path: '/austin-stucco-installation', desc: 'New construction and re-stucco for Austin homes, finished to your chosen texture.' },
          { label: 'Stucco Repair', path: '/austin-stucco-repair', desc: 'Crack, water-damage, and texture-matched repairs that blend with your finish.' },
        ]}
        title="Related Services & Resources"
      />

      {/* CTA Section */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            See the Difference a Professional Finish Makes
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Book a free consultation and we will bring sample boards to your property so you can
            compare textures and colors in person. No pressure, just expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Book a Finish Consultation
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
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
