'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function News() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState<typeof newsArticles[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('news-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const newsArticles = [
    {
      id: 'news1',
      title: 'New Clean Water Initiative Launched in Rural Communities',
      excerpt: 'HAND partners with local governments to provide sustainable water solutions for 50,000+ people in drought-prone areas.',
      date: '2024-01-15',
      category: 'Water & Sanitation',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop',
      readTime: '3 min read'
    },
    {
      id: 'news2',
      title: 'Education Program Expands to 10 New Countries',
      excerpt: 'Our innovative education initiative reaches 25,000 children with modern learning tools and teacher training programs.',
      date: '2024-01-10',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
      readTime: '4 min read'
    },
    {
      id: 'news3',
      title: 'Emergency Response Teams Deployed to Disaster Zones',
      excerpt: 'Rapid humanitarian aid delivered to communities affected by recent natural disasters, providing immediate relief and long-term recovery support.',
      date: '2024-01-08',
      category: 'Emergency Relief',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 'news4',
      title: 'Healthcare Mobile Clinics Revolutionize Rural Care',
      excerpt: 'Mobile medical units bring essential healthcare services to remote communities, improving health outcomes across developing regions.',
      date: '2024-01-05',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=250&fit=crop',
      readTime: '3 min read'
    },
    // {
    //   id: 'news5',
    //   title: 'Microfinance Program Celebrates 5,000th Loan Recipient',
    //   excerpt: 'Women entrepreneurs empowered through our microfinance initiative, creating sustainable economic opportunities and financial independence.',
    //   date: '2024-01-03',
    //   category: 'Economic Empowerment',
    //   image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
    //   readTime: '4 min read'
    // },
    // {
    //   id: 'news6',
    //   title: 'Climate Action Initiative Plants 100,000 Trees',
    //   excerpt: 'Major reforestation project launched to combat deforestation and promote environmental sustainability in affected regions.',
    //   date: '2024-01-01',
    //   category: 'Environmental',
    //   image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop',
    //   readTime: '3 min read'
    // }
  ]

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'education':
        return 'bg-blue-100 text-blue-800'
      case 'healthcare':
        return 'bg-green-100 text-green-800'
      case 'emergency relief':
        return 'bg-red-100 text-red-800'
      case 'water & sanitation':
        return 'bg-cyan-100 text-cyan-800'
      case 'economic empowerment':
        return 'bg-purple-100 text-purple-800'
      case 'environmental':
        return 'bg-emerald-100 text-emerald-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const openModal = (article: typeof newsArticles[0]) => {
    console.log('Opening modal for article:', article.title)
    console.log('Article data:', article)
    // Try using setTimeout to ensure state updates properly
    setTimeout(() => {
      setSelectedArticle(article)
      setIsModalOpen(true)
      document.body.style.overflow = 'hidden'
      console.log('Modal state set to open')
    }, 0)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
    document.body.style.overflow = 'unset' // Restore scroll
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  // Debug state changes
  useEffect(() => {
    console.log('Modal state changed:', { isModalOpen, selectedArticle: selectedArticle?.title })
  }, [isModalOpen, selectedArticle])

  return (
    <section
      id="news-section"
      className="relative py-24 px-8 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="news-pattern" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="12.5" cy="12.5" r="1.5" fill="hsl(var(--hand-neutral-500))"/>
                <circle cx="12.5" cy="12.5" r="0.8" fill="hsl(var(--hand-neutral-400))"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#news-pattern)" />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-28 h-28 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-teal-100/50 to-green-100/50 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 w-[90vw] max-w-none mx-auto px-4 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`text-3xl md:text-5xl font-bold text-gray-900 mb-4 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            News & <span className="text-hand-neutral-600">Updates</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-hand-neutral-500 to-hand-neutral-600 mx-auto rounded-full mb-4" />
          <p className={`text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.2s' }}>
            Stay informed about our latest initiatives, success stories, and impact updates from around the world.
          </p>

          {/* Debug info */}

        {/* News Articles Grid */}
        <div className="flex-grow flex items-center">
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {newsArticles.map((article, index) => (
                <article
                  key={article.id}
                  className={`group relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Article Image */}
                  <div className="relative h-32 md:h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* <div className="absolute top-4 left-4">
                      <span className={`inline-block px-2 md:px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                    </div> */}
                  </div>

                  {/* Article Content */}
                  <div className="p-3 md:p-6">
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <time className="text-[0.5rem] md:text-sm text-gray-500">{formatDate(article.date)}</time>
                      <span className="text-[0.5rem] md:text-sm text-gray-500">{article.readTime}</span>
                    </div>

                    <h3 className="text-[12px] md:text-lg font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-hand-neutral-700 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-[10px] md:text-sm mb-3 md:mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        console.log('Button clicked for article:', article.title)
                        openModal(article)
                      }}
                      className="text-hand-neutral-600 font-semibold text-[10px] md:text-sm hover:text-hand-neutral-700 transition-colors duration-300 group-hover:underline"
                    >
                      Read More →
                    </button>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-hand-neutral-500/5 to-hand-neutral-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </article>
              ))}
            </div>

            {/* View All Button */}
            {/* <div className={`text-center mt-8 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '1.2s' }}>
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-hand-neutral-600 to-hand-neutral-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View All News
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
          {/* Debug info - remove this in production */}
          {(() => { console.log('Modal should render:', isModalOpen, selectedArticle.title); return null; })()}
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 shadow-lg"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Article Image */}
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getCategoryColor(selectedArticle.category)}`}>
                  {selectedArticle.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 md:p-8 lg:p-10">
              {/* Meta Information */}
              <div className="flex items-center justify-between mb-4">
                <time className="text-sm text-gray-500">{formatDate(selectedArticle.date)}</time>
                <span className="text-sm text-gray-500">{selectedArticle.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {selectedArticle.title}
              </h2>

              {/* Excerpt/Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                  {selectedArticle.excerpt}
                </p>

                {/* Placeholder for additional content */}
                <div className="space-y-4 text-gray-700">
                  <p>
                    This is a detailed view of the news article. In a real implementation, you would have the full article content here.
                    The modal provides a better reading experience with the full image and content in a focused layout.
                  </p>
                  <p>
                    The modal is fully responsive and includes keyboard navigation (ESC to close) and click-outside-to-close functionality
                    for a better user experience across all devices.
                  </p>
                </div>
              </div>

              {/* Share/Action Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Save
                  </button>
                </div>

                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-hand-neutral-600 hover:bg-hand-neutral-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
