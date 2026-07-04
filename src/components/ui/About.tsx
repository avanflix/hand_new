'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in-view') },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function AboutSection() {
  const leftRef = useReveal()
  const rightRef = useReveal()
  const statsRef = useReveal()

  return (
    <section id="about-section" className="section-pad" style={{ background: 'var(--clr-cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top row: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left — text */}
          <div ref={leftRef} className="reveal reveal-left">
            <span className="eyebrow">Our Mission</span>
            <h2 className="display-heading text-4xl md:text-5xl mt-4 mb-6">
              Transforming lives<br />
              <em style={{ color: 'var(--clr-earth)', fontStyle: 'italic' }}>one village at a time</em>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              HAND — Human Action for Need and Development — is a grassroots NGO
              dedicated to creating lasting change in rural India. We work at the
              intersection of livelihood, climate resilience, and community empowerment
              to build a self-sufficient future for every village we serve.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Founded on the belief that sustainable change comes from within communities,
              we combine evidence-based programs with deep local partnerships to ensure
              our work endures long after we leave.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/about-us"
                className="px-6 py-3 rounded-full text-sm font-600 text-white transition-all hover:scale-105"
                style={{ background: 'var(--clr-earth)' }}
              >
                Our Story →
              </a>
              <a
                href="/donate"
                className="px-6 py-3 rounded-full text-sm font-600 border-2 transition-all hover:scale-105"
                style={{ borderColor: 'var(--clr-amber)', color: 'var(--clr-amber)' }}
              >
                Support Us
              </a>
            </div>
          </div>

          {/* Right — image mosaic */}
          <div ref={rightRef} className="reveal reveal-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image src="/livelihood/making1.jpg" alt="Community work" fill className="object-cover" />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden mt-8">
                <Image src="/livelihood/tailor.jpg" alt="Tailoring" fill className="object-cover" />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden -mt-4">
                <Image src="/livelihood/meeting.jpg" alt="Community meeting" fill className="object-cover" />
              </div>
              <div
                className="h-52 rounded-2xl flex flex-col items-center justify-center text-white -mt-12 p-6"
                style={{ background: 'var(--clr-earth)' }}
              >
                <span className="text-5xl font-800" style={{ fontFamily: "'Playfair Display', serif" }}>10+</span>
                <span className="text-sm mt-2 text-center opacity-80 font-500 tracking-wide uppercase">Years of Impact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core values strip */}
        <div ref={statsRef} className="reveal">
          <div
            className="rounded-3xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ background: 'var(--clr-earth)' }}
          >
            {[
              { icon: '🌱', title: 'Community-Led', desc: 'Every program is co-designed with the communities we serve, ensuring local ownership and long-term sustainability.' },
              { icon: '📊', title: 'Evidence-Based', desc: 'We measure what matters — tracking real outcomes that translate into meaningful improvement in daily lives.' },
              { icon: '🤝', title: 'Partnership-Driven', desc: 'Working with CSR partners, government bodies, and local leaders to maximize our collective reach and impact.' },
            ].map((v, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="text-white font-700 text-lg">{v.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
