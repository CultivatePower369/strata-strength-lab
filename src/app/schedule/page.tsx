import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Class Schedule — Coming Soon',
  description:
    'Strata Strength Lab is opening soon in Oroville, CA. Class schedule will be published before we open. Claim your founding spot now.',
}

const GHL_TRIAL_LINK = '#trial'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-label text-brand-blue">Class Times</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Class <span className="text-brand-orange">Schedule</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            We&apos;re still building out our space. Full class times will be published
            before we open — founding members get first pick.
          </p>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="bg-brand-orange/10 border-b border-brand-orange/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-orange-dark text-sm font-heading font-semibold text-center sm:text-left">
            Founding members get priority placement — first pick of class times before public enrollment opens.
          </p>
          <a href={GHL_TRIAL_LINK} className="btn-primary text-sm px-6 py-2 shrink-0">
            Claim My Child&apos;s Founding Spot
          </a>
        </div>
      </div>

      {/* Schedule Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Desktop */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="grid grid-cols-7 gap-4 min-w-[900px]">
              {days.map((day) => (
                <div key={day} className="space-y-3">
                  <div className="text-center py-3 rounded-lg font-heading font-bold text-sm uppercase tracking-wider bg-navy-dark text-white">
                    {day}
                  </div>
                  <div className="rounded-lg border bg-gray-50 border-gray-200 p-3 text-center">
                    <p className="font-heading font-bold text-xs text-gray-400 leading-snug">
                      Coming Soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-4">
            {days.map((day) => (
              <div key={day} className="rounded-lg border border-gray-200 p-4 flex justify-between items-center">
                <p className="font-heading font-bold text-sm text-navy">{day}</p>
                <p className="text-xs font-heading font-semibold text-gray-400">Coming Soon</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white">
            Want to know your class time before anyone else?
          </h2>
          <p className="text-white/60 mt-3 text-base">
            Founding members choose their schedule before we open to the public.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary">
              Claim My Child&apos;s Founding Spot
            </a>
            <Link href="/contact" className="btn-outline">
              Have a Question?
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
