import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Strata Strength Lab offers Ninja Warrior obstacle training, climbing wall classes, and the Forge Protocol strength program for toddlers through teens in Oroville, CA. Book a free trial.',
}

const GHL_TRIAL_LINK = '#trial'

const programs = [
  {
    id: 'ninja-warrior',
    href: '/programs/ninja-warrior',
    emoji: '🏃',
    title: 'Ninja Warrior Obstacle Course',
    tagline: 'Move through the challenge.',
    description: `Our Ninja Warrior obstacle course is the centerpiece of what makes Strata unique. Athletes navigate a structured obstacle course system that develops coordination, grip strength, agility, body control, and mental resilience simultaneously. This is not an open play area — it is coached, progressive, and purposeful. Each obstacle teaches a physical skill, and athletes advance through progressions as they master each challenge. The result is a genuinely capable, confident athlete who knows how to move under pressure.`,
    details: [
      'Full obstacle course with progressive challenge levels',
      'Develops grip, agility, coordination, and body control',
      'Coached technique — not just free play',
      'Mental resilience built through structured challenge',
      'For toddlers through teens — all experience levels welcome',
    ],
    color: 'border-navy',
    accent: 'bg-navy',
    textAccent: 'text-navy',
  },
  {
    id: 'climbing',
    href: '/programs/climbing-wall',
    emoji: '🧗',
    title: 'Climbing Rock Wall',
    tagline: 'Grip strength. Problem-solving. Real capability.',
    description: `The climbing rock wall at Strata is not a bonus — it is a core training tool. Rock climbing builds grip strength, upper-body pulling power, core stability, and spatial awareness in ways that no machine or barbell can replicate. Athletes learn to read the wall, plan their movement, and execute under fatigue. This climbing-inspired approach to grip and movement development carries over directly to every other thing we train. Beginners start with fundamentals. Advanced athletes tackle technical routes and timed challenges. Everyone improves.`,
    details: [
      'Coached climbing sessions for all levels',
      'Grip strength and pulling power development',
      'Core stability and body tension training',
      'Spatial awareness and route-reading skills',
      'Progressive routes from beginner to advanced',
    ],
    color: 'border-brand-blue',
    accent: 'bg-brand-blue',
    textAccent: 'text-brand-blue-dark',
  },
  {
    id: 'forge-protocol',
    href: '/programs/forge-protocol',
    emoji: '⚒️',
    title: 'Forge Protocol / Sports Attribute Development',
    tagline: 'Strength earned through structure. Performance built to transfer.',
    description: `The Forge Protocol is Strata's structured strength and athletic development system. Built around the foundational movement patterns — squat, hinge, push, pull, and carry — it applies discipline, repetition, and progressive overload to develop real-world functional strength. Sports attribute development layers on top: speed mechanics, explosive power, agility, and multi-directional conditioning that transfers directly to game day performance. This is not a circuit class or generic gym workout. It is a system where movement quality comes first, load and intensity are earned, and every athlete leaves more capable than when they walked in.`,
    details: [
      'Squat, hinge, push, pull, carry — foundational movement patterns',
      'Speed, agility, and explosive power development',
      'Progressive overload — movement quality before load',
      'Age-appropriate programming from toddlers through teens',
      'Applicable to any sport — builds athletes, not just fitness',
    ],
    color: 'border-brand-orange',
    accent: 'bg-brand-orange',
    textAccent: 'text-brand-orange',
  },
  {
    id: 'birthday-parties',
    href: '/programs/birthday-parties',
    emoji: '🎉',
    title: 'Birthday Parties',
    tagline: 'The most active party in Oroville.',
    description: `Skip the bounce house. Celebrate at Strata — where kids get to run the obstacle course, climb the wall, compete in relay races, and experience a birthday party that is genuinely different. We provide the activity and the coaching. You enjoy the celebration. Private facility use for 2 hours with a coached experience your group will not forget.`,
    details: [
      'Private 2-hour facility rental',
      'Coached obstacle course and climbing activities',
      'Relay challenges and group games included',
      'Safe, clean, fully supervised environment',
      'Available on weekends — contact us for availability',
    ],
    color: 'border-brand-blue',
    accent: 'bg-brand-blue',
    textAccent: 'text-brand-blue-dark',
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-label text-brand-blue">What We Offer</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Four Programs.<br />
            <span className="text-brand-orange">One Standard.</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Every program at Strata is structured, coached, and built with
            purpose. No random workouts. No filler. Ninja Warrior obstacle
            training, climbing rock wall, the Forge Protocol, and birthday
            parties — toddlers to teens, every level.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((p, i) => (
            <div
              key={p.id}
              id={p.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-16 ${i !== programs.length - 1 ? 'border-b border-gray-100' : ''} ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="text-5xl block mb-5">{p.emoji}</span>
                <span className={`section-label ${p.textAccent}`}>{p.tagline}</span>
                <h2 className="section-heading mt-1">{p.title}</h2>
                <p className="text-gray-600 leading-relaxed mt-5 text-base">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {p.id === 'birthday-parties' ? (
                    <Link href={p.href} className="btn-primary inline-block">
                      Book Your Birthday Party
                    </Link>
                  ) : (
                    <>
                      <a href={GHL_TRIAL_LINK} className="btn-primary inline-block">
                        Claim My Child&apos;s Founding Spot
                      </a>
                      <Link href={p.href} className="btn-outline-navy inline-block">
                        Learn More →
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Details card */}
              <div className={`border-l-4 ${p.color} bg-navy-50 rounded-xl p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-heading font-bold text-navy text-sm uppercase tracking-widest mb-5">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {p.details.map((d) => (
                    <li key={d} className="flex gap-3 items-start">
                      <span className={`mt-1 w-5 h-5 rounded-full ${p.accent} flex items-center justify-center shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strata Levels */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-brand-orange">How Athletes Progress</span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mt-2 mb-4">
            The Strata Levels System
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto mb-12">
            Every athlete progresses through the Strata system at their own pace — no shortcuts, no ceiling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                level: 'Level 1',
                name: 'Foundation',
                color: 'border-brand-blue',
                accent: 'text-brand-blue',
                body: 'Movement fundamentals, body awareness, and coordination basics. This is where every athlete starts — regardless of age or experience.',
              },
              {
                level: 'Level 2',
                name: 'Development',
                color: 'border-brand-orange',
                accent: 'text-brand-orange',
                body: 'Progressive loading, skill refinement, and increasing challenge. Athletes here have the basics locked in and are building real strength.',
              },
              {
                level: 'Level 3',
                name: 'Performance',
                color: 'border-white/40',
                accent: 'text-white',
                body: 'Advanced programming, sport-specific attributes, and competition-level preparation. Earned through consistent work at levels 1 and 2.',
              },
            ].map((l) => (
              <div key={l.level} className={`bg-white/5 border-t-4 ${l.color} rounded-xl p-7 text-left`}>
                <p className={`font-heading font-bold text-xs uppercase tracking-widest mb-1 ${l.accent}`}>{l.level}</p>
                <h3 className="font-heading font-black text-white text-xl mb-3">{l.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        heading="Programs FAQ"
        label="Common Questions"
        items={[
          {
            q: 'What is the Forge Protocol?',
            a: "The Forge Protocol is Strata's structured strength training system. It is built around the foundational movement patterns — squat, hinge, push, pull, carry — applied with progressive overload and a strict movement quality standard. Strength is earned through structure and repetition, not shortcuts.",
          },
          {
            q: 'Is the Ninja Warrior training just for kids?',
            a: 'No. The obstacle course system at Strata serves toddlers through teens. The progressions scale to meet each athlete where they are. Every age group benefits from developing coordination, grip strength, agility, and body control through structured obstacle training.',
          },
          {
            q: 'Do athletes need prior experience to start?',
            a: 'No experience is required for any program. All training begins with movement fundamentals. Whether someone is 6 years old or 45, we start with what they can do and build from there.',
          },
          {
            q: 'Is climbing safe for children?',
            a: 'Yes. All climbing sessions are coach-supervised with age-appropriate progressions and safety standards. Climbing is one of the most complete physical development activities available to young athletes — building grip, pulling strength, core stability, and spatial awareness simultaneously.',
          },
          {
            q: 'Can my child or I participate in more than one program?',
            a: 'Yes — and most serious athletes do. Combining the obstacle course, climbing wall, and Forge Protocol strength training creates a complete development system. We will help you build the right weekly schedule based on goals and recovery.',
          },
          {
            q: 'What equipment is in the facility?',
            a: 'Strata includes a full Ninja Warrior obstacle course, a climbing wall, and a strength training area with barbells, dumbbells, kettlebells, resistance bands, and bodyweight equipment — all available through coached classes and Open Mat.',
          },
          {
            q: 'How do I book a birthday party?',
            a: 'Birthday parties are private bookings, separate from the class schedule. Contact us through the contact page, mention the birthday party, and we will get availability and details to you quickly.',
          },
        ]}
      />

      {/* CTA */}
      <section className="py-24 bg-cta-pattern">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Claim your founding spot and we&apos;ll help you find the perfect program
            for your athlete.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-outline text-lg px-10 py-5">
              Claim My Child&apos;s Founding Spot
            </a>
            <Link href="/schedule" className="btn-outline text-lg px-10 py-5">
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
