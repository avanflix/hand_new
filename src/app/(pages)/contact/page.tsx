'use client'

import { useState } from 'react'
import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import PageHero from '@/components/ui/PageHero'
import {
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  MapPin,
  Mail,
  Globe,
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (field: string, value: string) =>
    setFormData((p) => ({ ...p, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    try {
      setLoading(true)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setSent(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
  const inputStyle = {
    background: 'var(--clr-cream)',
    borderColor: 'rgba(0,0,0,0.1)',
    fontFamily: 'inherit',
  }

  return (
    <div className="w-full">
      <FloatingNavbar />
      <PageHero eyebrow="Reach Out" title="Let's Start a" titleAccent="Conversation" subtitle="Whether you want to volunteer, partner, donate, or simply learn more — we'd love to hear from you." backgroundImage="/images/contact_img.png" />

      <section className="section-pad" style={{ background: 'var(--clr-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-700 text-lg mb-4" style={{ color: 'var(--clr-charcoal)' }}>Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: 'var(--clr-earth)',
                      color: 'var(--clr-earth)',
                      background: 'rgba(89,79,63,0.05)',
                    }}
                  >
                    <MapPin size={20} strokeWidth={2} />
                  </div>

                  <div>
                    <h4 className="text-sm font-600 mb-1" style={{ color: 'var(--clr-charcoal)' }}>
                      Office Address
                    </h4>
                    <a
                      href="https://www.google.com/maps/place/Row+house,+178,+Chitrapuri+Colony,+Manikonda,+Hyderabad,+Telangana+500104/@17.4150116,78.3779491,157m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb9403f7cd86b5:0xbc100da0b7f042a8!8m2!3d17.4150103!4d78.3785928!16s%2Fg%2F11y4qpbcv5?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:underline transition-all"
                    >
                      178, Chitrapuri Row House Rd, Chitrapuri Colony, Hyderabad, Telangana 500104
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: 'var(--clr-earth)',
                      color: 'var(--clr-earth)',
                      background: 'rgba(89,79,63,0.05)',
                    }}
                  >
                    <Mail size={20} strokeWidth={2} />
                  </div>

                  <div>
                    <h4 className="text-sm font-600 mb-1" style={{ color: 'var(--clr-charcoal)' }}>
                      Email
                    </h4>
                    <a
                      href="mailto:hello@handngo.org"
                      className="text-sm hover:underline"
                      style={{ color: 'var(--clr-earth)' }}
                    >
                      hello@handngo.org
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: 'var(--clr-earth)',
                      color: 'var(--clr-earth)',
                      background: 'rgba(89,79,63,0.05)',
                    }}
                  >
                    <Globe size={20} strokeWidth={2} />
                  </div>

                  <div>
                    <h4 className="text-sm font-600 mb-1" style={{ color: 'var(--clr-charcoal)' }}>
                      Website
                    </h4>
                    <a
                      href="https://handngo.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                      style={{ color: 'var(--clr-earth)' }}
                    >
                      handngo.org
                    </a>
                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <h3 className="font-700 text-lg mb-4" style={{ color: 'var(--clr-charcoal)' }}>Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.linkedin.com/company/hand-human-action-for-need-and-development/', Icon: LinkedinIcon },
                  { href: 'https://www.instagram.com/handngo_org', Icon: InstagramIcon },
                  { href: 'https://www.youtube.com/@HANDNGO1', Icon: YoutubeIcon },
                ].map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: 'var(--clr-earth)', color: 'white' }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{ background: 'var(--clr-earth)' }}
            >
              <h3 className="font-700 text-lg text-white mb-3">Want to volunteer?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Join our growing network of change-makers. Every skill helps.
              </p>
              <a
                href="/volunteer"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-600 text-white transition-all hover:scale-105"
                style={{ background: 'var(--clr-amber)' }}
              >
                Apply to Volunteer →
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div
                className="rounded-3xl p-12 text-center"
                style={{ background: 'var(--clr-earth)' }}
              >
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-white font-700 text-xl mb-2">Message Sent!</h3>
                <p className="text-white/70 text-sm">We'll get back to you within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-5 bg-white" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-600 text-gray-500 mb-2 uppercase tracking-wider">Full Name *</label>
                    <input
                      className={inputClass}
                      style={inputStyle}
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-600 text-gray-500 mb-2 uppercase tracking-wider">Email *</label>
                    <input
                      type="email"
                      className={inputClass}
                      style={inputStyle}
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-600 text-gray-500 mb-2 uppercase tracking-wider">Phone</label>
                  <input
                    className={inputClass}
                    style={inputStyle}
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-600 text-gray-500 mb-2 uppercase tracking-wider">Subject *</label>
                  <input
                    className={inputClass}
                    style={inputStyle}
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="What is this about?"
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className="block text-xs font-600 text-gray-500 mb-2 uppercase tracking-wider">Message *</label>
                  <textarea
                    className={inputClass}
                    style={{ ...inputStyle, resize: 'none' }}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us more..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full text-sm font-600 text-white transition-all hover:scale-105 disabled:opacity-60"
                  style={{ background: 'var(--clr-earth)' }}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
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
