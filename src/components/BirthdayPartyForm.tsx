'use client'

const GHL_BOOKING_URL = 'https://go.valentorcrm.com/widget/booking/XHL5q9dB7O1t8guzv1Tr'

export default function BirthdayPartyForm() {
  return (
    <div className="card p-8 sm:p-10 text-center">
      <p className="text-gray-500 text-base mb-8">
        Click below to choose your date, time, and party details. It only takes a couple of minutes.
      </p>
      <a
        href={GHL_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-base py-4 px-10"
      >
        Book My Party Date
      </a>
      <p className="text-gray-400 text-xs mt-4">
        We&apos;ll follow up to confirm availability and details.
      </p>
    </div>
  )
}
