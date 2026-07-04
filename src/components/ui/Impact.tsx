'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Impact() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      id: 'testimonial1',
      name: 'Priya Sharma',
      role: 'Village Head, Telangana',
      quote: 'HAND transformed our entire village. Before their program, we had no digital connectivity. Now every household has internet access, our children are learning digital skills, and we can access government services online. The smart village initiative has brought our community into the 21st century.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 'testimonial2',
      name: 'Rajesh Kumar',
      role: 'Youth Beneficiary, Andhra Pradesh',
      quote: 'I was just another rural boy with dreams but no opportunities. HAND\'s skill development program taught me filmmaking and digital content creation. Now I run my own YouTube channel with over 50,000 subscribers and employ 5 other young people from my village. This program changed my life completely.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 'testimonial3',
      name: 'Dr. Meera Patel',
      role: 'Healthcare Coordinator',
      quote: 'The dental camps and telemedicine initiatives have been revolutionary for rural healthcare. We\'ve screened over 18,000 people and provided preventive care that would have been impossible without HAND\'s support. The community health awareness has reduced healthcare costs significantly.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 'testimonial4',
      name: 'Lakshmi Devi',
      role: 'Women Entrepreneur',
      quote: 'As a mother of three, I never imagined I could run my own business. HAND\'s women empowerment program taught me organic plate manufacturing and digital marketing. Now I employ 15 women from neighboring villages and my products reach customers across India. This program gave me dignity and financial independence.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 'testimonial5',
      name: 'Anil Reddy',
      role: 'School Teacher, Rural Area',
      quote: 'HAND\'s educational programs have transformed how we teach and learn. The digital learning platforms and cultural preservation initiatives have made education engaging and relevant. Our students now compete nationally and preserve our rich cultural heritage simultaneously. It\'s education that honors tradition while embracing the future.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      rating: 5
    },
    {
      id: 'testimonial6',
      name: 'Sunita Bai',
      role: 'Community Leader, Maharashtra',
      quote: 'The clean water and renewable energy solutions have given our village a new lease on life. No more walking miles for water, no more expensive kerosene lamps. Now we have safe drinking water and solar-powered homes. HAND didn\'t just provide infrastructure - they taught us how to sustain it. This is true development.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      rating: 5
    }
  ]

  const testimonialsPerView = 3
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('testimonials-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setTimeout(() => setIsAnimating(false), 300)
  }






  return (
    <section
      id="testimonials-section"
      className="py-16 md:py-24 px-4 md:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            What <span className="text-blue-600">People Say</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            Real stories from communities and individuals whose lives have been transformed by HAND&apos;s initiatives.
          </p>
        </div>

        {/* Testimonials Carousel */}
            <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden px-16 py-4">
            <div
              className={`flex transition-transform duration-300 ease-in-out ${
                isAnimating ? 'pointer-events-none' : ''
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {testimonials.slice(slideIndex * testimonialsPerView, (slideIndex + 1) * testimonialsPerView).map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 hover:border-blue-200 group ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ animationDelay: `${(slideIndex * testimonialsPerView + index) * 0.1}s` }}
                    >
                      {/* Quote Icon */}
                      <div className="text-blue-500 mb-6 opacity-60">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                  </div>

                      {/* Quote */}
                      <blockquote className="text-gray-700 leading-relaxed mb-8 text-base italic">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        "{testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + '...' : testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-blue-200 transition-colors">
                  <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                              sizes="56px"
                            />
                          </div>
                          {/* Verified badge */}
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500 font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
              ))}
                </div>
              </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 300)
                }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
          </div>
              </div>

        {/* Trust Indicators */}
        {/* <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1s' }}>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Trusted by 10,000+ People</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
              <span>5-Star Average Rating</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
            <p className="text-gray-600 mb-6">Join thousands of supporters who are helping transform communities across India.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Donate Now
                </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Volunteer
                </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}