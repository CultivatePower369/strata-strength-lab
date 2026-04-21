'use client'

import { useState } from 'react'

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/SV7vHrEyLdHchXYZWe22/webhook-trigger/1b4a8c7d-5d4f-4aef-8959-4fff7e4a9d83'

export default function BirthdayPartyForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <span className="text-5xl block mb-4">🎉</span>
        <h3 className="font-heading font-black text-navy text-2xl mb-2">Request Received!</h3>
        <p className="text-gray-500 text-base">We&apos;ll follow up within 24 hours to confirm your party date and details.</p>
      </div>
    )
  }

  return (
    <div className="card p-8 sm:p-10">
      {/* Hidden iframe absorbs the form POST response so the page doesn't navigate */}
      <iframe name="party_frame" title="form-target" className="hidden" />
      <form
        action={GHL_WEBHOOK_URL}
        method="POST"
        target="party_frame"
        onSubmit={() => setTimeout(() => setSubmitted(true), 800)}
        className="space-y-5"
        aria-label="Party booking form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="parent_name">Parent Name</label>
            <input type="text" id="parent_name" name="parent_name" required placeholder="Your full name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all" />
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="you@email.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="(530) 555-0000"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all" />
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="child_name">Child&apos;s Name</label>
            <input type="text" id="child_name" name="child_name" placeholder="First name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="child_age">Child&apos;s Age</label>
            <input type="number" id="child_age" name="child_age" placeholder="Age" min={3} max={18}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all" />
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="kids_count">Estimated Number of Kids</label>
            <input type="number" id="kids_count" name="kids_count" placeholder="e.g. 14" min={1}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="preferred_date">Preferred Date</label>
            <input type="date" id="preferred_date" name="preferred_date"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all" />
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="preferred_time">Preferred Time Slot</label>
            <select id="preferred_time" name="preferred_time"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all bg-white">
              <option value="">Select a time</option>
              <option>Friday 3:00 PM – 5:00 PM</option>
              <option>Saturday 10:00 AM – 12:00 PM</option>
              <option>Saturday 12:30 PM – 2:30 PM</option>
              <option>Saturday 3:00 PM – 5:00 PM</option>
              <option>Sunday 10:00 AM – 12:00 PM</option>
              <option>Sunday 12:30 PM – 2:30 PM</option>
              <option>Sunday 3:00 PM – 5:00 PM</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="addons">Add-Ons Interested In</label>
          <select id="addons" name="addons"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all bg-white">
            <option value="">None</option>
            <option>Nerf Battle Add-On ($50)</option>
            <option>Extra 30 Minutes ($50)</option>
            <option>Both Add-Ons</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-heading font-semibold text-navy mb-1.5" htmlFor="notes">Notes or Questions</label>
          <textarea id="notes" name="notes" rows={3} placeholder="Anything else we should know?"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-all resize-none" />
        </div>
        <button type="submit" className="btn-primary w-full text-base py-4">
          Request My Party Date
        </button>
        <p className="text-gray-400 text-xs text-center">We&apos;ll follow up to confirm availability and details.</p>
      </form>
    </div>
  )
}
