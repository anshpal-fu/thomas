import React from 'react';

export default function Values() {
  const values = [
    { title: 'Integrity', description: 'Operating with honesty and strong moral principles in everything we do', icon: '🛡️' },
    { title: 'Alignment', description: 'Aligning vision, purpose, and action for complete transformation', icon: '🎯' },
    { title: 'Mastery', description: 'Pursuing excellence and mastery in all areas of life', icon: '👑' },
    { title: 'Creativity', description: 'Innovative thinking and unique solutions for lasting impact', icon: '💡' },
    { title: 'Persistence', description: 'Unwavering commitment to goals and long-term vision', icon: '💪' },
    { title: 'Prosperity', description: 'Building wealth that lasts for generations to come', icon: '💰' },
    { title: 'Connection', description: 'We are all one. When one rises, we all rise', icon: '🤝' },
    { title: 'Impact', description: 'Leaving stains on brains and footprints on this earth', icon: '⭐' },
    { title: 'Service', description: 'Supporting every client, family, and leader in reaching their highest vision', icon: '🙏' }
  ];

  return (
    <section id="values" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black via-[var(--gray-900)] to-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-[var(--gold)]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-[var(--gold)]/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6 tracking-wide">
            OUR VALUES — HOW WE OPERATE
          </h2>
          <p className="text-base sm:text-lg text-gray-400 italic max-w-3xl mx-auto px-4">
            These aren't words. These are standards. This is our internal code.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-black/80 via-[var(--gray-900)]/60 to-black/80 border border-[var(--gold)]/20 p-8 rounded-lg hover:border-[var(--gold)] transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--gold)]/20 animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold gradient-text mb-4 tracking-wide">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {value.description}
              </p>
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Unique Approach Section */}
        <div className="bg-gradient-to-r from-black via-[var(--gray-900)] to-black border-l-4 border-[var(--gold)] p-10 rounded-lg animate-fadeInUp hover:border-l-8 transition-all duration-500 relative overflow-hidden" style={{animationDelay: '0.9s'}}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 via-transparent to-[var(--gold)]/5 opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6 tracking-wide">
              OUR UNIQUE APPROACH — WHAT SETS US APART
            </h2>
            <p className="text-xl bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-8 font-semibold">
              We don't talk from the sidelines. We walk with you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                'Real boots-on-the-ground strategies',
                'High-level mentorship',
                'Hands-on guidance',
                'Step-by-step navigation',
                'Clarity, precision, and accountability'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 animate-slideInLeft" style={{animationDelay: `${idx * 0.1 + 1}s`}}>
                  <span className="text-[var(--gold)] text-2xl font-bold">→</span>
                  <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-r from-black/60 via-[var(--gray-900)]/40 to-black/60 border border-[var(--gold)]/30 rounded-lg animate-glow">
              <p className="text-xl font-bold gradient-text italic">
                We don't leave you confused. We lead you to completion. We take your vision personally. 
                This is the difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
