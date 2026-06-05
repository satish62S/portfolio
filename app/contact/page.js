import React from 'react'
import NavBar from '../components/NavBar'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className="bg-slate-gray min-h-screen">
      <NavBar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
