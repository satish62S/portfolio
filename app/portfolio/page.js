"use client";
import React from 'react'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import TechSlider from '../components/TechSlider'
import Footer from '../components/Footer'

const PortfolioPage = () => {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Tech Stack", value: "15+" }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React / Next.js", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "Three.js / Canvas"]
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js / Express", "Python / FastAPI", "PHP / Laravel", "PostgreSQL / MongoDB", "REST & GraphQL"]
    },
    {
      title: "Design & UX",
      skills: ["Figma", "UI/UX Research", "Motion Design", "Responsive Architecture", "Prototyping"]
    }
  ];

  return (
    <div className="bg-slate-gray min-h-screen text-white">
      <NavBar />
      
      {/* Portfolio Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.4em] mb-6 animate-fade-in">Professional Portfolio</h2>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            Digital Architect <br />
            <span className="text-primary">& Full-Stack Explorer</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed font-light">
            I specialize in building complex, high-performance web applications that 
            bridge the gap between sophisticated data analysis and intuitive user experiences.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, i) => (
              <div key={i} className="border-l border-accent/30 pl-6 py-2">
                <p className="text-4xl font-black mb-1">{stat.value}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Detail */}
      <section className="py-24 px-6 md:px-12 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">The <span className="text-accent">Vision</span> Behind the Code</h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                My journey in the digital space began with a simple curiosity about how data can be 
                visualised and interacted with. Today, that curiosity has evolved into a disciplined 
                practice of building scalable systems and pixel-perfect interfaces.
              </p>
              <p>
                I believe that every pixel should serve a purpose and every line of code should 
                be architected for growth. Whether I'm building an AI dashboard or a high-traffic 
                e-commerce engine, my focus remains on performance, accessibility, and clean design.
              </p>
            </div>
          </div>
          
          {/* Skill Breakdown */}
          <div className="space-y-10">
            {skillCategories.map((cat, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-accent text-xs font-bold uppercase tracking-widest">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Slider Integration */}
      <div className="py-12 border-y border-white/5">
        <TechSlider />
      </div>

      {/* Works Showcase */}
      <div className="py-12">
        <Projects />
      </div>

      <Footer />
    </div>
  )
}

export default PortfolioPage
