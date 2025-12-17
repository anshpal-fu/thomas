import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Mission() {
  const { theme } = useTheme();
  
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/5"></div>
      </div>
   
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            OUR MISSION
          </h2>
          <div className="w-32 h-1 bg-black mx-auto mb-12"></div>
        </div>

        {/* Mission Section with Image Space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Area */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative">
              {/* Background image */}
              <img 
                src="/download (1).jpg"
                alt="Mission in Action"
                className="absolute inset-0 w-full h-full object-cover"
              />
             
            </div>
          </div>

          {/* Mission Content */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">The Core Principle</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The mission has always been simple: <span className="text-yellow-600 font-bold">invest in yourself.</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">The Exchange</h3>
              <p className="text-lg leading-relaxed">
                Because when you invest in yourself — when you put your own credits on the line — the exchange hits different. You take it seriously. You show up differently. You become accountable. <span className="font-semibold">You become a doer, not just a dreamer.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Key Declarations */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-20">
          <div 
            className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 text-white shadow-lg border border-yellow-500/20"
          >
            <p className="text-xl font-bold leading-relaxed text-center">
              This is not for the comfortable. This is not for the ones waiting for a handout. This is for the ones ready to change legacies. This is for the ones ready to leave stains on brains and separate themselves from the rest.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-center shadow-2xl border border-yellow-500/30 mb-16">
          <p className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
            This mission is about becoming complete.
          </p>
          <div className="space-y-6 text-xl md:text-2xl text-white font-bold">
            <p>Becoming <span className="text-yellow-400">worthy of credits.</span></p>
            <p>Becoming <span className="text-yellow-400">professional, aligned, and undeniable.</span></p>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-200 max-w-4xl">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">
                THIS IS THE MISSION
              </h3>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            <div className="space-y-4 text-xl md:text-2xl text-gray-700">
              <p className="font-bold">This is the congregation.</p>
              <p className="font-bold">This is the transformation of a lifetime</p>
              <p className="text-yellow-600 font-bold italic mt-6">— for those ready to commit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}