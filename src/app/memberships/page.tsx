import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Membership Options',
  description: 'Membership pricing options for Strata Strength Lab.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-snippet': -1,
      'max-image-preview': 'none',
      'max-video-preview': -1,
    },
  },
}

const bebas = { fontFamily: "'Bebas Neue', Impact, sans-serif" }

const foundationOptions = [
  {
    label: 'Month-to-Month',
    price: '$149',
    unit: '/mo',
    note: 'No long-term commitment',
    href: 'https://link.stratastrengthlab.com/documents/doc-form/6a4c130d1331fe06e170a9c5?locale=en-US',
    feature: false,
  },
  {
    label: '12-Month Membership',
    price: '$129',
    unit: '/mo',
    note: 'Best value with yearly commitment',
    href: 'https://link.stratastrengthlab.com/documents/doc-form/6a4c13be4beff524c62a571a?locale=en-US',
    feature: true,
  },
  {
    label: 'Paid in Full',
    price: '$1,290',
    unit: '/yr',
    note: '12 months for the price of 10',
    href: 'https://link.stratastrengthlab.com/documents/doc-form/6a4c14241331fe06e170cae6?locale=en-US',
    feature: false,
  },
]

const familyTiers = [
  {
    people: 2,
    name: '2 Members',
    discount: '10% OFF',
    options: [
      { label: 'Month-to-Month', price: '$268', unit: '/mo', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a5022686f0dad2ece96ccde?locale=en-US' },
      { label: '12-Month', price: '$232', unit: '/mo', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a5023627a9b2719553f787f?locale=en-US' },
      { label: 'Paid in Full', price: '$2,322', unit: '/yr', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a5023a693c509e5ec2d2b8e?locale=en-US' },
    ],
  },
  {
    people: 3,
    name: '3 Members',
    discount: '15% OFF',
    options: [
      { label: 'Month-to-Month', price: '$380', unit: '/mo', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a5023fd6f0dad2ece96f3a3?locale=en-US' },
      { label: '12-Month', price: '$329', unit: '/mo', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a50244d1dce695b341d43e2?locale=en-US' },
      { label: 'Paid in Full', price: '$3,290', unit: '/yr', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a5024921dce695b341d4c06?locale=en-US' },
    ],
  },
  {
    people: 4,
    name: '4+ Members',
    discount: '20% OFF',
    options: [
      { label: 'Month-to-Month', price: '$477', unit: '/mo', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a5024d3a3ce8ae661ca0681?locale=en-US' },
      { label: '12-Month', price: '$413', unit: '/mo', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a58041d6f9adee95fe5e02e?locale=en-US' },
      { label: 'Paid in Full', price: '$4,128', unit: '/yr', href: 'https://link.stratastrengthlab.com/documents/doc-form/6a58045aab498bc9fa5668ab?locale=en-US' },
    ],
  },
]

function PersonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF4D1A" aria-hidden="true">
      <circle cx="12" cy="7" r="5"></circle>
      <path d="M20 22a8 8 0 0 0-16 0Z"></path>
    </svg>
  )
}

export default function MembershipOptionsPage() {
  return (
    <div className="bg-[#F4F1EA] text-[#0B0D10]">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

      {/* ─── MASTHEAD ─────────────────────────────────────────────── */}
      <header className="bg-[#111418] px-6 pt-32">
        <div className="max-w-[1080px] mx-auto flex items-center gap-6 py-7">
          <Image src="/images/logo.png" alt="Strata Strength Lab" width={76} height={76} className="object-contain shrink-0" />
          <div>
            <h1 style={bebas} className="text-[#FCFCFC] text-[42px] leading-none tracking-wide font-normal">
              MEMBERSHIP OPTIONS
            </h1>
            <div className="text-[#FF4D1A] text-[13px] font-bold tracking-[2.4px] mt-2">
              MOVEMENT. STRENGTH. CONFIDENCE. FOR LIFE.
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1080px] mx-auto px-6 pt-10 pb-16 flex flex-col gap-11">

        {/* ─── FOUNDATION ─────────────────────────────────────────── */}
        <section>
          <div className="flex items-baseline flex-wrap gap-3.5 mb-5">
            <span style={bebas} className="text-[34px] tracking-wide">FOUNDATION</span>
            <span className="text-[13px] font-bold text-[#FF4D1A] tracking-[1.4px]">AGES 1&ndash;17</span>
            <span className="text-[13px] text-[#5b6068]">2 classes/week</span>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {foundationOptions.map((opt) => (
              <a
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  opt.feature
                    ? 'relative flex flex-col items-center text-center bg-[#111418] border-2 border-[#FF4D1A] text-[#FCFCFC] rounded-2xl px-5 py-6 shadow-[6px_6px_0_rgba(255,77,26,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#FF4D1A]'
                    : 'flex flex-col items-center text-center bg-[#FCFCFC] border border-[#E3DFD3] text-[#0B0D10] rounded-2xl px-5 py-6 shadow-[0_4px_14px_rgba(11,13,16,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(11,13,16,0.12)] hover:border-[#FF4D1A]'
                }
              >
                {opt.feature && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF4D1A] text-[#FCFCFC] text-[10px] font-extrabold tracking-[1.2px] px-3 py-1.5 rounded-full whitespace-nowrap">
                    MOST POPULAR
                  </span>
                )}
                <div className={`text-[11px] font-bold tracking-[1.6px] ${opt.feature ? 'text-[#FCFCFC] mt-1.5' : 'text-[#5b6068]'}`}>
                  {opt.label.toUpperCase()}
                </div>
                <div className={`text-[40px] font-extrabold tabular-nums mt-2 leading-none ${opt.feature ? 'text-[#FF4D1A]' : ''}`}>
                  {opt.price}<span className={`text-base font-semibold ${opt.feature ? 'text-[#c9ccd1]' : 'text-[#5b6068]'}`}>{opt.unit}</span>
                </div>
                <div className={`text-[13px] mt-2 ${opt.feature ? 'text-[#c9ccd1]' : 'text-[#5b6068]'}`}>{opt.note}</div>
                <div className={`mt-5 text-[13px] font-bold tracking-[0.4px] px-6 py-3 rounded-lg ${opt.feature ? 'bg-[#FF4D1A] text-[#FCFCFC]' : 'bg-[#111418] text-[#FCFCFC]'}`}>
                  Sign Up
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── FAMILY DISCOUNT ────────────────────────────────────── */}
        <section className="bg-[#111418] rounded-[20px] px-7 py-8">
          <h2 style={bebas} className="text-[#FCFCFC] text-[34px] tracking-wide font-normal">FAMILY DISCOUNT</h2>
          <div className="text-[13px] text-[#8b9098] mt-1.5 mb-7">
            Prices shown are the total for the whole household, with the discount applied to every member. Pick your household size, then your billing option.
          </div>

          <div className="flex flex-col gap-7">
            {familyTiers.map((tier) => (
              <div key={tier.name}>
                <div className="flex items-center flex-wrap gap-3 mb-3">
                  <span className="flex gap-[3px]">
                    {Array.from({ length: Math.min(tier.people, 4) }).map((_, i) => (
                      <PersonIcon key={i} />
                    ))}
                  </span>
                  <span style={bebas} className="text-[#FCFCFC] text-[26px] tracking-wide">{tier.name.toUpperCase()}</span>
                  <span className="bg-[#FF4D1A] text-[#FCFCFC] text-[11px] font-extrabold tracking-[0.6px] px-2.5 py-1 rounded-full">{tier.discount}</span>
                </div>
                <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
                  {tier.options.map((opt) => (
                    <a
                      key={opt.label}
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 bg-[#2B3138] border border-[#3d444d] text-[#FCFCFC] rounded-xl px-4.5 py-4 transition-all hover:border-[#FF4D1A] hover:-translate-y-0.5"
                    >
                      <span className="text-[11px] font-bold tracking-[1.2px] text-[#c9ccd1]">{opt.label.toUpperCase()}</span>
                      <span className="text-[19px] font-extrabold tabular-nums">{opt.price}<span className="text-xs text-[#8b9098]">{opt.unit}</span></span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <a href="https://www.stratastrengthlab.com" className="text-[#FF4D1A] font-bold text-base hover:underline">
            stratastrengthlab.com
          </a>
        </div>
      </main>
    </div>
  )
}
