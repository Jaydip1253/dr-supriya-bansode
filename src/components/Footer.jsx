import React from 'react';
import { Sparkles, MessageCircle, Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Meet Dr. Supriya', href: '#about' },
    { label: 'Specializations', href: '#specializations' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Book Appointment', href: '#appointment' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Cosmetology & Skin Rejuvenation',
    'Trichology & Scalp Vitality',
    'Painless Laser Hair Reduction',
    'Advanced Chemical Peels',
    'Hydra-Dermabrasion Glow Infusion',
    'Constitutional Homeopathic Care',
    'Acne Scar & Melasma Correction'
  ];

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Dr. Supriya Bansode, I would like to book an appointment for a consultation. Please share the available timings."
  )}`;

  return (
    <footer className="relative bg-[#07090D] border-t border-gold/25 pt-14 sm:pt-20 pb-10 sm:pb-12 overflow-hidden text-champagne-200">
      {/* Decorative Aura */}
      <div className="glow-orb w-64 h-64 sm:w-96 sm:h-96 bg-gold/5 top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-gold/15">
          
          {/* Brand & Doctor Bio (5 Cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#1C212D] to-[#0E1118] border border-gold/60 flex items-center justify-center shadow-lg shrink-0">
                <span className="font-serif text-base sm:text-xl font-bold text-gold">SB</span>
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Dr. Supriya Bansode
                </h3>
                <p className="text-[10px] sm:text-xs text-gold/90 font-medium tracking-wider uppercase">
                  Aesthetic &bull; Trichology &bull; Homeopathy
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-champagne-300 font-light leading-relaxed max-w-md">
              Where science meets beauty and holistic healing. Delivering international medical aesthetics, precision laser treatments, and individualized constitutional homeopathic care for radiant confidence.
            </p>

            <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-md"
                title="WhatsApp Consultation"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={clinicData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 border border-pink-500/40 text-pink-400 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all shadow-md"
                title="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href={clinicData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-md"
                title="Professional LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors tracking-wide font-light inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations (2 Cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold">
              Specializations
            </h4>
            <ul className="space-y-2 text-xs">
              {services.map((svc, i) => (
                <li key={i}>
                  <a
                    href="#specializations"
                    className="hover:text-gold transition-colors tracking-wide font-light inline-block py-0.5"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 Cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold">
              Contact &amp; Clinic
            </h4>
            <div className="space-y-2.5 text-xs font-light text-champagne-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{clinicData.contact.clinicAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {clinicData.contact.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>Phone: {clinicData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{clinicData.contact.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-luxury hover:opacity-95 transition-opacity min-h-[42px]"
              >
                <span>Instant WhatsApp Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] sm:text-xs font-light text-champagne-400">
          <div>
            &copy; {new Date().getFullYear()} Dr. Supriya Bansode. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] sm:text-[11px] text-champagne-500">
              Luxury Clinical Care
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 border border-gold/30 text-gold hover:text-white hover:border-gold transition-all min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
