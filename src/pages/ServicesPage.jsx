import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import CTA from '../components/CTA';
import ScrollToTop from '../components/ScrollToTop';
import AlternatingBackground from '../components/AlternatingBackground';

export default function ServicesPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-20">
        <AlternatingBackground>
          <Services />
          <CTA />
        </AlternatingBackground>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
