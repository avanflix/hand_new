'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const images1 = [
  '/ourwork/tailor2.jpg', '/ourwork/munnangi1.jpg', '/ourwork/kolakaluru6.jpg',
  '/ourwork/gudivada1.jpg', '/ourwork/digital_udaan2.jpg',
]
const images2 = [
  '/ourwork/health.png', '/ourwork/school3.jpg', '/ourwork/food2.png',
  '/ourwork/climate.jpeg', '/ourwork/school5.jpg','/ourwork/food4.png'
]

export default function OurWorkSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section-pad overflow-hidden" style={{ background: 'var(--clr-charcoal)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={headerRef} className="reveal text-center mb-16">
          <span className="eyebrow" style={{ color: 'var(--clr-amber-light, #E8A55C)' }}>Our Work</span>
          <h2
            className="mt-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Moments of{' '}
            <em style={{ color: 'var(--clr-amber)', fontStyle: 'italic' }}>Change</em>
          </h2>
          <p className="text-white/50 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            A glimpse into the communities we work with and the stories unfolding across rural India.
          </p>
        </div>
      </div>

      {/* Row 1 — left scroll */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className="flex w-[200%] animate-scroll-auto hover:pause">
          {[...images1, ...images1].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-72 h-52 mx-2 rounded-2xl overflow-hidden">
              <Image src={src} alt={`Work ${i}`} width={288} height={208} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-[200%] animate-scroll-auto-reverse hover:pause">
          {[...images2, ...images2].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-72 h-52 mx-2 rounded-2xl overflow-hidden">
              <Image src={src} alt={`Work ${i}`} width={288} height={208} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
