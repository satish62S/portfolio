"use client";
import React from "react";
import technologies from '../data/technologies.json';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TechSlider = () => {
  const duplicatedTech = [...technologies, ...technologies];
  const headerReveal = useScrollReveal({ threshold: 0.3 });
  const sliderReveal = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-12 sm:py-16 bg-slate-gray overflow-hidden">
      <h2 
        ref={headerReveal.ref}
        className={`reveal reveal-up text-center text-lg sm:text-xl font-bold text-slate-500 uppercase tracking-[0.2em] mb-8 sm:mb-12 ${headerReveal.isVisible ? 'revealed' : ''}`}
      >
        Technologies
      </h2>
      <div 
        ref={sliderReveal.ref}
        className={`reveal reveal-blur flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${sliderReveal.isVisible ? 'revealed' : ''}`}
      >
        <div className="flex gap-6 sm:gap-12 animate-scroll whitespace-nowrap py-4">
          {duplicatedTech.map((tech, index) => (
            <div 
              key={index} 
              className="group flex-none w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center relative shadow-xl shadow-black/50 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:border-accent/40 hover:shadow-accent/20"
              title={tech.name}
            >
              {/* Metallic Border Effect */}
              <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-slate-400 via-slate-700 to-slate-400 opacity-30 group-hover:opacity-60 transition-opacity">
                 <div className="h-full w-full rounded-full bg-slate-900"></div>
              </div>
              
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 relative z-10 drop-shadow-lg"
                style={{ 
                    filter: tech.name === 'Next.js' ? 'invert(1) brightness(2)' : 'none' 
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
