'use client'

import { useEffect, useState } from 'react'

export default function TrialModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    // Open modal when #trial hash is in URL
    const checkHash = () => {
      if (window.location.hash === '#trial') setOpen(true)
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => {
      window.removeEventListener('hashchange', checkHash)
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  const close = () => {
    setOpen(false)
    history.pushState('', document.title, window.location.pathname + window.location.search)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl w-[92vw] max-w-[500px] relative shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors text-lg font-bold"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-navy-dark px-6 pt-6 pb-4">
          <p className="text-brand-orange font-heading font-bold text-xs uppercase tracking-widest mb-1">Get Started</p>
          <h2 className="font-heading font-black text-white text-2xl">Book Your Free Trial Class</h2>
        </div>

        {/* GHL Booking widget iframe */}
        <iframe
          src="https://link.stratastrengthlab.com/widget/bookings/strata-trial-class"
          style={{ width: '100%', height: '700px', border: 'none' }}
          id="inline-strata-trial-class"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Book a trial"
          data-height="727"
          data-layout-iframe-id="inline-strata-trial-class"
          data-form-id="strata-trial-class"
          title="Book a trial"
        />
      </div>
    </div>
  )
}
