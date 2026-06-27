import { Link } from 'react-router-dom'
import { ChevronRight, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import { siteConfig } from '../lib/siteConfig'

const services = [
  {
    title: 'Stucco Installation',
    path: '/austin-stucco-installation',
    image:
      'https://sardarrestoration.com/wp-content/uploads/2025/12/Best-Practices-For-Proper-Stucco-Installation-1024x683.png',
    description:
      'Complete new stucco installation for residential and commercial properties. We work with traditional three-coat stucco, one-coat systems, and EIFS to deliver a flawless exterior that protects your Austin home from the Texas elements.',
    features: [
      'Traditional three-coat stucco systems',
      'One-coat stucco applications',
      'EIFS (Exterior Insulation and Finish System)',
      'New construction and re-siding',
    ],
  },
  {
    title: 'Stucco Repair',
    path: '/austin-stucco-repair',
    image:
      'https://www.imperialpaintinginc.com/wp-content/uploads/2024/02/stucco-repair.webp',
    description:
      'Expert diagnosis and repair of cracks, water damage, delamination, and structural stucco issues. We address the root cause, not just the symptoms, so repairs last for years even in Austin\'s demanding climate.',
    features: [
      'Crack repair and patching',
      'Water damage restoration',
      'Delamination and bulge repair',
      'Foundation movement damage',
    ],
  },
  {
    title: 'Stucco Finishing',
    path: '/austin-stucco-finishing',
    image:
      'https://stuccoboy.com/wp-content/uploads/2023/11/MDP09625-scaled.jpg',
    description:
      'Custom textures, colors, and finishes to match any architectural style -- from the smooth contemporary look popular in Mueller to the rustic Santa Barbara finish beloved in Westlake Hills and Barton Creek.',
    features: [
      'Smooth and sand finishes',
      'Santa Barbara and lace textures',
      'Dash and skip trowel finishes',
      'Custom color matching',
    ],
  },
  {
    title: 'EIFS / Synthetic Stucco',
    path: '/eifs-contractor-austin',
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG1i9jAG3XB6C9PbVCOXqpjT4I1aKypL3IcwM7dX8sygD6D5Ma45nL_ifBvJ8JeBpJaiThipCbC96nZI5yQIKVQyf6qEO7eges0BHuono-yKdqaynwrhvpUULfXs0tQhspuaRd5zCGptLg=s1360-w1360-h1020-rw',
    description:
      'Licensed EIFS (Exterior Insulation and Finish System) installation, repair, and replacement for Austin and the surrounding Hill Country. We work with Dryvit, Parex, Sto, and Master Wall systems on residential and commercial properties.',
    features: [
      'EIFS installation and full replacement',
      'EIFS crack, impact, and moisture repair',
      'Dryvit repair, restoration, and color matching',
      'Commercial EIFS for retail, office, and multifamily',
    ],
  },
  {
    title: 'Commercial Stucco',
    path: '/austin-commercial-stucco',
    image:
      'https://lugopainting.com/wp-content/uploads/2022/09/shutterstock_54282826h-1024x731.jpg',
    description:
      'Large-scale stucco solutions for offices, retail, restaurants, multi-family developments, and mixed-use projects throughout the Austin metro area. We handle projects from 1,000 to 100,000+ square feet.',
    features: [
      'Office and retail exteriors',
      'Multi-family and apartment complexes',
      'Restaurant and hospitality',
      'Mixed-use developments',
    ],
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Stucco Services',
  provider: {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    telephone: siteConfig.phone,
  },
  areaServed: {
    '@type': 'City',
    name: 'Austin, TX',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Stucco Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
      position: index + 1,
    })),
  },
}

export default function Services() {
  return (
    <>
      <SEO
        title="Stucco Services Austin, TX | Star Stucco of Austin"
        description="Comprehensive stucco services in Austin, TX -- installation, repair, finishing, and commercial projects. Expert stucco contractors serving Travis County and the Austin metro area."
        path="/austin-stucco-services"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-secondary-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4">
              Our Services
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Stucco Services in Austin, TX
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              From new installations to expert repairs, Star Stucco of Austin
              delivers premium stucco craftsmanship tailored to Central Texas
              homes and businesses. Explore our full range of services below.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.path}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div
                  className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <Link to={service.path} className="block group">
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={`${service.title} in Austin, TX`}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        width={800}
                        height={500}
                        loading="lazy"
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-secondary-700"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100">
                          <ChevronRight className="h-3 w-3 text-primary-700" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="inline-flex items-center rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/20"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Schedule a free on-site consultation and our experts will assess your
            property and recommend the best solution for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 hover:shadow-lg"
            >
              Get a Free Estimate
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              aria-label={`Call Star Stucco at ${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-lg border border-primary-400 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-primary-800"
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
