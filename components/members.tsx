'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

const members = [
  {
    name: 'Akshay Jadhave',
    role: 'President',
    description: 'A 4th Dan Black Belt martial artist who leads the organization with vision and discipline, inspiring members to pursue excellence both on and off the mat.',
    image: '/members/akshay_jadhav_pro.jpg',
    style: { objectPosition: 'center top' },
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
    name: 'Gauri',
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
    name: 'Anita Ukey',
    role: 'Vice President',
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

export default function Members() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="members" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Pillar Members
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Meet the dedicated professionals leading our association
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {members.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 rounded-xl border-0"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-accent" style={(member as any).containerStyle}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  style={member.style}
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold mb-3 text-sm">
                  {member.role}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
