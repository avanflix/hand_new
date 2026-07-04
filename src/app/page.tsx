'use client'

import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Landing from '@/components/ui/Landing'
import About from '@/components/ui/About'
import Stats from '@/components/ui/Stats'
import WhatWeDo from '@/components/ui/WhatWeDo'
import OurWork from '@/components/ui/OurWork'
import Partners from '@/components/ui/Partners'
import SupportSection from '@/components/ui/SupportSection'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <div className="w-full">
      <FloatingNavbar />
      <Landing />
      <About />
      <Stats />
      <WhatWeDo />
      <OurWork />
      <Partners />
      <SupportSection />
      <Footer />
    </div>
  )
}
