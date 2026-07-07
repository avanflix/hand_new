'use client'

import { useState } from 'react'
import Image from 'next/image'
import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Footer from '@/components/ui/Footer'
import PageHero from '@/components/ui/PageHero';
import {
  Scissors,
  Leaf,
  BookOpen,
  Settings,
} from 'lucide-react'

const presetAmounts = ['500', '1000', '2500', '5000']

function DonateForm() {
  const [formData, setFormData] = useState({ amount: '', name: '', email: '', phone: '', pan: '', address: '' })
  const [customAmount, setCustomAmount] = useState(false)

  const handleChange = (field: string, value: string) => setFormData((p) => ({ ...p, [field]: value }))

  const selectAmount = (val: string) => {
    setCustomAmount(false)
    handleChange('amount', val)
  }

  const handleDonate = async () => {
    if (!formData.amount || !formData.name || !formData.email || !formData.phone) {
      alert('Please fill all required fields')
      return
    }
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: Number(formData.amount) * 100,
      currency: 'INR',
      name: 'HAND Foundation',
      description: 'Donation',
      prefill: { name: formData.name, email: formData.email, contact: formData.phone },
      notes: { pan: formData.pan, address: formData.address },
      handler: () => alert('Thank you for your donation!'),
      theme: { color: '#2D4A3E' },
    }
    const razorpay = new (window as any).Razorpay(options)
    razorpay.open()
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-green-800/20"
  const inputSt = { background: 'var(--clr-cream)', borderColor: 'rgba(0,0,0,0.1)', fontFamily: 'inherit' }

  return (
    <div className="rounded-3xl p-8 bg-white" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}>
      <div
        className="text-center py-3 px-4 rounded-xl mb-6 text-sm font-500"
        style={{ background: 'rgba(45,74,62,0.08)', color: 'var(--clr-earth)' }}
      >
        🇮🇳 80G Tax Exemption Available · Contributions acknowledged within 7 days
      </div>

      {/* Amount preset */}
      <div className="mb-6">
        <label className="block text-xs font-600 text-gray-400 mb-3 uppercase tracking-wider">Choose Amount (₹)</label>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {presetAmounts.map((a) => (
            <button
              key={a}
              onClick={() => selectAmount(a)}
              className="py-3 rounded-xl text-sm font-600 transition-all hover:scale-105"
              style={{
                background: formData.amount === a && !customAmount ? 'var(--clr-earth)' : 'var(--clr-cream)',
                color: formData.amount === a && !customAmount ? 'white' : 'var(--clr-charcoal)',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              ₹{Number(a).toLocaleString()}
            </button>
          ))}
        </div>
        <button
          onClick={() => { setCustomAmount(true); handleChange('amount', '') }}
          className="w-full py-2 rounded-xl text-sm font-500 transition-all"
          style={{ background: customAmount ? 'var(--clr-amber)' : 'transparent', color: customAmount ? 'white' : 'var(--clr-amber)', border: `1px dashed var(--clr-amber)` }}
        >
          + Custom Amount
        </button>
        {customAmount && (
          <input
            className={inputCls + " mt-3"}
            style={inputSt}
            type="number"
            placeholder="Enter amount in ₹"
            value={formData.amount}
            onChange={(e) => handleChange('amount', e.target.value)}
          />
        )}
      </div>

      {/* Donor info */}
      <div className="space-y-4 mb-6">
        {[
          { field: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name' },
          { field: 'email', label: 'Email *', type: 'email', placeholder: 'your@email.com' },
          { field: 'phone', label: 'Phone *', type: 'tel', placeholder: '+91 ...' },
          { field: 'pan', label: 'PAN (for 80G)', type: 'text', placeholder: 'ABCDE1234F' },
        ].map((f) => (
          <div key={f.field}>
            <label className="block text-xs font-600 text-gray-400 mb-1.5 uppercase tracking-wider">{f.label}</label>
            <input
              className={inputCls}
              style={inputSt}
              type={f.type}
              placeholder={f.placeholder}
              value={formData[f.field as keyof typeof formData]}
              onChange={(e) => handleChange(f.field, e.target.value)}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleDonate}
        className="w-full py-4 rounded-full text-sm font-600 text-white transition-all hover:scale-105"
        style={{ background: 'var(--clr-earth)' }}
      >
        Donate {formData.amount ? `₹${Number(formData.amount).toLocaleString()}` : 'Now'} →
      </button>
    </div>
  )
}

export default function DonatePage() {
  return (
    <div className="w-full">
      <FloatingNavbar />
      <PageHero
        eyebrow="Make an Impact"
        title="Every rupee builds a"
        titleAccent="better future"
        subtitle="Support sustainable livelihood, climate action, and community programs that directly reach rural families across India."
         backgroundImage="/images//hero-bg.jpg"
      />

      <section className="section-pad" style={{ background: 'var(--clr-cream)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — why donate */}
          <div className="space-y-8">
            <div>
              <h3 className="font-700 text-xl mb-4" style={{ color: 'var(--clr-charcoal)' }}>Where your money goes</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Scissors,
                    label: 'Livelihood Training',
                    pct: '40%',
                    desc: 'Vocational skills, tailoring, and micro-enterprise support',
                  },
                  {
                    icon: Leaf,
                    label: 'Climate Programs',
                    pct: '30%',
                    desc: 'Eco-friendly initiatives and environmental awareness',
                  },
                  {
                    icon: BookOpen,
                    label: 'Education Support',
                    pct: '20%',
                    desc: 'Digital literacy and inclusive learning environments',
                  },
                  {
                    icon: Settings,
                    label: 'Operations & Reach',
                    pct: '10%',
                    desc: 'Enabling us to scale and sustain programs',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-white" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                    <div
                      className="w-12 h-12 rounded-xl border-2 flex items-center justify-center"
                      style={{
                        borderColor: 'var(--clr-earth)',
                        color: 'var(--clr-earth)',
                        background: 'rgba(89,79,63,0.05)',
                      }}
                    >
                      <item.icon size={22} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-600 text-sm">{item.label}</span>
                        <span className="text-sm font-600" style={{ color: 'var(--clr-earth)' }}>{item.pct}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-gray-100 mb-1">
                        <div className="h-full rounded-full" style={{ width: item.pct, background: 'var(--clr-amber)' }} />
                      </div>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-52">
              {/* <Image src="/images/" alt="Impact" fill className="object-cover" /> */}
              <div className="absolute inset-0 flex items-end p-6" style={{ background: 'linear-gradient(to top, rgba(45,74,62,0.9), transparent)' }}>
                <p className="text-white text-sm leading-relaxed">
                  "HANDలో చేరడానికి ముందు నాకు ఎటువంటి ఆదాయం ఉండేది కాదు. ఇప్పుడు నేను సొంతంగా టైలరింగ్ యూనిట్‌ను నడుపుతూ నా కుటుంబాన్ని పోషించుకుంటున్నాను."
                  <span className="block mt-1 opacity-70">— Lakshmi, Beneficiary, Andhra Pradesh</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <DonateForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
