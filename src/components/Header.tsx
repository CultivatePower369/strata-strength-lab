'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const programDropdown = [
  { label: 'Ninja Warrior', href: '/programs/ninja-warrior' },
  { label: 'Climbing Rock Wall', href: '/programs/climbing-wall' },
  { label: 'Forge Protocol', href: '/programs/forge-protocol' },
  { label: 'Birthday Parties', href: '/programs/birthday-parties' },
]

const GHL_TRIAL_LINK = '#trial'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-dark/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Pre-launch banner */}
      <Link
        href="/founding-30"
        className="block w-full bg-brand-orange text-white text-center py-2 px-4 text-xs font-heading font-semibold tracking-wide hover:bg-brand-orange/90 transition-colors"
      >
        Now Pre-Launching: Founding 30 — Be Among the First Families to Join →
      </Link>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Strata Strength Lab"
            width={90}
            height={90}
            className="transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <div className="leading-tight">
            <span className="block font-heading font-black text-white text-lg tracking-wide">
              STRATA
            </span>
            <span className="block font-heading font-semibold text-brand-orange text-xs tracking-widest uppercase">
              Strength Lab
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link href="/about" className="text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
          </Link>

          {/* Programs Dropdown */}
          <div ref={dropdownRef} className="relative flex items-center gap-1">
            <Link
              href="/programs"
              className="text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 relative group"
            >
              Programs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
            </Link>
            <button
              onClick={() => setProgramsOpen(!programsOpen)}
              aria-label="Toggle programs menu"
              className="text-white/80 hover:text-white transition-colors duration-200 p-0.5"
            >
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {programsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-navy-dark border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                {programDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setProgramsOpen(false)}
                    className="block px-5 py-3 text-white/75 hover:text-white hover:bg-white/5 font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-150 border-b border-white/5 last:border-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/schedule" className="text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 relative group">
            Schedule (Coming Soon)
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
          </Link>
          <Link href="/contact" className="text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
          </Link>
        </nav>

        {/* CTA Button */}
        <a href={GHL_TRIAL_LINK} className="hidden md:inline-block btn-primary text-sm px-6 py-3">
          Claim My Child&apos;s Founding Spot
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy-dark/98 backdrop-blur-sm px-4 pt-4 pb-6 space-y-1">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Schedule (Coming Soon)', href: '/schedule' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider py-3 border-b border-white/10 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Programs Accordion */}
          <div className="border-b border-white/10">
            <button
              onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
              className="w-full flex items-center justify-between text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider py-3 transition-colors duration-200"
            >
              Programs
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileProgramsOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileProgramsOpen && (
              <div className="pb-2 space-y-1">
                <Link
                  href="/programs"
                  onClick={() => { setMenuOpen(false); setMobileProgramsOpen(false) }}
                  className="block text-white/60 hover:text-white font-heading font-semibold text-xs uppercase tracking-wider py-2 pl-4 transition-colors duration-200"
                >
                  All Programs
                </Link>
                {programDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setMenuOpen(false); setMobileProgramsOpen(false) }}
                    className="block text-white/60 hover:text-white font-heading font-semibold text-xs uppercase tracking-wider py-2 pl-4 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href={GHL_TRIAL_LINK}
            className="block text-center btn-primary mt-4 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Claim My Child&apos;s Founding Spot
          </a>
        </div>
      </div>
    </header>
  )
}
