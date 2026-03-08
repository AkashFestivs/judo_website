'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Card } from '@/components/ui/card'

const features = [
  {
    title: 'Professional Coaching',
    description: 'Learn from certified and experienced Judo instructors with years of expertise.',
    icon: '🥋',
  },
  {
    title: 'Physical Fitness',
    description: 'Improve strength, flexibility, and endurance through intensive training.',
    icon: '💪',
  },
  {
    title: 'Discipline & Focus',
    description: 'Develop mental toughness and self-control through martial arts practice.',
    icon: '🧠',
  },
  {
    title: 'Competitive Opportunities',
    description: 'Participate in district, state, and national tournaments.',
    icon: '🏆',
  },
  {
    title: 'Community & Team Spirit',
    description: 'Train with passionate martial artists and build lasting relationships.',
    icon: '🤝',
  },
  {
    title: 'Self Defense Skills',
    description: 'Learn practical techniques for real-world protection and safety.',
    icon: '🛡',
  },
]

export default function Features() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="features" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose Raigad Judo?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the comprehensive benefits of training with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-6 sm:p-8 bg-white border-2 border-background hover:border-secondary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
