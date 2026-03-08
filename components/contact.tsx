'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { User, Phone, MapPin, Mail } from 'lucide-react'

const contacts = [
  {
    name: 'Akshay Jadhave',
    phone: '8692969943',
  },
  {
    name: 'Gauri Gondil',
    phone: '8308603738',
  },
]

const commonInfo = {
  address: 'Vijaydeep Apt, Shop No. 05, Plot No 15, Sec 6a, Kamothe, Panvel, Raigad – 410209',
  email: 'dynamicjudoassociationraigad@gmail.com',
}

export default function Contact() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Get in touch with us to learn more about our programs or to join the Dynamic Judo Association Raigad.
          </p>
        </div>

        {/* Contact Person Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8 animate-fade-in">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="bg-card rounded-xl shadow-md border border-border p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <User className="text-secondary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-0.5">Name</p>
                  <p className="text-foreground font-semibold text-base">{contact.name}</p>
                </div>
              </div>

              <div className="border-t border-border" />

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Phone className="text-secondary w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-0.5">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-foreground font-semibold text-base hover:text-secondary transition-colors"
                  >
                    +91 {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Info Card */}
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="bg-card rounded-xl shadow-md border border-border p-6 flex flex-col sm:flex-row gap-6">
            {/* Email */}
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Mail className="text-secondary w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-0.5">Email</p>
                <a
                  href={`mailto:${commonInfo.email}`}
                  className="text-foreground font-medium text-sm hover:text-secondary transition-colors break-all"
                >
                  {commonInfo.email}
                </a>
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-border" />

            {/* Address */}
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="text-secondary w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-0.5">Address</p>
                <p className="text-foreground font-medium text-sm leading-relaxed">{commonInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
