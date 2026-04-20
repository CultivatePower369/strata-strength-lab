import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Kids Birthday Parties in Oroville, CA | Strata Strength Lab',
  description:
    'Book a kids birthday party at Strata Strength Lab in Oroville, CA. Private 2-hour facility rental with obstacle course, climbing wall, relay races, and coached activities. The most active birthday party in Oroville.',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stratastrengthlab.com' },
    { '@type': 'ListItem', position: 2, name: 'Programs', item: 'https://stratastrengthlab.com/programs' },
    { '@type': 'ListItem', position: 3, name: 'Birthday Parties', item: 'https://stratastrengthlab.com/programs/birthday-parties' },
  ],
}

const GHL_TRIAL_LINK = '#trial'

export default function BirthdayPartiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/programs" className="text-brand-blue text-sm font-heading font-semibold hover:underline">← All Programs</Link>
          <span className="text-5xl block mt-4 mb-2">🎉</span>
          <span className="section-label text-brand-blue">Birthday Parties at Strata</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            The Most Active Party <span className="text-brand-orange">in Oroville</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Give your child and their friends a birthday they will actually talk about. Private 2-hour facility rental with the full obstacle course, climbing wall, relay races, and coached activities — all included.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-4">Check Party Availability</a>
            <Link href="/contact" className="btn-outline text-base px-10 py-4">Ask a Question</Link>
          </div>
          <p className="mt-4 text-white/40 text-sm">Weekend availability · Private facility use · Coached activities included</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">What You Get</span>
            <h2 className="section-heading">Everything <span className="text-brand-orange">Included</span></h2>
            <p className="section-subheading max-w-2xl mx-auto">Your party rental includes the full facility and a Strata coach to run the activities. You bring the people and the cake — we handle everything else.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏃', title: 'Full Obstacle Course', body: 'Private access to the complete Ninja Warrior obstacle course. Coaches set up age-appropriate challenges for your group.' },
              { icon: '🧗', title: 'Climbing Wall', body: 'Kids take on the climbing wall with a coach spotting and guiding. Always a crowd favorite at every age.' },
              { icon: '🏅', title: 'Relay Races & Games', body: 'Coaches run structured relay races and team games that keep every kid engaged and moving for the full two hours.' },
              { icon: '👨‍🏫', title: 'Dedicated Coach', body: 'A Strata coach is with your group the entire time — running activities, keeping kids safe, and making sure everyone has a blast.' },
              { icon: '⏱️', title: '2-Hour Private Rental', body: 'The entire facility is yours for two hours. No sharing with other classes or drop-ins during your party window.' },
              { icon: '📅', title: 'Weekend Availability', body: 'Parties are available on Saturday and Sunday mornings. Weekend slots fill quickly — book early to secure your date.' },
            ].map((item) => (
              <div key={item.title} className="card p-7 border border-brand-orange/10 bg-brand-orange/5">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-brand-orange text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl block mb-6">🎂</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mb-4">
            Ready to Book Your Party?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Click below to get started. In the booking form, let us know your preferred date, approximate group size, and your child&apos;s age. We will confirm availability and get back to you within 24 hours.
          </p>
          <a href={GHL_TRIAL_LINK} className="btn-primary text-lg px-12 py-5 mb-4 inline-block">
            Check Party Availability
          </a>
          <p className="text-white/40 text-sm mt-4">Or call us at <a href="tel:+15308548731" className="text-brand-orange hover:underline">(530) 854-8731</a></p>
        </div>
      </section>

      <FAQ
        heading="Birthday Party FAQ"
        label="Party Questions"
        items={[
          { q: 'How many kids can attend the party?', a: 'Our facility comfortably accommodates groups of 10–20 kids. Contact us if your group is larger and we will discuss the best setup for your crew.' },
          { q: 'What age groups work best for a party at Strata?', a: 'Birthday parties at Strata are a great fit for ages 5 through 14. Coaches scale the activities to the age of your group — a 6-year-old party looks different from a 12-year-old party, and both are a blast.' },
          { q: 'How far in advance do I need to book?', a: 'Weekend party slots fill quickly. We recommend booking at least 3–4 weeks in advance to secure your preferred date. Reach out as early as possible — we can often accommodate last-minute requests but cannot guarantee availability.' },
          { q: 'Can we bring our own food and decorations?', a: 'Yes. You are welcome to bring a cake, snacks, and simple decorations. We have a dedicated party area for your setup. We ask that you keep food and drinks away from the obstacle course and climbing wall areas.' },
          { q: 'Is there a deposit required to hold the date?', a: 'Contact us to discuss booking details and deposit requirements. We confirm everything in writing so there are no surprises.' },
          { q: 'What happens if we need to cancel or reschedule?', a: 'Life happens. Contact us as soon as possible and we will work with you. Cancellations made more than 7 days in advance can typically be rescheduled at no charge.' },
        ]}
      />
    </>
  )
}
