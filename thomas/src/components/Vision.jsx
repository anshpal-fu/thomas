import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Vision() {
  const { theme } = useTheme();
  
  return (
    <section id="vision" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-yellow-600/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 relative inline-block">
            <span className="relative z-10">OUR PURPOSE</span>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500/30 to-transparent transform -skew-x-12"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building global generational wealth through transformational education and empowerment
          </p>
        </div>

        {/* Vision Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">TRANSFORMATIVE EDUCATION</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe in real, boots-on-the-ground strategies that produce tangible results. Our programs are designed to awaken your potential and align you with your highest vision.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Through hands-on guidance and mentorship, we provide the tools and frameworks necessary to build lasting wealth and impact across generations.
            </p>
          </div>
          <div className="relative group">
            <div className="aspect-video border-2 border-yellow-400/50 rounded-xl overflow-hidden shadow-2xl relative">
              <img 
                src="/city-committed-education-collage-concept.jpg"
                alt="City committed education collage concept"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="relative bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)] border-2 border-yellow-500/50 rounded-2xl p-8 mb-16 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)] rounded-2xl opacity-10"></div>
          <div className="relative z-10">
            <blockquote className="text-2xl sm:text-3xl font-bold text-center italic leading-relaxed text-black">
              "We're not just teaching skills — we're transforming mindsets, building character, and creating leaders who will leave stains on brains and footprints on this earth."
            </blockquote>
            <cite className="block text-right mt-6 text-black font-bold">— Thomas John Hong</cite>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {
            [
              { title: "REAL", desc: "Authentic strategies that work in the real world" },
              { title: "RELIABLE", desc: "Consistent results backed by proven methodologies" },
              { title: "READY", desc: "Prepared for any challenge or opportunity" }
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-b from-gray-800/80 to-black/80 backdrop-blur-sm border border-yellow-400/40 rounded-2xl p-6 text-center transition-all duration-500 hover:border-yellow-400/80 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <h4 className="text-2xl font-black text-white">{item.title}</h4>
                </div>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}