import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FloatingWhatsAppButton() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello Dr. Supriya Bansode, I would like to book an appointment for a consultation. Please share the available timings."
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      {/* Mini Tooltip Callout (Desktop only to prevent mobile clutter) */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#141822]/95 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs shadow-2xl animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with Dr. Supriya on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setTooltipVisible(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.45)] hover:shadow-[0_15px_45px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
        title="Instant WhatsApp Consultation"
        aria-label="Direct WhatsApp Consultation with Dr. Supriya Bansode"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
}
