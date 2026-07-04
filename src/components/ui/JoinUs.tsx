'use client'

import { useEffect, useState } from 'react'

export default function JoinUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(500)
  // const [customAmount, setCustomAmount] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('join-us-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const donationAmounts = [500,1000,1500]

  const volunteerOpportunities = [
    {
      id: 'vol1',
      title: 'Local Community Outreach',
      description: 'Help organize events and connect with local communities.',
      time: '2-4 hours/week',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 'vol2',
      title: 'Virtual Support & Administration',
      description: 'Assist with data entry and social media management.',
      time: '3-5 hours/week',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      )
    },
    {
      id: 'vol3',
      title: 'Fundraising & Events',
      description: 'Help organize fundraising events and donor outreach.',
      time: '4-6 hours/week',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ]

  const getCurrentImpact = (amount: number) => {
    if (amount >= 2500) return "Provides emergency relief for 50 families"
    if (amount >= 2000) return "Builds a clean water well for a village"
    if (amount >= 1500) return "Provides education for 5 children for a year"
    if (amount >= 1000) return "Supplies healthcare for 10 families"
    if (amount >= 500) return "Provides meals for 20 children"
    return "Supplies basic hygiene kits for families"
  }

  return (
    <section
      id="join-us-section"
      className="relative py-12 md:py-24 px-4 md:px-8 flex items-center justify-center bg-white"
    >
      <div className="w-[90vw] max-w-none mx-auto px-4 relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className={`text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Join Our <span className="text-hand-neutral-600">Mission</span>
          </h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-hand-neutral-500 to-hand-neutral-600 mx-auto rounded-full mb-3 md:mb-4" />
          <p className={`text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            Every contribution makes a real difference. Choose how you want to help.
          </p>
        </div>

        {/* Unique split-screen layout */}
        <div className="flex-grow flex items-center">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Donation section - Left side */}
            <div className={`bg-gradient-to-br from-hand-neutral-50 to-hand-neutral-100 rounded-2xl p-4 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-8'
            }`}>
              <div className="text-center mb-4">
                <div className="text-hand-neutral-600 mb-3 flex justify-center">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Make a Donation</h3>
                <p className="text-gray-700 text-xs md:text-sm">Your donation directly supports our programs.</p>
              </div>

              {/* Donation amounts */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-2 px-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                      selectedAmount === amount
                        ? 'bg-gradient-to-r from-hand-neutral-600 to-hand-neutral-700 text-hand-neutral-500 border-hand-neutral-500 border-2 shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border-1 border-hand-neutral-100'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-2">Custom Amount</label>
                <input
                  type="number"
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(parseInt(e.target.value))}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hand-neutral-500 focus:border-transparent text-sm text-gray-900"
                />
              </div>

              {/* Impact display */}
              <div className="bg-white p-3 rounded-lg mb-4">
                <div className="text-xs text-gray-700 mb-1">Your Impact:</div>
                <div className="text-sm font-semibold text-hand-neutral-800">
                  {getCurrentImpact(selectedAmount )}
                </div>
              </div>

              {/* Donate button */}
              <button className="w-full py-3 bg-gradient-to-r from-hand-neutral-600 to-hand-neutral-700 border-2 border-hand-neutral-500 rounded-lg font-semibold text-hand-neutral-500 transition-all duration-300 transform hover:scale-101 shadow-lg">
                Donate Now
              </button>

              <p className="text-xs text-gray-600 text-center mt-3">
                 Secure payment processing by Razorpay
              </p>
            </div>

            {/* Volunteer section - Right side */}
            <div className={`bg-gradient-to-br from-hand-neutral-50 to-hand-neutral-100 rounded-2xl p-4 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
            }`} style={{ animationDelay: '0.3s' }}>
              <div className="text-center mb-4 ">
                <div className="text-hand-neutral-600 mb-3 flex justify-center">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Become a Volunteer</h3>
                <p className="text-gray-700 text-xs md:text-sm">Join our team of dedicated volunteers.</p>
              </div>

              {/* Volunteer opportunities */}
              <div className="space-y-3 mb-4">
                {volunteerOpportunities.map((opportunity) => (
                  <div key={opportunity.id} className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-hand-neutral-100 rounded-lg flex items-center justify-center text-hand-neutral-600">
                        {opportunity.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm">{opportunity.title}</h4>
                        <p className="text-xs text-gray-700 mb-2">{opportunity.description}</p>
                        <div className="text-xs text-hand-neutral-700 font-medium">⏰ {opportunity.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Volunteer button */}
              <button className="w-full py-3 bg-gradient-to-r from-hand-neutral-600 to-hand-neutral-700 border-2 border-hand-neutral-500 rounded-lg font-semibold text-hand-neutral-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join as Volunteer
              </button>

              <p className="text-xs text-gray-600 text-center mt-3">
                Contact us at Hello@handngo.org for more information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
