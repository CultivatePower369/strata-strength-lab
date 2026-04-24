import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Strata Strength Lab in Oroville, CA. Find our location, ask questions about programs, or book your first free trial class.',
}


export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-label text-brand-orange">Now Pre-Launching in Oroville</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Something Powerful <span className="text-brand-orange">Is Being Built</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
            We&apos;re currently building out our space. Join the Founding 30 to be among the first families inside.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">

            {/* Info */}
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-heading mb-4">
                Visit Strata in <span className="text-brand-orange">Oroville</span>
              </h2>
              <div className="mb-8 bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-5">
                <p className="text-brand-orange-dark text-sm font-heading font-semibold leading-relaxed">
                  We&apos;re currently building out our space — the facility is coming together fast. Join the Founding 30 to lock in early access and founding member pricing before we open to the public.
                </p>
                <Link href="/founding-30" className="inline-block mt-3 text-sm font-heading font-bold text-brand-orange hover:underline">
                  Learn about the Founding 30 →
                </Link>
              </div>

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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-base mb-1">Phone</h3>
                    <a
                      href="tel:+15309222600"
                      className="text-gray-600 text-sm hover:text-brand-orange transition-colors"
                    >
                      (530) 922-2600
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

              {/* Google Maps Embed */}
              <div className="mt-10 rounded-2xl overflow-hidden h-64 border border-navy/10">
                <iframe
                  src="https://maps.google.com/maps?q=1726+Montgomery+St+Unit+8,+Oroville,+CA+95965&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Strata Strength Lab location"
                />
              </div>
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
