'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Contact', href: '/contact' },
]

const GHL_TRIAL_LINK = '#trial' // Replace with Go High Level funnel URL

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-dark/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Strata Strength Lab"
            width={50}
            height={50}
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={GHL_TRIAL_LINK}
          className="hidden md:inline-block btn-primary text-sm px-6 py-3"
        >
          Book Free Trial
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-dark/98 backdrop-blur-sm px-4 pt-4 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-white font-heading font-semibold text-sm uppercase tracking-wider py-3 border-b border-white/10 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={GHL_TRIAL_LINK}
            className="block text-center btn-primary mt-4 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book Free Trial
          </a>
        </div>
      </div>
    </header>
  )
}
