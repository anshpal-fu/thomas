import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AlternatingBackground from '../components/AlternatingBackground';

export default function About() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-20">
        <AlternatingBackground>
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white" data-bg-section data-bg-color="#000000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About Us</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Learn more about Global Generational Wealth and our mission to transform lives through education and empowerment.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-[var(--gold)]">Our Story</h2>
                  <p className="text-gray-300 mb-4">
                    Global Generational Wealth was founded with a vision to provide real, actionable strategies for financial transformation. 
                    We believe in boots-on-the-ground approaches that deliver tangible results.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Our team of experts brings decades of experience in finance, business, and personal development to help you 
                    achieve your goals and create lasting wealth for future generations.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 p-8 rounded-xl border border-[var(--gold)]/20 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-4 text-[var(--gold)]">Our Approach</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[var(--gold)] mr-2">•</span>
                      <span>Hands-on guidance and mentorship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--gold)] mr-2">•</span>
                      <span>Real-world strategies, no shortcuts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--gold)] mr-2">•</span>
                      <span>Personalized approach to wealth building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[var(--gold)] mr-2">•</span>
                      <span>Focus on long-term generational impact</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center py-12 border-t border-[var(--gold)]/20">
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Future?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands who have already begun their journey toward financial freedom and generational wealth.
                </p>
                <a 
                  href="/services" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-bold hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 uppercase tracking-wider shadow-lg hover:shadow-[var(--gold)]/50"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </AlternatingBackground>
      </main>
      <Footer />
    </div>
  );
}