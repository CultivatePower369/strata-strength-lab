import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Youth Strength & Fitness Classes in Oroville, CA',
  description:
    'Strata Strength Lab builds strong, confident young athletes through strength training, climbing, mobility, and sports performance classes in Oroville, CA. Book your free trial today.',
}

const GHL_TRIAL_LINK = '#trial'
// Separate link for the secondary "updates only" opt-in — connect to a different GHL form when ready
const GHL_UPDATES_LINK = '#trial'

// Update this number as founding spots are claimed
const SPOTS_CLAIMED = 0

const programs = [
  {
    icon: '🏃',
    title: 'Ninja Warrior Obstacle Training',
    description:
      'Structured obstacle training that builds coordination, grip strength, body control, and confidence. Coached and progressive from toddlers to teens. Your child will surprise themselves.',
    href: '/programs/ninja-warrior',
    color: 'bg-navy/5 border-navy/10',
    accent: 'text-navy',
  },
  {
    icon: '🧗',
    title: 'Climbing Wall & Grip Training',
    description:
      'The climbing wall builds grip strength, pulling power, core stability, and spatial awareness in ways no machine can replicate. Coached and progressive for all levels.',
    href: '/programs/climbing-wall',
    color: 'bg-brand-blue/5 border-brand-blue/10',
    accent: 'text-brand-blue',
  },
  {
    icon: '⚒️',
    title: 'The Forge Protocol: Strength',
    description:
      '20+ years in the making. Structured strength built on foundational movement patterns: squat, hinge, push, pull, carry, with progressive overload and real standards. Ages 6 through 18.',
    href: '/programs/forge-protocol',
    color: 'bg-brand-orange/5 border-brand-orange/10',
    accent: 'text-brand-orange',
  },
  {
    icon: '⚡',
    title: 'Functional Fitness for Sports',
    description:
      'Speed, power, agility, and coordination training that shows up on game day, whatever sport your child plays. Build the athletic foundation that makes them better at everything.',
    href: '/programs/sports-performance',
    color: 'bg-navy/5 border-navy/10',
    accent: 'text-navy',
  },
  {
    icon: '🧘',
    title: 'Mobility & Movement',
    description:
      'Athletes who move well get injured less and perform better. Deliberate mobility training that keeps your child healthy through full seasons and long careers.',
    href: '/programs/mobility',
    color: 'bg-brand-blue/5 border-brand-blue/10',
    accent: 'text-brand-blue',
  },
  {
    icon: '🎉',
    title: 'Birthday Parties',
    description:
      'Private 2-hour facility rental with obstacle course, climbing wall, relay races, and a coach running everything. The most active birthday party in Oroville.',
    href: '/programs/birthday-parties',
    color: 'bg-brand-orange/5 border-brand-orange/10',
    accent: 'text-brand-orange',
  },
]

const pillars = [
  {
    number: '01',
    title: 'Structure Over Chaos',
    body: 'Every session at Strata has a purpose. Progressive programming, movement standards, and coached progressions. Not random workouts.',
  },
  {
    number: '02',
    title: 'Capability Over Appearance',
    body: 'We measure success in what athletes can do: control, sustain, and execute under pressure. Strength that works in the real world.',
  },
  {
    number: '03',
    title: 'Movement, Not Just Muscle',
    body: 'Obstacles, climbing, and structured strength training develop the complete athlete. Coordination, resilience, and real physical capability.',
  },
]

// Ric Vaj leads — his testimonial matches the parent avatar exactly
const testimonials = [
  {
    name: 'Ric "Daddy5" Vaj',
    quote:
      "What surprised me most is how my kids have started taking real ownership of their health. The coaches here teach them to take pride in what their bodies can do. Not how they look. My kids come home talking about what they accomplished, what they lifted, what obstacle they finally got through. It has built a kind of confidence and discipline in them that I wasn't expecting. This place is different.",
  },
  {
    name: 'John Thompson',
    quote:
      "Darrell and his family have been an integral part of my kids development. His strength and conditioning program over the last 12+ years has helped them develop into great young men.",
  },
  {
    name: 'Charles Whalley',
    quote:
      "I've been strength training with Darrell for over six years. During that time, I've gone from an average martial artist to an above-average amateur MMA fighter. The strength training has played a huge role in that progression. It's helped me develop real, usable strength, improve my conditioning, and perform at a higher level in both jiu-jitsu competition and MMA. More than anything, it's elevated me not just as an athlete, but as a martial artist and fighter. I feel stronger, more capable, and more prepared every time I step on the mat or into competition.",
  },
]

export default function HomePage() {
  const spotsRemaining = 30 - SPOTS_CLAIMED

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern">
        {/* Geometric accent shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-light/5 rounded-full blur-3xl" />
        </div>

        {/* Diagonal bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 sm:pt-32 md:pt-24 pb-32">
          <span className="section-label text-brand-blue">
            Oroville, CA · Ninja Warrior &amp; Climbing Wall
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mt-2">
            Built Strong<br />
            <span className="text-brand-orange">from the Start.</span>
          </h1>
          <p className="mt-6 text-white/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Finally, a training environment your kid will actually want to come back to. Structured strength, climbing, and Ninja Warrior obstacle development for toddlers through teens.
          </p>
          <p className="mt-3 text-white/45 text-sm font-medium tracking-wide">
            Built by Coach Darrell Thompson, 20+ years training athletes in Butte County
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-5">
              Claim My Child&apos;s Founding Spot
            </a>
            <Link
              href="/programs"
              className="text-white/65 hover:text-white text-sm font-heading font-semibold underline underline-offset-4 transition-colors duration-200"
            >
              See Our Programs
            </Link>
          </div>
          <p className="mt-4 text-white/40 text-sm">
            $64.50 holds your spot · $129/mo locked for life · All-access to every program
          </p>
        </div>
      </section>

      {/* ─── PROGRAMS TEASER ──────────────────────────────────── */}
      <section className="py-24 bg-white" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">What We Offer</span>
            <h2 className="section-heading">
              Ninja Warrior. Climbing Wall.<br />
              <span className="text-brand-orange">Forge Protocol Strength.</span>
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Three core disciplines. Four program tracks. Every session
              is structured, coached, and built to develop real capability
              in young athletes from toddlers through teens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className={`card border ${p.color} p-7 group hover:-translate-y-1 block`}
              >
                <span className="text-4xl block mb-4">{p.icon}</span>
                <h3 className={`font-heading font-bold text-xl mb-3 ${p.accent}`}>
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <span className={`text-sm font-heading font-bold ${p.accent} group-hover:underline`}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-outline-navy">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FOUNDING 30 ──────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-brand-orange">Pre-Opening Offer · Limited Availability</span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight mt-2 mb-4">
            The Founding 30 Is{' '}
            <span className="text-brand-orange">Now Open.</span>
          </h2>

          {/* Price anchor */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 bg-white/5 border border-white/10 rounded-xl px-6 py-3 mb-6">
            <span className="text-white/45 text-sm line-through">Regular all-access rate: $199/mo</span>
            <span className="text-brand-orange font-heading font-black text-lg">Founding rate: $129/mo — locked for life</span>
          </div>

          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            Before we open our doors, we are reserving spots for 30 founding families:
            early access, founding member pricing locked in before public enrollment,
            and priority placement as class schedules are built.{' '}
            <strong className="text-white">All-access to every program.</strong>{' '}
            Once the 30 are filled, this offer closes.
          </p>

          {/* Spots counter */}
          <div className="inline-block bg-white/5 border border-white/10 rounded-lg px-5 py-2 mb-8">
            <span className="text-white/55 text-sm font-medium">
              <span className="text-brand-orange font-heading font-black text-base">{SPOTS_CLAIMED}</span>
              {' '}of 30 spots claimed &nbsp;·&nbsp;{' '}
              <span className="text-white font-semibold">{spotsRemaining} remaining</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <Link href="/founding-30" className="btn-primary text-base px-10 py-5">
              Claim My Child&apos;s Founding Spot
            </Link>
          </div>
          <p className="text-white/40 text-sm mb-10">
            $64.50 holds your spot today · $129/mo starts at opening · All-access · Locked for life
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 text-left">
            {[
              {
                icon: '🔒',
                title: 'Founding Rate: $129/mo',
                body: '$64.50 holds your spot today. Rate locked for life. Never goes up, no matter what public pricing becomes.',
              },
              {
                icon: '📅',
                title: 'Priority Placement',
                body: 'First pick of class times before we open to the public. You build your schedule before anyone else.',
              },
              {
                icon: '🏅',
                title: 'All-Access Membership',
                body: 'Ninja Warrior, Climbing Wall, Forge Protocol, Sports Performance. Every program, one rate.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <span className="text-2xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY STRATA ───────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label text-brand-blue">Why Strata</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Training That Actually<br />
              <span className="text-brand-orange">Makes a Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.number} className="text-center p-8">
                <span className="block font-heading font-black text-5xl text-brand-orange/20 mb-3">
                  {p.number}
                </span>
                <h3 className="font-heading font-bold text-white text-xl mb-4">
                  {p.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* CTA at emotional peak — don't let desire cool off */}
          <div className="text-center mt-16">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-5">
              Claim My Child&apos;s Founding Spot
            </a>
            <p className="mt-3 text-white/35 text-sm">$129/mo · All-access · Locked for life</p>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────── */}
      <section className="py-24 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-heading">
                Oroville&apos;s Strength &amp;<br />
                <span className="text-brand-orange">Movement Training Facility</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mt-5">
                Strata Strength Lab is built on 20+ years of coaching athletes across Butte County.
                Coach Darrell Thompson developed the Forge Protocol to fill a gap he kept
                seeing kids who were active but untrained, and programs that didn&apos;t hold
                their attention long enough to build anything real.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                If your kid has tried leagues, classes, or other programs and didn&apos;t stick.
                This is a different environment entirely. Ninja Warrior obstacle training
                and a climbing wall aren&apos;t workouts kids dread. They&apos;re challenges kids
                come back for. The strength and development happen in the process.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-outline-navy">
                  Meet Our Team
                </Link>
                <a href={GHL_TRIAL_LINK} className="btn-primary">
                  Claim My Child&apos;s Founding Spot
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 'Toddlers', label: 'to Teens' },
                { value: '4', label: 'Program Tracks' },
                { value: 'Max 12', label: 'Athletes Per Class' },
                { value: '20+', label: 'Years Coaching' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-8 text-center shadow-sm border border-navy/5"
                >
                  <span className="block font-heading font-black text-4xl text-navy mb-2">
                    {stat.value}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">What People Are Saying</span>
            <h2 className="section-heading">
              Real Results,{' '}
              <span className="text-brand-orange">Real Athletes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-8 border border-gray-100">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className="w-5 h-5 text-brand-orange fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic text-sm mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span className="text-navy font-heading font-bold text-sm">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <FAQ
        heading="Common Questions Answered"
        label="FAQ"
        items={[
          {
            q: 'What is Strata Strength Lab?',
            a: 'Strata Strength Lab is a youth strength and movement training facility in Oroville, CA. We offer Ninja Warrior obstacle training, climbing wall development, and the Forge Protocol structured strength system for toddlers through teens. This is not a traditional gym. It is a development environment built around real-world capability.',
          },
          {
            q: 'What if my kid has never stayed with a program before?',
            a: "Most of the kids who come to Strata have tried other programs: leagues, gym classes, martial arts. And didn't stick. The difference here is the environment. Obstacle training and climbing are inherently engaging. Kids don't feel like they're working out. They feel like they're conquering something. The discipline and strength build in the process.",
          },
          {
            q: 'What is the Founding 30 offer?',
            a: 'The Founding 30 is a pre-opening offer for 30 families who want to lock in before we open our doors. Founding members get all-access to every program at $129/mo — locked for life regardless of what public pricing becomes. A $64.50 deposit holds your spot. No additional charges until we open.',
          },
          {
            q: 'What is the Forge Protocol?',
            a: "The Forge Protocol is Strata's structured strength training system. Built around foundational movement patterns: squat, hinge, push, pull, carry. With progressive overload and a strict movement quality standard. Strength earned through structure, not shortcuts.",
          },
          {
            q: 'What age groups do you serve?',
            a: 'Strata serves ages 1 through teens. Our Little Builders program is designed for ages 1 to 4 with age-appropriate movement development. From there, we group athletes by age and ability all the way through high school so every athlete trains at the right level.',
          },
          {
            q: 'Is strength training safe for kids?',
            a: 'Yes. When properly coached, youth strength training is one of the safest and most effective forms of physical development available to children. Our coaches are trained in age-appropriate programming and movement standards.',
          },
          {
            q: 'Do athletes need prior experience?',
            a: 'No. All programs start with movement fundamentals. Whether your child has never trained before or is a multi-sport athlete, we meet every athlete exactly where they are and build from there.',
          },
          {
            q: 'Where is Strata Strength Lab located?',
            a: 'We are located at 1726 Montgomery Street, Unit 8, Oroville, CA 95965, serving athletes and families across Oroville and Butte County.',
          },
          {
            q: 'Do you offer birthday parties?',
            a: 'Yes. Private 2-hour facility rentals with coached obstacle course activities, climbing wall access, and relay games. Contact us to check weekend availability.',
          },
        ]}
      />

      {/* ─── SECONDARY OPT-IN ─────────────────────────────────── */}
      <section className="py-20 bg-navy-50 border-t border-navy/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="section-label">Not Ready to Commit Yet?</span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-navy leading-tight mt-2 mb-3">
            Get Opening Updates &amp; Early Pricing Info
          </h2>
          <p className="text-gray-500 text-base mb-8">
            We&apos;ll send you class schedules, program details, and founding spot availability.
            No pressure, no spam.
          </p>
          <a href={GHL_UPDATES_LINK} className="btn-outline-navy text-base px-10 py-4">
            Send Me Updates
          </a>
          <p className="mt-4 text-gray-400 text-sm">
            (530) 922-2600 &nbsp;·&nbsp; info@stratastrengthlab.com
          </p>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-cta-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-dark/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/images/logo.jpg"
            alt="Strata Strength Lab"
            width={80}
            height={80}
            className="mx-auto mb-6 drop-shadow-lg"
          />
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight">
            Your Athlete&apos;s Journey Starts Here.
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Only {spotsRemaining} founding spots available. Lock in $129/mo all-access before we open, for life.
          </p>
          <a href={GHL_TRIAL_LINK} className="btn-outline mt-10 text-lg px-12 py-5">
            Claim My Child&apos;s Founding Spot
          </a>
          <p className="mt-4 text-white/50 text-sm">
            1726 Montgomery Street, Unit 8 · Oroville, CA 95965 · (530) 922-2600
          </p>
        </div>
      </section>
    </>
  )
}
