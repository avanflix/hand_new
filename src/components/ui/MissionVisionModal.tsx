'use client'

import Image from 'next/image'
import { X } from 'lucide-react'

interface MissionVisionModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  image: string
  content: string[]
}

export default function MissionVisionModal({
  isOpen,
  onClose,
  title,
  image,
  content,
}: MissionVisionModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl animate-in fade-in zoom-in duration-300"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[300px] lg:h-auto">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="relative p-8 lg:p-10 overflow-y-auto max-h-[80vh]">
            <button
              onClick={onClose}
              className="absolute top-5 right-5"
            >
              <X size={28} />
            </button>

            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--clr-earth)' }}
            >
              {title}
            </h2>

            <div className="space-y-5 text-gray-600 leading-8">
              {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}