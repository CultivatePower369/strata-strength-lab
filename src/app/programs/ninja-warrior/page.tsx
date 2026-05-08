import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Ninja Warrior Training for Kids in Oroville, CA',
  description:
    'Structured Ninja Warrior obstacle training for toddlers through teens in Oroville, CA. Your child builds coordination, grip strength, body control, and real confidence. Coached and progressive.',
}

const GHL_TRIAL_LINK = '#trial'

export default function NinjaWarriorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/programs" className="text-brand-blue text-sm font-heading font-semibold hover:underline">← All Programs</Link>
          <span className="text-5xl block mt-4 mb-2">🏃</span>
          <span className="section-label text-brand-blue">Ninja Warrior Obstacle Training</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Watch Your Child <span className="text-brand-orange">Conquer the Course</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Structured obstacle training that builds coordination, grip strength, body control, and the kind of confidence that carries into every part of your child&apos;s life. Coached and progressive from toddlers through teens.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-4">Claim My Child&apos;s Founding Spot</a>
            <Link href="/schedule" className="btn-outline text-base px-10 py-4">View Class Schedule</Link>
          </div>
        </div>
      </section>

      {/* What Your Child Builds */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Real Results</span>
            <h2 className="section-heading">What Your Child <span className="text-brand-orange">Actually Gains</span></h2>
            <p className="section-subheading max-w-2xl mx-auto">After 8 to 12 weeks of structured obstacle training, here is what parents consistently see.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💪', title: 'Grip & Upper Body Strength', body: 'Traversing obstacles builds real pulling and gripping strength that carries into every sport and daily activity.' },
              { icon: '⚖️', title: 'Balance & Body Control', body: 'Moving across varied obstacles trains proprioception and spatial awareness. These skills prevent injuries and improve athleticism.' },
              { icon: '🧠', title: 'Problem-Solving Under Pressure', body: 'Each obstacle is a puzzle. Kids learn to assess, attempt, adjust, and persist. That mindset goes far beyond the gym.' },
              { icon: '🏆', title: 'Earned Confidence', body: 'When a kid clears an obstacle they have been working on for weeks, the confidence that follows is real and lasting.' },
            ].map((item) => (
              <div key={item.title} className="card p-7 border border-navy/10 text-center">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-navy text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label text-brand-blue">The Method</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight">
              Not Free Play. <span className="text-brand-orange">Coached Progression.</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">Every session follows a structure. Here is how your child progresses.</p>
          </div>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Movement Warm-Up', body: 'Every session starts with a structured warm-up that prepares joints, activates muscles, and sets the tone for focused work.' },
              { step: '02', title: 'Skill Work', body: 'Coaches introduce or reinforce a specific obstacle skill: brachiation, balance beam traversal, lache technique, or grip endurance. Proper progressions are built in for each age group.' },
              { step: '03', title: 'Obstacle Course Circuit', body: 'Athletes apply skills in a timed or structured circuit. Progressions are built in so every child is challenged at the right level. No one gets thrown into the deep end.' },
              { step: '04', title: 'Cool-Down & Review', body: 'Sessions close with mobility work and a brief coach review so every athlete leaves knowing exactly what they worked on and what to aim for next time.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <span className="font-heading font-black text-4xl text-brand-orange/30 shrink-0 w-12">{s.step}</span>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Age Groups</span>
            <h2 className="section-heading">Built for Every <span className="text-brand-orange">Stage</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { age: 'Toddlers (2 to 5)', icon: '🐣', body: 'Simple obstacle sequences that build gross motor skills, balance, and love of movement in a safe, coached environment.' },
              { age: 'Kids (6 to 12)', icon: '🏅', body: 'Progressive obstacle skills, grip training, and course challenges that develop real athletic ability during the prime development window.' },
              { age: 'Teens (13 to 18)', icon: '🔥', body: 'Advanced obstacle techniques, speed work, and competitive-level training for athletes who want to push to the next level.' },
            ].map((g) => (
              <div key={g.age} className="card p-8 border border-navy/10 text-center">
                <span className="text-4xl block mb-3">{g.icon}</span>
                <h3 className="font-heading font-bold text-navy text-xl mb-3">{g.age}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-orange">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mb-4">
            Ready to See What Your Child Can Do?
          </h2>
          <p className="text-white/80 text-lg mb-8">Book a free trial class. No commitment. No equipment needed. Just show up.</p>
          <a href={GHL_TRIAL_LINK} className="inline-block bg-white text-brand-orange font-heading font-black text-lg px-12 py-4 rounded-xl hover:bg-navy-dark hover:text-white transition-colors duration-200">
            Claim My Child&apos;s Founding Spot
          </a>
        </div>
      </section>

      <FAQ
        heading="Ninja Warrior Training FAQ"
        label="Questions"
        items={[
          { q: 'Does my child need prior experience?', a: 'No experience needed. All athletes start with foundational movements and progress at their own pace. Coaches scale every challenge to the individual.' },
          { q: 'What age can my child start?', a: 'We work with toddlers as young as 2 through teens up to 18. Classes are grouped by age and ability so every athlete trains with peers at the right level.' },
          { q: 'Is Ninja Warrior training safe for young kids?', a: 'Yes. Our obstacle course progressions are specifically designed for young athletes with appropriate challenge levels at every age. Coaches supervise every movement.' },
          { q: 'How is this different from a regular gymnastics or PE class?', a: 'Ninja Warrior training at Strata is coached and progressive, not recreational. Every session has a structured plan, measurable progressions, and a movement quality standard. It is athletic development, not free play.' },
          { q: 'What should my child wear?', a: 'Comfortable athletic clothes and athletic shoes (or grip socks). No sandals or open-toed shoes. No jewelry on the obstacle course.' },
          { q: 'How often should my child train?', a: '2 to 3 times per week is ideal for consistent progress. Once per week maintains skills. We offer flexible scheduling to fit your family.' },
        ]}
      />
    </>
  )
}
