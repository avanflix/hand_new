'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const defaultImages = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
]

interface ImageMarqueeProps {
    images?: string[]
}

export default function ImageMarquee({ images = defaultImages }: ImageMarqueeProps) {
    // If empty array passed, fallback to default or handle empty state.
    // Here we use default if empty or undefined to prevent broken layout
    const displayImages = images && images.length > 0 ? images : defaultImages;

    return (
        <div className="py-6 w-[80%] mx-auto bg-white overflow-hidden relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">Our Work</h2>
            <div className="flex w-max py-4 animate-marquee space-x-8 hover:[animation-play-state:paused]">
                {[...displayImages, ...displayImages].map((src, index) => (
                    <div key={index} className="relative w-64 h-48 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {/* Add custom CSS for marquee animation if not already in globals.css */}
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </div>
    )
}
