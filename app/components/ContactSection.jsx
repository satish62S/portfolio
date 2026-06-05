"use client";
import React, { useState } from "react";
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactSection = () => {
  const headerReveal = useScrollReveal({ threshold: 0.2 });
  const formReveal = useScrollReveal({ threshold: 0.15 });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 bg-slate-gray px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left Side: Info */}
        <div 
          ref={headerReveal.ref}
          className={`reveal reveal-left space-y-6 sm:space-y-8 ${headerReveal.isVisible ? 'revealed' : ''}`}
        >
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em]">Contact Me</h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Let's build something <br />
              <span className="text-primary italic">extraordinary.</span>
            </h3>
            <p className="text-slate-400 text-base sm:text-lg max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas or original concepts.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              <div className="min-w-0">
                <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Email</p>
                <p className="text-white font-medium text-sm sm:text-base truncate">khanalsatish59@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent border border-accent/20 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Location</p>
                <p className="text-white font-medium text-sm sm:text-base">Butwal, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div 
          ref={formReveal.ref}
          className={`reveal reveal-right bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl ${formReveal.isVisible ? 'revealed' : ''}`}
        >
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-700"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-700"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm sm:text-base focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-700 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/80 disabled:bg-primary/50 disabled:cursor-not-allowed text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] cursor-pointer text-sm sm:text-base flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : isSubmitted ? (
                'Message Sent Successfully!'
              ) : (
                'Send Message'
              )}
            </button>
            {isSubmitted && (
              <p className="text-green-400 text-sm text-center mt-2 font-medium">Thank you! Your message has been received.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
