import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Kids Mobility & Movement Training in Oroville, CA',
  description:
    'Youth mobility and movement training in Oroville, CA. Active flexibility, joint control, and body awareness that keeps young athletes healthy and performing at their best.',
}

const GHL_TRIAL_LINK = '#trial'

export default function MobilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/programs" className="text-brand-blue text-sm font-heading font-semibold hover:underline">← All Programs</Link>
          <span className="text-5xl block mt-4 mb-2">🧘</span>
          <span className="section-label text-brand-blue">Mobility & Movement</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Move Better. <span className="text-brand-orange">Stay in the Game.</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Mobility is the foundation of athletic performance. Young athletes who move well get injured less, recover faster, and outperform peers who have more raw talent but less body control. This program builds the active flexibility and joint health your child needs for a long, healthy athletic career.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-4">Book a Free Trial Class</a>
            <Link href="/schedule" className="btn-outline text-base px-10 py-4">View Class Schedule</Link>
          </div>
        </div>
      </section>

      {/* What They Gain */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">What Changes</span>
            <h2 className="section-heading">More Than <span className="text-brand-orange">Flexibility</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🦴', title: 'Joint Health & Control', body: 'Active mobility work builds the tissue strength around joints that passive stretching alone cannot develop — protecting against the overuse injuries that sideline young athletes.' },
              { icon: '🏃', title: 'Better Movement Patterns', body: 'Athletes who move well perform better. Proper hip mobility, shoulder range, and ankle stability make every athletic movement more efficient and powerful.' },
              { icon: '🛡️', title: 'Injury Prevention', body: 'The majority of non-contact youth sports injuries are preventable with proper movement preparation. This program specifically addresses the areas most at risk for young athletes.' },
            ].map((item) => (
              <div key={item.title} className="card p-8 border border-brand-blue/10 text-center">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-brand-blue text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mb-4">
            Keep Your Athlete Healthy and Moving
          </h2>
          <p className="text-white/80 text-lg mb-8">Book a free trial and let your child experience what intentional movement training feels like.</p>
          <a href={GHL_TRIAL_LINK} className="inline-block bg-white text-brand-blue font-heading font-black text-lg px-12 py-4 rounded-xl hover:bg-navy-dark hover:text-white transition-colors duration-200">
            Book Your Free Trial Class
          </a>
        </div>
      </section>

      <FAQ
        heading="Mobility & Movement FAQ"
        label="Questions"
        items={[
          { q: 'Is this program just stretching?', a: 'No. Active mobility work is fundamentally different from passive stretching. We develop the strength and control to move joints through their full range under load — which is what actually protects athletes and improves performance.' },
          { q: 'What age is this appropriate for?', a: 'All ages. The earlier athletes develop good movement patterns and joint mobility, the better their long-term athletic trajectory. Toddlers through teens all benefit from intentional movement training.' },
          { q: 'Can this help my child recover from a minor injury?', a: 'We are not a physical therapy clinic and do not treat injuries. However, athletes recovering from minor issues often find that proper mobility work supports their return to full training. Always consult your healthcare provider first.' },
          { q: 'How does this fit with my child\'s other training?', a: 'Mobility training complements all other training. We recommend it alongside strength work, obstacle training, and sports participation — not instead of them. It is the maintenance that keeps the machine running.' },
        ]}
      />
    </>
  )
}
