import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Strata Strength Lab — Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab.',
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-hero-pattern pt-32 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-white/60 text-base">Effective Date: April 8, 2026 · Last Updated: April 8, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-gray-600 leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Strata Strength Lab website at <strong>stratastrengthlab.com</strong> and any services provided by Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), located at 1726 Montgomery Street, Unit 8, Oroville, CA 95965. By accessing our website or using our services, you agree to these Terms.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">1. Services</h2>
          <p className="text-gray-600 leading-relaxed">
            Strata Strength Lab provides youth fitness and strength training services including Ninja Warrior obstacle training, climbing wall instruction, and the Forge Protocol structured strength program, serving toddlers through teens in Oroville, California.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">2. Eligibility</h2>
          <p className="text-gray-600 leading-relaxed">
            Our programs are designed for youth athletes. Enrollment of minors requires a parent or legal guardian to agree to all applicable waivers, consent forms, and these Terms on the minor&apos;s behalf.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">3. Use of the Website</h2>
          <p className="text-gray-600 leading-relaxed">You agree to use this website only for lawful purposes. You may not:</p>
          <ul className="text-gray-600 space-y-2 mt-3 list-disc pl-6">
            <li>Use the site for any fraudulent or unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any portion of the site</li>
            <li>Reproduce or copy any content without our written permission</li>
          </ul>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">4. SMS Communications</h2>
          <p className="text-gray-600 leading-relaxed">
            By providing your phone number and opting in, you agree to receive text messages from Strata Strength Lab. You may opt out at any time by replying STOP. Message and data rates may apply. See our <Link href="/privacy-policy" className="text-brand-orange hover:underline">Privacy Policy</Link> for full details.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">5. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content on this website — including text, logos, graphics, and design — is the property of Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab and protected by applicable intellectual property laws.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">6. Disclaimer of Warranties</h2>
          <p className="text-gray-600 leading-relaxed">
            This website and its content are provided &ldquo;as is&rdquo; without warranties of any kind. We do not warrant that the website will be error-free or uninterrupted.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">7. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            To the fullest extent permitted by law, Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">8. Physical Activity Risk</h2>
          <p className="text-gray-600 leading-relaxed">
            Participation in physical fitness programs involves inherent risks. All participants and their parents or guardians must acknowledge and accept these risks and complete required waivers prior to participation.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">9. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of Butte County, California.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">10. Contact Us</h2>
          <div className="text-gray-600 space-y-1 mt-3">
            <p><strong>Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab</strong></p>
            <p>1726 Montgomery Street, Unit 8</p>
            <p>Oroville, CA 95965</p>
            <p><a href="tel:+15309222600" className="text-brand-orange hover:underline">(530) 922-2600</a></p>
            <p><a href="mailto:info@stratastrengthlab.com" className="text-brand-orange hover:underline">info@stratastrengthlab.com</a></p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/privacy-policy" className="text-brand-orange hover:underline font-heading font-semibold text-sm">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
