import React, { useState } from 'react';
import { Sparkles, Activity, Zap, HeartPulse, Check, ArrowRight, X, Calendar, MessageCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function SpecializationsSection({ onSelectServiceForBooking }) {
  const [activeModal, setActiveModal] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />;
      case 'Activity':
        return <Activity className="w-5 sm:w-6 h-5 sm:h-6" />;
      case 'Zap':
        return <Zap className="w-5 sm:w-6 h-5 sm:h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 sm:w-6 h-5 sm:h-6" />;
      default:
        return <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />;
    }
  };

  const serviceImages = {
    cosmetology: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    trichology: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    lasers: 'https://images.unsplash.com/photo-1512290900672-1f55b9e078e8?auto=format&fit=crop&w=800&q=80',
    homeopathy: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  };

  const handleBookService = (service) => {
    setActiveModal(null);
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(service.title);
    }
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppServiceInquiry = (service) => {
    const message = `Hello Dr. Supriya Bansode, I am interested in inquiring about your *${service.title}* treatments (${service.subtitle}). Please guide me on consultation availability and procedure details.`;
    const url = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="specializations" className="relative py-16 sm:py-28 lg:py-32 bg-[#090B10] overflow-hidden">
      {/* Background Ambience */}
      <div className="glow-orb w-64 h-64 sm:w-[600px] sm:h-[600px] bg-gold/5 top-1/3 left-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-gold/30 text-gold text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Treatments &amp; Procedures</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            My Specializations
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
          <p className="text-xs sm:text-base text-champagne-200/90 font-light leading-relaxed">
            Four specialized medical pillars delivered with bespoke doctor-led precision, high-tech modalities, and constitutional care.
          </p>
        </div>

        {/* 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {clinicData.specializations.map((service) => {
            const img = serviceImages[service.id];
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#171B24] to-[#0E1016] border border-gold/25 hover:border-gold/60 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-10px_rgba(212,175,55,0.28)]"
              >
                {/* Gold Shimmer Edge on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl sm:rounded-t-3xl" />

                <div className="space-y-3.5 sm:space-y-4">
                  {/* Image with Vignette */}
                  <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-white/10 group-hover:border-gold/30 transition-colors">
                    <img
                      src={img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-gold/30 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-gold">
                      {service.badge}
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 pt-1">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-all duration-300 shrink-0"
                      style={{
                        backgroundColor: `${service.accent}15`,
                        borderColor: `${service.accent}50`,
                        color: service.accent
                      }}
                    >
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-champagne-300/80 font-light">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-champagne-200/90 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Procedures Bullet Points */}
                  <div className="pt-2 border-t border-gold/15 space-y-1.5 sm:space-y-2">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-champagne-100">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span className="font-light">{detail}</span>
                      </div>
                    ))}
                    {service.details.length > 3 && (
                      <div className="text-[10px] sm:text-[11px] text-gold/80 italic pl-5">
                        +{service.details.length - 3} more tailored protocols
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-4 border-t border-gold/10 space-y-2">
                  <button
                    onClick={() => setActiveModal(service)}
                    className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-gold/15 border border-gold/30 hover:border-gold/60 text-champagne-100 hover:text-gold text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 min-h-[42px]"
                  >
                    <span>View Full Protocols</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  
                  <button
                    onClick={() => handleBookService(service)}
                    className="w-full py-2.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-luxury min-h-[42px]"
                  >
                    Book This Care
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal (Fully Responsive on Mobile) */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-[#141822] border border-gold/40 p-5 sm:p-8 shadow-2xl max-h-[88vh] overflow-y-auto">
            {/* Close Button with good touch area */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-slate-900 border border-gold/30 text-champagne-200 hover:text-white min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gold" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 pr-10">
              <div
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border shrink-0"
                style={{
                  backgroundColor: `${activeModal.accent}20`,
                  borderColor: `${activeModal.accent}60`,
                  color: activeModal.accent
                }}
              >
                {getIcon(activeModal.icon)}
              </div>
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold font-semibold">
                  {activeModal.badge}
                </span>
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
                  {activeModal.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-champagne-300">{activeModal.subtitle}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-gold mb-1.5 sm:mb-2">
                  Clinical Overview
                </h4>
                <p className="text-xs sm:text-sm text-champagne-100 font-light leading-relaxed">
                  {activeModal.shortDesc}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-gold mb-2 sm:mb-3">
                  Comprehensive Treatment Protocols
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {activeModal.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-gold/20 flex items-center gap-2"
                    >
                      <Check className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold shrink-0" />
                      <span className="text-[11px] sm:text-xs text-champagne-100 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-gold/20">
                <div className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span>Clinical Technology &amp; Delivery</span>
                </div>
                <p className="text-[11px] sm:text-xs text-champagne-300 font-light">
                  {activeModal.techSpecs}
                </p>
              </div>

              {/* Modal CTAs */}
              <div className="pt-3 sm:pt-4 border-t border-gold/20 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleWhatsAppServiceInquiry(activeModal)}
                  className="flex-1 py-3 rounded-full border border-emerald-500/50 bg-emerald-950/40 text-emerald-300 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Inquire on WhatsApp</span>
                </button>

                <button
                  onClick={() => handleBookService(activeModal)}
                  className="flex-1 py-3 rounded-full bg-gold-gradient text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-luxury min-h-[44px]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Appointment</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
