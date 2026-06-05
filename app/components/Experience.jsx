"use client";
import React from "react";
import experiences from '../data/experience.json';
import { useScrollReveal, getStaggerDelay } from '../hooks/useScrollReveal';

const Experience = () => {
  const headerReveal = useScrollReveal({ threshold: 0.2 });
  const timelineReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-gray px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerReveal.ref}
          className={`reveal reveal-up mb-12 sm:mb-20 ${headerReveal.isVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Career Path</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            My Professional <br />
            <span className="text-primary italic">Journey.</span>
          </h3>
        </div>

        <div ref={timelineReveal.ref} className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`reveal reveal-left relative pl-8 sm:pl-12 border-l-2 border-white/10 group ${timelineReveal.isVisible ? 'revealed' : ''}`}
              style={getStaggerDelay(index, 200)}
            >
              {/* Dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-slate-gray shadow-[0_0_10px_rgba(79,70,229,0.5)] group-hover:scale-125 transition-transform"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-2 sm:gap-4 md:gap-12">
                <div className="text-accent font-bold tracking-widest text-xs sm:text-sm uppercase">
                  {exp.year}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {exp.role} <span className="text-slate-500 font-light text-base sm:text-lg block sm:inline mt-1 sm:mt-0">at {exp.company}</span>
                  </h4>
                  <p className="text-slate-400 leading-relaxed max-w-2xl text-sm sm:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
