'use client'

import { LinkedinIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--clr-charcoal)', color: 'white' }}>
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Image src="/logo_bg_2.png" alt="HAND" width={80} height={80} className="mb-5 invert opacity-90" />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              HAND — Human Action for Need and Development works to create sustainable,
              community-led change across rural India through livelihood, climate, and education programs.
            </p>
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
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-600 text-sm uppercase tracking-widest mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about-us' },
                { name: 'Contact', href: '/contact' },
                { name: 'Donate', href: '/donate' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs + legal */}
          <div>
            <h4 className="text-white font-600 text-sm uppercase tracking-widest mb-5">Programs</h4>
            <ul className="space-y-3 mb-8">
              {[
                { name: 'Livelihood', href: '/domains/livelihood' },
                { name: 'Climate Change', href: '/domains/climate-change' },
                { name: 'Education', href: '/domains/education' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-600 text-sm uppercase tracking-widest mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
                { name: 'Cookie Policy', href: '/cookie-policy' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
        >
          <span>© {year} HAND — Human Action for Need and Development. All rights reserved.</span>
          <span>Registered NGO · 80G Tax Exempt · Made with ❤️ for Rural India</span>
        </div>
      </div>
    </footer>
  )
}
