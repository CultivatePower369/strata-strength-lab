import Image from 'next/image'
import Link from 'next/link'

const GHL_TRIAL_LINK = '#trial' // Replace with Go High Level funnel URL

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      {/* Top CTA Bar */}
      <div className="bg-brand-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-heading font-bold text-xl text-white text-center md:text-left">
            Ready to build something great?{' '}
            <span className="text-navy-dark">Start with a free trial class.</span>
          </p>
          <a href={GHL_TRIAL_LINK} className="btn-outline shrink-0">
            Book Free Trial
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Strata Strength Lab"
                width={110}
                height={110}
              />
              <div>
                <span className="block font-heading font-black text-white text-xl tracking-wide">
                  STRATA
                </span>
                <span className="block font-heading font-semibold text-brand-orange text-xs tracking-widest uppercase">
                  Strength Lab
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Building strong, confident, and resilient young athletes through
              science-backed training in strength, mobility, climbing, and
              sports performance.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Social placeholders — add real links when ready */}
              <a
                href="https://www.facebook.com/stratastrengthlab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/stratastrengthlab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-none stroke-white stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Programs', href: '/programs' },
                { label: 'Class Schedule', href: '/schedule' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">
              Find Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg
                  className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/60 text-sm leading-relaxed">
                  1726 Montgomery Street, Unit 8<br />
                  Oroville, CA 95965
                </span>
              </li>
              <li className="flex gap-3">
                <svg
                  className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+15308548731"
                  className="text-white/60 hover:text-brand-orange text-sm transition-colors duration-200"
                >
                  (530) 854-8731
                </a>
              </li>
              <li className="flex gap-3">
                <svg
                  className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@stratastrengthlab.com"
                  className="text-white/60 hover:text-brand-orange text-sm transition-colors duration-200"
                >
                  info@stratastrengthlab.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-center sm:text-left">
            <p>© {year} Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab. All rights reserved.</p>
            <p className="hidden sm:block">·</p>
            <p>1726 Montgomery Street, Unit 8 · Oroville, CA 95965</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-orange transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-orange transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
