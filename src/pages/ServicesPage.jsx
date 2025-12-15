import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import CTA from '../components/CTA';
import ScrollToTop from '../components/ScrollToTop';

export default function ServicesPage() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-20">
        <Services />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
