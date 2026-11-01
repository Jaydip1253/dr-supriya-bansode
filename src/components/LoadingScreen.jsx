import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 700);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090D] transition-opacity duration-700 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Outer Orbiting Golden Rings */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" />
          <div
            className="absolute -inset-2 rounded-full border-t-2 border-r-2 border-gold animate-spin"
            style={{ animationDuration: '2s' }}
          />
          <div
            className="absolute inset-1 rounded-full border-b-2 border-l-2 border-gold-rose/70 animate-spin"
            style={{ animationDuration: '3s', animationDirection: 'reverse' }}
          />

          {/* Central Monogram */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1C212E] to-[#0A0D14] border border-gold/70 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.35)]">
            <span className="font-serif text-3xl font-bold text-gold tracking-tight">SB</span>
          </div>
        </div>

        {/* Doctor Name & Subtitle */}
        <div className="mt-8 text-center space-y-1.5">
          <h2 className="font-serif text-2xl font-bold tracking-widest text-white uppercase">
            Dr. Supriya Bansode
          </h2>
          <p className="text-xs uppercase tracking-widest text-gold font-medium">
            Cosmetology &bull; Trichology &bull; Lasers &bull; Homeopathy
          </p>
        </div>

        {/* Subtle Progress Bar */}
        <div className="mt-6 w-48 h-0.5 bg-slate-900 rounded-full overflow-hidden">
          <div className="h-full bg-gold-gradient animate-shimmer" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
}

