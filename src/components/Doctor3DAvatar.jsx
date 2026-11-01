import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ShieldCheck, Stethoscope, Award, HeartHandshake } from 'lucide-react';

export default function Doctor3DAvatar() {
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    glareX: 50,
    glareY: 50,
    glareOpacity: 0
  });

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      glareX,
      glareY,
      glareOpacity: 0.3
    });
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current || !e.touches[0]) return;
    const touch = e.touches[0];
    const rect = cardRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      glareOpacity: 0.25
    });
  };

  const handleLeave = () => {
    setIsHovered(false);
    setTransformStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      glareX: 50,
      glareY: 50,
      glareOpacity: 0
    });
  };

  return (
    <div className="relative w-full max-w-[310px] sm:max-w-sm lg:max-w-md mx-auto select-none px-2 sm:px-0">
      {/* Decorative Golden Aura Glow */}
      <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-gold/25 via-gold-rose/20 to-gold/30 rounded-3xl blur-xl sm:blur-2xl opacity-60 animate-pulse-slow -z-10" />

      {/* Orbiting Golden Molecular Ring (contained for mobile) */}
      <div className="absolute -inset-3 sm:-inset-6 border border-gold/15 rounded-full pointer-events-none animate-spin" style={{ animationDuration: '40s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gold shadow-[0_0_12px_#D4AF37]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-gold-rose shadow-[0_0_10px_#DDA094]" />
      </div>

      {/* Main 3D Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleLeave}
        onTouchEnd={handleLeave}
        style={{
          transform: transformStyle.transform,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d'
        }}
        className="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#1C202A]/90 to-[#0F1218]/95 border border-gold/35 shadow-[0_15px_45px_-10px_rgba(212,175,55,0.25)] backdrop-blur-xl group cursor-pointer"
      >
        {/* Specular Glare Layer */}
        <div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${transformStyle.glareX}% ${transformStyle.glareY}%, rgba(255, 240, 200, ${transformStyle.glareOpacity}) 0%, transparent 60%)`
          }}
        />

        {/* Outer Gold Filigree Border Accent */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] bg-slate-950 border border-gold/40">
          <img
            src="/assets/dr_supriya_clinical.jpg"
            alt="Dr. Supriya Bansode - Authentic Clinical Portrait"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />

          {/* Luxury Vignette & Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

          {/* Top Left Floating Tag */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-gold/40 text-gold text-[10px] sm:text-xs font-medium tracking-wider shadow-lg">
            <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold shrink-0" />
            <span>Verified Physician</span>
          </div>

          {/* Top Right Clinic Verified Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-gold/35 text-gold text-[10px] sm:text-[11px] font-semibold">
            <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-gold" />
            <span>Official Portrait</span>
          </div>

          {/* Bottom Card Content Info Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20 flex flex-col justify-end text-left">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 text-gold text-[10px] sm:text-xs tracking-widest uppercase font-semibold mb-0.5 sm:mb-1">
              <Stethoscope className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span>Medical Aesthetic Practice</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
              Dr. Supriya Bansode
            </h3>
            <p className="text-[11px] sm:text-xs text-champagne-200/90 font-light mt-0.5">
              Cosmetology • Trichology • Lasers • Homeopathy
            </p>

            <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-gold/20 flex items-center justify-between text-[11px] sm:text-xs text-champagne-300">
              <span className="flex items-center gap-1">
                <Award className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold" />
                2+ Years Practice
              </span>
              <span className="text-gold/90 font-medium text-[10px] sm:text-[11px]">
                Clinical Suite
              </span>
            </div>
          </div>
        </div>

        {/* Floating Mini 3D Badge (Top Left Corner Offset) */}
        <div
          className="absolute -top-2.5 -left-2.5 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#141822]/95 backdrop-blur-xl border border-gold/40 shadow-xl z-30 transition-transform duration-300 group-hover:-translate-y-1"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold border border-gold/40">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-white uppercase tracking-wider">Aesthetic &amp; Laser</div>
            <div className="text-[9px] text-champagne-300 font-light">Custom Protocols</div>
          </div>
        </div>

        {/* Floating Mini 3D Badge (Bottom Right Corner Offset) */}
        <div
          className="absolute -bottom-2.5 -right-2.5 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-[#141822]/95 backdrop-blur-xl border border-gold/40 shadow-xl z-30 transition-transform duration-300 group-hover:translate-y-1"
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="w-6 h-6 rounded-full bg-gold-rose/25 flex items-center justify-center text-gold-rose border border-gold-rose/40">
            <HeartHandshake className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-white uppercase tracking-wider">Holistic Healing</div>
            <div className="text-[9px] text-champagne-300 font-light">Constitutional Care</div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="mt-2.5 text-center text-[11px] text-champagne-400/80 font-light">
        Interactive 3D depth &amp; lighting responds to touch &amp; motion
      </p>
    </div>
  );
}
