import { Link } from 'react-router-dom'
import { ChevronRight, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import { FAQSection, faqPageSchema } from '../components/FAQ'
import type { FAQ } from '../components/FAQ'
import { siteConfig } from '../lib/siteConfig'

const generalFaqs: FAQ[] = [
  {
    question: 'What services does Star Stucco of Austin offer as a stucco contractor in Austin, TX?',
    answer: 'Star Stucco of Austin provides a full range of exterior and interior finishing services, including residential and commercial stucco installation, stucco repair, EIFS (Exterior Insulation and Finish Systems), interior plaster, and thin stone veneer. As a stucco contractor in Austin, TX, we’ve completed over 9,000 projects across Central Texas since 2013.',
  },
  {
    question: 'How long has Star Stucco of Austin been serving Austin, TX?',
    answer: 'We’ve been a trusted stucco contractor in Austin, TX since 2013 — 13 years of experience serving homeowners and businesses throughout Central Texas. Over that time we’ve built our reputation on in-house craftsmanship rather than subcontracted labor.',
  },
  {
    question: 'Are you certified to work with specific stucco and EIFS brands?',
    answer: 'Yes. Our team consists of certified applicators for Sto Corp, Dryvit, Senergy/BASF, Parex, and Master Wall. As a stucco contractor in Austin, TX, maintaining these certifications ensures every project is installed to manufacturer specifications, protecting your warranty coverage.',
  },
  {
    question: 'Do you handle both residential and commercial stucco projects in Austin?',
    answer: 'Star Stucco of Austin is fully equipped to handle both residential homes and commercial properties. Whether you need a stucco contractor in Austin, TX for a single-family home or a large commercial building, our in-house crew manages projects of any size.',
  },
  {
    question: 'Do you use subcontractors, or is this an in-house crew?',
    answer: 'We do not use subcontractors — every technician on your job site is a direct employee of Star Stucco of Austin. This in-house model is central to how we operate as a stucco contractor in Austin, TX, ensuring consistent training, safety standards, and accountability on every project.',
  },
  {
    question: 'What areas around Austin do you serve?',
    answer: 'We serve Austin and the surrounding communities including Round Rock, Cedar Park, Georgetown, Pflugerville, Westlake, Lakeway, Bee Cave, Dripping Springs, and Kyle, along with Travis, Williamson, Hays, Bell, Burnet, Comal, Bastrop, Llano, Blanco, Gillespie, Caldwell, Lee, Milam, Brazos, McLennan, and Guadalupe counties. Wherever you are in Central Texas, you can count on a reliable stucco contractor in Austin, TX to bring a full professional crew to your site.',
  },
  {
    question: 'How can I get a free estimate from a stucco contractor in Austin, TX?',
    answer: 'You can call us directly at (512) 706-9699 for a free estimate, or reach out by email at info@starstuccoaustin.com. As a local stucco contractor in Austin, TX, we prioritize clear communication and a fast response so your project can get started quickly.',
  },
]

const stuccoFaqs: FAQ[] = [
  {
    question: 'What is the difference between stucco, EIFS, and stone veneer?',
    answer: 'Traditional stucco is a cement-based exterior finish applied in multiple coats over lath, offering durability and a classic look. EIFS (Exterior Insulation and Finish System) is a lightweight cladding system with integrated insulation that improves energy efficiency. Thin stone veneer uses natural or manufactured stone pieces adhered to a surface for a rustic, elegant appearance. As a stucco contractor in Austin, TX, we install all three and can help you choose the best option for your property.',
  },
  {
    question: 'What is EIFS and how is it different from traditional stucco?',
    answer: 'EIFS (Exterior Insulation and Finish System) is a multi-layered cladding system that wraps a building in continuous insulation, offering better energy efficiency than traditional stucco. As an EIFS-certified stucco contractor in Austin, TX, we recommend it for property owners looking to lower long-term heating and cooling costs.',
  },
  {
    question: 'Do you offer thin stone veneer and interior plaster services?',
    answer: 'Yes. In addition to exterior stucco and EIFS, we install thin stone veneer and offer interior plaster finishes to give properties a natural, elegant look inside and out. We’re more than just a stucco contractor in Austin, TX — we’re a full-service finishing company.',
  },
  {
    question: 'How long does a typical stucco installation take?',
    answer: 'A residential stucco installation typically takes 1–3 weeks depending on the size of the home and complexity of the project. Commercial projects may take longer. As a stucco contractor in Austin, TX with an in-house crew, we control the timeline directly and keep you informed at every stage.',
  },
]

const repairFaqs: FAQ[] = [
  {
    question: 'What should I do if my stucco is cracking or showing damage?',
    answer: 'Cracking, bulging, or discoloration are signs that moisture may be reaching the underlying structure, and should be addressed quickly. As an experienced stucco contractor in Austin, TX, we offer color-matched repair work backed by a 2-year limited warranty, restoring the affected area while addressing the root cause.',
  },
  {
    question: 'What causes stucco to crack?',
    answer: 'Stucco can crack due to settling of the foundation, temperature fluctuations, moisture intrusion, or improper original installation. Central Texas heat and occasional freeze cycles make stucco especially susceptible. As a stucco contractor in Austin, TX, we diagnose the root cause before repairing to prevent the issue from recurring.',
  },
  {
    question: 'Do you offer a warranty on stucco work?',
    answer: 'Yes. All of our stucco work is backed by a 2-year limited warranty covering materials and workmanship. As a stucco contractor in Austin, TX, we stand behind every project and will address any warranty-related concerns promptly.',
  },
]

const allFaqs = [...generalFaqs, ...stuccoFaqs, ...repairFaqs]

export default function FAQs() {
  return (
    <>
      <SEO
        title="Stucco FAQs | Star Stucco of Austin | Austin, TX"
        description="Frequently asked questions about stucco, EIFS, stone veneer, and interior plaster services in Austin, TX. Get answers from Star Stucco of Austin — trusted stucco contractor since 2013."
        path="/faqs"
        schema={faqPageSchema(allFaqs)}
      />

      {/* Hero */}
      <section className="bg-secondary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              FAQs
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Answers to common questions about stucco, EIFS, stone veneer, and
              interior plaster services from a trusted stucco contractor in Austin, TX.
            </p>
          </div>
        </div>
      </section>

      {/* General */}
      <FAQSection
        faqs={generalFaqs}
        title="About Star Stucco of Austin"
        subtitle="General questions about our company, team, and service area."
      />

      {/* Services */}
      <FAQSection
        faqs={stuccoFaqs}
        title="Stucco, EIFS & Stone Veneer"
        subtitle="Questions about the different exterior and interior finishing systems we offer."
      />

      {/* Repair & Warranty */}
      <FAQSection
        faqs={repairFaqs}
        title="Stucco Repair & Warranty"
        subtitle="Questions about stucco damage, repair, and our warranty coverage."
      />

      {/* CTA */}
      <section className="bg-primary-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a Question We Didn't Cover?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Call us or send a message — we're happy to help with any stucco questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 hover:shadow-lg"
            >
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-white/50 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-primary-800"
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
