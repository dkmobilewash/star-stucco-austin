import { Link } from 'react-router-dom'
import { ChevronRight, Phone, Home, Flame, Thermometer, Sparkles, CircleCheck as CheckCircle, Building2 } from 'lucide-react'
import SEO from '../../components/SEO'
import { FAQSection, faqPageSchema, type FAQ } from '../../components/FAQ'
import { RelatedLinks } from '../../components/RelatedLinks'
import { siteConfig } from '../../lib/siteConfig'

const faqs: FAQ[] = [
  {
    question: "Why choose stucco for my Austin home's exterior?",
    answer:
      "Stucco offers a unique combination of benefits for Austin homeowners: excellent fire resistance during Texas drought seasons, strong thermal mass that helps regulate interior temperatures and reduce cooling costs, exceptional durability against UV exposure and weather, and versatile design options that complement Austin's diverse architectural styles. When properly installed with the right moisture management details, stucco is one of the most cost-effective and long-lasting exterior cladding systems available.",
  },
  {
    question: 'How long does exterior stucco last in Texas?',
    answer:
      'A properly installed stucco exterior in Texas typically lasts 50 to 80 years with routine maintenance. The finish coat will need refreshing or re-coating every 10 to 20 years depending on sun exposure, but the structural stucco system itself — the scratch coat, brown coat, and lath — can last the lifetime of the building. Regular inspection and prompt repair of any cracks or damage are key to maximizing longevity.',
  },
  {
    question: 'Is stucco more energy-efficient than other siding?',
    answer:
      'Yes, stucco provides meaningful energy efficiency advantages over many common siding materials. Its thermal mass absorbs heat during the day and releases it slowly, reducing peak cooling loads — a significant benefit in Austin where air conditioning accounts for a large portion of energy costs. EIFS (synthetic stucco) systems take this further with built-in foam insulation that can dramatically improve a wall\'s R-value. Studies show stucco and EIFS can reduce energy costs by 10-25% compared to vinyl or fiber cement siding.',
  },
  {
    question: 'What exterior stucco styles are popular in Austin?',
    answer:
      'Austin\'s most popular stucco styles include smooth finishes for modern and contemporary homes, Santa Barbara textures for Hill Country and Mediterranean-inspired designs, and dash finishes for traditional ranch-style properties. Lighter earth tones and warm whites are the dominant colors, though darker accent colors are increasingly popular on modern builds. EIFS systems are common on commercial properties and newer mixed-use developments.',
  },
  {
    question: 'How do I maintain my stucco exterior?',
    answer:
      'Maintaining stucco in Austin is straightforward: inspect your exterior twice a year (ideally spring and fall), promptly seal any cracks with appropriate caulk or stucco patch, keep sprinklers directed away from walls, maintain proper drainage at the base of the stucco, clean mildew or algae with a mild detergent and soft brush, and have any damage professionally assessed before it spreads. We recommend a professional inspection every 3-5 years for Austin homes.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Exterior Stucco Contractor Austin, TX',
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
    'Full-service exterior stucco contractor in Austin, TX. Installation, repair, finishing & re-coat for homes & businesses. Call (512) 706-9699 for a free estimate.',
}

const stuccoBenefits = [
  {
    icon: Flame,
    title: 'Fire Resistance',
    desc: 'Stucco provides a one-hour fire rating, offering critical protection during Texas wildfire season and in neighborhoods near the wildland-urban interface.',
  },
  {
    icon: Thermometer,
    title: 'Energy Efficiency',
    desc: 'Stucco\'s thermal mass absorbs and slowly releases heat, reducing peak cooling loads and lowering energy bills during Austin\'s long, hot summers.',
  },
  {
    icon: Sparkles,
    title: 'Curb Appeal',
    desc: 'From smooth modern to textured traditional, stucco offers more design flexibility than most cladding materials — with integral color that never needs painting.',
  },
  {
    icon: Home,
    title: 'Durability',
    desc: 'A properly installed stucco system lasts 50-80 years with minimal maintenance. The structural system can outlast the building itself.',
  },
  {
    icon: Building2,
    title: 'Versatility',
    desc: 'Stucco works on residential, commercial, and mixed-use buildings. It can be applied to masonry, wood framing, steel framing, and ICF construction.',
  },
  {
    icon: CheckCircle,
    title: 'Low Maintenance',
    desc: 'Unlike wood siding that needs regular painting or vinyl that can warp, stucco requires only periodic inspection and minor maintenance to stay in excellent condition.',
  },
]

export default function ExteriorStucco() {
  return (
    <>
      <SEO
        title="Exterior Stucco Contractor in Austin, TX | Star Stucco of Austin"
        description="Full-service exterior stucco contractor in Austin, TX. Installation, repair, finishing & re-coat for homes & businesses. Call (512) 706-9699 for a free estimate."
        path="/exterior-stucco-austin-tx"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-home-exterior-hero.webp"
            alt="Beautiful stucco home exterior in Austin, TX"
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
            <span className="text-primary-400">Exterior Stucco</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Exterior Stucco Contractor in Austin, TX
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-8">
              Star Stucco of Austin provides comprehensive exterior stucco services — from new installations and full re-stucco to expert repairs, finishing, and protective re-coats. One contractor for every stucco need on your Austin home or commercial property.
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
            Benefits of Stucco Exteriors in Austin
          </h2>
          <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-12">
            Stucco is one of the most durable, versatile, and energy-efficient exterior cladding systems available — and it is particularly well suited to Austin's climate and architectural traditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stuccoBenefits.map((item) => (
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

      {/* Stucco vs Other Cladding */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Stucco vs. Other Exterior Cladding Options
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Austin homeowners choosing an exterior cladding system typically compare stucco to fiber cement (HardiePlank), stone veneer, brick, and vinyl siding. Each has its place, but stucco offers a combination of benefits that is hard to match — particularly in the Central Texas climate.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-5">
                Compared to fiber cement, stucco provides better thermal mass, superior fire resistance, and a seamless monolithic appearance without visible panel joints or lap marks. Unlike vinyl siding, stucco will not warp, melt, or become brittle under Austin's extreme UV exposure. And while natural stone and brick are durable, they cost significantly more per square foot and limit design flexibility.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Stucco also excels at accommodating architectural curves, arches, rounded columns, and other complex shapes that are difficult or impossible with panel-based systems. For Austin's diverse architecture — from clean-lined modern builds to curved Mediterranean facades — stucco provides both the aesthetic range and the performance characteristics that homeowners and architects demand.
              </p>
            </div>
            <div>
              <img
                src="/images/residential-stucco-austin.webp"
                alt="Residential stucco exterior in Austin neighborhood"
                className="rounded-2xl shadow-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Austin Architectural Styles */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco for Austin's Architectural Styles
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Austin's architectural landscape is remarkably diverse, and stucco is one of the few exterior materials that works across the full spectrum. In the Hill Country communities west of Austin — Lakeway, Bee Cave, Dripping Springs — stucco complements the native limestone and rustic timber that define the regional style. Santa Barbara and lace textures in warm earth tones blend naturally with the landscape and deliver the low-maintenance durability these semi-rural properties need.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Modern and contemporary homes — increasingly prominent in East Austin, South Congress, and central Austin infill developments — favor smooth stucco finishes in whites, grays, and charcoals. The clean, monolithic surface emphasizes geometric forms and pairs beautifully with metal panels, wood soffits, and large expanses of glass. Our <Link to="/stucco-finishing-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">stucco finishing team</Link> has extensive experience with the precision application that smooth finishes demand.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Mediterranean and Spanish Colonial styles remain popular in developments like Barton Creek, Spanish Oaks, and Rob Roy. These homes call for heavier textures, deep window reveals, arched openings, and rich warm colors — all of which stucco delivers naturally. Ranch-style homes throughout the suburbs benefit from dash and sand float finishes that provide excellent durability with a traditional aesthetic.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            For <Link to="/austin-commercial-stucco" className="text-primary-700 hover:text-primary-800 font-medium">commercial properties</Link>, stucco and EIFS systems are widely used on office buildings, retail centers, restaurants, and mixed-use developments throughout Austin. These systems deliver code-compliant fire ratings, energy-efficient wall assemblies, and consistent architectural finishes across large building facades.
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Our Exterior Stucco Services
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Star Stucco of Austin is a full-service exterior stucco contractor. We handle every phase of a stucco project — from initial consultation and system design through installation, finishing, and long-term maintenance. Our services include:
          </p>
          <ul className="space-y-3 mb-5">
            {[
              { label: 'New stucco installation', link: '/stucco-installation-austin-tx', text: 'for new construction and re-stucco projects' },
              { label: 'Stucco repair', link: '/austin-stucco-repair', text: 'for cracks, water damage, and structural failures' },
              { label: 'Stucco finishing and textures', link: '/stucco-finishing-austin-tx', text: 'including custom color and texture matching' },
              { label: 'Re-coat and color coat', link: '/stucco-recoat-austin-tx', text: 'to refresh faded or aging stucco exteriors' },
              { label: 'Stucco inspection', link: '/stucco-inspection-austin-tx', text: 'to identify hidden damage and moisture issues' },
            ].map((service) => (
              <li key={service.label} className="flex gap-3 text-secondary-600">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                <span><Link to={service.link} className="text-primary-700 hover:text-primary-800 font-medium">{service.label}</Link> {service.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-secondary-600 leading-relaxed">
            Whether you need a small patch repair or a complete exterior stucco system for a new build, Star Stucco of Austin has the experience, equipment, and craftsmanship to deliver results that last. We serve homeowners, builders, property managers, and commercial clients throughout Austin, Travis County, and the surrounding Hill Country communities.
          </p>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Maintaining Your Stucco Exterior in Texas
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Stucco is a low-maintenance cladding, but it is not zero-maintenance — especially in Austin's demanding climate. A few simple habits will keep your stucco looking great and performing well for decades. Inspect your exterior twice a year, ideally in spring after severe weather season and in fall before the cooler months. Look for new cracks, staining, efflorescence (white crystalline deposits), and any areas where the stucco sounds hollow when tapped.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Keep vegetation trimmed back from stucco walls — plant contact traps moisture and encourages mold and algae growth. Ensure sprinklers are not hitting stucco surfaces, as repeated wetting causes premature wear and can drive moisture behind the cladding. Maintain proper drainage at the base of every stucco wall, keeping soil, mulch, and hardscape at least four inches below the weep screed.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            When you spot damage, address it promptly. A hairline crack is a quick, inexpensive repair today — but six months of Austin rain entering that crack can lead to moisture damage, mold, and a repair bill ten times larger. If you are unsure about the condition of your stucco, schedule a professional inspection. We provide thorough assessments and honest recommendations throughout the Austin area.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        subtitle="Common questions about exterior stucco for Austin homes and businesses."
      />

      {/* Related Links */}
      <RelatedLinks
        links={[
          { label: 'Stucco Installation', path: '/austin-stucco-installation', desc: 'New stucco installation for Austin new construction and re-stucco projects.' },
          { label: 'Commercial Stucco', path: '/austin-commercial-stucco', desc: 'Stucco installation and repair for Austin commercial properties.' },
          { label: 'Stucco Finishing & Textures', path: '/stucco-finishing-austin-tx', desc: 'Custom stucco finishes and textures for every architectural style.' },
          { label: 'Stucco Re-Coat', path: '/stucco-recoat-austin-tx', desc: 'Professional re-coat and color coat services to refresh aging stucco.' },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free Exterior Stucco Estimate
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Ready to install, repair, or refresh the stucco on your Austin property? Contact Star Stucco for a free consultation and estimate. Call (512) 706-9699 or schedule online.
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
