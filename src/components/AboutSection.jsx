import React, { useState } from 'react';
import { Award, UserCheck, Heart, Sparkles, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function AboutSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const photoGallery = [
    {
      src: '/assets/dr_supriya_clinical.jpg',
      label: 'Clinical Practice',
      desc: 'Dr. Supriya in her clinical examination suite'
    },
    {
      src: '/assets/dr_supriya_portrait.jpg',
      label: 'Doctor Portrait',
      desc: 'Consulting Cosmetologist & Trichologist'
    },
    {
      src: '/assets/dr_supriya_sitting.jpg',
      label: 'Executive Profile',
      desc: 'Holistic Aesthetic Physician'
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: '2+ Years of Professional Experience',
      desc: 'Active hands-on clinical mastery in advanced cosmetic procedures, trichological diagnostics, and constitutional homeopathic treatment.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Patient Consultations',
      desc: 'Every session begins with comprehensive skin and scalp profiling, lifestyle assessment, and an unhurried one-on-one discussion.'
    },
    {
      icon: Sparkles,
      title: 'Skin & Hair Care Expertise',
      desc: 'Targeted correction for persistent melasma, acne scarring, androgenetic hair loss, telogen effluvium, and dermal barrier dysfunction.'
    },
    {
      icon: Zap,
      title: 'Advanced Aesthetic & Laser Procedures',
      desc: 'Proficiency in cutting-edge laser hair reduction, chemical peeling chemistry, hydra-dermabrasion, and medical skin rejuvenation.'
    },
    {
      icon: Heart,
      title: 'Holistic & Patient-Focused Approach',
      desc: 'Integrating gentle, non-toxic homeopathic constitutional remedies to address underlying hormonal and gut-skin axis imbalances.'
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-28 lg:py-32 bg-[#0B0D13] overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="glow-orb w-64 h-64 sm:w-96 sm:h-96 bg-gold/10 top-20 right-0" />
      <div className="glow-orb w-64 h-64 sm:w-96 sm:h-96 bg-gold-rose/10 bottom-10 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-gold/30 text-gold text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>Dedicated Aesthetic Healthcare</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Meet Your Doctor
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
          <p className="text-xs sm:text-base text-champagne-200/90 font-light leading-relaxed">
            Bridging international aesthetic standards with the gentle, deep healing power of classical homeopathy to enhance your natural beauty from within.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Portrait Gallery */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 max-w-md mx-auto w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/35 bg-gradient-to-b from-[#181C26] to-[#0E1017] shadow-2xl p-2.5 sm:p-3">
              
              {/* Active Image */}
              <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={photoGallery[selectedPhoto].src}
                  alt="Dr. Supriya Bansode"
                  className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
                />
                
                {/* Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75" />

                {/* Verified Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-gold/40 text-gold text-[10px] sm:text-xs font-medium">
                  <Shield className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  Verified Medical Professional
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-2.5 sm:p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-gold/25">
                  <div className="text-xs font-bold text-white">{photoGallery[selectedPhoto].label}</div>
                  <div className="text-[10px] sm:text-[11px] text-champagne-300 font-light">{photoGallery[selectedPhoto].desc}</div>
                </div>
              </div>

              {/* Thumbnail Selector */}
              <div className="grid grid-cols-3 gap-2 mt-2.5 sm:mt-3">
                {photoGallery.map((item, idx) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedPhoto(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] border transition-all duration-300 min-h-[44px] ${
                      selectedPhoto === idx
                        ? 'border-gold shadow-[0_0_12px_rgba(212,175,55,0.4)] scale-100'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={item.src} alt={item.label} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            </div>

            {/* Doctor Credentials Strip */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/70 border border-gold/20 flex flex-wrap gap-1.5 sm:gap-2 justify-center">
              {clinicData.doctor.credentials.map((cred) => (
                <span
                  key={cred}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/[0.04] text-[10px] sm:text-[11px] font-medium text-champagne-200 border border-gold/20"
                >
                  <CheckCircle className="w-3 h-3 text-gold shrink-0" />
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Narrative & The 5 Required Highlights */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            <div className="space-y-2 sm:space-y-3">
              <h3 className="font-serif text-xl sm:text-3xl font-bold text-white leading-snug">
                "True aesthetic enhancement is not about changing who you are, but illuminating your finest self."
              </h3>
              <p className="text-xs sm:text-base text-champagne-200/90 font-light leading-relaxed">
                {clinicData.doctor.bio}
              </p>
            </div>

            {/* The 5 Key Highlights Cards */}
            <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent hover:from-white/[0.07] border border-gold/15 hover:border-gold/45 transition-all duration-300 flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold/10 group-hover:bg-gold-gradient text-gold group-hover:text-slate-950 border border-gold/30 flex items-center justify-center shrink-0 transition-all duration-300">
                      <IconComponent className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold transition-colors tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-champagne-300/90 font-light mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation CTA */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href="#appointment"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-full bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-luxury transition-all duration-300 min-h-[46px]"
              >
                <span>Consult with Dr. Supriya Bansode</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Dr. Supriya Bansode, I would like to schedule a personal skin & hair consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-champagne-200 hover:text-white border border-gold/30 text-xs font-semibold tracking-wider uppercase transition-all duration-300 text-center min-h-[46px] flex items-center justify-center"
              >
                Direct WhatsApp Inquiry
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
