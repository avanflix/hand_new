import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import PageHero from '@/components/ui/PageHero'
import TeamSection from '@/components/ui/Team'
import StatsSection from '@/components/ui/Stats'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="w-full">
      <FloatingNavbar />
      <PageHero
        eyebrow="Who We Are"
        title="Human Action for"
        titleAccent="Need & Development"
        subtitle="A grassroots NGO driving sustainable change through livelihood, climate action, and community empowerment across rural India."
      />

      {/* Mission & Vision */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: '⚡',
              title: 'Our Mission',
              text: 'To empower vulnerable communities by creating sustainable livelihood opportunities and advancing climate resilience for a self-reliant and sustainable future.',
            },
            {
              icon: '🌍',
              title: 'Our Vision',
              text: 'A rural India where every community is equipped with the skills, resources, and environment needed to thrive independently and sustainably.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl p-10"
              style={{ background: 'var(--clr-cream)' }}
            >
              <span className="text-4xl block mb-5">{item.icon}</span>
              <h3 className="font-700 text-xl mb-4" style={{ color: 'var(--clr-earth)' }}>{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <StatsSection />
      <TeamSection />
      <Footer />
    </div>
  )
}
