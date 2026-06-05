import React from 'react'
import NavBar from '../components/NavBar'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

const ExperiencePage = () => {
  return (
    <div className="bg-slate-gray min-h-screen">
      <NavBar />
      <div className="pt-24">
        <Experience />
      </div>
      <Footer />
    </div>
  )
}

export default ExperiencePage
