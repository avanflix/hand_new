'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LinkedinIcon } from 'lucide-react'

type TeamMember = {
  id: string
  name: string
  role: string
  location: string
  avatar: string
  linkedin: string
}

const coreTeam: TeamMember[] = [
  { id: 'm1', name: 'Kamal C', role: 'Founder', location: 'Hyderabad, IND', avatar: '/team/KamalC2.png', linkedin: 'https://www.linkedin.com/in/kamal-c-747442171/' },
  { id: 'm2', name: 'Sailaja D', role: 'Co-Founder', location: 'Hyderabad, IND', avatar: '/team/Sailaja.png', linkedin: 'https://www.linkedin.com/in/sailaja-dogiparthi-74669734/' },
  { id: 'm3', name: 'Manpreet K', role: 'Executive Director', location: 'Hyderabad, IND', avatar: '/team/ManpreetK.png', linkedin: 'https://www.linkedin.com/in/manpreet-kaur-44a4aa1aa/' },
  { id: 'm4', name: 'Arun C', role: 'Executive Director', location: 'Hyderabad, IND', avatar: '/team/ArunC.png', linkedin: 'https://www.linkedin.com/in/arun-kumar-chirikoti-91b507157/' },
  { id: 'm5', name: 'Rohit C', role: 'Executive Director', location: 'Hyderabad, IND', avatar: '/team/Rohith.png', linkedin: 'https://www.linkedin.com/in/rohitchivukula25/' },
]

export default function TeamSection() {
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
    <section id="team-section" className="section-pad" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="eyebrow">The People Behind HAND</span>
          <h2 className="display-heading text-4xl md:text-5xl mt-4">
            Our <em style={{ color: 'var(--clr-earth)', fontStyle: 'italic' }}>Core Team</em>
          </h2>
        </div>

        <div ref={ref} className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coreTeam.map((m, i) => (
            <div
              key={m.id}
              className={`reveal-delay-${i + 1} group text-center`}
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  style={{ background: 'linear-gradient(to top, rgba(45,74,62,0.9), transparent)' }}
                >
                  <Link href={m.linkedin} target="_blank" rel="noopener">
                    <LinkedinIcon className="w-6 h-6 text-white" />
                  </Link>
                </div>
              </div>
              <h3 className="font-600 text-gray-900">{m.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
