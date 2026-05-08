import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Strata Strength Lab. Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-hero-pattern pt-32 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-heading font-black text-4xl sm:text-5xl text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/60 text-base">Effective Date: April 8, 2026 · Last Updated: April 8, 2026</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">

          <p className="text-gray-600 leading-relaxed">
            Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of our members, prospective members, and website visitors. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit <strong>stratastrengthlab.com</strong> or contact us through any channel.
          </p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">We may collect the following types of information:</p>
          <ul className="text-gray-600 space-y-2 mt-3 list-disc pl-6">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you submit a form, book a class, or contact us directly.</li>
            <li><strong>Usage Data:</strong> Pages visited, browser type, IP address, and referring URLs collected automatically when you use our website.</li>
            <li><strong>Communications:</strong> Messages, inquiries, and any other content you send to us.</li>
          </ul>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">2. How We Use Your Information</h2>
          <ul className="text-gray-600 space-y-2 mt-3 list-disc pl-6">
            <li>Respond to your inquiries and service requests</li>
            <li>Schedule trial classes, memberships, and appointments</li>
            <li>Send appointment reminders, class updates, and operational messages</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">3. SMS / Text Message Communications</h2>
          <div className="bg-navy-50 border-l-4 border-brand-orange rounded-r-xl p-5 my-5">
            <p className="text-gray-700 leading-relaxed font-medium">
              By providing your phone number and opting in to receive text messages from Strata Strength Lab, you consent to receive SMS and MMS messages from us. These messages may include appointment reminders, class schedules, promotional offers, and other information related to our services.
            </p>
          </div>
          <ul className="text-gray-600 space-y-3 mt-4 list-disc pl-6">
            <li><strong>Opt-In:</strong> You may opt in to SMS communications by submitting your phone number through our contact form, booking form, or by texting us directly and indicating your consent.</li>
            <li><strong>Message Frequency:</strong> Message frequency varies. You may receive up to 4 to 8 messages per month.</li>
            <li><strong>Message &amp; Data Rates:</strong> Message and data rates may apply depending on your mobile carrier and plan.</li>
            <li><strong>Opt-Out:</strong> Reply <strong>STOP</strong> to any message to opt out at any time. You will receive a single confirmation and no further messages will be sent.</li>
            <li><strong>Help:</strong> Reply <strong>HELP</strong> or contact us at <a href="mailto:info@stratastrengthlab.com" className="text-brand-orange hover:underline">info@stratastrengthlab.com</a> or <a href="tel:+15309222600" className="text-brand-orange hover:underline">(530) 922-2600</a>.</li>
            <li><strong>No Sharing for Marketing:</strong> We do not sell, rent, or share your phone number or SMS opt-in data with third parties for their marketing purposes.</li>
          </ul>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">4. Sharing Your Information</h2>
          <p className="text-gray-600 leading-relaxed">We do not sell your personal information. We may share your information with trusted third-party service providers who assist with scheduling, communications, and website operations, and when required by law.</p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">5. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">We implement reasonable administrative, technical, and physical safeguards to protect your personal information. No method of transmission over the internet is 100% secure.</p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">6. Children&apos;s Privacy</h2>
          <p className="text-gray-600 leading-relaxed">Our website is not directed to children under 13. Our services are provided to youth athletes with parental or guardian enrollment and consent.</p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">7. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

          <h2 className="font-heading font-bold text-navy text-xl mt-10 mb-3">8. Contact Us</h2>
          <div className="text-gray-600 space-y-1 mt-3">
            <p><strong>Cultivate Power Fighting Arts, LLC DBA Strata Strength Lab</strong></p>
            <p>1726 Montgomery Street, Unit 8</p>
            <p>Oroville, CA 95965</p>
            <p><a href="tel:+15309222600" className="text-brand-orange hover:underline">(530) 922-2600</a></p>
            <p><a href="mailto:info@stratastrengthlab.com" className="text-brand-orange hover:underline">info@stratastrengthlab.com</a></p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/terms" className="text-brand-orange hover:underline font-heading font-semibold text-sm">
              View Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
