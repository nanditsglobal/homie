import Hero from '@/components/Hero.jsx'
import Portfolio from '@/components/Portfolio.jsx'
import ServicesList from '@/components/ServicesList.jsx'
import About from '@/components/About.jsx'
import { Contact, Faq, Testimonials } from '@/components/HomeSections.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <ServicesList />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
