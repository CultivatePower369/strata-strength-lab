import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Open Mat Training in Oroville, CA | Strata Strength Lab',
  description:
    'Open Mat at Strata Strength Lab in Oroville, CA. Structured open training time for youth athletes to practice skills, work on progressions, and train independently with coaching available.',
}

const GHL_TRIAL_LINK = '#trial'

export default function OpenMatPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/programs" className="text-brand-blue text-sm font-heading font-semibold hover:underline">← All Programs</Link>
          <span className="text-5xl block mt-4 mb-2">🎯</span>
          <span className="section-label text-brand-blue">Open Mat</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Your Training. <span className="text-brand-orange">Your Pace.</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Open Mat gives athletes structured access to all of Strata&apos;s equipment: obstacle course, climbing wall, and strength training area. Coaches are on hand to answer questions, correct movement, and guide practice. Built for athletes who want extra repetitions outside of their regular class schedule.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-4">Book a Free Trial</a>
            <Link href="/schedule" className="btn-outline text-base px-10 py-4">View Schedule</Link>
          </div>
        </div>
      </section>

      {/* What Open Mat Is */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">What to Expect</span>
            <h2 className="section-heading">Structured Access, <span className="text-brand-orange">Real Practice</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏗️', title: 'Full Facility Access', body: 'Obstacle course, climbing wall, and strength training area are all available during Open Mat sessions.' },
              { icon: '👨‍🏫', title: 'Coaches On-Site', body: 'Open Mat is not unsupervised free time. Coaches are present to guide, correct, and answer questions. Athletes get the benefit of coaching without a structured class format.' },
              { icon: '📈', title: 'Extra Repetitions', body: 'The fastest way to improve is more quality practice. Open Mat gives athletes a second or third training opportunity each week to reinforce skills from class.' },
            ].map((item) => (
              <div key={item.title} className="card p-8 border border-navy/10 text-center">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-navy text-lg mb-3">{item.title}</h3>
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
            Ready to Add an Extra Session?
          </h2>
          <p className="text-white/70 text-lg mb-8">Contact us or book a trial to learn more about Open Mat availability.</p>
          <a href={GHL_TRIAL_LINK} className="btn-primary text-lg px-12 py-4">Get Started</a>
        </div>
      </section>

      <FAQ
        heading="Open Mat FAQ"
        label="Questions"
        items={[
          { q: 'Who is Open Mat for?', a: 'Open Mat is best for athletes who are already enrolled in at least one regular class and want additional practice time. It is not the best first introduction to Strata. A free trial class in a structured program is a better starting point.' },
          { q: 'Is there a coach at Open Mat?', a: 'Yes. Strata coaches are present during all Open Mat sessions to supervise, assist, and provide guidance. Athletes are not left on their own.' },
          { q: 'Can my child attend Open Mat without a regular class membership?', a: 'Contact us to discuss the best option for your athlete. We want every child training with the right structure for their current level.' },
          { q: 'What equipment is available during Open Mat?', a: 'All of it. The full obstacle course, climbing wall, and strength training equipment are available during Open Mat hours. Check the schedule for specific Open Mat times.' },
        ]}
      />
    </>
  )
}
