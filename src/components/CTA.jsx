import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function CTA() {
  const { theme } = useTheme();
  
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black relative overflow-hidden rounded-3xl">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 right-1/3 w-[400px] h-[400px] bg-[var(--gold-light)]/35 via-transparent to-[var(--gold)]/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/5 left-1/3 w-[500px] h-[500px] bg-[var(--gold-dark)]/35 via-transparent to-[var(--gold-light)]/25 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-[350px] h-[350px] bg-[var(--gold)]/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-[var(--gold-dark)]/25 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-4">
            READY TO TRANSFORM?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            Join the movement toward global generational wealth
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#services" 
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Services
            </a>
            <a 
              href="mailto:thomasjohnhong@globalgenerationalwealth.net" 
              className="px-8 py-4 bg-gradient-to-r from-gray-800 to-black text-white font-bold text-lg uppercase tracking-wider transition-all duration-300 hover:from-black hover:to-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}