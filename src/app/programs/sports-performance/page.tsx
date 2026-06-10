import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Youth Athletic Development & Sports Performance Training in Oroville, CA',
  description:
    'Functional fitness and athletic development for youth athletes in Oroville, CA. Speed, agility, power, coordination, and movement skills that show up on game day. Structured training for kids and teens in any sport.',
}

const GHL_TRIAL_LINK = '#trial'

export default function SportsPerformancePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/programs" className="text-brand-blue text-sm font-heading font-semibold hover:underline">← All Programs</Link>
          <span className="text-5xl block mt-4 mb-2">⚡</span>
          <span className="section-label text-brand-blue">Functional Fitness for Sports</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Train Here. <span className="text-brand-orange">Win There.</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Speed, power, agility, and coordination training built specifically for youth athletes. Whatever sport your child plays, Strata builds the athletic foundation that makes them better at it. And more resilient through an entire season.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-4">Book a Free Trial Class</a>
            <Link href="/schedule" className="btn-outline text-base px-10 py-4">View Class Schedule</Link>
          </div>
        </div>
      </section>

      {/* What Transfers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Athletic Development</span>
            <h2 className="section-heading">Skills That <span className="text-brand-orange">Show Up on Game Day</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💨', title: 'Speed & Acceleration', body: 'Proper sprint mechanics, first-step quickness, and change-of-direction speed that directly impact performance in every field and court sport.' },
              { icon: '⚡', title: 'Power & Explosiveness', body: 'Plyometric progressions and strength work that build the explosive power young athletes need for jumping, throwing, and contact sports.' },
              { icon: '🎯', title: 'Agility & Coordination', body: 'Multi-directional movement, reaction drills, and coordination training that make athletes more adaptable and harder to beat.' },
              { icon: '🛡️', title: 'Injury Resilience', body: 'Proper movement patterns, tissue strength, and joint stability that keep athletes healthy through full competitive seasons.' },
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

      {/* CTA */}
      <section className="py-16 bg-navy-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mb-4">
            Build a Better Athlete
          </h2>
          <p className="text-white/70 text-lg mb-8">Book a free trial and see what purposeful athletic training looks like for your child.</p>
          <a href={GHL_TRIAL_LINK} className="btn-primary text-lg px-12 py-4">Book Your Free Trial Class</a>
        </div>
      </section>

      <FAQ
        heading="Sports Performance FAQ"
        label="Questions"
        items={[
          { q: 'What sports does this program support?', a: 'All of them. The athletic qualities we develop: speed, power, agility, coordination, and strength are the foundation of every sport. Soccer, basketball, baseball, wrestling, martial arts, football, track. Strata athletes perform better in all of them.' },
          { q: 'How young can athletes start sports performance training?', a: 'We work with athletes starting at age 6. Younger athletes focus on foundational movement, coordination, and body control. Older athletes progressively add speed work, power development, and sport-specific conditioning.' },
          { q: 'How often should my athlete train?', a: '2 to 3 sessions per week produces consistent, measurable gains. We recommend training year-round with adjusted intensity during competitive seasons.' },
          { q: 'Can this program run alongside my child\'s sport season?', a: 'Yes. And it should. In-season training maintains the gains your athlete built in the off-season and keeps them healthy. We adjust volume and intensity to complement, not compete with, their sport schedule.' },
        ]}
      />
    </>
  )
}
