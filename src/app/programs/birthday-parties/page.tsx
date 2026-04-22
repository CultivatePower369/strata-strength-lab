import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'
import BirthdayPartyForm from '@/components/BirthdayPartyForm'

export const metadata: Metadata = {
  title: 'Kids Birthday Parties in Oroville, CA | Strata Strength Lab',
  description:
    'Active, coach-led birthday parties for kids in Oroville, CA. Simple pricing, structured fun, and easy to book. Standard parties from $299.',
}

// ─── Replace with your GoHighLevel funnel URL when ready ──────────────────────
const GHL_PARTY_LINK = 'https://go.valentorcrm.com/widget/booking/2ozwtZ7mcdAdLAlGH9e9'

export default function BirthdayPartiesPage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/programs" className="text-brand-blue text-sm font-heading font-semibold hover:underline">← All Programs</Link>
          <span className="text-5xl block mt-4 mb-2">🎉</span>
          <span className="section-label text-brand-blue">Birthday Parties at Strata</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Fun, Active Parties <span className="text-brand-orange">Kids Remember</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto font-heading font-semibold">
            Active, coach-led birthday parties in Oroville with games, movement, and real fun.
          </p>
          <p className="mt-3 text-white/60 text-base max-w-xl mx-auto">
            Give your child a party that feels exciting, organized, and easy for parents. We handle the energy. You enjoy the day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_PARTY_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">Book a Party</a>
            <a href="#pricing" className="btn-outline text-base px-10 py-4">View Pricing</a>
          </div>
          <p className="mt-4 text-white/40 text-sm">Simple pricing · Coach-led · Easy to book</p>
        </div>
      </section>

      {/* ─── QUICK OVERVIEW ────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Why Strata</span>
            <h2 className="section-heading">What Makes a Strata Party <span className="text-brand-orange">Different?</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/kids-climbing.jpg"
                  alt="Kids climbing the rock wall at Strata Strength Lab birthday party"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '⚡', text: 'Active and high-energy — not just free play' },
                { icon: '👨‍🏫', text: 'Coach-led and supervised the entire time' },
                { icon: '🏁', text: 'Structured games and movement activities' },
                { icon: '🏆', text: 'Great for kids who love action and challenges' },
                { icon: '✅', text: 'Easy for parents to understand and book' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <p className="text-gray-700 font-heading font-semibold text-base leading-snug pt-0.5">{item.text}</p>
                </div>
              ))}
              <p className="text-gray-500 text-sm leading-relaxed pt-2">
                Strata birthday parties are built for kids who want to move, play, and have fun. Instead of a chaotic free-for-all, each party is guided by coaches who keep the group active, engaged, and organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ───────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label text-brand-orange">Simple Pricing</span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight">
              Pick Your <span className="text-brand-orange">Party</span>
            </h2>
            <p className="text-white/50 mt-3 text-base max-w-xl mx-auto">No hidden fees. No complicated math. Just pick the option that fits your group.</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* Standard */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="font-heading font-bold text-brand-blue text-xs uppercase tracking-widest mb-3">Standard Party</p>
              <p className="font-heading font-black text-white text-5xl mb-1">$299</p>
              <p className="text-white/40 text-sm mb-6">flat rate</p>
              <ul className="space-y-3 mb-6">
                {[
                  '2 hours of party time',
                  'Up to 12 kids',
                  '1 dedicated coach',
                  'Coach-led games and activities',
                  'Time for food, cake, and celebration',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-brand-orange mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/40 text-xs italic">This is a great option for most parties.</p>
            </div>

            {/* Premium */}
            <div className="bg-brand-orange/10 border-2 border-brand-orange/50 rounded-2xl p-8 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white font-heading font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full">
                Larger Groups
              </span>
              <p className="font-heading font-bold text-brand-orange text-xs uppercase tracking-widest mb-3">Premium Party</p>
              <p className="font-heading font-black text-white text-5xl mb-1">$399</p>
              <p className="text-white/40 text-sm mb-6">flat rate</p>
              <ul className="space-y-3 mb-6">
                {[
                  '2 hours of party time',
                  'Up to 18 kids',
                  '2 coaches',
                  'More guided activities and support',
                  'Time for food, cake, and celebration',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-brand-orange mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/40 text-xs italic">Better fit for larger parties or families who want extra support.</p>
            </div>
          </div>

          {/* Extra Kids Explainer */}
          <div className="max-w-3xl mx-auto mt-8 bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="font-heading font-black text-white text-xl mb-2">Simple Kid + Coach Rules</h3>
            <p className="text-white/50 text-sm mb-5">If your group is a little bigger, here&apos;s how it works:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Each coach can supervise up to 12 kids.',
                'Extra kids (beyond 12) are $15 each.',
                'Once you go over 12 kids, a second coach is required — that\'s an additional $75.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="text-brand-orange mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="font-heading font-bold text-white text-sm mb-1">Example 1</p>
                <p className="text-brand-orange font-heading font-black text-base">12 kids</p>
                <p className="text-white/50 text-xs mt-1">Standard Party only — $299 total</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="font-heading font-bold text-white text-sm mb-1">Example 2</p>
                <p className="text-brand-orange font-heading font-black text-base">14 kids</p>
                <p className="text-white/50 text-xs mt-1">Standard + 2 extra kids ($30) + 1 extra coach ($75) = $404 total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADD-ONS ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Customize Your Party</span>
            <h2 className="section-heading">Optional <span className="text-brand-orange">Add-Ons</span></h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">Want to make it even more memorable? Add these to any party.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                icon: '🎯',
                title: 'Nerf Battle Add-On',
                price: '$50',
                description: 'Add a fun, coach-led Nerf battle to your party. Kids love it.',
              },
              {
                icon: '⏱️',
                title: 'Extra 30 Minutes',
                price: '$50',
                description: 'Need a little more time? Add 30 extra minutes for food, celebration, or more fun.',
              },
            ].map((addon) => (
              <div key={addon.title} className="card p-7 border border-navy/10 flex flex-col">
                <span className="text-4xl mb-3">{addon.icon}</span>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-heading font-black text-navy text-lg leading-tight">{addon.title}</h3>
                  <span className="font-heading font-black text-brand-orange text-2xl shrink-0">{addon.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTY TIMES ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">When to Book</span>
            <h2 className="section-heading">Available <span className="text-brand-orange">Party Times</span></h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl mx-auto">We currently offer birthday party bookings during the following time slots:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                day: 'Friday',
                slots: ['3:00 PM – 5:00 PM'],
              },
              {
                day: 'Saturday',
                slots: ['10:00 AM – 12:00 PM', '12:30 PM – 2:30 PM', '3:00 PM – 5:00 PM'],
              },
              {
                day: 'Sunday',
                slots: ['10:00 AM – 12:00 PM', '12:30 PM – 2:30 PM', '3:00 PM – 5:00 PM'],
              },
            ].map((day) => (
              <div key={day.day} className="card p-6">
                <h3 className="font-heading font-black text-navy text-xl mb-4 border-b border-navy/10 pb-3">{day.day}</h3>
                <ul className="space-y-2">
                  {day.slots.map((slot) => (
                    <li key={slot} className="flex items-center gap-3 text-gray-600 text-sm font-heading font-semibold">
                      <span className="w-2 h-2 bg-brand-orange rounded-full shrink-0" />
                      {slot}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            Saturday and Sunday time slots are spaced out to allow for setup, cleanup, and smooth transitions between groups.
          </p>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">No Surprises</span>
              <h2 className="section-heading">What&apos;s <span className="text-brand-orange">Included</span></h2>
              <ul className="mt-6 space-y-4">
                {[
                  'Active party space — the full facility is yours',
                  'Guided games and movement activities',
                  'Coach-led fun from start to finish',
                  'Organized flow so nothing feels chaotic',
                  'Time for food, cake, and celebration',
                  'A unique experience kids actually remember',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-brand-orange font-black text-base shrink-0 mt-0.5">✓</span>
                    <span className="font-heading font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                We keep the party active, organized, and fun so your child gets a memorable experience and parents know exactly what to expect.
              </p>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/kids-ninja-warrior.jpg"
                  alt="Kids on the Ninja Warrior obstacle course at Strata Strength Lab"
                  width={800}
                  height={534}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-brand-orange">Good Fit</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mb-10">
            Who These Parties Are <span className="text-brand-orange">Great For</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              { icon: '🏃', text: 'Kids who love to move and stay active' },
              { icon: '🧗', text: 'Kids who enjoy obstacle-style play and challenges' },
              { icon: '👨‍👩‍👧', text: 'Active families looking for something different' },
              { icon: '🎯', text: 'Birthday groups who want more than a basic party room' },
              { icon: '✅', text: 'Parents who want a fun but organized experience' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 bg-white/5 rounded-xl px-5 py-4">
                <span className="text-xl shrink-0">{item.icon}</span>
                <p className="text-white/70 text-sm font-heading font-semibold leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ
        heading="Birthday Party FAQ"
        label="Party Questions"
        items={[
          { q: 'How long is the party?', a: 'Each party lasts 2 hours.' },
          { q: 'How many kids are included?', a: 'The Standard Party includes up to 12 kids. The Premium Party includes up to 18 kids.' },
          { q: 'What if I have more than 12 kids?', a: 'Extra kids are $15 each. Once you go over 12 kids, a second coach is also required at an additional $75.' },
          { q: 'Why do I need another coach?', a: 'Extra coaches help us keep the party safe, supervised, and fun for every kid in the group.' },
          { q: 'Can I add more time?', a: 'Yes. You can add 30 extra minutes for $50.' },
          { q: 'Can I add a Nerf battle?', a: 'Yes. The Nerf Battle Add-On is $50 and is coach-led.' },
          { q: 'How do I book?', a: 'Fill out the booking form on this page and we\'ll follow up to confirm your date and details.' },
        ]}
      />

      {/* ─── BOOKING FORM ──────────────────────────────────────────────────── */}
      <section id="book" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-label">Let&apos;s Get It Scheduled</span>
            <h2 className="section-heading">Book Your <span className="text-brand-orange">Party</span></h2>
            <p className="text-gray-500 mt-3 text-base">Fill out the form below and we&apos;ll help you reserve your party date.</p>
          </div>

          <BirthdayPartyForm />
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl block mb-4">🎂</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mb-4">
            Ready to Plan a Party They&apos;ll <span className="text-brand-orange">Actually Remember?</span>
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
            If you want a birthday party that feels active, exciting, and organized, Strata Strength Lab is a great fit. Pick your date, tell us about your group, and we&apos;ll help you put it together.
          </p>
          <a href={GHL_PARTY_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-12 py-5 inline-block">
            Book a Party
          </a>
          <p className="text-white/40 text-sm mt-4">Or call us at <a href="tel:+15308548731" className="text-brand-orange hover:underline">(530) 854-8731</a></p>
        </div>
      </section>
    </>
  )
}
