import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { InstagramIcon } from './SocialIcons';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Dr. Supriya Bansode, I would like to book an appointment for a consultation. Please share the available timings."
  )}`;

  return (
    <section id="contact" className="relative py-16 sm:py-28 lg:py-32 bg-[#090B0F] overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb w-64 h-64 sm:w-[600px] sm:h-[600px] bg-gold/10 top-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-gold/30 text-gold text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>Connect &amp; Visit</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Consultation Suites &amp; Inquiries
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
          <p className="text-xs sm:text-base text-champagne-200/90 font-light leading-relaxed">
            Ready to experience tailored aesthetic medicine and holistic restoration? Reach out directly via WhatsApp, call, or schedule your clinic visit.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Doctor Profile & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
            
            {/* Doctor Contact Identity Card */}
            <div className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-b from-[#171B26] to-[#0E1118] border border-gold/30 shadow-2xl relative overflow-hidden">
              <div className="space-y-1.5 sm:space-y-2">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 shrink-0" />
                  Primary Consultation Office
                </span>
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
                  Dr. Supriya Bansode
                </h3>
                <p className="text-xs text-champagne-200 font-light leading-relaxed">
                  {clinicData.doctor.title}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gold/15 space-y-3.5 sm:space-y-4">
                
                {/* Clinic Address */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 text-gold mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-white">Clinic Address</div>
                    <div className="text-xs text-champagne-300 font-light mt-0.5 leading-relaxed">
                      {clinicData.contact.clinicAddress}
                    </div>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-white">WhatsApp Consultation Desk</div>
                    <div className="text-xs text-emerald-400 font-medium mt-0.5">
                      {clinicData.contact.whatsappDisplay}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 text-gold mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-white">Telephone / Desk</div>
                    <div className="text-xs text-champagne-300 font-light mt-0.5">
                      {clinicData.contact.phone}
                    </div>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 text-gold mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs uppercase font-bold tracking-wider text-white">Consulting Hours</div>
                    <div className="text-xs text-champagne-300 font-light mt-0.5">
                      {clinicData.contact.timing}
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Buttons */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gold/15 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={clinicData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-purple-900/60 via-pink-900/60 to-amber-900/60 hover:from-purple-800/80 hover:to-pink-800/80 border border-pink-500/30 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </div>

            </div>

            {/* Privacy & Ethics Note */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-gold/20 flex items-center gap-3">
              <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-gold shrink-0" />
              <div className="text-xs text-champagne-300 font-light leading-relaxed">
                All consultations are confidential, respectful, and adhere to strict medical ethical standards.
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed & Directions */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/30 bg-slate-950 flex-1 shadow-2xl min-h-[280px] sm:min-h-[420px] flex flex-col">
              
              {/* Map Header Bar */}
              <div className="p-3 sm:p-4 bg-slate-900/90 border-b border-gold/20 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <Navigation className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold shrink-0" />
                  <span>Clinic Location &amp; Directions</span>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-gold hover:underline font-medium"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Iframe Embed */}
              <div className="relative flex-1 w-full h-full min-h-[240px] sm:min-h-[350px]">
                <iframe
                  title="Dr. Supriya Bansode Clinic Location Map"
                  src={clinicData.contact.googleMapsEmbedUrl}
                  className="w-full h-full border-0 absolute inset-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Notice on Location Customization */}
              <div className="p-2.5 sm:p-3 bg-slate-950/90 border-t border-gold/15 text-[10px] sm:text-[11px] text-champagne-400 text-center font-light">
                * Location coordinates can be synced precisely to your clinic address once confirmed.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
