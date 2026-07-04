'use client'

import { useEffect, useState, useRef } from 'react'

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const steps = 60
    const increment = target / steps
    const interval = duration / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setValue(target); clearInterval(timer) }
      else setValue(Math.floor(start))
    }, interval)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])
  return value
}

const stats = [
  { value: 10000, suffix: '+', label: 'Lives Impacted', sublabel: 'Directly' },
  { value: 12000, suffix: '+', label: 'Beneficiaries', sublabel: 'Reached' },
  { value: 5, suffix: '+', label: 'Years', sublabel: 'of Active Programs' },
  { value: 3, suffix: '', label: 'Domains', sublabel: 'of Intervention' },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); el.classList.add('in-view') } },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stats-section" style={{ background: 'var(--clr-cream-dark, #EDE8E1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow">Our Impact</span>
          <h2 className="display-heading text-4xl md:text-5xl mt-4">
            Numbers that<br />
            <em style={{ color: 'var(--clr-amber)', fontStyle: 'italic' }}>tell a story</em>
          </h2>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="reveal grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} delay={i * 100} />
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center text-gray-500 mt-12 text-base max-w-xl mx-auto leading-relaxed">
          Behind every number is a family whose life has changed — a woman with a livelihood,
          a child who can learn, a village that breathes cleaner air.
        </p>
      </div>
    </section>
  )
}

function StatCard({ stat, isVisible, delay }: { stat: typeof stats[0]; isVisible: boolean; delay: number }) {
  const val = useCountUp(stat.value, isVisible)

  return (
    <div
      className="rounded-3xl p-8 flex flex-col items-center text-center transition-all hover:scale-105"
      style={{ background: 'white', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', transitionDelay: `${delay}ms` }}
    >
      <span
        className="font-800 leading-none mb-1"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--clr-earth)' }}
      >
        {isVisible ? val.toLocaleString() : '0'}{stat.suffix}
      </span>
      <span className="font-600 text-gray-900 text-base mt-1">{stat.label}</span>
      <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{stat.sublabel}</span>
    </div>
  )
}
