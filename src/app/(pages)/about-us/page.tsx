'use client'

import { useState } from 'react'
import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import PageHero from '@/components/ui/PageHero'
import TeamSection from '@/components/ui/Team'
import StatsSection from '@/components/ui/Stats'
import { Target, Eye } from 'lucide-react'
import MissionVisionModal from '@/components/ui/MissionVisionModal'
import ImageGallery from '@/components/ui/ImageGallery'

export default function AboutUs() {
  const [selected, setSelected] = useState<any>(null)

  const missionVision = [
    {
      icon: Target,
      title: 'Our Mission',
      image: '/ourwork/mission.png',
      text: 'To empower vulnerable communities by creating sustainable livelihood opportunities and advancing climate resilience for a self-reliant and sustainable future.',
      content: [
        'HAND works to create long-term opportunities for rural communities through sustainable development initiatives that improve livelihoods, education, healthcare, and environmental conservation.',
        'We collaborate with local governments, corporate partners, volunteers, and community leaders to ensure every program is practical, measurable, and community-driven.',
        'By promoting climate-smart agriculture, women empowerment, skill development, youth engagement, and natural resource conservation, we strive to build resilient communities capable of overcoming future challenges.',
        'Every project we undertake is rooted in transparency, sustainability, and the belief that lasting development comes from empowering people rather than creating dependency.',
      ],
    },
    {
      icon: Eye,
      title: 'Our Vision',
      image: '/ourwork/vision.png',
      text: 'A rural India where every community is equipped with the skills, resources, and environment needed to thrive independently and sustainably.',
      content: [
        'We envision a future where every village is economically resilient, environmentally sustainable, and socially inclusive.',
        'Communities should have equal access to education, healthcare, clean water, renewable livelihoods, and opportunities that improve their quality of life.',
        'Our vision extends beyond development—it focuses on creating ecosystems where people become self-reliant, preserve natural resources, and contribute positively to future generations.',
        'Through innovation, partnerships, and community participation, HAND aims to become a catalyst for sustainable transformation across India.',
      ],
    },
  ]

  return (
    <div className="w-full">
      <FloatingNavbar />

      <PageHero
        eyebrow="Who We Are"
        title="Human Action for"
        titleAccent="Need &Development"
        subtitle="A grassroots NGO driving sustainable change through livelihood, climate action, and community empowerment across rural India."
        backgroundImage="/images/about.png"
      />

      {/* Mission & Vision */}
      <section
        className="section-pad"
        style={{ background: 'white' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionVision.map((item) => (
            <div
              key={item.title}
              onClick={() => setSelected(item)}
              className="rounded-3xl p-10 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: 'var(--clr-cream)' }}
            >
              <div
                className="w-12 h-12 rounded-2xl border-2 flex items-center justify-center mb-6"
                style={{
                  borderColor: 'var(--clr-earth)',
                  color: 'var(--clr-earth)',
                  background: 'rgba(89,79,63,0.05)',
                }}
              >
                <item.icon size={30} strokeWidth={2} />
              </div>

              <h3
                className="font-700 text-xl mb-4"
                style={{ color: 'var(--clr-earth)' }}
              >
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>

              <button
                className="mt-6 inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition-colors"
                style={{
                  background: 'var(--clr-earth)',
                  color: '#fff',
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <StatsSection />
      <ImageGallery/>

      <TeamSection />

      <MissionVisionModal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title || ''}
        image={selected?.image || ''}
        content={selected?.content || []}
      />

      <Footer />
    </div>
  )
}