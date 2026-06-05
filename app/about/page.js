import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <div className="bg-slate-gray min-h-screen">
      <NavBar />
      <main className="pt-40 px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Discovery</h2>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-12">
          About <br /> <span className="text-primary italic">Myself.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am a passionate developer and data enthusiast based in Nepal, dedicated to building 
              high-performance digital solutions that combine logic with creativity.
            </p>
            <p>
              With expertise spanning from frontend engineering to complex data analysis, I thrive 
              on turning intricate problems into seamless, user-centric experiences. My approach 
              is rooted in the "Deep Indigo" philosophy—logic, trust, and professional excellence.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-white text-xl font-bold mb-6">Core Philosophy</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Scalability by Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                User-Centric Architecture
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Data-Driven Decisions
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
