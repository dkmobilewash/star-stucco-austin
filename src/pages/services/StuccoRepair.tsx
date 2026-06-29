import { Link } from 'react-router-dom'
import { ChevronRight, Phone, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SEO from '../../components/SEO'
import { siteConfig } from '../../lib/siteConfig'
import { faqPageSchema, type FAQ } from '../../components/FAQ'

const faqs: FAQ[] = [
  {
    question: 'How do I know if my stucco needs repair or full replacement?',
    answer:
      'If the damage is limited to isolated cracks, small holes, or localized water staining, repair is almost always the right approach. Full replacement is only warranted when you have widespread delamination across multiple walls, extensive moisture intrusion behind the stucco that has compromised the lath and substrate, or structural failure affecting large sections. Our free on-site inspection includes probe testing and moisture readings to determine definitively whether repair or replacement is the correct path for your home.',
  },
  {
    question: 'Can stucco repair be color-matched to the existing wall?',
    answer:
      'Yes. Color matching is one of our specialties. We use integral pigments mixed directly into the finish coat rather than surface-applied paint, and we account for how your existing stucco has weathered and faded over time. We prepare on-site samples cured in actual Austin sunlight so you can approve the match before we proceed. The goal is always a repair that is invisible to anyone who was not there to see the original damage.',
  },
  {
    question: 'How long does stucco repair take in Austin?',
    answer:
      'Most residential stucco repairs in Austin are completed in one to two days. Simple crack filling and texture matching can often be done in a single visit. Larger repairs involving water damage remediation, substrate replacement, or multi-coat stucco rebuilding may take two to three days to allow proper curing time between coats. Austin\'s summer heat can accelerate drying but requires careful timing to avoid improper curing. We always confirm the timeline with you before any work begins.',
  },
  {
    question: 'Does stucco repair require a permit in Austin, TX?',
    answer:
      'Minor stucco repairs — crack filling, patching small areas, texture matching, and re-coating — generally do not require a building permit in Austin or Travis County. However, if the repair involves structural modifications, significant substrate replacement, or work that affects the building envelope on a large scale, a permit may be required. We handle all permitting when needed and ensure every repair meets or exceeds local building code requirements.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Stucco Repair Austin, TX',
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
    'Professional stucco repair in Austin, TX. We fix cracks, water damage, holes & texture mismatches. Fast turnaround, free estimates. Call (512) 706-9699.',
  serviceType: 'Stucco Repair',
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

export default function StuccoRepair() {
  return (
    <>
      <SEO
        title="Stucco Repair in Austin, TX | Star Stucco of Austin"
        description="Expert stucco crack repair, patching & restoration across Austin, TX. Licensed & insured. Call Star Stucco of Austin at (512) 706-9699 for a free estimate today."
        path="/austin-stucco-repair"
        schema={[schema, faqPageSchema(faqs)]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-repair-hero.webp"
            alt="professional stucco repair on Austin TX home exterior"
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
            <span className="text-primary-400">Stucco Repair</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Professional Stucco Repair in Austin, TX
          </h1>
          <p className="text-lg text-secondary-300 mb-8 max-w-2xl leading-relaxed">
            Cracks, water damage, and structural failures fixed right the first time. Star Stucco's Austin repair team addresses the root cause so your stucco stays solid for years — not just weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco of Austin for a free stucco repair estimate"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (512) 706-9699
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-secondary-400 hover:bg-secondary-800"
            >
              Get a Free Estimate <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Stucco Problems */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Common Stucco Problems in Austin Homes
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-10">
            Austin's unique combination of intense heat, expansive clay soils, and seasonal storms creates specific stucco problems that we see across the metro every week. Below are the most common issues we diagnose and repair for Austin homeowners.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Stucco Cracks & Hairline Fractures
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Hairline cracks are the most common stucco problem in Austin. They typically appear at window and door corners, along control joints, and where different building materials meet. While individual hairline cracks may seem minor, they allow moisture into the wall system, which accelerates deterioration in Austin's wet-dry climate cycle.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Larger structural cracks — stair-step patterns, horizontal separations, or cracks wider than a credit card — often indicate foundation movement and require prompt professional assessment. Left untreated, these cracks expand with each seasonal soil shift and can lead to full wall failure.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Water Damage & Moisture Intrusion
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Water intrusion behind stucco is the most destructive problem we encounter. When moisture breaches the exterior through cracks, failed flashings, or missing caulk, it becomes trapped behind the stucco layer. Signs include dark staining that reappears after cleaning, bubbling or soft spots, white crystalline deposits (efflorescence), and musty odors near exterior walls.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Austin's spring storms can deliver several inches of rain in hours, and if your stucco has any entry points, that moisture gets trapped behind the wall during the long, hot drying season. The result is mold growth, wood rot, and metal lath corrosion — damage that compounds rapidly if not addressed. Our <Link to="/austin-stucco-remediation" className="text-primary-700 hover:text-primary-800 font-medium">stucco remediation service</Link> handles severe moisture intrusion cases.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Stucco Holes, Chips & Impact Damage
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Hailstorms, falling tree limbs, errant baseballs, and removed fixtures all leave holes and chips in stucco exteriors. These are straightforward repairs when caught early — we rebuild the damaged area from the lath up, match the existing texture and color, and leave a seamless finish. Delaying repair allows moisture to enter the wall cavity through the opening, turning a simple patch job into a more extensive water damage restoration.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Delamination & Bubbling Stucco
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Delamination occurs when the stucco separates from the underlying lath or substrate. You can often detect it by tapping the wall — delaminated areas produce a hollow, drum-like sound instead of a solid thud. Bubbling is a visible symptom of the same problem, where trapped moisture or poor bonding causes the stucco to lift away from the wall.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Both conditions require removing the failed section completely, inspecting the substrate and lath for damage, making any necessary structural repairs, and rebuilding the stucco system from scratch. Surface patching over delaminated stucco will not hold — the new material has nothing solid to bond to. When delamination is widespread, a full <Link to="/austin-stucco-installation" className="text-primary-700 hover:text-primary-800 font-medium">stucco installation</Link> may be the most cost-effective long-term solution.
          </p>
        </div>
      </section>

      {/* Why Austin Homes Develop Stucco Damage */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Why Austin Homes Develop Stucco Damage
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-10">
            Understanding what causes stucco damage in Austin helps homeowners recognize problems early and make informed repair decisions. Three environmental factors drive the vast majority of stucco failures in our area.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Texas Heat & UV Exposure
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Austin regularly sees 100+ degree days from June through September, and south- and west-facing stucco walls can reach surface temperatures exceeding 140°F. This intense heat causes the stucco to expand during the day and contract as temperatures drop at night — a cycle that repeats hundreds of times each year. Over time, this thermal cycling weakens the stucco bond and opens hairline fractures.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Austin's extreme UV radiation also degrades stucco pigments and sealants faster than in less sunny climates. Finishes fade, protective coatings break down, and the stucco surface becomes more porous and vulnerable to moisture penetration. Homes in sun-exposed neighborhoods like Circle C Ranch, Steiner Ranch, and along the western Hill Country corridor are particularly affected.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Foundation Movement & Soil Settling
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Austin sits on some of the most expansive clay soils in Texas. When heavy rains saturate the ground, clay swells and lifts; during drought, it shrinks dramatically. This constant soil movement stresses foundations and exterior walls, driving cracks through stucco surfaces. Homes in East Austin, along the Balcones Fault zone, and in neighborhoods like Avery Ranch and Circle C Ranch built on heavy clay are especially prone to this type of damage.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Even properly installed control joints cannot fully absorb the movement caused by significant foundation shifting. When we see patterns of cracking that follow foundation lines or radiate from corners, we recommend a foundation assessment before proceeding with stucco repair to ensure the root cause is addressed.
          </p>

          <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
            Heavy Rain & Moisture Events
          </h3>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Central Texas is known for sudden, intense rain events. Flash floods and multi-inch downpours are a regular occurrence during spring and fall storm seasons. These events overwhelm drainage systems and drive water against exterior walls with force, exploiting any crack, gap, or flashing failure in the stucco system.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            The combination of heavy rain followed by extended heat creates a particularly damaging cycle: water enters the wall during a storm, then gets trapped as the exterior dries and seals in the Texas sun. This trapped moisture causes internal damage — rot, mold, corrosion — that may not become visible on the exterior for months. Regular <Link to="/stucco-inspection-austin-tx" className="text-primary-700 hover:text-primary-800 font-medium">stucco inspections</Link> catch these hidden problems before they become costly.
          </p>
        </div>
      </section>

      {/* Our Stucco Repair Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
                Our Stucco Repair Process in Austin
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-8">
                Every stucco repair we perform follows a proven four-step process designed to identify the root cause, provide transparent pricing, execute a lasting repair, and leave your property clean.
              </p>

              <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                Step 1 — Free On-Site Stucco Inspection
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                We start with a thorough visual and hands-on inspection of your stucco exterior. Our technicians tap-test for delamination, check flashings and control joints, examine drainage paths, and use moisture meters to detect hidden water intrusion. This diagnostic step is free and comes with no obligation.
              </p>

              <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                Step 2 — Damage Assessment & Written Quote
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                After the inspection, we provide a detailed written assessment explaining what we found, what caused the damage, and exactly what repairs are needed. The quote includes materials, labor, and timeline — no hidden costs, no surprises. If we determine the damage is beyond repair and requires <Link to="/austin-stucco-remediation" className="text-primary-700 hover:text-primary-800 font-medium">full remediation</Link>, we will tell you directly.
              </p>

              <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                Step 3 — Stucco Repair & Seamless Color Match
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-6">
                We remove all compromised material down to solid substrate, address any underlying issues (rot, corrosion, failed lath), and rebuild the stucco system coat by coat. The <Link to="/austin-stucco-finishing" className="text-primary-700 hover:text-primary-800 font-medium">finishing coat</Link> is texture- and color-matched to your existing wall using integral pigments and field-verified samples so the repair blends invisibly with the surrounding surface.
              </p>

              <h3 className="font-display text-xl font-bold text-secondary-900 mb-3">
                Step 4 — Final Walkthrough & Cleanup
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Once the repair has cured, we conduct a final walkthrough with you to verify the quality of the work, the accuracy of the color and texture match, and that every detail meets your expectations. We clean up all materials and debris, leaving your property exactly as we found it — minus the stucco damage.
              </p>
            </div>
            <div>
              <img
                src="/images/stucco-repair-closeup.webp"
                alt="stucco crack and water damage on Austin home"
                className="rounded-2xl shadow-lg sticky top-8"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            How Much Does Stucco Repair Cost in Austin, TX?
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Stucco repair costs in Austin typically range from $300 to $600 for minor crack patching and texture matching, $800 to $2,000 for moderate repairs involving small sections of water damage or delamination, and $2,000 to $5,000 or more for extensive repairs that require substrate replacement or multi-wall work. The final price depends on the size and severity of the damage, wall height and accessibility, the type of finish that needs to be matched, and whether any underlying structural issues need to be addressed.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We provide free, detailed written estimates after an on-site inspection so you know exactly what to expect before any work begins. There are no hidden fees or surprise charges — the price we quote is the price you pay. For a deeper breakdown of repair costs by type, see our <Link to="/blog/stucco-repair-cost-austin" className="text-primary-700 hover:text-primary-800 font-medium">Austin stucco repair cost guide</Link>.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            One important consideration: delaying repair almost always increases cost. A $400 crack repair today can become a $3,000 water damage restoration after a single Austin storm season. Early intervention is the most cost-effective approach to stucco maintenance.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Stucco Repair Service Areas in Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Star Stucco of Austin provides stucco repair services throughout Austin and the surrounding Central Texas region. We regularly work in neighborhoods across the city including East Austin, Circle C Ranch, South Congress, Barton Hills, Hyde Park, Tarrytown, Westlake Hills, Mueller, Travis Heights, Rollingwood, Steiner Ranch, Avery Ranch, and the Domain area.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Beyond Austin proper, we serve homeowners and businesses in Round Rock, Cedar Park, Georgetown, Pflugerville, Lakeway, Bee Cave, Dripping Springs, Kyle, Buda, Manor, Leander, and Liberty Hill. Our service area covers Travis County, Williamson County, Hays County, Bastrop County, and surrounding Central Texas counties.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Soil conditions, building ages, and exposure patterns vary significantly across the Austin metro. Our team understands the specific stucco challenges in each area — from the heavy clay soils east of I-35 to the limestone-rich terrain of the western Hill Country communities — and we tailor our repair approach accordingly.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Why Austin Homeowners Choose Star Stucco of Austin
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-5">
            Star Stucco of Austin has completed over 9,000 stucco projects across Central Texas since 2013. We are a family-owned company that employs our own crews — no subcontractors, no day labor. Every technician on your project is OSHA-trained, scaffold-certified, and experienced with the specific stucco systems and climate conditions found in Austin.
          </p>
          <p className="text-secondary-600 leading-relaxed mb-5">
            We are certified applicators for Sto Corp, Senergy/BASF, Master Wall, Dryvit, and Parex LaHabra — including <Link to="/eifs-contractor-austin" className="text-primary-700 hover:text-primary-800 font-medium">EIFS and synthetic stucco</Link> systems. These manufacturer certifications mean we have been trained and evaluated on proper installation and repair techniques for every major stucco system on the market. When we repair your stucco, we use the correct materials and methods specified by the system manufacturer.
          </p>
          <p className="text-secondary-600 leading-relaxed">
            Every repair comes with a warranty covering both materials and workmanship. We stand behind our work because we do it right the first time — diagnosing the root cause, not just patching the visible symptoms. Call us at <a href="tel:+15127069699" className="text-primary-700 hover:text-primary-800 font-medium">(512) 706-9699</a> or <Link to="/contact" className="text-primary-700 hover:text-primary-800 font-medium">request a free estimate online</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
            Stucco Repair FAQs
          </h2>
          <p className="text-secondary-600 text-center mb-12">
            Common questions about stucco repair in Austin answered by our team.
          </p>
          <div className="rounded-2xl bg-white border border-secondary-200 px-6 sm:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Stucco Services */}
      <section className="py-20 bg-secondary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-secondary-900 mb-6">
            Related Stucco Services in Austin, TX
          </h2>
          <p className="text-secondary-600 leading-relaxed mb-6">
            In addition to stucco repair, Star Stucco of Austin offers a full range of stucco services for residential and commercial properties across the Austin metro area.
          </p>
          <ul className="space-y-4">
            <li>
              <Link to="/austin-stucco-installation" className="text-primary-700 hover:text-primary-800 font-medium">Stucco Installation Austin, TX</Link>
              <span className="text-secondary-600"> — New construction stucco and complete re-stucco for Austin homes and businesses.</span>
            </li>
            <li>
              <Link to="/austin-stucco-finishing" className="text-primary-700 hover:text-primary-800 font-medium">Stucco Finishing & Textures Austin, TX</Link>
              <span className="text-secondary-600"> — Custom textures including smooth, Santa Barbara, dash, sand, and lace finishes.</span>
            </li>
            <li>
              <Link to="/austin-stucco-installation" className="text-primary-700 hover:text-primary-800 font-medium">Residential Stucco Austin, TX</Link>
              <span className="text-secondary-600"> — Full-service residential stucco for new builds and re-stucco projects.</span>
            </li>
            <li>
              <Link to="/eifs-contractor-austin" className="text-primary-700 hover:text-primary-800 font-medium">EIFS Contractor Austin, TX</Link>
              <span className="text-secondary-600"> — Exterior Insulation and Finish Systems installation, repair, and remediation.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't Let Stucco Damage Get Worse
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Small cracks become big problems when Austin's next heavy rain arrives. Contact Star Stucco for a free inspection and repair estimate before minor damage turns into a costly restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15127069699"
              aria-label="Call Star Stucco of Austin for a free stucco repair estimate"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call (512) 706-9699
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-secondary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-secondary-400"
            >
              Schedule a Free Inspection <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
