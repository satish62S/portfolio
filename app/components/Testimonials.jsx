"use client";
import React from "react";
import Image from "next/image";
import reviews from '../data/testimonials.json';
import { useScrollReveal, getStaggerDelay } from '../hooks/useScrollReveal';

const Testimonials = () => {
  const headerReveal = useScrollReveal({ threshold: 0.2 });
  const gridReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-16 sm:py-24 bg-slate-gray px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerReveal.ref}
          className={`reveal reveal-up mb-12 sm:mb-20 text-center lg:text-left ${headerReveal.isVisible ? 'revealed' : ''}`}
        >
          <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Testimonials</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Client <span className="text-primary italic">Reviews.</span>
          </h3>
        </div>

        <div ref={gridReveal.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`reveal reveal-up bg-slate-900/40 backdrop-blur-sm border border-white/5 p-6 sm:p-8 rounded-3xl hover:border-primary/30 transition-all duration-300 group ${gridReveal.isVisible ? 'revealed' : ''}`}
              style={getStaggerDelay(index, 120)}
            >
              {/* Header: Photo & Name */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-primary to-accent flex-shrink-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-900">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-base sm:text-lg leading-none mb-1 truncate">{review.name}</h4>
                  <p className="text-accent text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold truncate">{review.role}</p>
                </div>
              </div>

              {/* Review Text */}
              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-white/5 -z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16H19C19.552 16 20 15.552 20 15V10C20 9.448 19.552 9 19 9H15C13.899 9 13 8.101 13 7V3H21V15C21 18.314 18.314 21 15 21H14.017ZM3 21L3 18C3 16.899 3.899 16 5 16H8C8.552 16 9 15.552 9 15V10C9 9.448 8.552 9 8 9H4C2.899 9 2 8.101 2 7V3H10V15C10 18.314 7.314 21 4 21H3.017Z"/></svg>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
