import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function CTA() {
  const { theme } = useTheme();
  
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-yellow-500/15 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-yellow-500/15 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Main CTA */}
        <div className="animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6 sm:mb-8 tracking-tight">
            READY TO TRANSFORM?
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the movement to build global generational wealth
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-12">
            <a 
              href="#services" 
              className="group relative px-8 sm:px-12 py-4 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black font-bold text-lg sm:text-xl uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 overflow-hidden rounded-lg"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </a>
            
            <a 
              href="mailto:thomasjohnhong@globalgenerationalwealth.net" 
              className="group px-8 sm:px-12 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg sm:text-xl uppercase tracking-wider transition-all duration-300 hover:bg-yellow-400 hover:text-black rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 sm:mt-24 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-400/50 rounded-2xl">
            <p className="text-lg sm:text-xl text-gray-400 mb-4">
              Join thousands of visionaries transforming their lives
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">10K+</div>
                <div className="text-gray-500 text-sm sm:text-base">Students</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">$50M+</div>
                <div className="text-gray-500 text-sm sm:text-base">In Client Revenue</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-yellow-400 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">97%</div>
                <div className="text-gray-500 text-sm sm:text-base">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16 sm:mt-24 p-8 bg-gradient-to-r from-black via-gray-900 to-black border border-yellow-400/50 rounded-2xl animate-fadeInUp" style={{animationDelay: '0.5s'}}>
          <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            "The future belongs to those who invest in themselves today."
          </p>
          <p className="text-xl text-yellow-400 font-bold">— Thomas John Hong</p>
        </div>
      </div>
    </section>
  );
}