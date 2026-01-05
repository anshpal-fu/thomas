import React from "react";

export default function Values() {
  const values = [
    { 
      title: 'INTEGRITY', 
      desc: 'Operating honesty & strong moral principles when no one is watching'
    },
    { 
      title: 'LEARNING', 
      desc: 'Ascending & building our environments'
    },
    { 
      title: 'MASTERY', 
      desc: 'Pursuing excellence in self.'
    },
    { 
      title: 'AWARENESS', 
      desc: 'Creating the right team outperforms individual effort'
    },
    { 
      title: 'SERVICE', 
      desc: 'Supporting EVERY client, family, & entity in reaching their highest vision.'
    },
    {
      title: 'IMPACT',
      desc: 'Breaking generational curses, leaving stains on brains & footprints on this earth.'
    },
    {
      title: 'ACTION',
      desc: 'Definiteness of Purpose'
    }
  ];

  return (
    <section id="values" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)] text-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-yellow-600/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDuration: '8s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 px-4">

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 relative inline-block">
            <span className="relative z-10">CORE VALUES</span>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500/30 transform -skew-x-12"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-black/90 max-w-3xl mx-auto leading-relaxed font-medium">
            The foundational principles that guide everything we do
          </p>
        </div>

        {/* Grid Circle Layout */}
        <div className="flex flex-wrap justify-center gap-8 pb-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="relative w-48 h-48 rounded-full bg-white border-4 border-yellow-500 shadow-xl flex flex-col items-center justify-center text-center px-4 hover:scale-105 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute -top-4 w-9 h-9 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black text-sm shadow-md">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Closing Statement */}
        <div className="mt-16 sm:mt-20 text-center relative">
          <div className="relative p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto bg-gradient-to-r from-white/80 to-yellow-50/80 border border-yellow-500/50 shadow-xl backdrop-blur-sm">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/5 to-yellow-600/5"></div>
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 relative">
                These values are not just words on a page.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-black/90">
                They are the foundation of everything we build.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
