import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import Values from '../components/Values';
import CTA from '../components/CTA';
import ScrollToTop from '../components/ScrollToTop';
import AlternatingBackground from '../components/AlternatingBackground';

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-20">
        <AlternatingBackground>
          <Hero />
          <Mission />
          <Vision />
          <Values />
          <CTA />
        </AlternatingBackground>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
