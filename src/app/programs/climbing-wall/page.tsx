import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Kids Climbing Wall & Grip Training in Oroville, CA',
  description:
    'Climbing wall and grip development training for kids and teens in Oroville, CA. Build upper body strength, core stability, focus, and spatial awareness through coached progressive climbing.',
}

const GHL_TRIAL_LINK = '#trial'

export default function ClimbingWallPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Link href="/programs" className="text-brand-blue text-sm font-heading font-semibold hover:underline">← All Programs</Link>
          <span className="text-5xl block mt-4 mb-2">🧗</span>
          <span className="section-label text-brand-blue">Climbing Wall & Grip Training</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Strength That <span className="text-brand-orange">Starts at the Wall</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            The climbing wall is one of the most effective athletic development tools available for young athletes. It builds grip strength, pulling power, core stability, spatial awareness, and mental focus — all at once, all through play that feels like anything but training.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary text-base px-10 py-4">Book a Free Trial Class</a>
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
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '✊', title: 'Grip & Forearm Strength', body: 'Holding, traversing, and climbing develops grip strength that directly carries over to every sport and every obstacle.' },
              { icon: '🏋️', title: 'Upper Body & Core', body: 'Every pull on the wall recruits back, shoulders, biceps, and core — full-body strength built through natural movement.' },
              { icon: '📐', title: 'Spatial Awareness', body: 'Reading a wall, planning a route, and executing it develops three-dimensional thinking and body positioning that no machine can teach.' },
              { icon: '🎯', title: 'Focus & Persistence', body: 'Climbing routes demand attention and patience. Athletes learn to stay calm, think clearly, and push through when it gets hard.' },
            ].map((item) => (
              <div key={item.title} className="card p-7 border border-brand-blue/10 text-center">
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-brand-blue text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why the Wall */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Why Climbing</span>
              <h2 className="section-heading">No Machine <span className="text-brand-orange">Replicates This</span></h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mt-6">
                <p>A lat pulldown machine trains one pattern in one plane. A climbing wall trains grip, pulling, core bracing, hip mobility, footwork, balance, and route planning — simultaneously, every single rep.</p>
                <p>For young athletes, the wall is not just exercise. It is a problem-solving environment that builds physical and mental capability together. Kids who climb consistently develop stronger hands, more athletic bodies, and a willingness to tackle hard things — because they have done it on the wall.</p>
                <p>At Strata, climbing is a core training tool — not an afterthought. Every session is coached with progressions tailored to your child&apos;s current ability and clear goals for what comes next.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Grip Strength', sub: 'Developed through every session' },
                { label: 'Full Body', sub: 'Upper, core, and lower chain' },
                { label: 'All Levels', sub: 'Beginners to advanced' },
                { label: 'All Ages', sub: 'Toddlers through teens' },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-6 text-center shadow-sm border border-navy/5">
                  <span className="block font-heading font-black text-navy text-lg mb-1">{s.label}</span>
                  <span className="text-gray-500 text-xs">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight mb-4">
            Let Your Child Try the Wall — Free
          </h2>
          <p className="text-white/80 text-lg mb-8">Book a free trial class. No experience needed. Coaches handle everything.</p>
          <a href={GHL_TRIAL_LINK} className="inline-block bg-white text-brand-blue font-heading font-black text-lg px-12 py-4 rounded-xl hover:bg-navy-dark hover:text-white transition-colors duration-200">
            Book Your Free Trial Class
          </a>
        </div>
      </section>

      <FAQ
        heading="Climbing Wall Training FAQ"
        label="Questions"
        items={[
          { q: 'Does my child need climbing experience?', a: 'No experience needed. Our coaches start every new athlete with foundational grips, footwork, and body positioning before progressing to more advanced techniques.' },
          { q: 'Is climbing safe for young children?', a: 'Yes. Our wall is specifically designed and maintained for youth athletes. Coaches supervise every session and use age-appropriate progressions. Safety is the first standard at Strata.' },
          { q: 'What does a climbing session look like?', a: 'Sessions include a warm-up, specific skill work (grip technique, footwork, route reading), structured climbing time on the wall, and a cool-down. Every session is coached — not free climb time.' },
          { q: 'Will this help my child in other sports?', a: 'Yes. Grip strength, upper body pulling strength, core stability, and spatial awareness all transfer directly into sports performance. Many of our athletes train climbing specifically to become better athletes in their primary sport.' },
          { q: 'What should my child wear to climbing class?', a: 'Comfortable athletic clothes that allow full range of motion. Athletic shoes are fine. No sandals. We recommend grip socks if available.' },
        ]}
      />
    </>
  )
}
