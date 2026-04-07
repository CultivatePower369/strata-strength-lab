import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stratastrengthlab.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://stratastrengthlab.com/contact' },
  ],
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Strata Strength Lab in Oroville, CA. Find our location, ask questions about programs, or book your first free trial class.',
}

const GHL_TRIAL_LINK = '#trial'

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-label text-brand-blue">Get In Touch</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Let&apos;s <span className="text-brand-orange">Connect</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
            Questions about programs, scheduling, or birthday parties? We&apos;d
            love to hear from you. Reach out and a coach will get back to you fast.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Info */}
            <div>
              <span className="section-label">Find Us</span>
              <h2 className="section-heading mb-8">
                Visit Strata in <span className="text-brand-orange">Oroville</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-navy/5 border border-navy/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-base mb-1">Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      1726 Montgomery Street, Unit 8<br />
                      Oroville, CA 95965
                    </p>
                    <a
                      href="https://maps.google.com/?q=1726+Montgomery+Street+Unit+8+Oroville+CA+95965"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-orange text-sm font-heading font-semibold hover:underline mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-navy/5 border border-navy/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-base mb-1">Email</h3>
                    <a
                      href="mailto:info@stratastrengthlab.com"
                      className="text-gray-600 text-sm hover:text-brand-orange transition-colors"
                    >
                      info@stratastrengthlab.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-navy/5 border border-navy/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-base mb-1">Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday – Friday: 3:00 PM – 7:00 PM</p>
                      <p>Saturday: 9:00 AM – 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 bg-navy-50 border border-navy/10 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-10 h-10 text-navy/20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6-10l6-3m0 0l4.553 2.276A1 1 0 0121 7.382v10.764a1 1 0 01-1.447.894L15 17m0-13v13" />
                  </svg>
                  <p className="text-navy/40 text-sm font-heading font-semibold uppercase tracking-wider">
                    Map Embed Coming Soon
                  </p>
                  <a
                    href="https://maps.google.com/?q=1726+Montgomery+Street+Unit+8+Oroville+CA+95965"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange text-sm font-heading font-semibold hover:underline mt-3 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form / CTA */}
            <div>
              <span className="section-label">Start the Conversation</span>
              <h2 className="section-heading mb-3">
                Book Your <span className="text-brand-orange">Free Trial</span>
              </h2>
              <p className="text-gray-600 mb-8">
                The fastest way to get started is to book your free trial class
                below. Want to ask a question first? Fill out the form and a
                coach will reach back out within 24 hours.
              </p>

              <a href={GHL_TRIAL_LINK} className="btn-primary w-full text-center block text-base py-5 mb-8">
                Book Free Trial Class Now
              </a>

              <div className="relative flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-gray-400 text-sm font-heading font-semibold uppercase tracking-widest">
                  or send a message
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Simple contact form — wire to GHL or Formspree when ready */}
              <form
                action="#"
                method="POST"
                className="space-y-5"
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="first_name">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="last_name">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all"
                    placeholder="jane@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all"
                    placeholder="(530) 555-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all resize-none"
                    placeholder="Tell us about your athlete — age, interests, goals..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-base py-4">
                  Send Message
                </button>
                <p className="text-gray-400 text-xs text-center">
                  We typically respond within a few hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        heading="Contact FAQ"
        label="Quick Answers"
        items={[
          {
            q: 'How do I book a free trial class?',
            a: "Click the 'Book Free Trial Class' button on this page. It will take you to a short form where you pick a time that works for you. No payment or commitment required.",
          },
          {
            q: 'Where exactly is Strata Strength Lab located?',
            a: '1726 Montgomery Street, Unit 8, Oroville, CA 95965. We are located in Oroville, California, serving families throughout Butte County.',
          },
          {
            q: 'Is there parking at the facility?',
            a: 'Yes, parking is available on-site. More specific details will be included in your booking confirmation.',
          },
          {
            q: 'How quickly will you respond to my message?',
            a: 'We typically respond within a few hours during business hours. If you need a faster response, booking a trial class directly is the quickest way to connect.',
          },
          {
            q: 'What are your hours?',
            a: 'Monday through Friday 3:00 PM – 7:00 PM, Saturday 9:00 AM – 1:00 PM. Closed Sundays. Hours may expand as we grow — check back or follow us on social media for updates.',
          },
          {
            q: 'Do I need to schedule a visit or can I just walk in?',
            a: "We recommend booking in advance so we can be ready for your athlete. Walk-ins are welcome during open hours but a scheduled trial class ensures you get the coach's full attention.",
          },
        ]}
      />

      {/* Birthday party callout */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl block mb-4">🎉</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight">
            Planning a Birthday Party?
          </h2>
          <p className="mt-4 text-white/60 text-base max-w-xl mx-auto">
            Book Strata for an active, unforgettable celebration. Use the
            contact form above and mention &ldquo;Birthday Party&rdquo; — we&apos;ll reach
            out to coordinate a time and get details to you.
          </p>
        </div>
      </section>
    </>
  )
}
