import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Strata Strength Lab',
  description: 'Your registration has been received.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-navy-dark text-white flex flex-col">

      {/* ─── MINIMAL HEADER ─────────────────────────────────────────────── */}
      <header className="border-b border-white/[0.07] py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Strata Strength Lab"
              width={44}
              height={44}
              className="rounded-lg"
            />
          </Link>
        </div>
      </header>

      {/* ─── MAIN CONTENT ───────────────────────────────────────────────── */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-xl w-full text-center">

          {/* Confirmation badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-heading font-bold text-[11px] tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
            Payment Confirmed
          </div>

          <h1 className="font-heading font-black text-[clamp(40px,8vw,72px)] leading-none tracking-tight uppercase mb-6">
            Welcome to<br />
            <span className="text-brand-orange">Strata</span>
          </h1>

          <div className="w-16 h-1.5 bg-brand-orange rounded-full mx-auto mb-8" />

          <p className="text-white/80 text-xl leading-relaxed mb-5">
            Your payment has been processed and your spot is secured.
          </p>
          <p className="text-white/55 text-lg leading-relaxed mb-10">
            We are genuinely excited to have your family with us. The work your child is about to put in here is going to show up everywhere: on the field, in the gym, and in how they carry themselves. This is just the start.
          </p>
          <p className="text-white/45 text-base leading-relaxed mb-12">
            One of our coaches will be in touch shortly with everything you need to know before your first session. Keep an eye on your inbox.
          </p>

          {/* Divider */}
          <div className="border-t border-white/[0.08] pt-10">
            <p className="text-white/30 text-sm mb-6">
              Questions? We are here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@stratastrengthlab.com"
                className="text-brand-orange hover:underline text-sm font-heading font-semibold tracking-wide"
              >
                info@stratastrengthlab.com
              </a>
              <span className="text-white/20 hidden sm:inline">·</span>
              <a
                href="tel:5309222600"
                className="text-brand-orange hover:underline text-sm font-heading font-semibold tracking-wide"
              >
                (530) 922-2600
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* ─── MINIMAL FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.07] py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-white/20 text-sm">
            Strata Strength Lab · 1726 Montgomery St, Unit 8 · Oroville, CA 95965
          </span>
        </div>
      </footer>

    </div>
  )
}
