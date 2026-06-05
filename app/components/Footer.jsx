"use client";
import Link from 'next/link';
import footerData from '../data/footer.json';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const { socialLinks, contactInfo } = footerData;
  const footerReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <footer id="contacts" className="text-white border-t border-white/5 mt-auto pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6">
      <div 
        ref={footerReveal.ref}
        className={`reveal reveal-up max-w-7xl mx-auto ${footerReveal.isVisible ? 'revealed' : ''}`}
      >
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-16 sm:mb-24">
          
          {/* Brand & Status */}
          <div className="sm:col-span-2 space-y-6 sm:space-y-8">
            <Link href="/" className="group flex flex-col leading-none w-fit">
              <div className="flex gap-1.5 items-center">
                <span className="text-accent font-bold text-xl sm:text-2xl tracking-tighter">Satish</span>
                <span className="text-white font-light text-xl sm:text-2xl tracking-tighter">Khanal</span>
              </div>
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mt-2">Systems & Interfaces</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                Open for collaboration <span className="text-white">— Q2 2026</span>
              </p>
            </div>
          </div>

          {/* Technical Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-500">Network</h4>
            <div className="flex flex-row sm:flex-col gap-4 text-xs font-medium">
              {socialLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank"
                  className="hover:text-primary transition-colors uppercase tracking-[0.2em] w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Communication */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-500">Direct</h4>
            <div className="space-y-4 text-xs font-medium">
              {contactInfo.map(info => (
                <div key={info.label} className="group">
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-white group-hover:text-accent transition-colors cursor-pointer tracking-wide break-all sm:break-normal">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-[9px] text-zinc-600 uppercase tracking-[0.3em]">
          <p className="text-center sm:text-left">© {currentYear} Satish Khanal. Built with Next.js 15 & Tailwind.</p>
          <div className="flex gap-6 sm:gap-8">
            <span className="hover:text-white transition-colors cursor-crosshair">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-crosshair">Legal Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;