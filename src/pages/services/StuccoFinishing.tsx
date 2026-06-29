import { Link } from 'react-router-dom'
import { ChevronRight, Phone, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SEO from '../../components/SEO'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'
import { faqPageSchema, type FAQ } from '../../components/FAQ'

const faqs: FAQ[] = [
  {
    question: 'What is the most popular stucco finish in Austin, TX?',
    answer:
      'Smooth and Santa Barbara finishes are the most popular in Austin. Smooth finishes dominate on modern and contemporary homes — especially in areas like East Austin, South Congress, and central Austin infill projects. Santa Barbara (also called mission finish) is the top choice for Hill Country, Mediterranean, and Spanish Colonial styles common in Westlake Hills, Barton Creek, and Lakeway. Dash finishes remain popular on ranch-style homes and in older Austin neighborhoods where they match the existing street aesthetic.',
  },
  {
    question: 'Can I change my stucco texture without replacing the whole wall?',
    answer:
      'In many cases, yes. If the existing stucco is structurally sound and well bonded to the substrate, we can apply a new finish coat directly over the old one after proper surface preparation and priming. This is significantly more affordable than a full tear-off and re-stucco. However, changing from a heavy texture to a smooth finish is more involved because the existing texture must be skim-coated flat before the new finish is applied. We assess your existing stucco during a free on-site consultation to determine the best approach.',
  },
  {
    question: 'How long does a stucco finish last in Texas?',
    answer:
      "A properly applied stucco finish in Austin typically lasts 10 to 20 years before it needs refreshing, depending on the finish type, sun exposure, and the quality of the original application. Heavier textures like dash and Santa Barbara tend to age more gracefully than smooth finishes because they hide minor weathering and hairline movement. The underlying stucco system itself lasts 50 to 80 years — it is only the outermost finish layer that needs periodic re-coating or refinishing.",
  },
  {
    question: 'What stucco finish is easiest to clean and maintain?',
    answer:
      'Smooth finishes are the easiest to clean — dirt, mildew, and pollen wipe off readily with a garden hose or gentle pressure wash. However, smooth finishes show every imperfection, so any cracks or repairs are more visible than on textured surfaces. Dash and sand finishes are harder to clean due to their rough surface but are more forgiving when it comes to hiding minor wear, patching, and the natural aging that occurs over time in the Austin climate. The best choice depends on whether you prioritize easy cleaning or low visual maintenance.',
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
    'Custom stucco finishes and textures in Austin, TX. Smooth, Santa Barbara, dash, sand, and lace finishes. Expert color matching. Call (512) 706-9699.',
  serviceType: 'Stucco Finishing',
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

export default function StuccoFinishing() {
  return (
    <>
      <SEO
        title="Interior Plaster Contractor Austin, TX | Star Stucco of Austin"
        description="Custom stucco finishes and textures in Austin, TX. Smooth, Santa Barbara, dash, sand & lace finishes. Expert color matching. Call (512) 706-9699 for a free consultation."
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
          <div className="flex items-center gap-2 text-sm text-secondary-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/austin-stucco-services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-400">Stucco Finishing</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Expert Stucco Finishing in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            The finish is what the world sees. Star Stucco offers smooth, Santa Barbara, dash, sand, lace, and custom textures that complement Austin's diverse architectural landscape — from Hill Country limestone homes to sleek modern builds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              Explore Finish Options <ChevronRight className="ml-2 h-4 w-4" />
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

      {/* Stucco Finish Types */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Finish Types We Offer in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-10">
            Each stucco finish creates a distinctly different aesthetic and has unique performance characteristics in Austin's climate. We bring sample boards to every consultation so you can see and feel each texture before making a decision.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Smooth Finish
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            A sleek, contemporary surface that has become the defining look of modern Austin architecture. Smooth stucco requires master-level trowel work — every pass must be precise because the clean surface reveals any imperfection. This finish is ideal for clean-lined homes in the South Congress and East Austin design corridors, central Austin infill projects, and contemporary builds throughout the metro. It pairs beautifully with metal panels, wood soffits, and large windows.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Sand Float Finish
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            A fine-grained texture created with a sponge or foam float that produces a warm, natural surface with subtle granularity. Sand float finishes are one of the most versatile options in Austin — they work equally well on Hill Country homes with stone accents, traditional ranch properties, and transitional designs that bridge classic and contemporary. The gentle texture helps hide minor imperfections and ages gracefully in Austin's UV-intense environment.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Dash Finish
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Aggregate material is dashed (thrown) onto the wet stucco surface to create a uniformly textured, slightly rough finish. Dash finishes are among the most durable options for Austin homes — the heavy texture stands up exceptionally well to thermal cycling, UV exposure, and minor building movement. This finish is particularly popular on ranch-style and traditional homes throughout the Austin suburbs, and it effectively hides the hairline cracks that expansive clay soils tend to produce.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Santa Barbara & Mission Finish
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            A hand-troweled texture with subtle, organic variation that evokes traditional Mediterranean and Spanish Colonial architecture. The Santa Barbara finish (also called mission finish) is one of Austin's most beloved textures — a staple on homes in Westlake Hills, Barton Creek, Spanish Oaks, Rob Roy, and Lakeway. The slight irregularity of the hand-applied surface creates depth and warmth that machine-applied finishes cannot replicate.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Skip Trowel Finish
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            A medium-texture finish created by lightly skipping a trowel across the surface, leaving a pattern of raised ridges and valleys. Skip trowel provides a distinctive handcrafted look that sits between smooth and heavy texture. It is a popular choice for Austin homeowners who want more visual interest than a smooth finish but prefer a lighter texture than dash or Santa Barbara.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Lace & Skip Finish
          </h3>
          <p className="text-secondary-600 leading-relaxed">
            Material is applied to the wall and then partially knocked down with a trowel to create an organic, lace-like pattern with a mix of flat and raised areas. Lace finish is one of the most popular residential stucco textures across the Austin metro — it offers a refined look with enough texture to hide minor wear and aging. It works well on a wide range of architectural styles and complements both traditional and contemporary Austin homes.
          </p>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            How to Choose the Right Stucco Finish for Your Austin Home
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-10">
            Choosing a stucco finish involves balancing aesthetics, durability, maintenance, and neighborhood context. Here are the key factors Austin homeowners should consider.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Matching Your Home's Architectural Style
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            The most successful stucco finishes complement the home's architectural language. Modern and contemporary homes call for smooth finishes in whites, grays, and charcoals. Hill Country and Mediterranean designs pair naturally with Santa Barbara, lace, and sand float textures in warm earth tones. Ranch and traditional homes look best with dash or sand finishes that provide a solid, timeless aesthetic.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-8">
            If you are unsure which direction to go, our team will evaluate your home's architecture, surrounding streetscape, and design preferences during a free consultation and recommend finishes that will enhance your property's curb appeal and value.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            HOA Requirements in Austin Neighborhoods
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Many Austin neighborhoods — including Circle C Ranch, Steiner Ranch, Avery Ranch, Spanish Oaks, and master-planned communities in Round Rock and Cedar Park — have HOA guidelines that specify approved exterior finishes, colors, and materials. Before selecting a stucco finish, check your community's architectural review requirements. Star Stucco has experience working within HOA guidelines across the Austin metro and can help you navigate the approval process with sample submissions and documentation.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Maintenance & Durability Considerations
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Heavier textures like dash and Santa Barbara are more forgiving over time — they hide hairline cracks, minor <Link to="/austin-stucco-repair" className="text-primary-700 hover:text-primary-800 font-medium">repairs</Link>, and the natural aging that occurs in Austin's demanding climate. Smooth finishes show everything, so they require more precise application and more attentive maintenance to keep looking their best.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            For homes with significant sun exposure — particularly south- and west-facing walls — we recommend textures and pigments with proven UV stability. We also recommend elastomeric finish coats for walls that receive heavy rain exposure, as these flexible coatings bridge hairline cracks and provide an additional layer of waterproofing.
          </p>
        </div>
      </section>

      {/* Popular Colors */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Popular Stucco Colors for Austin Homes
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Color selection is just as important as texture in determining how your stucco exterior will look and perform. Star Stucco uses integral pigments mixed directly into the finish coat, producing color that runs through the full depth of the material rather than sitting on top as paint does. This means small chips or scratches remain virtually invisible, and the color ages naturally without peeling or flaking.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Austin's most popular stucco colors include warm whites and off-whites for modern and transitional homes, cream and sand tones for Hill Country and Mediterranean styles, warm grays and greiges for contemporary builds, and terracotta and ochre for Spanish Colonial designs. Darker accent colors — charcoal, deep gray, and navy — are increasingly popular on modern homes as contrast elements or full-facade statements.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                We prepare physical color samples cured in actual Austin sunlight so you see exactly how your chosen shade will look on the wall — not just under showroom lighting. Colors appear different at different times of day and on different wall orientations, so we encourage reviewing samples on the actual wall before committing to a final selection.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-project-completed.webp"
                alt="Variety of stucco colors and finishes on an Austin home"
                className="rounded-2xl shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Finishing Process */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Our Stucco Finishing Process
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Every stucco finish we apply follows a controlled, quality-driven process designed to deliver a flawless, long-lasting result.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Step 1 — Color Selection & Sample Review
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-6">
            We begin with a consultation where you review texture sample boards and color swatches. Once you narrow your choices, we prepare custom samples cured on-site so you can evaluate them in actual Austin sunlight at different times of day. We do not proceed until you have approved the exact color and texture — no surprises on finish day.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Step 2 — Surface Prep & Base Coat
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-6">
            The finish coat is only as good as the surface beneath it. For new <Link to="/austin-stucco-installation" className="text-primary-700 hover:text-primary-800 font-medium">installations</Link>, the brown coat is leveled to a true plane and allowed to cure fully before the finish is applied. For refinishing or <Link to="/stucco-recoat-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">re-coating</Link> projects, the existing surface is cleaned, repaired, and primed to ensure proper adhesion. Any cracks, holes, or damaged areas are addressed before the finish work begins.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Step 3 — Finish Coat Application & Texture
          </h3>
          <p className="text-secondary-600 leading-relaxed">
            The finish coat is applied by our most experienced applicators using the technique specific to your chosen texture — trowel, spray, dash, or a combination. We work in controlled sections to maintain consistency across the entire wall surface. In Austin's hot climate, timing is critical: we schedule finish work during optimal temperature and humidity windows to ensure proper curing, adhesion, and color uniformity. The result is a uniform, professional finish that enhances your home's curb appeal and protects the underlying stucco system.
          </p>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Finishing Cost in Austin, TX
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Stucco finishing costs in Austin depend on the texture type, the size of the area to be finished, and whether the project is a new installation or a refinish of existing stucco. For new installations, the finish coat is included in the overall installation price. For standalone refinishing or texture change projects, costs typically range from $3 to $6 per square foot depending on the complexity of the texture and the condition of the existing surface.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Smooth finishes tend to cost more than textured finishes due to the additional labor and skill required — achieving a flawless smooth surface is one of the most demanding tasks in stucco work. Custom textures and specialty finishes may also carry a premium. We provide detailed written estimates after an on-site assessment so there are no surprises. For broader pricing context, see our <Link to="/blog/stucco-finishes-guide" className="text-primary-700 hover:text-primary-800 font-medium">stucco finishes guide</Link>.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Finishing Service Areas in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Star Stucco of Austin provides stucco finishing services throughout the Austin metropolitan area. We regularly apply finishes in neighborhoods across the city including Westlake Hills, Barton Creek, Tarrytown, Hyde Park, Travis Heights, Mueller, East Austin, South Congress, Circle C Ranch, Rollingwood, Steiner Ranch, and the Domain area.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            We also serve surrounding communities including Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Bee Cave, Dripping Springs, Kyle, Buda, and Leander. Our service area covers Travis County, Williamson County, Hays County, Bastrop County, and surrounding Central Texas counties. Wherever your Austin-area property is located, our finishing team delivers consistent, high-quality results.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Why Choose Star Stucco of Austin for Stucco Finishing?
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Stucco finishing is where craftsmanship shows. Our finishing team has applied hundreds of unique textures across the Austin metro — from precision smooth finishes on modern builds to hand-troweled Santa Barbara textures on custom Hill Country estates. We understand how Austin's intense UV, temperature swings, and humidity levels affect every finish type, and we adjust our materials and application techniques accordingly.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We use UV-stable pigments rated for extreme sun exposure, elastomeric-compatible products where waterproofing is a priority, and integral color systems that age naturally without peeling or flaking. Every finish we apply is backed by our warranty covering materials and workmanship.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Book a free consultation and we will bring sample boards to your property so you can compare textures and colors in person. Call <a href="tel:+15127069699" className="text-primary-700 hover:text-primary-800 font-medium">(512) 706-9699</a> or <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-medium">schedule online</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Stucco Finishing FAQs
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            Common questions about stucco finishes and textures in Austin answered by our team.
          </p>
          <div className="rounded-2xl bg-white border border-secondary-200 px-6 sm:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'Stucco Finishes Guide', path: '/blog/stucco-finishes-guide', desc: 'A deeper look at each finish type — smooth, Santa Barbara, dash, and lace.' },
          { label: 'Stucco Re-Coat', path: '/stucco-recoat-austin-tx', desc: 'Refresh faded or aging stucco with a professional re-coat or color coat.' },
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
            Book a free consultation and we will bring sample boards to your property so you can compare textures and colors in person. No pressure, just expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Book a Finish Consultation
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
