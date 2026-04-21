'use client'

import { useState } from 'react'

const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/SV7vHrEyLdHchXYZWe22/webhook-trigger/1b4a8c7d-5d4f-4aef-8959-4fff7e4a9d83'

export default function BirthdayPartyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.currentTarget
    const data = {
      parent_name: (form.elements.namedItem('parent_name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      child_name: (form.elements.namedItem('child_name') as HTMLInputElement).value,
      child_age: (form.elements.namedItem('child_age') as HTMLInputElement).value,
      kids_count: (form.elements.namedItem('kids_count') as HTMLInputElement).value,
      preferred_date: (form.elements.namedItem('preferred_date') as HTMLInputElement).value,
      preferred_time: (form.elements.namedItem('preferred_time') as HTMLSelectElement).value,
      addons: (form.elements.namedItem('addons') as HTMLSelectElement).value,
      notes: (form.elements.namedItem('notes') as HTMLTextAreaElement).value,
    }

    try {
      const params = new URLSearchParams()
      Object.entries(data).forEach(([key, value]) => params.append(key, value))

      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

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
      <form onSubmit={handleSubmit} className="space-y-5" aria-label="Party booking form">
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
        {error && (
          <p className="text-red-500 text-sm text-center">Something went wrong. Please call us at (530) 854-8731.</p>
        )}
        <button type="submit" disabled={loading} className="btn-primary w-full text-base py-4 disabled:opacity-60">
          {loading ? 'Sending...' : 'Request My Party Date'}
        </button>
        <p className="text-gray-400 text-xs text-center">We&apos;ll follow up to confirm availability and details.</p>
      </form>
    </div>
  )
}
