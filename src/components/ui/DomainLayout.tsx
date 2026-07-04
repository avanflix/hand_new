'use client'

import Image from 'next/image'
import Link from 'next/link'
import FloatingNavbar from './FloatingNavbar'
import Footer from './Footer'
import { useState } from 'react'

interface CardData {
  id: string
  title: string
  description: string
  image: string
  fullDescription?: string
}

interface DomainLayoutProps {
  heroImage: string
  heroTitle: string
  heroSubtitle: string
  heroButtonText: string
  heroButtonLink: string
  overviewTitle: string
  overviewDescription: string
  whatWeDoDescription: string
  overviewCards: CardData[]
  marqueeImages?: string[]
}

export default function DomainLayout({
  heroImage, heroTitle, heroSubtitle, heroButtonText, heroButtonLink,
  overviewTitle, overviewDescription, whatWeDoDescription, overviewCards, marqueeImages = [],
}: DomainLayoutProps) {
  const [modalCard, setModalCard] = useState<CardData | null>(null)

  return (
    <div className="w-full">
      <FloatingNavbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroTitle} fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <span className="eyebrow mb-4 block" style={{ color: 'var(--clr-amber-light, #E8A55C)' }}>Our Programs</span>
          <h1
            className="text-5xl md:text-7xl font-800 text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            {heroTitle}
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">{heroSubtitle}</p>
          <Link
            href={heroButtonLink}
            className="inline-block px-7 py-3.5 rounded-full text-sm font-600 text-white transition-all hover:scale-105"
            style={{ background: 'var(--clr-amber)' }}
          >
            {heroButtonText}
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad" style={{ background: 'var(--clr-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Overview</span>
              <h2 className="display-heading text-3xl md:text-4xl mt-4 mb-6">{overviewTitle}</h2>
              <p className="text-gray-600 leading-relaxed">{overviewDescription}</p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">{whatWeDoDescription}</p>
              <Link href="/donate" className="inline-block px-6 py-3 rounded-full text-sm font-600 text-white transition-all hover:scale-105" style={{ background: 'var(--clr-earth)' }}>
                Support This Program →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow">What We Do</span>
            <h2 className="display-heading text-3xl md:text-4xl mt-4">Our Initiatives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewCards.map((card) => (
              <div
                key={card.id}
                className="group rounded-3xl overflow-hidden bg-white cursor-pointer transition-all hover:shadow-xl hover:-translate-y-2"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                onClick={() => card.fullDescription && setModalCard(card)}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-700 text-base mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{card.description}</p>
                  {card.fullDescription && (
                    <span className="text-xs font-600 uppercase tracking-wider" style={{ color: 'var(--clr-amber)' }}>
                      Read More →
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee images */}
      {marqueeImages.length > 0 && (
        <section className="py-12 overflow-hidden" style={{ background: 'var(--clr-charcoal)' }}>
          <div className="flex w-[200%] animate-scroll-auto hover:pause">
            {[...marqueeImages, ...marqueeImages].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-44 mx-2 rounded-2xl overflow-hidden">
                <Image src={src} alt="" width={256} height={176} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Donate CTA */}
      <section className="py-24 px-6" style={{ background: 'var(--clr-earth)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white font-800 text-3xl md:text-4xl mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Help us do more
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Your contribution directly funds programs like this — reaching more families, more villages, more lives.
          </p>
          <Link href="/donate" className="inline-block px-8 py-3.5 rounded-full text-sm font-600 text-white transition-all hover:scale-105" style={{ background: 'var(--clr-amber)' }}>
            Donate Now →
          </Link>
        </div>
      </section>

      {/* Modal */}
      {modalCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModalCard(null)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
              <h3 className="font-700 text-lg">{modalCard.title}</h3>
              <button onClick={() => setModalCard(null)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">✕</button>
            </div>
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{modalCard.fullDescription}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
