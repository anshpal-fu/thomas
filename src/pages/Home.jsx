import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import Values from '../components/Values';
import CTA from '../components/CTA';
import Services from '../components/Services';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Mission />
        <Vision />
        <Values />
        <Services />
        {/* Thin horizontal divider between sections */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}