import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SpecializationsSection from './components/SpecializationsSection';
import WhyChooseSection from './components/WhyChooseSection';
import AppointmentBookingSection from './components/AppointmentBookingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [preselectedService, setPreselectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
  };

  const handleOpenAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0A0C11] text-[#F5EFE6] selection:bg-gold/30 selection:text-white">
      {/* Initial Luxury Brand Loading Animation */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Persistent Navigation */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* Main Sections */}
      <main>
        {/* 1 & 2. Hero Section */}
        <Hero />

        {/* 3. About Section: Meet Your Doctor */}
        <AboutSection />

        {/* 4. My Specializations */}
        <SpecializationsSection onSelectServiceForBooking={handleSelectService} />

        {/* 5. Why Choose Dr. Supriya Bansode? */}
        <WhyChooseSection />

        {/* 6. Appointment Booking Section */}
        <AppointmentBookingSection preselectedService={preselectedService} />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Channel */}
      <FloatingWhatsAppButton />
    </div>
  );
}

