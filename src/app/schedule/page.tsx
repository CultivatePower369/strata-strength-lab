import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Class Schedule',
  description:
    'View the Strata Strength Lab class schedule for youth strength, climbing, mobility, and sports performance classes in Oroville, CA.',
}

const GHL_TRIAL_LINK = '#trial'

// Update these times once your schedule is finalized
const schedule = [
  {
    day: 'Monday',
    classes: [
      { time: '4:00 PM – 5:00 PM', name: 'Youth Strength', ages: '6–12', spots: 'Open' },
      { time: '5:00 PM – 6:00 PM', name: 'Youth Climbing', ages: '6–17', spots: 'Open' },
      { time: '6:00 PM – 7:00 PM', name: 'Sports Performance', ages: '12–17', spots: 'Open' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '4:00 PM – 5:00 PM', name: 'Mobility & Movement', ages: '6–17', spots: 'Open' },
      { time: '5:00 PM – 6:00 PM', name: 'Youth Strength', ages: '6–12', spots: 'Open' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '4:00 PM – 5:00 PM', name: 'Youth Climbing', ages: '6–17', spots: 'Open' },
      { time: '5:00 PM – 6:00 PM', name: 'Sports Performance', ages: '12–17', spots: 'Open' },
      { time: '6:00 PM – 7:00 PM', name: 'Open Mat', ages: 'Members only', spots: 'Open' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '4:00 PM – 5:00 PM', name: 'Youth Strength', ages: '6–12', spots: 'Open' },
      { time: '5:00 PM – 6:00 PM', name: 'Mobility & Movement', ages: '6–17', spots: 'Open' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '4:00 PM – 6:00 PM', name: 'Open Mat', ages: 'Members only', spots: 'Open' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '9:00 AM – 10:00 AM', name: 'Youth Strength', ages: '6–12', spots: 'Open' },
      { time: '10:00 AM – 11:00 AM', name: 'Youth Climbing', ages: '6–17', spots: 'Open' },
      { time: '11:00 AM – 12:00 PM', name: 'Sports Performance', ages: '12–17', spots: 'Open' },
    ],
  },
  {
    day: 'Sunday',
    classes: [],
  },
]

const classColors: Record<string, string> = {
  'Youth Strength': 'bg-navy/10 text-navy border-navy/20',
  'Youth Climbing': 'bg-brand-blue/10 text-brand-blue-dark border-brand-blue/20',
  'Sports Performance': 'bg-brand-orange/10 text-brand-orange-dark border-brand-orange/20',
  'Mobility & Movement': 'bg-purple-50 text-purple-700 border-purple-200',
  'Open Mat': 'bg-gray-100 text-gray-600 border-gray-200',
}

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
            Find the right class for your athlete. All classes are coach-led,
            small group, and open to new members. First class is always free.
          </p>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="bg-brand-orange/10 border-b border-brand-orange/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-orange-dark text-sm font-heading font-semibold text-center sm:text-left">
            📅 Schedule subject to change as we open. Book a free trial and we&apos;ll confirm your class time.
          </p>
          <a href={GHL_TRIAL_LINK} className="btn-primary text-sm px-6 py-2 shrink-0">
            Request My Founding Spot
          </a>
        </div>
      </div>

      {/* Schedule Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="grid grid-cols-7 gap-4 min-w-[900px]">
              {schedule.map((day) => (
                <div key={day.day} className="space-y-3">
                  <div className={`text-center py-3 rounded-lg font-heading font-bold text-sm uppercase tracking-wider ${
                    day.day === 'Sunday' ? 'bg-gray-100 text-gray-400' : 'bg-navy-dark text-white'
                  }`}>
                    {day.day}
                  </div>
                  {day.classes.length === 0 ? (
                    <div className="text-center py-8 text-gray-300 text-sm font-heading font-semibold">
                      Closed
                    </div>
                  ) : (
                    day.classes.map((cls) => (
                      <div
                        key={`${day.day}-${cls.time}`}
                        className={`rounded-lg border p-3 text-center ${classColors[cls.name] ?? 'bg-gray-50 text-gray-700 border-gray-200'}`}
                      >
                        <p className="font-heading font-bold text-xs leading-snug mb-1">
                          {cls.name}
                        </p>
                        <p className="text-xs opacity-80">{cls.time}</p>
                        <p className="text-xs opacity-60 mt-1">Ages {cls.ages}</p>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile list */}
          <div className="lg:hidden space-y-6">
            {schedule.map((day) => (
              <div key={day.day}>
                <h3 className={`font-heading font-bold text-sm uppercase tracking-widest mb-3 ${
                  day.day === 'Sunday' ? 'text-gray-400' : 'text-navy'
                }`}>
                  {day.day}
                </h3>
                {day.classes.length === 0 ? (
                  <p className="text-gray-400 text-sm pl-4 border-l-2 border-gray-200">Closed</p>
                ) : (
                  <div className="space-y-2">
                    {day.classes.map((cls) => (
                      <div
                        key={`${day.day}-${cls.time}-mobile`}
                        className={`rounded-lg border p-4 flex justify-between items-center ${classColors[cls.name] ?? 'bg-gray-50 text-gray-700 border-gray-200'}`}
                      >
                        <div>
                          <p className="font-heading font-bold text-sm">{cls.name}</p>
                          <p className="text-xs opacity-70 mt-0.5">Ages {cls.ages}</p>
                        </div>
                        <p className="text-xs font-heading font-semibold opacity-80 text-right">
                          {cls.time}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="font-heading font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">
              Class Legend
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(classColors).map(([name, classes]) => (
                <span
                  key={name}
                  className={`text-xs font-heading font-semibold px-3 py-1.5 rounded-full border ${classes}`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ
        heading="Schedule FAQ"
        label="Quick Answers"
        items={[
          {
            q: 'How do I sign up for a class?',
            a: "Book your first free trial class using the button on this page. After your trial, we'll get you set up with the right membership for your schedule.",
          },
          {
            q: 'Can my child try more than one program?',
            a: "Absolutely. Many of our athletes attend multiple classes per week. We'll recommend the right combination based on their goals and age.",
          },
          {
            q: 'What should my child wear?',
            a: "Comfortable athletic wear and athletic shoes. For climbing sessions, we'll let you know about footwear when you book.",
          },
          {
            q: 'What if a class is full?',
            a: "Contact us and we'll add your athlete to the waitlist or find an equivalent time slot that works.",
          },
          {
            q: 'How long are classes?',
            a: 'Most group classes are 60 minutes. Open Mat sessions are 90–120 minutes depending on the day.',
          },
          {
            q: 'Are birthday party bookings on this schedule?',
            a: "Birthday parties are private bookings on weekends. Use the contact form and we'll get availability details to you quickly.",
          },
        ]}
      />

      {/* CTA */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white">
            Ready to get on the schedule?
          </h2>
          <p className="text-white/60 mt-3 text-base">
            Your first class is free. Pick a time and let&apos;s get started.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={GHL_TRIAL_LINK} className="btn-primary">
              Request My Founding Spot
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
