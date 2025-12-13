import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Vision from '../components/Vision';
import Values from '../components/Values';
import CTA from '../components/CTA';
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
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
