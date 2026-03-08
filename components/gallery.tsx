'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'

const galleryImages = [
  { src: '/gallery/gallery-1.jpeg', alt: 'Training Session 1' },
  { src: '/gallery/gallery-2.jpeg', alt: 'Competition Match' },
  { src: '/gallery/gallery-3.jpeg', alt: 'Team Practice' },
  { src: '/gallery/gallery-4.jpeg', alt: 'Youth Training' },
  { src: '/gallery/gallery-5.jpeg', alt: 'Belt Ceremony' },
  { src: '/gallery/gallery-6.jpeg', alt: 'Tournament' },
  { src: '/gallery/gallery-7.jpeg', alt: 'Group Photo' },
  { src: '/gallery/gallery-8.jpeg', alt: 'Technique Training' },
]

export default function Gallery() {
  const sectionRef = useScrollAnimation()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section ref={sectionRef} id="gallery" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Training Gallery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the energy and passion of our Judo community
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-96 sm:h-[600px]">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>

            {/* Navigation */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage - 1)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                </svg>
              </button>
            )}

            {selectedImage < galleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage + 1)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
