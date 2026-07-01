export interface CountyPageData {
  slug: string
  county: string
  countyShort: string
  seoTitle: string
  metaDescription: string
  heroH1: string
  heroIntro: string
  localIntro: {
    heading: string
    paragraphs: string[]
  }
  highlights: { stat: string; label: string }[]
  communities: string[]
  services: {
    title: string
    description: string
    path: string
  }[]
  whyChooseUs: {
    heading: string
    benefits: string[]
  }
  commonProblems: {
    intro: string
    problems: { title: string; description: string }[]
  }
  process: {
    steps: { title: string; description: string }[]
  }
  faqs: { question: string; answer: string }[]
  cta: {
    heading: string
    description: string
  }
}
