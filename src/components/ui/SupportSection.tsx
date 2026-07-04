'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ways = [
  {
    id: 'donate',
    emoji: '💛',
    title: 'Donate',
    desc: 'Your contribution funds livelihood training, climate programs, and educational support for rural communities.',
    cta: 'Donate Now',
    href: '/donate',
    image: '/livelihood/food.jpg',
  },
  {
    id: 'volunteer',
    emoji: '🤲',
    title: 'Volunteer',
    desc: 'Share your skills and time on the ground — join field programs, awareness drives, and community initiatives.',
    cta: 'Join as Volunteer',
    href: '/volunteer',
    image: '/livelihood/meeting.jpg',
  },
  {
    id: 'partner',
    emoji: '🏢',
    title: 'Partner',
    desc: 'Align your CSR with grassroots impact. Co-create programs that move the needle on rural development.',
    cta: 'Become a Partner',
    href: '/partners',
    image: '/livelihood/digital.jpg',
  },
]

export default function SupportSection() {
  const ref = useRef<HTMLDivElement>(null)
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
    <section className="section-pad" style={{ background: '#EDE8E1' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow">Get Involved</span>
          <h2 className="display-heading text-4xl md:text-5xl mt-4">
            Be part of the<br />
            <em style={{ color: 'var(--clr-amber)', fontStyle: 'italic' }}>change</em>
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {ways.map((w, i) => (
            <div
              key={w.id}
              className={`reveal-delay-${i + 1} group rounded-3xl overflow-hidden bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
                <span className="absolute bottom-4 left-4 text-4xl">{w.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-700 text-xl mb-3" style={{ color: 'var(--clr-charcoal)' }}>{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{w.desc}</p>
                <Link
                  href={w.href}
                  className="inline-block w-full py-3 text-center rounded-full text-sm font-600 text-white transition-all hover:scale-105"
                  style={{ background: 'var(--clr-earth)' }}
                >
                  {w.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tax note */}
        <p className="text-center text-gray-400 text-xs mt-10 tracking-wide">
          Donations are eligible for 80G tax exemption under the Income Tax Act, India.
        </p>
      </div>
    </section>
  )
}
