'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="relative h-screen bg-gradient-to-b from-background to-accent/10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/judo-hero.jpg"
          alt="Judo Training"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-pretty leading-tight">
            Build Strength, Discipline & Honor Through Judo
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Dynamic Judo Association Raigad promotes excellence in martial arts training, discipline, and competitive spirit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => handleNavClick('#contact')}
              className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-black font-semibold rounded-lg transition-all cursor-pointer"
            >
              Join Training
            </button>
            <button 
              onClick={() => handleNavClick('#about')}
              className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-all cursor-pointer"
            >
              Learn About Judo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
