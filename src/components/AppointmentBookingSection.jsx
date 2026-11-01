import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Clock, ShieldCheck, CheckCircle2, Phone, Sparkles, Send } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function AppointmentBookingSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Cosmetology (Skin Health & Rejuvenation)',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService
      }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const constructWhatsAppUrl = (includeDetails = true) => {
    const rawNumber = clinicData.contact.whatsappNumber.replace(/[^0-9]/g, '');
    let text = "Hello Dr. Supriya Bansode, I would like to book an appointment for a consultation. Please share the available timings.";

    if (includeDetails && (formData.name || formData.phone || formData.message)) {
      text = `Hello Dr. Supriya Bansode, I would like to book an appointment for a consultation. Please share the available timings.\n\n*Consultation Request Details:*\n• *Patient Name:* ${formData.name || 'Not specified'}\n• *Mobile Number:* ${formData.phone || 'Not specified'}\n• *Preferred Service:* ${formData.service}\n• *Preferred Date:* ${formData.date || 'Flexible'}\n• *Preferred Slot:* ${formData.timeSlot}\n• *Chief Concern / Note:* ${formData.message || 'None'}`;
    }

    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const url = constructWhatsAppUrl(true);
    window.open(url, '_blank');
  };

  const handleQuickWhatsApp = () => {
    const rawNumber = clinicData.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const text = "Hello Dr. Supriya Bansode, I would like to book an appointment for a consultation. Please share the available timings.";
    const url = `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="appointment" className="relative py-16 sm:py-28 lg:py-32 bg-[#0C0E14] overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb w-64 h-64 sm:w-[500px] sm:h-[500px] bg-gold/10 top-0 right-5" />
      <div className="glow-orb w-64 h-64 sm:w-[500px] sm:h-[500px] bg-emerald-500/5 bottom-0 left-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-gold/30 text-gold text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>Consultation Scheduling</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Your Beauty &amp; Wellness Journey Starts Here
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
          <p className="text-xs sm:text-base text-champagne-200/90 font-light leading-relaxed">
            Take the first step toward revitalized skin, vibrant hair, and holistic wellness. Schedule your confidential consultation with Dr. Supriya Bansode.
          </p>
        </div>

        {/* Booking Card & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Direct WhatsApp Priority Booking Card */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-b from-[#171D28] to-[#0E121A] border border-gold/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Instant Priority WhatsApp Channel</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                Prefer Instant Booking via WhatsApp?
              </h3>

              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-champagne-200/80 font-light leading-relaxed">
                Connect directly with Dr. Supriya Bansode's clinical desk. Tap the button below to launch WhatsApp with our pre-filled consultation request.
              </p>

              {/* Pre-fill Message Display */}
              <div className="mt-3.5 sm:mt-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-950/80 border border-emerald-500/25">
                <div className="text-[10px] text-emerald-400 uppercase font-semibold tracking-wider mb-1">
                  Pre-filled Message:
                </div>
                <p className="text-xs italic text-champagne-100">
                  "Hello Dr. Supriya Bansode, I would like to book an appointment for a consultation. Please share the available timings."
                </p>
              </div>

              {/* The Prominent WhatsApp Button */}
              <button
                onClick={handleQuickWhatsApp}
                className="mt-5 sm:mt-6 w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_10px_30px_-5px_rgba(16,185,129,0.35)] transition-all duration-300 flex items-center justify-center gap-2.5 min-h-[48px] group"
              >
                <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white transition-transform group-hover:scale-110 shrink-0" />
                <span>Book via WhatsApp Now</span>
              </button>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gold/15 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-champagne-200">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <span>Consultation Timings: 10:00 AM – 08:00 PM</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-champagne-200">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>Confidential &amp; Discreet Medical Records</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-champagne-200">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>Direct Desk: {clinicData.contact.whatsappDisplay}</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Notice */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-gold/20 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div className="text-xs text-champagne-300 font-light leading-relaxed">
                <strong className="text-white font-medium">Personalized Care :</strong> Every initial consultation includes a comprehensive scalp/skin examination .
              </div>
            </div>
          </div>

          {/* Right Column: Complete Appointment Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 bg-gradient-to-b from-[#161B26] to-[#0E1017] border border-gold/30 shadow-2xl">
              
              <div className="flex items-center justify-between mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-gold/15">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Schedule Your Consultation
                  </h3>
                  <p className="text-xs text-champagne-300 font-light">
                    Complete your details below and confirm via WhatsApp
                  </p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold">
                  Step 1 of 1
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Patient Name */}
                <div>
                  <label className="block text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-champagne-200 mb-1">
                    Patient Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-slate-950/80 border border-gold/25 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-white text-base sm:text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>

                {/* Mobile Number & Preferred Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-champagne-200 mb-1">
                      Mobile Number <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 8390682803"
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-slate-950/80 border border-gold/25 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-white text-base sm:text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-champagne-200 mb-1">
                      Preferred Service <span className="text-gold">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-slate-950/80 border border-gold/25 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-white text-base sm:text-sm transition-colors"
                    >
                      <option value="Cosmetology (Skin Health & Rejuvenation)">Cosmetology (Skin Health &amp; Rejuvenation)</option>
                      <option value="Trichology (Hair Fall & Scalp Health)">Trichology (Hair Fall &amp; Scalp Health)</option>
                      <option value="Laser Treatments (Hair Reduction / Resurfacing)">Laser Treatments (Hair Reduction / Resurfacing)</option>
                      <option value="Homeopathic Medicine (Holistic & Constitutional)">Homeopathic Medicine (Holistic &amp; Constitutional)</option>
                      <option value="Comprehensive Dual-Approach Consultation">Comprehensive Dual-Approach Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-champagne-200 mb-1">
                      Preferred Date <span className="text-gold">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-slate-950/80 border border-gold/25 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-white text-base sm:text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-champagne-200 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-slate-950/80 border border-gold/25 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-white text-base sm:text-sm transition-colors"
                    >
                      <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                      <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message / Chief Concern */}
                <div>
                  <label className="block text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-champagne-200 mb-1">
                    Chief Concern or Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your skin/hair concerns, past treatments, or questions..."
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-slate-950/80 border border-gold/25 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-white text-base sm:text-sm placeholder:text-slate-600 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-full bg-gold-gradient text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] group"
                  >
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    <span>Proceed &amp; Book via WhatsApp</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Redirecting to WhatsApp with your details. Dr. Supriya will respond with confirmation timings shortly.</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
