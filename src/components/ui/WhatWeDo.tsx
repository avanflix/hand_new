'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const domains = [
  {
    id: 'livelihood',
    tag: '01',
    title: 'Livelihood',
    description: 'Creating sustainable income opportunities for women and youth through micro-enterprise support, handicrafts, digital media skills, and vocational training.',
    image: '/livelihood/2.png',
    link: '/domains/livelihood',
    stat: '10,000+',
    statLabel: 'women supported',
  },
  {
    id: 'climate',
    tag: '02',
    title: 'Climate Action',
    description: 'Protecting our environment through eco-friendly initiatives, leaf plate production, renewable energy adoption, and plastic reduction awareness campaigns.',
    image: '/climate/2.png',
    link: '/domains/climate-change',
    stat: '500+',
    statLabel: 'trees planted',
  }
]

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export default function WhatWeDoSection() {
  const headerRef = useReveal()
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section id="what-we-do-section" className="section-pad" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="eyebrow">Our Focus Areas</span>
            <h2 className="display-heading text-4xl md:text-5xl mt-4">
              Our Purpose Is to<br />
              <em style={{ color: 'var(--clr-earth)', fontStyle: 'italic' }}>Transform Lives</em>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Three interconnected domains where HAND works to create lasting, systemic change.
          </p>
        </div>

        {/* Domain cards — stacked horizontal panels */}
        <div className="space-y-6">
          {domains.map((d, i) => (
            <DomainCard key={d.id} domain={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DomainCard({ domain, index }: { domain: typeof domains[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'} reveal-delay-${index + 1}`}
    >
      <div
        className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
        style={{
          height: hovered ? 340 : 240,
          background: 'var(--clr-cream)',
          boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.12)' : '0 4px 16px rgba(0,0,0,0.04)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{ opacity: hovered ? 0.2 : 0 }}
        >
          <Image src={domain.image} alt={domain.title} fill className="object-cover" />
        </div>

        <div className="relative z-10 h-full p-8 flex flex-col md:flex-row md:items-center gap-8">
          {/* Number */}
          <span
            className="font-800 flex-shrink-0"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '4rem',
              color: hovered ? 'var(--clr-amber)' : 'var(--clr-cream-dark, #EDE8E1)',
              transition: 'color 0.4s',
              lineHeight: 1,
            }}
          >
            {domain.tag}
          </span>

          {/* Title + desc */}
          <div className="flex-1">
            <h3
              className="text-2xl font-700 mb-3 transition-colors duration-300"
              style={{ color: hovered ? 'var(--clr-earth)' : 'var(--clr-charcoal)' }}
            >
              {domain.title}
            </h3>
            <p
              className="text-gray-600 text-sm leading-relaxed max-w-xl transition-all duration-400"
              style={{ opacity: hovered ? 1 : 0.7 }}
            >
              {domain.description}
            </p>
          </div>

          {/* Stat + CTA */}
          <div
            className="flex-shrink-0 text-right transition-all duration-400"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateX(0)' : 'translateX(20px)' }}
          >
            <div
              className="text-3xl font-800 mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--clr-earth)' }}
            >
              {domain.stat}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">{domain.statLabel}</div>
            <Link
              href={domain.link}
              className="inline-block px-5 py-2 rounded-full text-xs font-600 text-white transition-all hover:scale-105"
              style={{ background: 'var(--clr-amber)' }}
            >
              Know More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
