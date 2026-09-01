import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Class Schedule | Youth Climbing, Obstacle & Strength Classes in Oroville, CA',
  description:
    'Weekly class schedule for Strata Strength Lab in Oroville, CA. Youth climbing, Ninja Warrior obstacle, and strength training classes for kids and teens. Age group classes, open training, and birthday party availability.',
}

const GHL_TRIAL_LINK = '#trial'

// ─── Schedule Data ─────────────────────────────────────────────────────────────

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const
type Day = typeof DAYS[number]
type Slot = string | string[]
type Category = 'age' | 'gym' | 'party'
type ScheduleRow = { label: string; category: Category; comingSoon?: boolean; slots: Partial<Record<Day, Slot>> }

const scheduleRows: ScheduleRow[] = [
  {
    label: 'Ages 1-2', category: 'age', comingSoon: true,
    slots: {},
  },
  {
    label: 'Ages 3-4', category: 'age',
    slots: { tue: '4:00 - 4:45 PM', thu: '4:00 - 4:45 PM' },
  },
  {
    label: 'Ages 5-7', category: 'age',
    slots: { mon: '3:45 - 4:30 PM', tue: '4:45 - 5:30 PM', wed: '3:45 - 4:30 PM', thu: '4:45 - 5:30 PM' },
  },
  {
    label: 'Ages 8-12', category: 'age',
    slots: { mon: '4:45 - 5:30 PM', tue: '5:45 - 6:30 PM', wed: '4:45 - 5:30 PM', thu: '5:45 - 6:30 PM' },
  },
  {
    label: 'Ages 13-17', category: 'age',
    slots: { mon: '5:45 - 6:45 PM', tue: '6:30 - 7:30 PM', wed: '5:45 - 6:45 PM', thu: '6:30 - 7:30 PM' },
  },
  {
    label: 'Open Mat', category: 'gym',
    slots: {
      mon: '6:45 - 8:30 PM',
      tue: '7:30 - 8:30 PM',
      wed: '6:45 - 8:30 PM',
      thu: '7:30 - 8:30 PM',
      fri: '7:00 - 8:30 PM',
      sat: '9:00 AM - 1:00 PM',
      sun: ['8:00 - 10:00 AM', '5:00 - 8:30 PM'],
    },
  },
  {
    label: 'Birthday Parties', category: 'party',
    slots: { fri: '5:00 - 7:00 PM', sat: '10:00 AM - 5:00 PM', sun: '10:00 AM - 5:00 PM' },
  },
]

const DAY_LABELS: Record<Day, string> = {
  mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday',
  fri: 'Friday', sat: 'Saturday', sun: 'Sunday',
}
const DAY_SHORT: Record<Day, string> = {
  mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu',
  fri: 'Fri', sat: 'Sat', sun: 'Sun',
}

// Mobile: per-day view derived from scheduleRows
const mobileDays = DAYS.map((day) => ({
  name: DAY_LABELS[day],
  classes: scheduleRows
    .filter((row) => !row.comingSoon && row.slots[day] !== undefined)
    .map((row) => ({ label: row.label, category: row.category, time: row.slots[day] as Slot })),
}))

// Classes with no confirmed times yet
const comingSoonRows = scheduleRows.filter((row) => row.comingSoon)

// ─── Category Styles ──────────────────────────────────────────────────────────

const labelStyle: Record<Category, string> = {
  age:   'bg-navy text-white',
  gym:   'bg-brand-blue/20 text-navy',
  party: 'bg-brand-orange/20 text-navy-dark',
}
const cellStyle: Record<Category, string> = {
  age:   'bg-navy/[0.07] text-navy',
  gym:   'bg-brand-blue/10 text-navy',
  party: 'bg-brand-orange/10 text-navy-dark',
}
const mobileLabelStyle: Record<Category, string> = {
  age:   'text-navy',
  gym:   'text-brand-blue',
  party: 'text-brand-orange-dark',
}
const mobileRowStyle: Record<Category, string> = {
  age:   'bg-white',
  gym:   'bg-brand-blue/[0.04]',
  party: 'bg-brand-orange/[0.04]',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-label text-brand-blue">Class Times</span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-2 leading-tight">
            Class <span className="text-brand-orange">Schedule</span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Weekly class times for all age groups. Regular classes are running now, book
            a free trial class to get started.
          </p>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="bg-brand-orange/10 border-b border-brand-orange/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-orange-dark text-sm font-heading font-semibold text-center sm:text-left">
            Strata Strength Lab is open! Book your child&apos;s free trial class today.
          </p>
          <a href={GHL_TRIAL_LINK} className="btn-primary text-sm px-6 py-2 shrink-0">
            Book Free Trial Class
          </a>
        </div>
      </div>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Legend */}
          <div className="flex flex-wrap gap-5 mb-8 items-center">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-gray-400">Key</span>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-navy inline-block" />
              <span className="text-sm text-gray-600">Age Group Classes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-brand-blue inline-block" />
              <span className="text-sm text-gray-600">Open Mat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-brand-orange inline-block" />
              <span className="text-sm text-gray-600">Birthday Parties</span>
            </div>
          </div>

          {/* ── Desktop Table ──────────────────────────────────────────────── */}
          <div className="hidden lg:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="bg-navy-dark text-white font-heading font-bold text-xs tracking-widest uppercase py-3 px-5 text-left w-36">
                    Class
                  </th>
                  {DAYS.map((day) => (
                    <th
                      key={day}
                      className="bg-navy-dark text-white font-heading font-bold text-xs tracking-widest uppercase py-3 px-3 text-center"
                    >
                      {DAY_SHORT[day]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row, i) => {
                  const isFirstGym = row.category === 'gym' && scheduleRows[i - 1]?.category === 'age'
                  return (
                    <tr
                      key={row.label}
                      className={`border-b border-gray-100 last:border-0 ${isFirstGym ? 'border-t-2 border-t-gray-200' : ''}`}
                    >
                      <td className={`${labelStyle[row.category]} font-heading font-bold text-xs uppercase tracking-wide py-3 px-5 whitespace-nowrap`}>
                        {row.label}
                      </td>
                      {row.comingSoon ? (
                        <td colSpan={DAYS.length} className="py-2 px-2 text-center align-middle">
                          <span className="text-xs font-heading font-bold uppercase tracking-wide rounded px-3 py-1 bg-brand-orange/10 text-brand-orange-dark">
                            Coming Soon
                          </span>
                        </td>
                      ) : (
                        DAYS.map((day) => {
                          const slot = row.slots[day]
                          return (
                            <td key={day} className="py-2 px-2 text-center align-middle">
                              {slot ? (
                                Array.isArray(slot) ? (
                                  <div className="space-y-1">
                                    {slot.map((s) => (
                                      <div key={s} className={`text-xs rounded px-2 py-1 leading-snug ${cellStyle[row.category]}`}>
                                        {s}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className={`text-xs rounded px-2 py-1 leading-snug ${cellStyle[row.category]}`}>
                                    {slot}
                                  </div>
                                )
                              ) : (
                                <span className="text-gray-200 select-none">-</span>
                              )}
                            </td>
                          )
                        })
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* ── Mobile: Stacked by Day ─────────────────────────────────────── */}
          <div className="lg:hidden space-y-3">
            {comingSoonRows.length > 0 && (
              <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/10 overflow-hidden">
                {comingSoonRows.map((row) => (
                  <div key={row.label} className="flex justify-between items-center gap-4 px-4 py-3">
                    <span className="font-heading font-bold text-xs uppercase tracking-wide text-navy">
                      {row.label}
                    </span>
                    <span className="text-xs font-heading font-bold uppercase tracking-wide rounded px-3 py-1 bg-white text-brand-orange-dark">
                      Coming Soon
                    </span>
                  </div>
                ))}
              </div>
            )}
            {mobileDays.map((day) => (
              <div key={day.name} className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="bg-navy-dark text-white font-heading font-bold text-sm uppercase tracking-wider px-4 py-3">
                  {day.name}
                </div>
                {day.classes.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {day.classes.map((cls) => (
                      <div
                        key={cls.label}
                        className={`flex justify-between items-start gap-4 px-4 py-3 ${mobileRowStyle[cls.category]}`}
                      >
                        <span className={`font-heading font-bold text-xs uppercase tracking-wide whitespace-nowrap ${mobileLabelStyle[cls.category]}`}>
                          {cls.label}
                        </span>
                        <div className="text-right space-y-0.5">
                          {Array.isArray(cls.time)
                            ? cls.time.map((t) => (
                                <p key={t} className="text-xs text-gray-600">{t}</p>
                              ))
                            : <p className="text-xs text-gray-600">{cls.time}</p>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-3 text-xs text-gray-400 font-heading">No classes scheduled</div>
                )}
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-8 space-y-2 border-t border-gray-100 pt-6">
            <p className="text-gray-500 text-sm leading-relaxed">
              Schedule is subject to change as enrollment grows. Trial classes should be booked into the appropriate age group.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Birthday party blocks are reserved and not available for trial class booking.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Additional Open Mat hours added as demand grows.
            </p>
          </div>

          {/* Open Gym Callout */}
          <div className="mt-8 bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-heading font-bold text-navy text-sm uppercase tracking-wide mb-1">Open Gym Drop-In</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                Not a member yet? Walk in during Open Mat hours for $25 at the door, or reserve online for $20 and your waiver gets signed automatically. Included free for current members.
              </p>
            </div>
            <a
              href="https://link.stratastrengthlab.com/events/milelongys-open-gym"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3 shrink-0 whitespace-nowrap"
            >
              Reserve Open Gym — $20
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white">
            Ready to find your class time?
          </h2>
          <p className="text-white/60 mt-3 text-base">
            Regular classes are running now. Book a free trial class and pick the time that works for your family.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary">
              Book Free Trial Class
            </a>
            <Link href="/contact" className="btn-outline">
              Have a Question?
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
