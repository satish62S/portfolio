"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import navigationData from '../data/navigation.json';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const { navLinks } = navigationData;

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-slate-gray/80 backdrop-blur-md py-3 sm:py-4 border-accent/20' 
          : 'bg-transparent py-4 sm:py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
        
        {/* Logo Section */}
        <Link href="/" className="group flex flex-col leading-none">
          <div className="flex gap-1.5 items-center">
            <span className="text-accent font-bold text-lg sm:text-xl tracking-tighter transition-transform group-hover:-translate-y-0.5">Satish</span>
            <span className="text-white font-light text-lg sm:text-xl tracking-tighter">Khanal</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* Action Button */}
          <Link 
            href="/contact" 
            className="ml-2 lg:ml-4 px-5 lg:px-6 py-2.5 lg:py-3 bg-white text-black text-[10px] font-bold hover:text-white hover:bg-gray-800 transition-colors duration-300 rounded-full"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden flex flex-col gap-1.5 p-2 z-[110] relative"
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px] !bg-accent' : ''}`}></div>
          <div className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px] !bg-accent' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 w-full h-screen bg-slate-gray/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[105] ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {navLinks.map((link, index) => (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)} 
            className="text-2xl sm:text-3xl font-bold text-white hover:text-primary transition-all duration-300 uppercase tracking-tighter"
            style={{ 
              transitionDelay: isOpen ? `${index * 80}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;