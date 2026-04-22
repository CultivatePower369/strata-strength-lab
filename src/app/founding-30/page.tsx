import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Founding 30 — Join Strata Strength Lab Before We Open | Oroville, CA',
  description:
    'Be one of the first 30 families to join Strata Strength Lab in Oroville, CA. Claim founding member access, early pricing, and priority placement before public enrollment opens.',
  alternates: {
    canonical: 'https://stratastrengthlab.com/founding-30',
  },
}

// ─── Replace with your GoHighLevel funnel URL when ready ──────────────────────
const GHL_FOUNDING_LINK = '#claim'

const offerPoints = [
  'Access as one of our first 30 families — part of the founding group',
  'Founding member pricing locked in before public enrollment opens',
  'Priority placement as class schedules are built and finalized',
  'First pick of available time slots before we open to the public',
  'Recognition as part of the original group that helped launch Strata',
]

const programs = [
  { name: 'Little Movers',   detail: 'Ages 1–3' },
  { name: 'Little Builders', detail: 'Ages 3–5' },
  { name: 'Youth Athletes',  detail: 'Ages 6–12' },
  { name: 'Teen Athletes',   detail: 'Ages 13–17' },
]

const audience = [
  {
    icon: '🧒',
    text: 'Parents who want their child in a coached, structured environment — not just supervised activity',
  },
  {
    icon: '⚽',
    text: 'Families with kids in football, basketball, soccer, wrestling, or other sports who need a stronger physical foundation',
  },
  {
    icon: '🏋️',
    text: 'Parents who feel their teen has potential but needs more structure, direction, and consistency to develop it',
  },
  {
    icon: '👨‍👩‍👧',
    text: 'Families looking for something that builds discipline and focus alongside physical development',
  },
  {
    icon: '🎯',
    text: 'Parents who want to see real, measurable progress — not just a tired kid at the end of the day',
  },
]

const benefits = [
  {
    icon: '📈',
    title: 'Progress You Can Actually See',
    body: 'Your child isn\'t just burning energy — they\'re building real strength, learning how to move better, and getting more capable every week. You\'ll notice the difference.',
  },
  {
    icon: '🎯',
    title: 'Structure, Not Just Activity',
    body: 'Every session has a purpose. Coached progressions, movement standards, and a system designed around where your child is right now — not a one-size class.',
  },
  {
    icon: '🧠',
    title: 'Confidence That Transfers',
    body: 'When a kid figures out they can do hard things — that confidence doesn\'t stay in the gym. It shows up in school, in sports, and in how they carry themselves.',
  },
  {
    icon: '🛡️',
    title: 'An Environment Worth Trusting',
    body: 'Coached, positive, and intentional. Not a free-for-all. Your child is being guided by coaches who know how to work with kids and hold a standard worth meeting.',
  },
  {
    icon: '🏆',
    title: 'Athletic Development That Shows Up on Game Day',
    body: 'The foundation built here — strength, coordination, body control — makes your child better at every sport they play and every physical challenge they face.',
  },
]

// ─── TESTIMONIALS: swap these placeholders with real parent quotes ─────────────
const testimonials = [
  {
    initials: 'JM',
    quote: 'My son has been training with Darrell for two years. The difference in his confidence and how he carries himself is night and day. I can\'t wait to see what a dedicated strength program does for him.',
    name: 'Parent — [Name]',
    role: 'Cultivate Power family',
  },
  {
    initials: 'AT',
    quote: 'We\'ve been looking for something like this in Oroville for years — a real structured program where a coach is actually paying attention to my kid. We signed up the same day we heard about it.',
    name: 'Parent — [Name]',
    role: 'Local family, two kids enrolled',
  },
  {
    initials: 'RK',
    quote: 'What we noticed first was the culture. The coaches actually know the kids. My daughter started standing taller, trying harder. That\'s what we were looking for.',
    name: 'Parent — [Name]',
    role: 'Youth athlete parent',
  },
]

export default function Founding30Page() {
  return (
    <div className="bg-navy-dark text-white">

      {/* ─── MINIMAL HEADER ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Strata Strength Lab"
              width={44}
              height={44}
              className="rounded-lg"
            />
            <div className="leading-tight">
              <span className="block font-heading font-black text-white text-base tracking-wide">
                STRATA STRENGTH LAB
              </span>
              <span className="block font-heading font-semibold text-brand-orange text-[10px] tracking-widest uppercase">
                Oroville, CA
              </span>
            </div>
          </Link>
          <a href={GHL_FOUNDING_LINK} className="btn-primary text-sm px-5 py-3">
            Claim a Founding Spot
          </a>
        </div>
      </header>


      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-brand-orange/[0.07] rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-brand-blue/[0.07] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Copy */}
            <div>
              <span className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-heading font-bold text-[11px] tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-8 block w-fit">
                <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                Pre-Opening Offer
              </span>

              <h1 className="font-heading font-black text-[clamp(46px,7.5vw,84px)] leading-none tracking-tight uppercase mb-6">
                Founding<br />
                <span className="text-brand-orange">30</span><br />
                Now Open
              </h1>

              <div className="w-16 h-1.5 bg-brand-orange rounded-full mb-7" />

              <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                If you&apos;ve been looking for a structured, coached environment where your child actually <em>develops</em> — not just stays busy — this is it.
              </p>
              <p className="text-white/55 text-base leading-relaxed mb-10 max-w-lg">
                Strata Strength Lab is opening in Oroville and we&apos;re offering 30 founding memberships to families who want to get in before the public launch.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href={GHL_FOUNDING_LINK} className="btn-primary text-base px-10 py-5">
                  Claim a Founding Spot
                </a>
              </div>
            </div>

            {/* Right: Founding spot card */}
            <div className="bg-white/[0.04] border border-brand-orange/20 rounded-2xl p-8 lg:p-10 shadow-[0_0_80px_rgba(245,146,42,0.08)]">
              <p className="font-heading font-bold text-[10px] tracking-[0.22em] uppercase text-brand-orange mb-2">
                Founding Membership
              </p>
              <div className="flex items-end gap-3 mb-1">
                <span className="font-heading font-black text-7xl text-white leading-none">30</span>
                <span className="font-heading font-bold text-xl text-white/40 mb-2 uppercase tracking-wide">Spots<br />Total</span>
              </div>
              <p className="text-white/40 text-sm font-heading uppercase tracking-widest mb-8">
                First come, first served
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Founding member pricing locked in',
                  'Priority class placement',
                  'Early access before public launch',
                  'Part of the original founding group',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.08] pt-6">
                <p className="text-white/40 text-xs leading-relaxed mb-5">
                  Once the 30 founding spots are filled, this offer closes and standard enrollment opens at regular pricing.
                </p>
                <a href={GHL_FOUNDING_LINK} className="btn-primary w-full text-center block text-sm">
                  Reserve My Spot Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─── WHAT IS STRATA ────────────────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label text-brand-orange">What We Are</span>
              <div className="w-14 h-1 bg-brand-orange rounded-full mb-7" />
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight uppercase mb-6">
                What Is<br />
                <span className="text-brand-orange">Strata Strength Lab?</span>
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-5">
                Strata is a structured strength and athletic development facility for kids and teens ages 3–18. It&apos;s not a gym where kids show up and use equipment on their own.
              </p>
              <p className="text-white/65 text-lg leading-relaxed mb-5">
                Every session is coached, progressive, and built around what your child actually needs — real strength, body control, coordination, and the kind of confidence that shows up outside the gym too.
              </p>
              <p className="text-white/65 text-lg leading-relaxed">
                Whether your child plays sports, needs more structure, or just needs a better outlet for their energy — Strata is built to give you something you can actually see progress in.
              </p>
            </div>

            {/*
              PHOTO SWAP: Replace this div with:
              <Image src="/images/facility-training.jpg" alt="Youth training at Strata Strength Lab"
                width={600} height={450} className="rounded-2xl object-cover w-full" />
            */}
            <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3 text-white/20 font-heading text-xs tracking-widest uppercase">
              <svg className="w-10 h-10 opacity-25" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              Facility / Training Photo
            </div>
          </div>
        </div>
      </section>


      {/* ─── WHO IT'S FOR ──────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-brand-orange">Who It&apos;s For</span>
          <div className="w-14 h-1 bg-brand-orange rounded-full mx-auto mb-7" />
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight uppercase mb-5 max-w-3xl mx-auto">
            Sound Like<br />
            <span className="text-brand-orange">Your Family?</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed mb-14">
            Most parents who reach out are looking for the same thing — a place where their child is genuinely coached, held to a standard, and comes home better for it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {audience.map((a) => (
              <div
                key={a.icon}
                className="bg-white/[0.04] border border-white/[0.09] rounded-xl p-6 hover:border-brand-orange/30 transition-colors duration-200"
              >
                <span className="text-3xl block mb-3">{a.icon}</span>
                <p className="text-white/75 text-[15px] leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── FOUNDING 30 OFFER ─────────────────────────────────────────── */}
      <section className="py-24 bg-navy" id="offer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <span className="section-label text-brand-orange">Founding 30 — Pre-Opening Offer</span>
              <div className="w-14 h-1 bg-brand-orange rounded-full mb-7" />
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight uppercase mb-5">
                What Founding<br />
                <span className="text-brand-orange">30 Members Get</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We&apos;re opening enrollment early for the first 30 families only. This is your opportunity to lock in your spot, your pricing, and your place in the founding group — before we open to the public.
              </p>

              <ul className="space-y-4 mb-8">
                {offerPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4 text-white/80 text-[16px] leading-snug">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/15 border border-brand-orange flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 stroke-brand-orange" fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 12 12">
                        <polyline points="2 6 5 9 10 3"/>
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="border-l-4 border-brand-orange bg-brand-orange/[0.07] rounded-r-lg px-5 py-4 text-white/65 text-[15px] leading-relaxed">
                This offer is for the first 30 families only. Once those spots are filled, the offer closes and standard enrollment opens at regular pricing.
              </div>
            </div>

            {/* Right: Program card */}
            <div className="bg-navy-dark border border-brand-orange/20 rounded-2xl p-10 shadow-[0_0_60px_rgba(245,146,42,0.07)]">
              <p className="font-heading font-bold text-[10px] tracking-[0.22em] uppercase text-brand-orange mb-1">
                Age-Based Programming
              </p>
              <h3 className="font-heading font-black text-3xl text-white uppercase leading-tight mb-2">
                Programs for<br />Every Age
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Every program is grouped by age and built around what kids can actually do — and what they need to develop next.
              </p>

              <ul className="space-y-3 mb-6">
                {programs.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-between bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3.5"
                  >
                    <span className="font-heading font-extrabold text-sm tracking-wide uppercase text-white">
                      {p.name}
                    </span>
                    <span className="text-white/50 text-sm">{p.detail}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white/35 text-sm leading-relaxed mb-7 pt-5 border-t border-white/[0.06]">
                <span className="text-brand-orange font-semibold">Founding member pricing</span> and full program details will be shared when we reach out after you claim your spot.
              </p>

              <a href={GHL_FOUNDING_LINK} className="btn-primary w-full text-center block">
                Claim a Founding Spot
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* ─── WHY PARENTS CARE ──────────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="section-label text-brand-orange">Why Families Are Interested</span>
          <div className="w-14 h-1 bg-brand-orange rounded-full mb-7" />
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight uppercase mb-5">
            Your Child Isn&apos;t Just<br />
            <span className="text-brand-orange">Staying Busy.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-14">
            A lot of kids play sports, stay active, and still never build the physical and mental foundation that makes them move better, stay healthier, and perform with real confidence. Strata is built to change that.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white/[0.04] border border-white/[0.09] rounded-2xl p-7 hover:border-brand-blue/30 transition-colors duration-200"
              >
                <span className="text-3xl block mb-4">{b.icon}</span>
                <h3 className="font-heading font-extrabold text-sm uppercase tracking-wide text-white mb-2">{b.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── COMBAT SPORTS CALLOUT ─────────────────────────────────────── */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden border border-brand-orange/25 bg-gradient-to-br from-navy via-navy to-navy-dark p-8 sm:p-12">
            {/* Decorative background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/[0.06] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/[0.05] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left: Copy */}
              <div>
                <span className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-heading font-bold text-[11px] tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-6 block w-fit">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                  Built for Combat Sports
                </span>
                <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight uppercase mb-5">
                  Not Every Strength Program<br />
                  <span className="text-brand-orange">Gets Kids Ready for the Mat.</span>
                </h2>
                <p className="text-white/65 text-lg leading-relaxed mb-5">
                  If your child trains jiu-jitsu, wrestling, judo, or MMA — or is thinking about it — generic strength training isn&apos;t enough. Combat sports place unique demands on the body: explosive hip power, grip endurance, neck and trunk stability, the ability to generate force from awkward positions under real pressure.
                </p>
                <p className="text-white/65 text-lg leading-relaxed">
                  Most programs don&apos;t train for any of that. Strata does. The strength system here is built by coaches who come from the mat — and who understand that the goal isn&apos;t just a stronger kid. It&apos;s a kid who is harder to take down, harder to hold, and harder to stop.
                </p>
              </div>

              {/* Right: Combat sports list */}
              <div className="space-y-4">
                <p className="font-heading font-bold text-[11px] tracking-[0.2em] uppercase text-white/35 mb-5">
                  Specifically built to develop athletes in:
                </p>
                {[
                  { sport: 'Brazilian Jiu-Jitsu', detail: 'Grip strength, hip escape, guard retention, pressure resistance' },
                  { sport: 'Wrestling',            detail: 'Explosive takedowns, scramble strength, bottom-position power' },
                  { sport: 'Judo',                 detail: 'Grip fighting, kuzushi, core stability, explosive entry' },
                  { sport: 'MMA',                  detail: 'Full-body conditioning, sport-specific power, injury resilience' },
                ].map((item) => (
                  <div
                    key={item.sport}
                    className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 hover:border-brand-orange/25 transition-colors duration-200"
                  >
                    <span className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0 mt-2" />
                    <div>
                      <span className="font-heading font-extrabold text-sm uppercase tracking-wide text-white block mb-0.5">
                        {item.sport}
                      </span>
                      <span className="text-white/45 text-sm leading-snug">{item.detail}</span>
                    </div>
                  </div>
                ))}

                <p className="text-white/35 text-sm pt-2 leading-relaxed">
                  Darrell Thompson and the Strata coaching team come directly from the combat sports world. This isn&apos;t strength training adapted for fighters — it&apos;s strength training designed for them from the ground up.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST / AUTHORITY ─────────────────────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Team photo */}
            <div className="relative">
              <Image
                src="/images/coaching-team.jpg"
                alt="The Strata Strength Lab coaching team"
                width={580}
                height={500}
                className="rounded-2xl object-cover w-full shadow-2xl"
              />
            </div>

            <div>
              <span className="section-label text-brand-orange">Built by a Proven Local Coaching Team</span>
              <div className="w-14 h-1 bg-brand-orange rounded-full mb-7" />
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight uppercase mb-7">
                Coaches Who<br />
                <span className="text-brand-orange">Know What They&apos;re Doing</span>
              </h2>

              <p className="text-white/65 text-lg leading-relaxed mb-5">
                Strata Strength Lab is founded by Darrell Thompson — the same coach behind Cultivate Power Fighting Arts, which has grown to over 120 active members right here in Oroville.
              </p>
              <p className="text-white/65 text-lg leading-relaxed mb-5">
                The coaching team at Strata brings real experience working with kids and teens — not just athletic knowledge, but an understanding of how to coach young people in a way that actually sticks. That means holding a standard without intimidating, challenging kids without crushing them, and building the kind of culture parents feel good leaving their child in.
              </p>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Families who already trust the system at Cultivate Power know what that coaching culture looks like. Strata brings that same standard into a dedicated youth strength and development setting.
              </p>

              <div className="inline-flex flex-col bg-brand-orange/[0.08] border border-brand-orange/20 rounded-xl px-6 py-4">
                <span className="font-heading font-black text-4xl text-brand-orange leading-none">120+</span>
                <span className="text-white/55 text-sm mt-1">Active members at Cultivate Power Fighting Arts</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─── TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label text-brand-orange">What People Are Saying</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight uppercase">
              From <span className="text-brand-orange">Local Families</span>
            </h2>
          </div>

          {/* TESTIMONIAL SWAP: Replace quote, name, role, and initials with real parent quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.initials}
                className="bg-white/[0.04] border border-white/[0.09] rounded-2xl p-8"
              >
                <span className="font-heading font-black text-6xl text-brand-orange opacity-30 leading-none block mb-4">&ldquo;</span>
                <p className="text-white/75 text-[15px] leading-relaxed italic mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/15 border border-brand-orange/25 flex items-center justify-center font-heading font-extrabold text-sm text-brand-orange flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-white">{t.name}</div>
                    <div className="text-white/35 text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── LEAD FORM ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-navy" id="claim">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left: Copy */}
            <div>
              <span className="section-label text-brand-orange">Founding 30 — Claim Your Spot</span>
              <div className="w-14 h-1 bg-brand-orange rounded-full mb-7" />
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight uppercase mb-5">
                This Is How<br />
                <span className="text-brand-orange">You Get In.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Fill out the form below and we&apos;ll reach out directly — before public enrollment opens — to walk you through availability, answer your questions, and lock in your spot.
              </p>
              <p className="text-white/45 text-base leading-relaxed mb-10">
                There&apos;s no payment today. Just let us know you&apos;re interested and we&apos;ll take it from there.
              </p>

              <ul className="space-y-4">
                {[
                  'No payment required to reserve your spot',
                  'We\'ll reach out directly with full details and next steps',
                  'Spots are held in the order received — first 30 families only',
                  'Your information stays private — never shared or sold',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/55 text-[15px]">
                    <span className="mt-1.5 w-2 h-2 bg-brand-orange rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-dark border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center gap-6">
              <p className="text-white/60 text-lg leading-relaxed">
                Click below to request your founding spot. A coach will reach out directly with next steps — no payment required today.
              </p>
              <a href="#trial" className="btn-primary w-full text-center text-base py-5">
                Request My Founding Spot
              </a>
              <p className="text-white/30 text-sm leading-relaxed">
                We&apos;ll reach out directly with next steps.<br />No spam. No nonsense.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ─── CLOSING CTA ───────────────────────────────────────────────── */}
      <section className="py-28 bg-navy-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-orange/[0.05] rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-0 w-96 h-96 bg-brand-blue/[0.05] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <span className="section-label text-brand-orange">Don&apos;t Miss Your Window</span>
          <h2 className="font-heading font-black text-[clamp(32px,6vw,62px)] text-white leading-none uppercase mt-2 mb-6">
            Once the Founding<br />
            <span className="text-brand-orange">30 Is Full,<br />It&apos;s Gone</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-10">
            We&apos;re keeping this first group intentionally small so we can launch strong, give every family the attention they deserve, and build the kind of culture that makes this place worth coming back to.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href={GHL_FOUNDING_LINK} className="btn-primary text-base px-12 py-5">
              Join the Founding 30
            </a>
            <span className="font-heading font-bold text-xs tracking-widest uppercase text-white/30">
              Only 30 founding memberships available
            </span>
          </div>
        </div>
      </section>


      {/* ─── MINIMAL FOOTER ────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.07] py-7">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo.png" alt="" width={28} height={28} className="rounded-md opacity-70" aria-hidden="true" />
            <span className="font-heading font-extrabold text-sm tracking-wide text-white/40">
              STRATA STRENGTH LAB
            </span>
          </div>
          <span className="text-white/25 text-sm">
            © 2025 Strata Strength Lab · Oroville, CA · 1726 Montgomery St, Unit 8
          </span>
          <nav className="flex gap-5">
            <Link href="/privacy-policy" className="text-white/30 text-sm hover:text-brand-orange transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/30 text-sm hover:text-brand-orange transition-colors">Terms</Link>
            <a href="mailto:info@stratastrengthlab.com" className="text-white/30 text-sm hover:text-brand-orange transition-colors">Contact</a>
          </nav>
        </div>
      </footer>

    </div>
  )
}
