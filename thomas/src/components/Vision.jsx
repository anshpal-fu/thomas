import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Vision() {
  const { theme } = useTheme();
  
  return (
    <section id="vision" className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-500/15 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-500/15 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6">
            OUR PURPOSE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building global generational wealth through transformational education and empowerment
          </p>
        </div>

        {/* Vision Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">TRANSFORMATIVE EDUCATION</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are passionate on supporting our clients secure business funding with NO personal guarantees. Global Generational Wealth is a team of professionals who help people with credit issuer & lender approval requirements. Instead of running in a loop with manual underwriting reviews we help you get started with the right structure for generational success! 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real Reliable & Ready, worthy of credits Profile! 
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video border border-yellow-400/50 rounded-lg flex items-center justify-center p-8 overflow-hidden">
              {/* Background image */}
              <img 
                src="/city-committed-education-collage-concept.jpg"
                alt="City committed education collage concept"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] border border-yellow-400/50 rounded-xl p-8 mb-16 animate-fadeInUp text-black" style={{animationDelay: '0.4s'}}>
          <blockquote className="text-2xl sm:text-3xl font-bold text-center italic leading-relaxed">
            "We're not just teaching skills — we're transforming mindsets, building character, and creating leaders who will leave stains on brains and footprints on this earth."
          </blockquote>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          {[
            { title: "REAL", desc: "Authentic strategies that work in the real world" },
            { title: "RELIABLE", desc: "Consistent results backed by proven methodologies" },
            { title: "READY", desc: "Prepared for any challenge or opportunity" }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-900 to-black border border-yellow-400/40 rounded-lg p-6 text-center hover:border-yellow-400/70 transition-all duration-300">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-3">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}