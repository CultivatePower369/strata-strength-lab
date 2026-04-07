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

const programs = [
  {
    icon: '🏃',
    title: 'Ninja Warrior Obstacle Training',
    description:
      'Our structured obstacle course system develops coordination, grip, agility, and body control through progressive coached challenges. Not free play — purposeful obstacle training from toddlers to teens.',
    color: 'bg-navy/5 border-navy/10',
    accent: 'text-navy',
  },
  {
    icon: '🧗',
    title: 'Climbing Wall & Grip Training',
    description:
      'The climbing wall is a core training tool at Strata. It builds grip strength, pulling power, core stability, and spatial awareness in ways no machine can replicate — coached and progressive for all levels.',
    color: 'bg-brand-blue/5 border-brand-blue/10',
    accent: 'text-brand-blue',
  },
  {
    icon: '⚒️',
    title: 'The Forge Protocol — Strength',
    description:
      "Strata's structured strength system built on foundational movement patterns — squat, hinge, push, pull, carry — applied with discipline and progressive overload. Toddlers to teens. No random workouts.",
    color: 'bg-brand-orange/5 border-brand-orange/10',
    accent: 'text-brand-orange',
  },
  {
    icon: '⚡',
    title: 'Functional Fitness for Sports',
    description:
      'Speed, power, agility, and coordination training that translates directly to any sport. Purposeful multi-sport athletic development that shows up on game day.',
    color: 'bg-navy/5 border-navy/10',
    accent: 'text-navy',
  },
  {
    icon: '🧘',
    title: 'Mobility & Movement',
    description:
      'Deliberate movement training that builds active flexibility, joint control, and body awareness — keeping athletes healthy and performing across every season.',
    color: 'bg-brand-blue/5 border-brand-blue/10',
    accent: 'text-brand-blue',
  },
  {
    icon: '🎉',
    title: 'Birthday Parties',
    description:
      'Private facility use for 2 hours — obstacle course, climbing wall, relay races, and coached activities. The most active birthday party in Oroville.',
    color: 'bg-brand-orange/5 border-brand-orange/10',
    accent: 'text-brand-orange',
  },
]

const pillars = [
  {
    number: '01',
    title: 'Structure Over Chaos',
    body: 'Every session at Strata has a purpose. Progressive programming, movement standards, and coached progressions — not random workouts.',
  },
  {
    number: '02',
    title: 'Capability Over Appearance',
    body: 'We measure success in what athletes can do — control, sustain, and execute under pressure. Strength that works in the real world.',
  },
  {
    number: '03',
    title: 'Movement, Not Just Muscle',
    body: 'Obstacles, climbing, and structured strength training develop the complete athlete. Coordination, resilience, and real physical capability.',
  },
]

const testimonials = [
  {
    name: 'Parent – Oroville, CA',
    quote:
      "My son has completely transformed in just a few months. His confidence on and off the field is night and day. Best investment we've made.",
  },
  {
    name: 'Parent – Oroville, CA',
    quote:
      "The coaches actually care about every kid. It's not just exercise — it's teaching them how to work hard and believe in themselves.",
  },
  {
    name: 'Parent – Oroville, CA',
    quote:
      "My daughter begs to come to class. She's stronger, more flexible, and absolutely loves the climbing. We're never leaving.",
  },
]

export default function HomePage() {
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
          <Image
            src="/images/logo.png"
            alt="Strata Strength Lab"
            width={140}
            height={140}
            className="mx-auto mb-8 drop-shadow-2xl"
            priority
          />
          <span className="section-label text-brand-blue">
            Oroville, CA · Strength &amp; Movement Training
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mt-2">
            Built Strong<br />
            <span className="text-brand-orange">from the Start.</span>
          </h1>
          <p className="mt-6 text-white/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Ninja Warrior obstacle training, climbing wall development, and
            structured strength programming for toddlers through teens in
            Oroville, CA. This is not a traditional gym — it is a development
            environment built around real-world capability.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-5">
              Book Your Free Trial Class
            </a>
            <Link href="/programs" className="btn-outline text-base px-10 py-5">
              See Our Programs
            </Link>
          </div>
          <p className="mt-5 text-white/40 text-sm">
            No commitment · Free first class · Toddlers to Teens
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
              Three core disciplines. Seven program tracks. Every session
              is structured, coached, and built to develop real capability
              in young athletes from toddlers through teens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className={`card border ${p.color} p-7 group hover:-translate-y-1`}
              >
                <span className="text-4xl block mb-4">{p.icon}</span>
                <h3 className={`font-heading font-bold text-xl mb-3 ${p.accent}`}>
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-outline-navy">
              Explore All Programs
            </Link>
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
                Strata Strength Lab is not a traditional gym. It is a development
                environment built around Ninja Warrior obstacle training, a
                climbing wall, and the Forge Protocol structured strength system
                — designed for young athletes from toddlers through teens who
                want to build real capability, not just go through the motions.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The name Strata reflects the method. Geology builds its
                strongest formations under pressure, over time, one layer on top
                of another. That is how we build athletes — with structure,
                repetition, and a standard that does not bend. Layer by layer.
                Rep by rep. Until it holds under anything.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-outline-navy">
                  Meet Our Team
                </Link>
                <a href={GHL_TRIAL_LINK} className="btn-primary">
                  Start Today
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 'Toddlers', label: 'to Teens' },
                { value: '7', label: 'Program Tracks' },
                { value: 'Small', label: 'Class Sizes' },
                { value: 'Free', label: 'First Trial Class' },
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
            <span className="section-label">What Parents Are Saying</span>
            <h2 className="section-heading">
              Real Results,{' '}
              <span className="text-brand-orange">Real Families</span>
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
                  — {t.name}
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
            a: 'Strata Strength Lab is a youth strength and movement training facility in Oroville, CA. We offer Ninja Warrior obstacle training, climbing wall development, and the Forge Protocol structured strength system for toddlers through teens. This is not a traditional gym — it is a development environment built around real-world capability.',
          },
          {
            q: 'What is the Forge Protocol?',
            a: "The Forge Protocol is Strata's structured strength training system. Built around foundational movement patterns — squat, hinge, push, pull, carry — with progressive overload and a strict movement quality standard. Strength earned through structure, not shortcuts.",
          },
          {
            q: 'What age groups do you serve?',
            a: 'Strata serves toddlers through teens — from our youngest athletes just starting to develop movement skills, all the way through high school age. Classes are grouped by age and ability so every athlete trains at the right level.',
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
            a: 'We are located at 1726 Montgomery Street, Unit 8, Oroville, CA 95965 — serving athletes and families across Oroville and Butte County.',
          },
          {
            q: 'Do you offer birthday parties?',
            a: 'Yes. Private 2-hour facility rentals with coached obstacle course activities, climbing wall access, and relay games. Contact us to check weekend availability.',
          },
        ]}
      />

      {/* ─── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-cta-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-dark/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/images/logo.png"
            alt="Strata Strength Lab"
            width={80}
            height={80}
            className="mx-auto mb-6 drop-shadow-lg"
          />
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight">
            Your Athlete&apos;s Journey Starts Here.
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Claim your free trial class — no commitment, no pressure, just
            an hour that could change everything.
          </p>
          <a href={GHL_TRIAL_LINK} className="btn-outline mt-10 text-lg px-12 py-5">
            Book My Free Trial Class
          </a>
          <p className="mt-4 text-white/50 text-sm">
            1726 Montgomery Street, Unit 8 · Oroville, CA 95965
          </p>
        </div>
      </section>
    </>
  )
}
