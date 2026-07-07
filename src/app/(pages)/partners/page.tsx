import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'
import {
  ChartNoAxesCombined,
  BadgeCheck,
  Users,
  Leaf,
  Receipt,
  Handshake,
} from 'lucide-react'
import Link from 'next/link'

export default function Partners() {
  const benefits = [
    {
      icon: ChartNoAxesCombined,
      title: 'Measurable Impact',
      desc: 'Detailed impact reports and on-ground data aligned with your CSR goals and SDG targets.',
    },
    {
      icon: BadgeCheck,
      title: 'Brand Visibility',
      desc: 'Co-branded initiatives, digital and field-level presence across our programs.',
    },
    {
      icon: Users,
      title: 'Employee Engagement',
      desc: 'Structured volunteering programs for your teams with meaningful field experiences.',
    },
    {
      icon: Leaf,
      title: 'ESG Alignment',
      desc: 'Programs designed around Environment, Social, and Governance frameworks.',
    },
    {
      icon: Receipt,
      title: '80G Tax Benefits',
      desc: 'All CSR donations are fully eligible for tax benefits under the Income Tax Act.',
    },
    {
      icon: Handshake,
      title: 'Long-term Partnership',
      desc: 'We co-design programs, set milestones, and adapt based on community feedback.',
    },
  ]

  const partners = [
    { name: 'JK Projects', url: 'https://jkprojects.in/', logo: '/sponsers/JK Projects.png' },
    { name: 'KeySolutus', url: 'https://www.keysolutus.com/', logo: '/sponsers/keysolutus.png' },
  ]

  return (
    <div className="w-full">
      <FloatingNavbar />
      <PageHero
        eyebrow="Corporate Partnerships"
        title="Build Impact"
        titleAccent="Together"
        subtitle="Partner with HAND to fulfill your CSR mandate while creating measurable, sustainable change in rural India."
      />

      {/* Benefits */}
      <section className="section-pad" style={{ background: 'var(--clr-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="eyebrow">Why Partner With Us</span>
            <h2 className="display-heading text-3xl md:text-4xl mt-4">What you gain</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-3xl p-7 bg-white transition-all hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
                <div
                  className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-5"
                  style={{
                    borderColor: 'var(--clr-earth)',
                    color: 'var(--clr-earth)',
                    background: 'rgba(89, 79, 63, 0.05)',
                  }}
                >
                  <b.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="font-700 text-base mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <span className="eyebrow">Our Partners</span>
          <h2 className="display-heading text-3xl md:text-4xl mt-4 mb-12">Trusted by leading organizations</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((p) => (
              <Link key={p.name} href={p.url} target="_blank" rel="noopener"
                className="group px-10 py-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all hover:scale-105">
                <Image src={p.logo} alt={p.name} width={140} height={60} className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'var(--clr-earth)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-white font-800 text-3xl md:text-4xl mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to make an impact?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Let&apos;s design a partnership that meets your CSR goals and creates real change on the ground.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3.5 rounded-full text-sm font-600 transition-all hover:scale-105 text-white" style={{ background: 'var(--clr-amber)' }}>
            Start a Conversation →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
