interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
  heading?: string
  label?: string
  dark?: boolean
}

export default function FAQ({ items, heading = 'Frequently Asked Questions', label = 'FAQ', dark = false }: FAQProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <section className={`py-20 ${dark ? 'bg-navy-dark' : 'bg-navy-50'}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className={`section-label ${dark ? 'text-brand-blue' : ''}`}>{label}</span>
          <h2 className={`section-heading ${dark ? 'text-white' : ''}`}>
            {heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-brand-orange">{heading.split(' ').slice(-1)}</span>
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((faq) => (
            <details
              key={faq.q}
              className={`group rounded-xl border ${dark ? 'bg-navy-light/20 border-white/10' : 'bg-white border-gray-100'} overflow-hidden`}
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                <span className={`font-heading font-bold text-base ${dark ? 'text-white' : 'text-navy'}`}>
                  {faq.q}
                </span>
                <span className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0 transition-transform duration-200 group-open:rotate-45">
                  <svg className="w-3 h-3 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className={`px-6 pb-5 text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-gray-600'}`}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
