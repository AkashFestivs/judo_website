'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const members = [
  {
    name: 'Akshay Jadhav',
    role: 'President',
    description: 'Leads the organization with vision and dedication, guiding members toward shared goals and fostering a culture of excellence, discipline, and growth.',
    image: '/members/akshay_jadhav_pro (2).png',
    style: { objectFit: 'contain' as const, objectPosition: 'center center' },
    containerStyle: { backgroundColor: '#FFFFFF' },
  },
  {
    name: 'Randhir Singh',
    role: 'Vice President',
    description: 'Supports the President in driving organizational goals, overseeing key initiatives, and ensuring smooth coordination across all departments and programs.',
    image: '/members/randhir_singh.png',
    style: { objectFit: 'contain' as const, objectPosition: 'center center' },
    containerStyle: { backgroundColor: '#1a4fa0' },
  },
  {
    name: 'Gauri Gondil',
    role: 'Secretary',
    description: 'Manages official correspondence, maintains records, and ensures seamless administrative operations to keep the association running efficiently.',
    image: '/members/gauri.png',
    style: { objectFit: 'contain' as const, objectPosition: 'center center' },
    containerStyle: { backgroundColor: '#FFFFFF' },
  },
  {
    name: 'Amol Jathod',
    role: 'Treasurer',
    description: 'Oversees the financial health of the association, managing funds, budgets, and accounts with transparency and accountability.',
    image: '/members/amol_jathod.jpeg',
    style: { objectFit: 'contain' as const, objectPosition: 'center center' },
    containerStyle: { backgroundColor: '#FFFFFF' },
  },
  {
    name: 'Vishal Zende',
    role: 'Member',
    description: 'An active contributor to the association, supporting events, training sessions, and community outreach with commitment and enthusiasm.',
    image: '/members/vishal_jendhe.jpeg',
    style: { objectFit: 'contain' as const, objectPosition: 'center center' },
    containerStyle: { backgroundColor: '#FFFFFF' },
  },
  {
    name: 'Anita Uke',
    role: 'Member',
    description: 'Plays a pivotal role in shaping organizational strategy, mentoring members, and championing the growth of judo across all age groups.',
    image: '/members/anita_ukey.png',
    style: { objectFit: 'contain' as const, objectPosition: 'center center' },
    containerStyle: { backgroundColor: '#1a4fa0' },
  },
  {
    name: 'Ayub Mulla',
    role: 'Member',
    description: 'Dedicated to the advancement of judo, contributing actively to club activities, athlete support, and the overall mission of the association.',
    image: '/members/ayub_mulla.png',
    style: { objectFit: 'contain' as const, objectPosition: 'center center' },
    containerStyle: { backgroundColor: '#1a4fa0' },
  },
]

const total = members.length

export default function Members() {
  const sectionRef = useScrollAnimation()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [animKey, setAnimKey] = useState(0)
  const [locked, setLocked] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1)
      else if (window.innerWidth < 1024) setVisibleCount(2)
      else setVisibleCount(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const go = (index: number, dir: 'left' | 'right') => {
    if (locked) return
    setLocked(true)
    setDirection(dir)
    setCurrent((index + total) % total)
    setAnimKey(k => k + 1)
    setTimeout(() => setLocked(false), 420)
  }

  const prev = () => go(current - 1, 'left')
  const next = () => go(current + 1, 'right')

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const visibleIndices = Array.from({ length: visibleCount }, (_, i) => (current + i) % total)
  const centerPos = Math.floor(visibleCount / 2)

  return (
    <section ref={sectionRef} id="members" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary border border-secondary/30 rounded-full px-4 py-1.5 mb-4">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
            Pillar Members
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-xl mx-auto">
            Meet the dedicated professionals steering our association forward
          </p>
        </div>

        {/* Slider */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Left Arrow */}
          <button
            onClick={() => { prev(); resetTimer() }}
            disabled={locked}
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary text-primary bg-white flex items-center justify-center shadow-md hover:bg-primary hover:text-white active:scale-90 transition-all duration-200 disabled:opacity-40"
            aria-label="Previous members"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards viewport */}
          <div className="flex-1 overflow-hidden">
            <div
              key={animKey}
              className="flex gap-4 sm:gap-5 lg:gap-6"
              style={{
                animation: `members-slide-${direction === 'right' ? 'from-right' : 'from-left'} 0.42s cubic-bezier(0.25,0.46,0.45,0.94) both`,
              }}
            >
              {visibleIndices.map((memberIdx, pos) => {
                const m = members[memberIdx]
                const isCenter = pos === centerPos
                return (
                  <div
                    key={memberIdx}
                    className="flex-1 min-w-0 group"
                    style={{
                      transition: 'transform 0.3s ease, opacity 0.3s ease',
                      transform: isCenter ? 'scale(1)' : 'scale(0.96)',
                      opacity: isCenter ? 1 : 0.72,
                    }}
                  >
                    <div className={`rounded-2xl overflow-hidden flex flex-col h-full bg-white transition-shadow duration-300 ${
                      isCenter
                        ? 'shadow-2xl ring-1 ring-primary/15'
                        : 'shadow-md'
                    }`}>

                      {/* Image area */}
                      <div
                        className="relative h-56 sm:h-64 lg:h-72 w-full overflow-hidden"
                        style={m.containerStyle}
                      >
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                          style={m.style}
                        />
                      </div>

                      {/* Divider line */}
                      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mx-5" />

                      {/* Info */}
                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <span className={`self-start text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-3 ${
                          isCenter
                            ? 'bg-primary text-white'
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {m.role}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-primary mb-2 leading-snug">
                          {m.name}
                        </h3>
                        <p className="text-foreground/55 text-xs sm:text-sm leading-relaxed flex-1">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => { next(); resetTimer() }}
            disabled={locked}
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary text-primary bg-white flex items-center justify-center shadow-md hover:bg-primary hover:text-white active:scale-90 transition-all duration-200 disabled:opacity-40"
            aria-label="Next members"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots + counter */}
        <div className="flex flex-col items-center gap-3 mt-10">
          <div className="flex items-center gap-2">
            {members.map((_, i) => (
              <button
                key={i}
                onClick={() => { go(i, i > current ? 'right' : 'left'); resetTimer() }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-7 h-2.5 bg-primary'
                    : 'w-2.5 h-2.5 bg-primary/25 hover:bg-primary/50'
                }`}
                aria-label={`Go to member ${i + 1}`}
              />
            ))}
          </div>
          <p className="text-xs text-foreground/35 font-medium tracking-wide">
            {current + 1} of {total}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes members-slide-from-right {
          from { opacity: 0; transform: translateX(70px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes members-slide-from-left {
          from { opacity: 0; transform: translateX(-70px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
