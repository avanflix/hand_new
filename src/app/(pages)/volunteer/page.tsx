'use client'

import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import PageHero from '@/components/ui/PageHero'
import { useState } from 'react'
import {
  GraduationCap,
  Megaphone,
  Camera,
  Laptop,
  PartyPopper,
} from 'lucide-react'

export default function Volunteer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', skills: '', availability: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleChange = (field: string, value: string) => setFormData((p) => ({ ...p, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Required'
    if (!formData.email.trim()) newErrors.email = 'Required'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }
    if (!formData.city.trim()) newErrors.city = 'Required'
    if (!formData.skills.trim()) newErrors.skills = 'Required'
    if (!formData.availability.trim()) newErrors.availability = 'Required'
    if (!formData.message.trim()) newErrors.message = 'Required'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setSent(true)
    } catch {
      alert('Something went wrong. Please try again.')
    }
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-green-800/20"
  const inputSt = { background: 'var(--clr-cream)', borderColor: 'rgba(0,0,0,0.1)', fontFamily: 'inherit' }

  return (
    <div className="w-full">
      <FloatingNavbar />
      <PageHero
        eyebrow="Get Involved"
        title="Volunteer with"
        titleAccent="HAND"
        subtitle="Every skill counts. Join our community of changemakers working on the ground across rural India."
         backgroundImage="/images//hero-bg.jpg"
      />

      <section className="section-pad" style={{ background: 'var(--clr-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h3 className="font-700 text-xl mb-8" style={{ color: 'var(--clr-charcoal)' }}>What you can contribute</h3>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {[
                {
                  icon: GraduationCap,
                  title: 'Skills Training',
                  desc: 'Teach vocational skills — tailoring, digital literacy, accounting',
                },
                {
                  icon: Megaphone,
                  title: 'Awareness Drives',
                  desc: 'Lead community workshops on health, hygiene, and climate',
                },
                {
                  icon: Camera,
                  title: 'Documentation',
                  desc: 'Photography, video, and storytelling from the field',
                },
                {
                  icon: Laptop,
                  title: 'Remote Support',
                  desc: 'Design, research, writing, and fundraising from anywhere',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div
                    className="w-12 h-12 rounded-xl border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: 'var(--clr-earth)',
                      color: 'var(--clr-earth)',
                      background: 'rgba(89,79,63,0.05)',
                    }}
                  >
                    <item.icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-600 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="rounded-3xl p-12 text-center bg-white" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: 'var(--clr-earth)',
                    color: 'var(--clr-earth)',
                    background: 'rgba(89,79,63,0.05)',
                  }}
                >
                  <PartyPopper size={40} strokeWidth={2} />
                </div>
                <h3 className="font-700 text-xl mb-2" style={{ color: 'var(--clr-earth)' }}>Application Received!</h3>
                <p className="text-gray-500 text-sm">We&apos;ll be in touch within 3–5 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 bg-white space-y-5" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
                {[
                  { field: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your name' },
                  { field: 'email', label: 'Email *', type: 'email', placeholder: 'your@email.com' },
                  { field: 'phone', label: 'Phone *', type: 'tel', placeholder: '+91 ...' },
                  { field: 'city', label: 'City *', type: 'text', placeholder: 'Your city' },
                  { field: 'skills', label: 'Skills *', type: 'text', placeholder: 'e.g. Teaching, Design, Photography' },
                  { field: 'availability', label: 'Availability *', type: 'text', placeholder: 'e.g. Weekends, Full-time' },
                ].map((f) => (
                  <div key={f.field}>
                    <label className="block text-xs font-600 text-gray-400 mb-1.5 uppercase tracking-wider">{f.label}</label>
                    <input className={inputCls} style={inputSt} type={f.type} placeholder={f.placeholder}
                      value={formData[f.field as keyof typeof formData]}
                      onChange={(e) => handleChange(f.field, e.target.value)} />
                    {errors[f.field] && <p className="text-red-500 text-xs mt-1">{errors[f.field]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-600 text-gray-400 mb-1.5 uppercase tracking-wider">Why do you want to volunteer? *</label>
                  <textarea className={inputCls} style={{ ...inputSt, resize: 'none' }} rows={4}
                    placeholder="Tell us about your motivation..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full py-3.5 rounded-full text-sm font-600 text-white transition-all hover:scale-105" style={{ background: 'var(--clr-earth)' }}>
                  Submit Application →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
