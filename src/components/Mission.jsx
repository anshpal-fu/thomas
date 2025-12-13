import React from 'react';
export default function Mission() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-black via-[var(--gray-900)] to-black relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-[var(--gold)]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tl from-[var(--gold)]/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--gold)]/5 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black gradient-text mb-4 sm:mb-6 tracking-tight leading-tight">
            THE MISSION
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-wide">
            INVEST IN YOURSELF
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {/* Opening Statement */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-black/80 via-[var(--gray-900)]/60 to-black/80 border-2 border-[var(--gold)]/30 rounded-lg hover:border-[var(--gold)]/60 transition-all duration-500">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-4">
              The mission has always been simple: <span className="gradient-text font-bold">invest in yourself.</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Because when you invest in yourself — when you put your own credits on the line — the exchange hits different. You take it seriously. You show up differently. You become accountable. <span className="text-white font-semibold">You become a doer, not just a dreamer.</span>
            </p>
          </div>

          {/* Bold Declarations */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            {[
              "This is not for the comfortable.",
              "This is not for the ones waiting for a handout.",
              "This is for the ones ready to change legacies.",
              "This is for the ones ready to leave stains on brains and separate themselves from the rest."
            ].map((text, idx) => (
              <div 
                key={idx} 
                className="group p-6 bg-gradient-to-br from-black via-[var(--gray-900)] to-black border border-[var(--gold)]/20 rounded-lg hover:border-[var(--gold)] hover:scale-105 transition-all duration-500 animate-fadeInUp"
                style={{animationDelay: `${0.4 + idx * 0.1}s`}}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl text-[var(--gold)] group-hover:scale-125 transition-transform duration-300">▶</span>
                  <p className="text-lg text-gray-300 group-hover:text-white font-semibold leading-relaxed transition-colors duration-300">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Mission Statement */}
          <div className="p-10 bg-gradient-to-br from-[var(--gold)]/10 via-[var(--gray-900)]/80 to-black/90 border-2 border-[var(--gold)]/40 rounded-2xl text-center animate-fadeInUp relative overflow-hidden" style={{animationDelay: '0.8s'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold)]/5 to-transparent"></div>
            <div className="relative z-10 space-y-4">
              <p className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                This mission is about becoming complete.
              </p>
              <div className="space-y-3 text-lg md:text-xl text-gray-200">
                <p className="leading-relaxed">Becoming <span className="text-[var(--gold)] font-bold">worthy of credits.</span></p>
                <p className="leading-relaxed">Becoming <span className="text-[var(--gold)] font-bold">professional, aligned, and undeniable.</span></p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="space-y-6 text-center animate-fadeInUp" style={{animationDelay: '1s'}}>
            <div className="p-8 bg-gradient-to-r from-black via-[var(--gray-900)] to-black border border-[var(--gold)]/30 rounded-lg">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-4">
                We're building <span className="gradient-text font-black text-3xl">global generational wealth</span> here — wealth from the inside out.
              </p>
              <div className="space-y-3 text-lg md:text-xl text-gray-300">
                <p>We're talking <span className="text-[var(--gold)] font-bold">mastery.</span></p>
                <p>We're talking <span className="text-[var(--gold)] font-bold">freedom of mind, body, and spirit.</span></p>
                <p>We're talking alignment with purpose so tight that the universe can't help but respond.</p>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="mt-12 p-12 bg-gradient-to-br from-black via-[var(--gray-900)] to-black border-2 border-[var(--gold)] rounded-2xl text-center animate-glow animate-fadeInUp relative overflow-hidden" style={{animationDelay: '1.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-center space-x-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--gold)]"></div>
                <p className="text-3xl md:text-4xl font-black gradient-text tracking-wide">
                  THIS IS THE MISSION
                </p>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--gold)]"></div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                This is the congregation.
              </p>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-8">
                This is the transformation of a lifetime
              </p>
              <p className="text-xl text-[var(--gold)] font-bold italic">
                — for those ready to commit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
