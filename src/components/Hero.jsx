import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 px-4 sm:px-6 bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-l from-yellow-500/20 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-fadeInUp">
            <span className="block text-white">GLOBAL</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              GENERATIONAL
            </span>
            <span className="block text-white">WEALTH</span>
          </h1>

          {/* Tagline */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-yellow-400 tracking-[0.3em]">
              REAL. RELIABLE. READY.
            </p>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp px-4" style={{animationDelay: '0.5s'}}>
            Leave stains on brains and footprints on this earth—awaken to your potential, 
            align with your vision, and walk step-by-step into the reality you were meant to create.
          </p>

          {/* Mission
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 border border-yellow-400/40 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 backdrop-blur-sm max-w-2xl mx-auto rounded-lg animate-fadeInUp hover:border-yellow-400/60 transition-all duration-500" style={{animationDelay: '0.7s'}}>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-yellow-400 mb-2 sm:mb-3">The Mission</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-3 sm:mb-4">INVEST IN YOURSELF</h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              When you invest in yourself—when you put your own credits on the line—
              the exchange hits different. You become accountable. You become a doer, not just a dreamer.
            </p>
          </div> */}

          {/* CTA Button */}
          <div className="mt-8 sm:mt-12 animate-fadeInUp" style={{animationDelay: '0.9s'}}>
            <a
              href="#services"
              className="group relative inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black font-bold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 overflow-hidden rounded-lg"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}