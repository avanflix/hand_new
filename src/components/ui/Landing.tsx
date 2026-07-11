'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const slides = [
  {
    src: '/livelihood/vistarakulu_plates.png',
    alt: 'Livelihood Programs',
    tag: 'Livelihood',
    headline: ['Empowering', 'Rural Women', 'to Thrive'],
    sub: 'Creating sustainable income through tailoring, handicrafts, and micro-enterprise development.',
  },
  {
    src: '/climate/1.png',
    alt: 'Climate Programs',
    tag: 'Climate Action',
    headline: ['Protecting', 'Our Planet', 'Together'],
    sub: 'Addressing climate change through sustainable practices and community-based conservation.',
  },
]

export default function LandingSection() {
  const [current, setCurrent] = useState(0)
  const [wordVisible, setWordVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setWordVisible(false)
      setTimeout(() => {
        setCurrent((p) => (p + 1) % slides.length)
        setWordVisible(true)
      }, 400)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <section id="home-section" className="relative min-h-screen overflow-hidden flex items-end pb-20">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} />
        </div>
      ))}

      {/* Gradient overlay — dark at bottom, transparent at top */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-600 tracking-widest uppercase"
            style={{
              background: 'rgba(200,130,58,0.25)',
              border: '1px solid rgba(200,130,58,0.5)',
              color: '#E8A55C',
              opacity: wordVisible ? 1 : 0,
              transition: 'opacity 0.4s',
            }}
          >
            {slide.tag}
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-800 text-white leading-none mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '-0.02em',
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.5s, transform 0.5s',
            }}
          >
            {/* {slide.headline.map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <em style={{ fontStyle: 'italic', color: '#E8A55C' }}>{line}</em> : line}
              </span>
            ))} */}
          </h1>

          {/* Sub */}
          <p
            className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed"
            style={{
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s 0.1s, transform 0.6s 0.1s',
            }}
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="px-7 py-3.5 rounded-full text-sm font-600 transition-all hover:scale-105"
              style={{ background: 'var(--clr-amber)', color: 'white' }}
            >
              Donate Now
            </Link>
            <Link
              href="/about-us"
              className="px-7 py-3.5 rounded-full text-sm font-600 border border-white/40 text-white transition-all hover:bg-white/10"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setWordVisible(true) }}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === current ? 32 : 12,
                background: i === current ? 'var(--clr-amber)' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint
      <div className="absolute bottom-8 right-10 z-20 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white/80"
            style={{ height: '40%', animation: 'scrollLine 2s ease-in-out infinite' }}
          />
        </div>
        <span className="text-white/50 text-xs tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div> */}

      <style jsx>{`
        @keyframes scrollLine {
          0% { top: -40%; }
          100% { top: 140%; }
        }
      `}</style>
    </section>
  )
}
