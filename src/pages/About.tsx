import { Link } from 'react-router-dom'
import { Shield, Heart, Users, Award, ChevronRight, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'

const values = [
  {
    icon: Shield,
    title: 'Quality Craftsmanship',
    description:
      'Every project meets our rigorous standards. We use premium materials and time-tested techniques that stand up to the Austin heat.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description:
      'We live and work in Austin. From sponsoring Zilker Park cleanups to supporting local schools, we invest in the neighborhoods we serve.',
  },
  {
    icon: Users,
    title: 'Customer Relationships',
    description:
      'Over 60% of our business comes from referrals. We treat every homeowner like a neighbor because in Austin, they usually are.',
  },
  {
    icon: Award,
    title: 'Continuous Improvement',
    description:
      'Our team stays current with the latest stucco technologies and sustainable building practices to deliver the best results.',
  },
]

const certifications = [
  'Licensed Texas Contractor',
  'EIFS Industry Members Association (EIMA)',
  'Austin Chamber of Commerce Member',
  'BBB Accredited Business (A+ Rating)',
  'OSHA Safety Certified',
  'Texas Residential Construction Commission',
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    foundingDate: '2011',
    areaServed: {
      '@type': 'City',
      name: 'Austin, TX',
    },
  },
}

export default function About() {
  return (
    <>
      <SEO
        title="About Star Stucco | Austin's Trusted Stucco Contractor"
        description="Learn about Star Stucco of Austin, a family-owned stucco contractor with 15+ years serving Travis County. Expert installation, repair, and finishing across the Austin metro area."
        path="/about"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-900">
        <div className="absolute inset-0">
          <img
            src="/images/stucco-home-exterior-hero.webp"
            alt="Austin, Texas skyline near Lady Bird Lake"
            className="h-full w-full object-cover opacity-25"
            width={1600}
            height={900}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              About Our Company
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Austin's Trusted Stucco Experts Since 2011
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              For over 15 years, Star Stucco of Austin has been transforming homes
              and businesses across Travis County with expert stucco craftsmanship
              built to withstand the Texas climate.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Our Story in Austin
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Star Stucco of Austin has been serving the Austin area since 2013.
                  Founded by a team of experienced stucco artisans who saw a need for
                  premium, detail-oriented stucco services in the booming Austin market,
                  what started as a small crew working on homes near Lady Bird Lake and
                  Barton Springs has grown into one of Travis County's most respected
                  stucco contractors.
                </p>
                <p>
                  Over 15 years and more than 2,500 projects later, we've left
                  our mark across every corner of Austin -- from the historic
                  bungalows of Hyde Park and Tarrytown to the modern builds in
                  Mueller and The Domain. We've watched this city grow and
                  evolve, and we've been proud to help shape its architectural
                  character along the way.
                </p>
                <p>
                  Our deep understanding of Austin's unique climate challenges --
                  the intense UV exposure, the clay-heavy soils, the sudden
                  spring storms that roll across Zilker Park -- informs every
                  project we take on. We don't just apply stucco; we engineer
                  exterior systems that protect Austin homes for decades.
                </p>
                <p>
                  Today, Star Stucco of Austin serves homeowners and businesses
                  throughout the greater Austin area, including Round Rock, Cedar
                  Park, Georgetown, Pflugerville, Westlake, Lakeway, Bee Cave,
                  Dripping Springs, and Kyle. Our family-owned approach means
                  every client gets the personal attention and quality
                  craftsmanship that built our reputation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/star-stucco-team-working.webp"
                alt="Star Stucco of Austin team working on a residential project"
                className="rounded-2xl shadow-2xl"
                width={800}
                height={600}
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary-700 p-6 shadow-lg">
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-sm text-primary-100">Years Serving Austin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-secondary-600 text-lg">
              These principles guide every project we take on, from a small
              repair in South Congress to a full commercial installation in the
              Domain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 shadow-sm border border-secondary-100 transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-5">
                  <value.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/star-stucco-team-group.webp"
                alt="Star Stucco of Austin team members on a job site"
                className="rounded-2xl shadow-xl"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Meet Our Team
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  Our crew of 25+ skilled stucco professionals brings a combined
                  200 years of experience to every job. From master plasterers
                  who can match any historic texture to specialists in modern
                  EIFS systems, our team has the expertise to handle projects of
                  any scale.
                </p>
                <p>
                  Every team member is background-checked, fully insured, and
                  OSHA safety certified. We invest heavily in ongoing training to
                  stay at the forefront of stucco technology and sustainable
                  building practices.
                </p>
                <p>
                  When you hire Star Stucco, you're not just getting contractors
                  -- you're getting neighbors who take pride in making Austin
                  homes look their best, whether they overlook Barton Springs or
                  sit along the trails near Lady Bird Lake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Licenses & Certifications
            </h2>
            <p className="text-secondary-600 text-lg">
              Star Stucco of Austin maintains the highest professional standards
              and industry certifications to ensure quality and accountability on
              every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 rounded-lg border border-secondary-200 bg-white px-5 py-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100">
                  <Award className="h-4 w-4 text-primary-700" />
                </div>
                <span className="text-sm font-medium text-secondary-700">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With Austin's Best?
          </h2>
          <p className="text-secondary-300 text-lg mb-8">
            Join thousands of satisfied Austin homeowners who trust Star Stucco
            for their exterior projects. Get a free, no-obligation estimate
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg"
            >
              Get a Free Estimate
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`${siteConfig.phoneHref}`}
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
