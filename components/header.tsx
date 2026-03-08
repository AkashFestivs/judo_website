'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#features', label: 'Training Programs' },
    { href: '#about', label: 'About Judo' },
    { href: '#members', label: 'Pillar Members' },
    { href: '#faq', label: 'FAQ' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-secondary/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/judo_logi.png"
              alt="Dynamic Judo Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <h1 className="text-primary font-bold text-sm leading-tight">Dynamic Judo</h1>
              <p className="text-xs text-secondary">Raigad Association</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-secondary hover:bg-background rounded-md transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-6 py-2 bg-secondary hover:bg-secondary/90 text-black font-medium rounded-md transition-all cursor-pointer"
            >
              Join the Dojo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-background transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-secondary hover:bg-background rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-3 pt-2">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-secondary hover:bg-secondary/90 text-black font-medium py-2 rounded-md transition-all"
              >
                Join the Dojo
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
