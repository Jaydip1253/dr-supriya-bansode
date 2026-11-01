import React from 'react';
import { Award, UserCheck, Sparkles, Cpu, Heart, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function WhyChooseSection() {
  const pillars = [
    {
      icon: Award,
      title: "2+ Years of Professional Experience",
      badge: "Clinical Mastery",
      description: "Dedicated clinical experience in aesthetic medicine, clinical Cosmetology protocols, trichology consultations, and advanced laser treatments."
    },
    {
      icon: UserCheck,
      title: "Personalized Consultations",
      badge: "1-on-1 Attention",
      description: "No rushed visits. Every patient receives a comprehensive diagnostic analysis to formulate an individualized roadmap tailored to their skin type and goals."
    },
    {
      icon: Sparkles,
      title: "Skin & Hair Care Expertise",
      badge: "Specialized Science",
      description: "Deep procedural knowledge in chemical peeling, cellular hydra-facials, follicular scalp restoration, and pigmentation correction."
    },
    {
      icon: Cpu,
      title: "Modern Aesthetic Technology",
      badge: "Advanced Modalities",
      description: "High-grade laser machinery, state-of-the-art contact cooling, and evidence-based clinical formulations ensuring maximum safety and zero compromise."
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      badge: "Root-Cause Care",
      description: "Unlike surface-only treatments, Dr. Supriya balances internal health, hormonal stability, and lifestyle via constitutional homeopathy alongside aesthetics."
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centered Care",
      badge: "Ethical & Empathetic",
      description: "Transparent guidance with realistic outcomes, strict medical confidentiality, and dedicated follow-up care for enduring results."
    }
  ];

  return (
    <section id="why-us" className="relative py-16 sm:py-28 lg:py-32 bg-[#0B0D13] overflow-hidden">
      {/* Background Lighting */}
      <div className="glow-orb w-64 h-64 sm:w-[500px] sm:h-[500px] bg-gold/10 top-1/2 left-0 -translate-y-1/2" />
      <div className="glow-orb w-64 h-64 sm:w-[500px] sm:h-[500px] bg-gold-rose/10 top-1/2 right-0 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-gold/30 text-gold text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>Excellence &amp; Trust</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Choose Dr. Supriya Bansode?
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
          <p className="text-xs sm:text-base text-champagne-200/90 font-light leading-relaxed">
            Where medical precision, international aesthetic protocols, and holistic wellness unite to give you exceptional, natural-looking results.
          </p>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {clinicData.whyChooseUs.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-[#181D28]/80 to-[#0F1218]/90 border border-gold/25 text-center shadow-lg hover:border-gold/50 transition-colors group"
            >
              <div className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-gold group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm font-bold text-white uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="mt-1 text-[10px] sm:text-xs text-champagne-300/80 font-light leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#161A24]/90 to-[#0F1217]/95 border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury-hover"
              >
                {/* Pill Badge */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gold/10 group-hover:bg-gold-gradient text-gold group-hover:text-slate-950 border border-gold/30 flex items-center justify-center transition-all duration-300 shrink-0">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-950 border border-gold/25 text-champagne-200">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-xl font-bold text-white group-hover:text-gold transition-colors tracking-wide">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-champagne-200/80 font-light leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gold/15 flex items-center gap-1.5 text-xs text-gold/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Clinical Gold Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
