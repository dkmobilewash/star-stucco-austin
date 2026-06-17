import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FAQ {
  question: string
  answer: string
}

export function faqPageSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

function FAQItem({ question, answer }: FAQ) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-secondary-200 last:border-0">
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
      {open && <p className="pb-5 text-secondary-600 leading-relaxed">{answer}</p>}
    </div>
  )
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
}: {
  faqs: FAQ[]
  title?: string
  subtitle?: string
}) {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-secondary-900 mb-4 text-center">
          {title}
        </h2>
        {subtitle && <p className="text-secondary-600 text-center mb-12">{subtitle}</p>}
        <div className={`rounded-2xl bg-white border border-secondary-200 px-6 sm:px-8 ${subtitle ? '' : 'mt-8'}`}>
          {faqs.map((f) => (
            <FAQItem key={f.question} question={f.question} answer={f.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
