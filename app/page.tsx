import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import About from '@/components/about'
import Members from '@/components/members'
import FAQ from '@/components/faq'
import Gallery from '@/components/gallery'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <Header />
      <Hero />
      <Features />
      <About />
      <Members />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
