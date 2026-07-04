'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'

export default function DonateSection() {
    return (
        <section className="relative h-[85vh] py-10 md:py-32 overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                    alt="Donate Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="w-[90vw] max-w-4xl mx-auto px-4 relative z-10 text-center">
                <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
                    <span className="text-blue-100 font-semibold tracking-wider uppercase text-sm">Join the Movement</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white font-heading">
                    Be the Change You Want to See
                </h2>

                <p className="text-lg md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                    Your support can transform an entire village. Every donation brings us one step closer to a developed rural India.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href="/donate"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                        <Heart className="w-6 h-6  relative z-10 group-hover:scale-110 transition-transform" />
                        <span className="relative z-10 text-lg">Donate Now</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                        <span className="text-lg">Partner With Us</span>
                    </Link>
                </div>

                <p className="mt-8 text-sm text-blue-200 opacity-80">
                    All donations are eligible for tax exemption under section 80G.
                </p>
            </div>
        </section>
    )
}
