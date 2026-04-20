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
        className="bg-white rounded-2xl overflow-hidden w-full max-w-lg relative shadow-2xl"
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
          <h2 className="font-heading font-black text-white text-2xl">Request My Founding Spot</h2>
        </div>

        {/* GHL Form iframe */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/jsz1V4WRf2YZRnjRSAYd"
          style={{ width: '100%', height: '700px', border: 'none' }}
          id="inline-jsz1V4WRf2YZRnjRSAYd"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Book a trial"
          data-height="727"
          data-layout-iframe-id="inline-jsz1V4WRf2YZRnjRSAYd"
          data-form-id="jsz1V4WRf2YZRnjRSAYd"
          title="Book a trial"
        />
      </div>
    </div>
  )
}
