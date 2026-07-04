'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const partners = [
  { id: 'jk', name: 'JK Projects', url: 'https://jkprojects.in/', logo: '/sponsers/JK Projects.png' },
  { id: 'key', name: 'KeySolutus', url: 'https://www.keysolutus.com/', logo: '/sponsers/keysolutus.png' },
]

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="partners-section" className="section-pad" style={{ background: 'var(--clr-cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="reveal text-center mb-12">
          <span className="eyebrow">Trusted Partners</span>
          <h2 className="display-heading text-3xl md:text-4xl mt-4">
            Together we go{' '}
            <em style={{ color: 'var(--clr-earth)', fontStyle: 'italic' }}>further</em>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Our work is powered by CSR partners, businesses, and leaders who believe in rural transformation.
          </p>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((p) => (
            <Link
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-center px-8 py-6 rounded-2xl bg-white transition-all hover:shadow-lg hover:scale-105"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={140}
                height={60}
                className="object-contain h-12 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-400"
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-3xl p-10 text-center"
          style={{ background: 'var(--clr-earth)' }}
        >
          <h3 className="text-white font-700 text-2xl mb-3">Become a Corporate Partner</h3>
          <p className="text-white/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Partner with us to fulfill your CSR objectives while creating measurable impact in rural communities across India.
          </p>
          <Link
            href="/partners"
            className="inline-block px-7 py-3 rounded-full text-sm font-600 transition-all hover:scale-105"
            style={{ background: 'var(--clr-amber)', color: 'white' }}
          >
            Explore Partnerships →
          </Link>
        </div>
      </div>
    </section>
  )
}
