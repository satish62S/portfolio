"use client";
import React from 'react';
import Link from 'next/link';
import projectList from '../data/projects.json';
import { useScrollReveal, getStaggerDelay } from '../hooks/useScrollReveal';

const Projects = () => {
  const headerReveal = useScrollReveal({ threshold: 0.2 });
  const gridReveal = useScrollReveal({ threshold: 0.1 });
  const ctaReveal = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="portfolio" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Header Section */}
        <div 
          ref={headerReveal.ref}
          className={`reveal reveal-up mb-12 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 ${headerReveal.isVisible ? 'revealed' : ''}`}
        >
          <div className="border-l-4 border-primary pl-4 sm:pl-6">
            <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              My <br /> <span className="text-gray-600">Projects</span>
            </h2>
            <p className="text-accent text-xs mt-4 sm:mt-6 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold">
              Engineering Scalable Solutions
            </p>
          </div>
          <div className="text-gray-500 text-sm max-w-xs font-light tracking-wide">
            A collection of technical challenges solved through clean code and modern architecture.
          </div>
        </div>

        {/* The Project Grid */}
        <div 
          ref={gridReveal.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
        >
          {projectList.map((project, index) => (
            <div
              key={project.id}
              className={`reveal reveal-up group relative flex flex-col bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/50 hover:-translate-y-2 ${gridReveal.isVisible ? 'revealed' : ''}`}
              style={getStaggerDelay(index, 120)}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-gray via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    Project 0{project.id}
                  </span>
                  <div className="flex gap-1.5 sm:gap-2 flex-wrap justify-end">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[8px] sm:text-[9px] border border-white/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-gray-400 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">
                  {project.title}
                </h3>

                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent text-[10px] uppercase font-bold tracking-[0.2em] group/link"
                  >
                    View Project <span className="transform transition-transform group-hover/link:translate-x-2">→</span>
                  </a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          ref={ctaReveal.ref}
          className={`reveal reveal-up mt-12 sm:mt-20 text-center ${ctaReveal.isVisible ? 'revealed' : ''}`}
        >
          <Link href="/portfolio" className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 border border-white/10 hover:border-accent text-white text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-300 rounded-full">
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;