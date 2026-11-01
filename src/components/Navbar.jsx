import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Meet Dr. Supriya', href: '#about' },
    { label: 'Specializations', href: '#specializations' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Dr. Supriya Bansode, I would like to inquire about booking a consultation."
  )}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0E14]/95 backdrop-blur-xl border-b border-gold/25 py-2.5 sm:py-3.5 shadow-luxury'
            : 'bg-[#0B0E14]/60 backdrop-blur-md sm:bg-transparent py-3 sm:py-5 border-b border-gold/10 sm:border-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <a
              href="#home"
              className="flex items-center gap-2.5 sm:gap-3 group text-left"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#1C212D] to-[#0E1118] border border-gold/50 flex items-center justify-center shadow-md group-hover:border-gold transition-colors duration-300 shrink-0">
                <span className="font-serif text-sm sm:text-lg font-bold text-gold tracking-tight">SB</span>
                <span className="absolute -inset-0.5 rounded-full border border-gold/30 animate-pulse-slow pointer-events-none" />
              </div>
              <div className="min-w-0">
                <span className="block font-serif text-base sm:text-xl font-bold tracking-wide text-white group-hover:text-gold-shimmer transition-colors truncate">
                  Dr. Supriya Bansode
                </span>
                <span className="block text-[9px] sm:text-[11px] text-champagne-300 font-light tracking-wider uppercase truncate">
                  Aesthetics &bull; Trichology &bull; Homeopathy
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-medium tracking-wider uppercase text-champagne-100 hover:text-gold transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* WhatsApp Quick Chat */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40 hover:text-white transition-all text-xs font-semibold tracking-wide shadow-sm"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Book Appointment CTA */}
              <button
                onClick={() => {
                  if (onOpenAppointment) onOpenAppointment();
                  else handleNavClick('#appointment');
                }}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-medium transition-all group"
              >
                <span className="w-full h-full bg-gold-gradient absolute inset-0 group-hover:opacity-90 transition-opacity"></span>
                <span className="relative px-5 py-2 transition-all ease-out bg-[#0E1118] rounded-full group-hover:bg-opacity-0 text-white group-hover:text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gold group-hover:text-slate-950 transition-colors" />
                  <span>Book Appointment</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Action Row */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400"
                aria-label="Direct WhatsApp message"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => handleNavClick('#appointment')}
                className="px-3 py-1.5 rounded-full bg-gold-gradient text-slate-950 font-bold text-[10px] uppercase tracking-wider"
              >
                Book
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-champagne-200 hover:text-white bg-slate-900/80 border border-gold/30"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5 text-gold" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between bg-[#0A0D14]/98 backdrop-blur-2xl pt-20 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-1 divide-y divide-gold/10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left text-base font-medium tracking-wide uppercase text-champagne-100 hover:text-gold py-3.5 flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-gold/60 text-xs">&rarr;</span>
              </button>
            ))}
          </div>

          <div className="pt-6 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full border border-emerald-500/50 bg-emerald-950/50 text-emerald-300 font-bold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp (+91 83906 82803)</span>
            </a>

            <button
              onClick={() => handleNavClick('#appointment')}
              className="w-full py-3.5 rounded-full bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
