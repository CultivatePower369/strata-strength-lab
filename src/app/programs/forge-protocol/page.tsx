import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'The Forge Protocol: Youth Strength Training for Kids in Oroville, CA',
  description:
    'The Forge Protocol is a structured youth strength training system for kids and teens in Oroville, CA. Age-appropriate strength development built on foundational movement patterns with progressive overload. Real strength training, done right for young athletes.',
}

const GHL_TRIAL_LINK = '#trial'

export default function ForgeProtocolPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/programs" className="text-brand-blue text-sm font-heading font-semibold hover:underline">← All Programs</Link>
          <span className="text-5xl block mt-4 mb-2">⚒️</span>
          <span className="section-label text-brand-blue">The Forge Protocol</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Real Strength. <span className="text-brand-orange">Built Right.</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Built from 20+ years of training young athletes to move, perform, and develop real-world strength. Age-appropriate, structured, and progressive for kids and teens.
          </p>
          <p className="mt-3 text-white/50 text-sm max-w-xl mx-auto">
            Every Strata coach is trained in this method to deliver consistent, high-quality instruction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-4">Book Free Trial Class</a>
          </div>
        </div>
      </section>

      {/* The Five Patterns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">The System</span>
            <h2 className="section-heading">Five Patterns. <span className="text-brand-orange">Every Athlete.</span></h2>
            <p className="section-subheading max-w-2xl mx-auto">The Forge Protocol builds strength on five foundational movement patterns that every human body is designed to perform and that every sport demands.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { pattern: 'Squat', icon: '🦵', desc: 'Lower body power, knee stability, and athletic base.' },
              { pattern: 'Hinge', icon: '⚡', desc: 'Hip strength, posterior chain development, and injury prevention.' },
              { pattern: 'Push', icon: '💪', desc: 'Pressing strength, shoulder stability, and upper body power.' },
              { pattern: 'Pull', icon: '🔗', desc: 'Back strength, grip development, and posture.' },
              { pattern: 'Carry', icon: '🏋️', desc: 'Full-body strength, core stability, and real-world capability.' },
            ].map((p) => (
              <div key={p.pattern} className="card p-6 border border-brand-orange/10 text-center bg-brand-orange/5">
                <span className="text-3xl block mb-2">{p.icon}</span>
                <h3 className="font-heading font-black text-brand-orange text-lg mb-2">{p.pattern}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label text-brand-blue">The Standard</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight">
              Structure That <span className="text-brand-orange">Produces Results</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Progressive Overload', body: 'Every athlete trains on a progression plan. Loads, volume, and complexity increase systematically. Not randomly. Your child is never doing the same workout as they did six weeks ago.' },
              { title: 'Movement Quality First', body: 'Before weight is added, movement is owned. The Forge Protocol enforces a strict movement quality standard because a movement done poorly does not make athletes stronger. It makes them injured.' },
              { title: 'Age-Appropriate Programming', body: 'Toddlers do not train like teens. Every age group has a specifically designed progression track. Darrell Thompson has 20+ years of experience building programs that match the developmental stage of each athlete.' },
              { title: 'No Random Workouts', body: 'Every session is planned with purpose. Athletes know what they are working on, why, and what comes next. The randomness that passes for training at other gyms has no place in the Forge Protocol.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <h3 className="font-heading font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-orange">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mb-4">
            Give Your Athlete a Real Strength Foundation
          </h2>
          <p className="text-white/80 text-lg mb-8">Book a free trial class and let them experience the Forge Protocol firsthand.</p>
          <a href={GHL_TRIAL_LINK} className="inline-block bg-white text-brand-orange font-heading font-black text-lg px-12 py-4 rounded-xl hover:bg-navy-dark hover:text-white transition-colors duration-200">
            Book Free Trial Class
          </a>
        </div>
      </section>

      <FAQ
        heading="Forge Protocol FAQ"
        label="Questions"
        items={[
          { q: 'Is strength training safe for kids?', a: 'Yes. Decades of sports science research confirm that properly coached youth strength training is safe, effective, and one of the best investments in a young athlete\'s long-term health. The key word is properly coached. Which is exactly what the Forge Protocol delivers.' },
          { q: 'What age can kids start strength training?', a: 'The Forge Protocol starts with athletes as young as 6. Younger athletes focus on bodyweight patterns and movement quality. Loading is introduced progressively as athletes demonstrate control and readiness.' },
          { q: 'Will strength training stunt my child\'s growth?', a: 'No. This is a persistent myth with no scientific basis. Research consistently shows that properly coached youth strength training does not affect growth plates and actually promotes bone density and joint health.' },
          { q: 'How is this different from a high school weight room or a standard gym class?', a: 'The Forge Protocol is a structured system with progressive programming, movement quality standards, and age-appropriate loading. A high school weight room is typically unsupervised access to equipment with no programming. The difference is the difference between youth strength development and just showing up to lift. At Strata, every rep has a purpose.' },
          { q: 'Do I need to buy any equipment?', a: 'No. All equipment is provided at Strata Strength Lab. Athletes show up in athletic clothes and shoes.' },
        ]}
      />
    </>
  )
}
