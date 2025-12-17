import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Mission() {
  const { theme } = useTheme();
  
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          
          {/* Left Side - Light Gold Gradient with Text */}
          <div className="bg-gradient-to-br from-[var(--gold-light)] via-[var(--gold)] to-[var(--gold-light)] rounded-l-3xl p-8 sm:p-10 relative overflow-hidden">
            {/* Abstract Texture */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-teal-500/20 to-transparent rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6">
                Our <span className="text-yellow-700">Mission</span>
              </h2>
              
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Invest in yourself to achieve personal and generational transformation. 
                We believe in real, boots-on-the-ground strategies that produce tangible results.
              </p>
            </div>
          </div>
          
          {/* Right Side - Cards directly attached to the Mission container */}
          <div className="relative">
            {/* Center Overlapping Circular Target Graphic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-64 h-64">
                {/* Concentric Rings */}
                <div className="absolute inset-0 rounded-full border-4 border-yellow-400 opacity-30"></div>
                <div className="absolute inset-4 rounded-full border-4 border-white opacity-50"></div>
                <div className="absolute inset-8 rounded-full border-4 border-teal-400 opacity-30"></div>
                
                {/* Sharp Arrow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-32 bg-gradient-to-t from-yellow-400 to-white transform rotate-45 origin-bottom"></div>
                  <div className="absolute top-0 w-4 h-4 bg-yellow-400 transform rotate-45 origin-center"></div>
                </div>
                
                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-teal-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Stacked Cards - Directly attached with no background container */}
            <div className="relative space-y-6 pl-8 pr-8 sm:pr-10 pb-10">
              {/* Card 1 - Chat Icon */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Consultation</h3>
                    <p className="text-gray-600 text-sm">Personalized guidance to align with your vision</p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 - Document Icon (Highlighted) */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Strategy Framework</h3>
                    <p className="text-gray-900 text-sm">Proven methodologies for sustainable growth</p>
                  </div>
                </div>
              </div>
              
              {/* Card 3 - Analytics Icon */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Performance Tracking</h3>
                    <p className="text-gray-600 text-sm">Monitor progress with real-time insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}