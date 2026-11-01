import React from 'react';
import { Star, Quote, Sparkles, MessageSquareHeart, CheckCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#0B0D13] overflow-hidden">
      {/* Background Glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-gold/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase">
            <MessageSquareHeart className="w-3.5 h-3.5 text-gold" />
            <span>Patient Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Reflections of Care &amp; Confidence
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-champagne-200/90 font-light leading-relaxed">
            Read representative feedback illustrating our clinical dedication, gentle bedside manner, and holistic medical aesthetic outcomes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinicData.testimonials.map((t) => (
            <div
              key={t.id}
              className="relative rounded-3xl p-8 bg-gradient-to-b from-[#171B25] to-[#0E1117] border border-gold/25 hover:border-gold/50 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-luxury flex flex-col justify-between group"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-gold/30 group-hover:text-gold/60 transition-colors" />
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-champagne-100/90 font-light italic leading-relaxed mb-6">
                "{t.quote}"
              </p>

              {/* Bottom Metadata */}
              <div className="pt-4 border-t border-gold/15 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white tracking-wide">
                    {t.patientTag}
                  </span>
                  <span className="text-[11px] text-champagne-400 font-light">
                    {t.date}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/20 text-[10px] text-gold font-medium">
                  <CheckCircle className="w-3 h-3 text-gold" />
                  <span>{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Testimonials */}
        <div className="mt-10 text-center">
          <p className="text-[11px] text-champagne-400/80 font-light italic">
            * Note: These are representative placeholder testimonials created for portfolio demonstration and can be updated with verified patient feedback as received.
          </p>
        </div>

      </div>
    </section>
  );
}

