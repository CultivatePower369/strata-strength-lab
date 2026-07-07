import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'About Strata Strength Lab | Youth Climbing & Obstacle Training in Oroville, CA',
  description:
    'Strata Strength Lab is a youth climbing, obstacle, movement, and strength development facility in Oroville, CA. Learn about our coaches, our training philosophy, and why kids and teens in Butte County build real strength, confidence, and coordination at Strata.',
}

const GHL_TRIAL_LINK = '#trial'

const pillars = [
  {
    icon: '🏃',
    label: 'Pillar One',
    title: 'Ninja Warrior Obstacle Training',
    body: 'Our obstacle course system develops the full athletic spectrum: coordination, grip, agility, body control, and mental grit. Athletes learn to move through challenge, not around it. Every obstacle is a lesson in what the body is capable of when trained with purpose.',
    accent: 'border-navy text-navy',
    bg: 'bg-navy/5',
  },
  {
    icon: '🧗',
    label: 'Pillar Two',
    title: 'Climbing Wall & Grip Development',
    body: 'The climbing wall is not a novelty. It is one of the most effective strength and movement tools in the facility. Climbing builds grip strength, pulling power, core stability, spatial awareness, and problem-solving under pressure. It is foundational to everything we train.',
    accent: 'border-brand-blue text-brand-blue-dark',
    bg: 'bg-brand-blue/5',
  },
  {
    icon: '⚒️',
    label: 'Pillar Three',
    title: 'The Forge Protocol',
    body: 'Our structured strength training system built on discipline, repetition, and progressive overload. The Forge Protocol teaches real-world strength through the foundational movement patterns: squat, hinge, push, pull, carry. Applied with structure and intentional progression. Strength earned through the work, not shortcut.',
    accent: 'border-brand-orange text-brand-orange-dark',
    bg: 'bg-brand-orange/5',
  },
]

const outcomes = [
  { value: 'Strength', sub: 'Real, functional, earned' },
  { value: 'Coordination', sub: 'Body control under pressure' },
  { value: 'Confidence', sub: 'Built from capability' },
  { value: 'Resilience', sub: 'Forged through repetition' },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-hero-pattern pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-label text-brand-blue">Oroville, CA</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            This Is Not a<br />
            <span className="text-brand-orange">Traditional Gym.</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Strata Strength Lab is a youth climbing, obstacle, movement, and strength
            development facility in Oroville, CA. We help kids and teens ages 1 to 18
            build strength, confidence, coordination, and real-world capability through
            fun, coach-led challenges including Ninja Warrior-style obstacles, a climbing
            wall, and structured strength training.
          </p>
        </div>
      </section>

      {/* ─── OPENING ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">What Makes Us Different</span>
              <h2 className="section-heading">
                Youth Strength &amp; Movement.{' '}
                <span className="text-brand-orange">Done Right.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mt-5">
                Most programs offer access to equipment or a class schedule.
                Strata offers a system. We are not a fitness center with a children&apos;s
                corner bolted on. We are a development environment built from the
                ground up around how young bodies actually learn to move, perform,
                and grow stronger through structured, progressive training.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Every session at Strata has a purpose. Every movement has a
                standard. Every athlete, whether they are 7 years old or 17,
                is held to the same principle: earn your strength through the work.
                No shortcuts. No gimmicks. No random workouts dressed up with
                motivational language.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The name Strata comes from geology, the study of layers. The
                earth&apos;s strongest formations are built under pressure, over time,
                one layer on top of another. That is exactly how we build athletes.
                Layer by layer. Rep by rep. Until the structure holds up under
                anything.
              </p>
            </div>

            <div className="bg-navy-dark rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-2xl" />
              <Image
                src="/images/logo.png"
                alt="Strata Strength Lab"
                width={90}
                height={90}
                className="mb-7"
              />
              <blockquote className="font-heading font-bold text-2xl leading-snug text-white relative z-10">
                &ldquo;Capability over appearance. Progression over random
                workouts. Structure over chaos.&rdquo;
              </blockquote>
              <p className="mt-5 text-white/40 text-sm">Strata Strength Lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLARS ────────────────────────────────────── */}
      <section className="py-24 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">How We Train</span>
            <h2 className="section-heading">
              Three Pillars.{' '}
              <span className="text-brand-orange">One System.</span>
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Strata is built around three interconnected training disciplines.
              Together they develop the full athlete. Not just one quality in
              isolation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className={`card bg-white border-t-4 ${p.accent.split(' ')[0]} p-8`}>
                <span className="text-4xl block mb-4">{p.icon}</span>
                <p className={`text-xs font-heading font-bold uppercase tracking-widest mb-2 ${p.accent.split(' ')[1]}`}>
                  {p.label}
                </p>
                <h3 className="font-heading font-extrabold text-navy text-xl mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE TRAIN ─────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label text-brand-blue">Our Method</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mt-2">
                Structured. Progressive.{' '}
                <span className="text-brand-orange">Skill-Based.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mt-5">
                Training at Strata is not a rotating collection of random
                workouts. It is a structured system where each session builds
                on the last. Movement patterns are taught before load is added,
                load is added before intensity is pushed, and intensity is only
                pushed when the foundation is solid.
              </p>
              <p className="text-white/60 leading-relaxed mt-4">
                This applies to a 9-year-old learning to hang from a bar for
                the first time and to a 35-year-old developing their first
                real strength base. The standard is the same. The progression
                is earned, not assumed.
              </p>
              <p className="text-white/60 leading-relaxed mt-4">
                We measure progress in capability: what athletes can do,
                control, and sustain. Not in how they look or how much they
                can lift before they&apos;re ready.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: 'Movement quality first', icon: '✓' },
                { label: 'Load added after mastery', icon: '✓' },
                { label: 'Structured progressive overload', icon: '✓' },
                { label: 'Skill-based benchmarks', icon: '✓' },
                { label: 'Small coached groups', icon: '✓' },
                { label: 'No random workouts', icon: '✓' },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5 flex gap-3 items-start">
                  <span className="text-brand-orange font-bold text-lg shrink-0">{item.icon}</span>
                  <span className="text-white/70 text-sm font-heading font-semibold leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Who We Serve</span>
            <h2 className="section-heading">
              Toddlers to Teens,{' '}
              <span className="text-brand-orange">Every Stage, Every Level.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                group: 'Toddlers & Little Athletes',
                icon: '🧒',
                body: 'The earlier a child learns to move well, the longer that foundation serves them. We introduce the youngest athletes to structured movement, body awareness, and coordination in an environment built for their stage of development.',
              },
              {
                group: 'Kids (Ages 6 to 12)',
                icon: '🏃',
                body: 'This is the prime window for athletic development. Kids at Strata build real strength, movement skills, and confidence through structured obstacle training, climbing, and the Forge Protocol. Coached and progressive, never random.',
              },
              {
                group: 'Teens (Ages 13 to 18)',
                icon: '💪',
                body: 'Teenagers who train with structure and purpose during these years carry that capability for life. Our teen programs develop serious strength, coordination, and discipline at the exact moment the body is most ready to absorb it.',
              },
            ].map((group) => (
              <div key={group.group} className="card bg-navy-50 border border-navy/5 p-8">
                <span className="text-4xl block mb-4">{group.icon}</span>
                <h3 className="font-heading font-bold text-navy text-lg mb-3">{group.group}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{group.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES ─────────────────────────────────────────── */}
      <section className="py-24 bg-cta-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label text-white/60">What You Build Here</span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight mt-2">
              What Athletes Walk Away With
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Not a number on a scale. Not a before-and-after photo.
              Real capability. Built through real work.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {outcomes.map((o) => (
              <div key={o.value} className="bg-white/10 border border-white/20 rounded-2xl p-5 sm:p-8 text-center">
                <span className="block font-heading font-black text-xl sm:text-3xl text-white mb-2">{o.value}</span>
                <span className="text-white/60 text-sm">{o.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COACH BIO ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">The Team</span>
            <h2 className="section-heading">
              Meet the{' '}
              <span className="text-brand-orange">Head Coach.</span>
            </h2>
          </div>

          <div className="space-y-20 max-w-5xl mx-auto">

          {/* Coach 1 — Darrell */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Photo — Darrell */}
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto lg:mx-0">
              <img src="/images/coach-darrell.jpg" alt="Darrell Thompson, Head Coach" className="w-full h-full object-cover object-top" />
            </div>

            {/* Bio */}
            <div>
              <p className="section-label">Head Coach &amp; Co-Owner</p>
              <h3 className="font-heading font-black text-3xl sm:text-4xl text-navy-dark mt-1 mb-2">
                Darrell Thompson
              </h3>
              <div className="flex flex-wrap gap-2 mb-7">
                {['20+ Years Experience', 'Creator of The Forge Protocol', 'Co-Founder, Cultivate Power Fighting Arts', 'Black Belt, Erik Paulson CSW'].map((tag) => (
                  <span key={tag} className="text-xs font-heading font-bold uppercase tracking-wide bg-brand-orange/10 text-brand-orange-dark border border-brand-orange/20 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Darrell Thompson has been training and developing strength since
                  2006. Over two decades of hands-on experience in strength
                  training, movement, and athletic performance. His background
                  extends beyond the gym into a lifetime of athletic disciplines,
                  including soccer, basketball, snowboarding, skateboarding, and
                  combat sports.
                </p>
                <p>
                  As the co-founder of{' '}
                  <a href="https://cultivatepower.net" target="_blank" rel="noopener noreferrer" className="text-brand-orange-dark font-semibold hover:underline">
                    Cultivate Power Fighting Arts
                  </a>{' '}
                  and the creator of The Forge Protocol, Darrell&apos;s approach to
                  training is built on structure, discipline, and real-world
                  capability. Not trends or gimmicks. His system focuses on
                  developing strength that transfers: grip, coordination,
                  balance, and power under pressure.
                </p>
                <p>
                  Through Strata Strength Lab, he brings that philosophy into a
                  new environment. Blending obstacle training, climbing-based
                  movement, and structured strength work to build resilient,
                  capable young athletes, toddlers to teens.
                </p>
                <p>
                  Darrell is also a co-founder of{' '}
                  <a href="https://orovilleyouthforge.org" target="_blank" rel="noopener noreferrer" className="text-brand-orange-dark font-semibold hover:underline">
                    Oroville Youth Forge
                  </a>
                  , a local initiative providing training scholarships to young
                  athletes in the community.
                </p>
                <p className="font-heading font-semibold text-navy">
                  His mission is simple: develop strength that holds up in the
                  real world.
                </p>
              </div>
            </div>
          </div>

          {/* Coach 2 — Amory */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Bio — left on this card */}
            <div className="lg:order-1">
              <p className="section-label">Kids&apos; Head Coach</p>
              <h3 className="font-heading font-black text-3xl sm:text-4xl text-navy-dark mt-1 mb-2">
                Amory Thompson
              </h3>
              <div className="flex flex-wrap gap-2 mb-7">
                {['Lifelong Athlete', 'BJJ Black Belt, Erik Paulson CSW', 'Kids\' Head Coach, Cultivate Power Fighting Arts'].map((tag) => (
                  <span key={tag} className="text-xs font-heading font-bold uppercase tracking-wide bg-brand-blue/10 text-brand-blue-dark border border-brand-blue/20 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Amory Thompson began strength training at just five years old,
                  developing under the same principles that would later become
                  The Forge Protocol. Raised in a disciplined training environment,
                  she has spent her life building strength, coordination, and
                  capability through consistent, structured practice.
                </p>
                <p>
                  A lifelong athlete with a strong foundation in combat sports,
                  Amory has competed in judo and extensively in Brazilian
                  Jiu-Jitsu. She is a black belt under Erik Paulson through
                  Combat Submission Wrestling (CSW), reflecting years of
                  dedication to technical mastery and performance under pressure.
                </p>
                <p>
                  As the head kids&apos; coach at Cultivate Power Fighting Arts, she
                  specializes in developing young athletes through structured
                  training that builds real strength, confidence, and discipline.
                  At Strata Strength Lab, she brings that same approach into
                  strength and movement training, helping the next generation
                  develop capability that carries beyond the gym.
                </p>
                <p className="font-heading font-semibold text-navy">
                  Her focus is simple: build athletes who are strong, capable,
                  and prepared.
                </p>
              </div>
            </div>

            {/* Photo — Amory */}
            <div className="lg:order-2 w-64 h-64 rounded-full overflow-hidden mx-auto lg:mx-0">
              <img src="/images/coach-amory.jpg" alt="Amory Thompson, Kids Head Coach" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          </div>{/* end coaches space-y wrapper */}
        </div>
      </section>

      {/* ─── LOCATION ─────────────────────────────────────────── */}
      <section className="py-24 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label text-brand-blue">Find Us</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight mt-2">
                Located in<br />
                <span className="text-brand-orange">Oroville, CA</span>
              </h2>
              <p className="text-white/60 mt-5 leading-relaxed">
                Strata Strength Lab is located in downtown Oroville, California,
                serving kids, teens, and families across Butte County. We are a
                local facility built specifically for this community, and a great
                option for parents in Oroville looking for fun, active, structured
                kids activities.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white">Address</p>
                    <p className="text-white/60 text-sm mt-1">1726 Montgomery Street, Unit 8<br />Oroville, CA 95965</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={GHL_TRIAL_LINK} className="btn-primary">Book Free Trial Class</a>
                <Link href="/contact" className="btn-outline">Get Directions</Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-80 border border-white/10">
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
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <FAQ
        heading="About Strata FAQ"
        label="Common Questions"
        dark
        items={[
          {
            q: 'What makes Strata Strength Lab different from a regular gym?',
            a: "Strata is not a general gym. It is a youth climbing, obstacle, movement, and strength development facility where kids and teens build real-world capability through structured, coach-led training. Every session is built around three core disciplines: Ninja Warrior-style obstacle training, climbing wall and grip development, and the Forge Protocol strength system. Every session has structure, progression, and a coaching standard. There are no random workouts. A great fit for families looking for kids activities in Oroville that are active, structured, and genuinely developmental.",
          },
          {
            q: 'What is the Forge Protocol?',
            a: "The Forge Protocol is Strata's structured strength training system. It is built on foundational movement patterns: squat, hinge, push, pull, carry. Applied with discipline and progressive overload. Strength is earned through repetition and structure, not shortcuts.",
          },
          {
            q: 'What age groups do you train?',
            a: 'Strata serves toddlers through teens. From our youngest athletes just beginning to develop movement skills, all the way through high school age. Every age group trains with structure, appropriate progressions, and expert coaching.',
          },
          {
            q: 'Is strength training safe for children?',
            a: 'Yes. When properly coached, youth strength training is one of the most effective and safest forms of physical development available to children. Our coaches are trained specifically in age-appropriate programming and movement quality standards.',
          },
          {
            q: 'Do athletes need prior experience to start?',
            a: 'No experience is required. All programs begin with foundational movement and progress from there. Whether someone has never trained before or is a multi-sport athlete, we meet them where they are.',
          },
          {
            q: 'Do you serve kids from outside Oroville?',
            a: 'Yes. We welcome kids, teens, and families from across Butte County, including Chico, Paradise, Gridley, and surrounding communities. If you are looking for youth climbing, obstacle training, or kids fitness classes near you, Strata is worth the drive.',
          },
        ]}
      />
    </>
  )
}
