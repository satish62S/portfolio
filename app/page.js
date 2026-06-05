import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import TechSlider from './components/TechSlider'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
  

const page = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <TechSlider />
      <Experience />
      <Projects />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page