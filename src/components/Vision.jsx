import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Vision() {
  const { theme } = useTheme();
  
  return (
    <section id="vision" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-[var(--gray-900)] to-black relative overflow-hidden" data-bg-section data-bg-color="#000000">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--gold)]/5 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[var(--gold)]/5 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Purpose Section */}
        <div className="mb-16 sm:mb-20 text-center animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6 sm:mb-8 tracking-wide">
            OUR PURPOSE — WHY WE EXIST
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--gold)] mb-4 sm:mb-6 italic animate-fadeIn px-4" style={{animationDelay: '0.2s'}}>
            We exist because everything has a purpose, and everything without purpose becomes nothing.
          </p>
          <div className="space-y-6 text-lg text-gray-300 max-w-4xl mx-auto">
            <p className="leading-relaxed animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              Our purpose is to leave stains on brains and footprints on this earth—to awaken people 
              to their potential, align them with their vision, and walk them step-by-step into the 
              reality they were meant to create.
            </p>
            <p className="leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              We are here to support every client, every family, every leader in seeing their highest vision…and getting there.
              <span className="block mt-2 font-semibold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Not someday. Not eventually. But now.</span>
            </p>
            <div className="mt-8 p-6 border-t border-b border-[var(--gold)]/30 bg-gradient-to-r from-transparent via-[var(--gold)]/5 to-transparent animate-glow">
              <p className="text-xl font-bold gradient-text italic">
                Our existence is rooted in one truth: We are all one. And when one rises, we all rise.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mb-20 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8 text-center tracking-wide">
            OUR LONG-TERM IMPACT — WHAT WE'RE BUILDING FOR THE WORLD
          </h2>
          <div className="space-y-6 text-lg text-gray-300 max-w-4xl mx-auto">
            <p className="leading-relaxed p-6 bg-gradient-to-r from-black via-[var(--gray-900)] to-black border border-[var(--gold)]/20 rounded-lg hover:border-[var(--gold)]/40 transition-all duration-500">
              We are creating a world where every family on the planet has access to the tools, knowledge, 
              and systems to build generational wealth—not just for one lifetime, not just for one generation, 
              but for many, many seasons to come.
            </p>
            <p className="leading-relaxed p-6 bg-gradient-to-l from-black via-[var(--gray-900)] to-black border border-[var(--gold)]/20 rounded-lg hover:border-[var(--gold)]/40 transition-all duration-500">
              A world where financial power, spiritual alignment, strong health, and strong leadership 
              become the new normal.
            </p>
          </div>
        </div>

        {/* Who We Serve Section */}
        <div className="text-center animate-fadeInUp" style={{animationDelay: '0.7s'}}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8 tracking-wide">
            WHO WE SERVE — WHO WE ARE BUILT FOR
          </h2>
          <div className="space-y-6 text-lg text-gray-300 max-w-4xl mx-auto">
            <p className="text-xl font-semibold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              We serve everyone. Not a niche. Not a demographic. Not a "type."
            </p>
            <p className="leading-relaxed">
              Anyone with a heartbeat, a vision, and a desire to rise is welcomed here.
            </p>
            <div className="mt-8 p-8 border-2 border-[var(--gold)]/30 bg-gradient-to-br from-black via-[var(--gray-900)] to-black rounded-lg animate-glow hover:scale-105 transition-transform duration-500">
              <p className="text-2xl font-bold gradient-text italic">
                We do not divide. We do not label. We lift. Because we are all one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
