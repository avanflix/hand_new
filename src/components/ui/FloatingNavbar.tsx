'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function FloatingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const getInvolvedItems = [
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Corporate Partners', href: '/partners' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(248,244,239,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-2  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo_bg.png"
            alt="HAND"
            width={72}
            height={72}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-500 transition-colors hover:text-amber-600"
            style={{ color: scrolled ? '#1A1A1A' : 'white' }}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className="text-sm font-500 transition-colors hover:text-amber-600"
            style={{ color: scrolled ? '#1A1A1A' : 'white' }}
          >
            About
          </Link>

          <Link
            href="/domains/climate-change"
            className="text-sm font-500 transition-colors hover:text-amber-600"
            style={{ color: scrolled ? '#1A1A1A' : 'white' }}
          >
            Climate Change
          </Link>

          <Link
            href="/domains/livelihood"
            className="text-sm font-500 transition-colors hover:text-amber-600"
            style={{ color: scrolled ? '#1A1A1A' : 'white' }}
          >
            Livelihood
          </Link>

          {/* Get Involved Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('involved')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center gap-1 text-sm font-500 transition-colors hover:text-amber-600"
              style={{ color: scrolled ? '#1A1A1A' : 'white' }}
            >
              Get Involved
              <ChevronDown
                className="w-3.5 h-3.5 transition-transform duration-200"
                style={{
                  transform:
                    activeDropdown === 'involved'
                      ? 'rotate(180deg)'
                      : 'none',
                }}
              />
            </button>

            {activeDropdown === 'involved' && (
              <div className="absolute top-full left-0 w-56 pt-2">
                <div className="bg-white rounded-xl shadow-xl border border-black/5 overflow-hidden">
                  {getInvolvedItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-stone-50 hover:text-amber-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-sm font-500 transition-colors hover:text-amber-600"
            style={{ color: scrolled ? '#1A1A1A' : 'white' }}
          >
            Contact
          </Link>
        </div>

        {/* Donate Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/donate"
            className="px-5 py-2.5 text-sm font-600 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: 'var(--clr-amber)',
              color: 'white',
            }}
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/10"
          style={{ color: scrolled ? '#1A1A1A' : 'white' }}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-4 space-y-3">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about-us' },
            { label: 'Climate Change', href: '/domains/education' },
            { label: 'Livelihood', href: '/domains/livelihood' },
            { label: 'Volunteer', href: '/volunteer' },
            { label: 'Corporate Partners', href: '/partners' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-500 text-gray-800 hover:text-amber-600 transition-colors border-b border-gray-100"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/donate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 py-3 text-center text-sm font-600 rounded-full text-white"
            style={{
              background: 'var(--clr-amber)',
            }}
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  )
}