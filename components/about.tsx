'use client'

import Image from 'next/image'

export default function About() {
  const values = [
    { title: 'Respect', description: 'Respect for yourself, your opponents, and your instructors' },
    { title: 'Discipline', description: 'Consistent training and dedication to excellence' },
    { title: 'Courage', description: 'Facing challenges with determination and bravery' },
    { title: 'Honor', description: 'Maintaining integrity in competition and daily life' },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/judo-about.jpg"
              alt="Judo Training Session"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                The Art of Judo
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Judo, meaning {'\"'}the gentle way,{'\''} is a modern martial art created in Japan in 1882. It emphasizes principles of efficiency and mutual benefit, combining physical technique with mental discipline.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                At Dynamic Judo Association Raigad, we believe Judo is more than a sport—it's a way of life that builds character, confidence, and community. Whether you're seeking fitness, self-defense, or competitive excellence, our programs are designed for all ages and skill levels.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border-l-4 border-secondary hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-primary mb-1">{value.title}</h4>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
