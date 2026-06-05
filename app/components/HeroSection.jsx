"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import roles from '../data/roles.json';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HeroSection = () => {

  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const heroText = useScrollReveal({ threshold: 0.1 });
  const heroImage = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIdx];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx, typingSpeed]);

  return (
    <section className="relative w-full min-h-screen bg-slate-gray flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 py-24 sm:py-32 md:py-50">
      {/* 4K Background: Deep Mesh Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/15 blur-[160px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-accent/15 blur-[160px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] right-[15%] w-[30%] h-[30%] bg-electric/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-slate-gray/40"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        {/* Left Content: Typography & CTAs */}
        <div 
          ref={heroText.ref}
          className={`reveal reveal-left flex flex-col gap-6 sm:gap-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1 ${heroText.isVisible ? 'revealed' : ''}`}
        >
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-white">
            Hare Krishna !<br />
          </h1>
          <span className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white">
            Myself Satish Khanal
          </span>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-400 max-w-xl leading-relaxed font-light">
           I am a <span className="text-accent font-bold min-w-[150px] sm:min-w-[200px] inline-block">{currentText}</span>
           <span className="inline-block w-[3px] h-[24px] sm:h-[30px] bg-accent ml-1 animate-pulse"></span>
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mt-4 justify-center lg:justify-start w-full sm:w-auto">
            <Link href="/portfolio" className="group relative bg-primary hover:bg-primary/80 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] cursor-pointer overflow-hidden text-sm sm:text-base text-center inline-block">
              <span className="relative z-10">Explore Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            <Link href="/contact" className="bg-white/5 text-slate-200 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold border border-white/10 hover:border-accent/40 hover:bg-accent/5 transition-all cursor-pointer backdrop-blur-sm text-sm sm:text-base text-center inline-block">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right Content: Circular Portrait */}
        <div 
          ref={heroImage.ref}
          className={`reveal reveal-scale relative flex justify-center items-center order-1 lg:order-2 ${heroImage.isVisible ? 'revealed' : ''}`}
        >
          {/* Layered Glow Rings */}
          <div className="absolute w-[110%] h-[110%] rounded-full bg-primary/10 blur-[60px] animate-pulse"></div>
          <div className="absolute w-full h-full rounded-full border border-white/5 scale-110"></div>
          <div className="absolute w-full h-full rounded-full border border-white/5 scale-125"></div>
          
          {/* The Circular Frame */}
          <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] rounded-full p-[4px] sm:p-[6px] bg-gradient-to-tr from-primary/40 via-accent/20 to-electric/40 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-gray border-4 border-slate-gray/80">
              <Image
                src="/myself.png"
                alt="Satish Khanal"
                fill
                priority
                className="object-cover transition-transform duration-1000 hover:scale-110"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, 450px"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-opacity duration-500">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
