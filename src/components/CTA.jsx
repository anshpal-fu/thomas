import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function CTA() {
  const { theme } = useTheme();
  
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-yellow-100 text-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-yellow-200/15 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-yellow-200/15 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6">
            READY TO TRANSFORM?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-medium mb-12">
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
              Contact Thomas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}