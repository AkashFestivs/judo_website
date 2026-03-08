'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Is Judo suitable for all age groups?',
    answer: 'Yes. Our programs accommodate participants from early childhood through adulthood. Training is structured according to age and developmental stage, ensuring a safe and progressive experience for every individual — from young beginners to senior practitioners.',
  },
  {
    question: 'Is prior martial arts experience necessary to enroll?',
    answer: 'No prior experience is required. Our curriculum is designed to guide students from foundational principles to advanced techniques at a pace suited to each individual. Athletes of all fitness levels and backgrounds are welcome to join.',
  },
  {
    question: 'What equipment will I need?',
    answer: 'A standard Judo gi (uniform) conforming to recognized international specifications is required for all training sessions. Upon enrollment, our coaching staff will provide guidance on sourcing appropriate equipment. All other training materials are available on-site.',
  },
  {
    question: 'Does the academy participate in competitive events?',
    answer: 'Our members regularly compete at district, state, and national levels. Competitive participation is voluntary; however, dedicated preparation programs — including tactical coaching, performance analysis, and match conditioning — are available to all interested students.',
  },
  {
    question: 'What is the training schedule?',
    answer: 'We offer structured sessions across multiple days of the week, with class durations of 60 to 90 minutes. Attendance frequency can be tailored to individual goals, ranging from recreational participation to intensive competitive preparation.',
  },
  {
    question: 'How is membership pricing structured?',
    answer: 'Membership plans are available across multiple tiers to accommodate varying levels of commitment and training objectives. Flexible monthly and annual options are offered, including concessions for family enrollments. Prospective members are invited to attend an initial complimentary session — please contact us for current fee details.',
  },
]

export default function FAQ() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="faq" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">
            Find answers to common questions about our programs
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-secondary/30 rounded-lg px-6 hover:border-secondary/60 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold text-primary hover:text-secondary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-4 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
