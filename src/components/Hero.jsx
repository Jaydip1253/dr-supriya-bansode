import React from 'react';
import { Calendar, ArrowRight, Sparkles, Shield, Stethoscope, CheckCircle2 } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import Doctor3DAvatar from './Doctor3DAvatar';
import { clinicData } from '../data/clinicData';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-36 overflow-hidden bg-gold-grid">
      {/* Interactive 3D Three.js Scene in Background */}
      <Hero3DCanvas />

      {/* Atmospheric Radial Lighting Gradients */}
      <div className="glow-orb w-64 h-64 sm:w-[500px] sm:h-[500px] bg-gold/15 top-10 -left-20 sm:-left-40" />
      <div className="glow-orb w-64 h-64 sm:w-[600px] sm:h-[600px] bg-gold-rose/10 bottom-0 -right-20 sm:-right-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Doctor Branding & Narrative */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* Top Experience & Credential Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/85 backdrop-blur-md border border-gold/40 shadow-luxury">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping shrink-0" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-gold font-semibold">
                Experience: {clinicData.doctor.experienceText}
              </span>
            </div>

            {/* Doctor Name & Titles */}
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-gold tracking-widest uppercase text-xs sm:text-sm font-semibold flex items-center justify-center lg:justify-start gap-1.5">
                <Stethoscope className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold shrink-0" />
                <span>Dr. Supriya Bansode</span>
              </h2>
              <p className="text-[11px] sm:text-sm font-medium text-champagne-200/90 tracking-wide">
                Cosmetologist | Trichologist | Laser Expert | Homeopathic Physician
              </p>
            </div>

            {/* Main Required Heading */}
            <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.2] sm:leading-[1.15] tracking-tight">
              Enhancing Your <span className="text-gold-gradient italic font-normal">Natural Beauty,</span> Restoring Your{' '}
              <span className="text-rose-gold-gradient">Confidence.</span>
            </h1>

            {/* Philosophy Tagline */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] backdrop-blur-md border-l-2 border-gold/70 border-y border-r border-white/5 max-w-xl mx-auto lg:mx-0 text-left">
              <p className="font-serif italic text-base sm:text-xl text-champagne-100 font-normal">
                "{clinicData.doctor.tagline}."
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-champagne-300 font-light leading-relaxed">
                Personalized aesthetic medicine paired with root-cause homeopathic science for lasting radiance from within.
              </p>
            </div>

            {/* Required Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('appointment')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gold-gradient text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('specializations')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-champagne-100 hover:text-white border border-gold/40 hover:border-gold font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Explore My Services</span>
              </button>
            </div>

            {/* Clinical Value Checkpoints */}
            <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-gold/20 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold text-white">US-FDA Grade</div>
                  <div className="text-[9px] sm:text-[11px] text-champagne-400">Laser Protocols</div>
                </div>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold text-white">1-on-1 Care</div>
                  <div className="text-[9px] sm:text-[11px] text-champagne-400">Doctor-Led Visits</div>
                </div>
              </div>
              <div className="flex items-start gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-xs font-semibold text-white">Holistic Care</div>
                  <div className="text-[9px] sm:text-[11px] text-champagne-400">Zero Side Effects</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Doctor Avatar & Interactive Display */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <Doctor3DAvatar />
          </div>

        </div>
      </div>
    </section>
  );
}
