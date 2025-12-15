import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Values() {
  const { theme } = useTheme();
  
  const values = [
    { title: 'Integrity', description: 'Operating with honesty and strong moral principles in everything we do', icon: '🛡️' },
    { title: 'Alignment', description: 'Aligning vision, purpose, and action for complete transformation', icon: '🎯' },
    { title: 'Mastery', description: 'Pursuing excellence and mastery in all areas of life', icon: '👑' },
    { title: 'Creativity', description: 'Thinking outside the box to create unique solutions', icon: '🎨' },
    { title: 'Persistence', description: 'Unwavering commitment to goals and long-term vision', icon: '💪' },
    { title: 'Prosperity', description: 'Building wealth that lasts for generations to come', icon: '💰' },
    { title: 'Connection', description: 'We are all one. When one rises, we all rise', icon: '🤝' },
    { title: 'Impact', description: 'Leaving stains on brains and footprints on this earth', icon: '⭐' },
    { title: 'Service', description: 'Supporting every client, family, and leader in reaching their highest vision', icon: '🙏' }
  ];

  return (
    <section id="values" className="py-16 sm:py-24 px-4 sm:px-6 bg-yellow-400 text-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-yellow-500/25 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-yellow-500/25 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6">
            OUR VALUES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-medium">
            The foundational principles that guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-black via-gray-900 to-black border-2 border-black rounded-xl p-6 hover:border-yellow-500 transition-all duration-500 animate-fadeInUp"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 sm:mt-20 text-center animate-fadeInUp" style={{animationDelay: '1s'}}>
          <div className="inline-block p-8 bg-gradient-to-r from-black via-gray-900 to-black border-2 border-black rounded-2xl">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              These values are not just words on a page.
            </p>
            <p className="text-xl sm:text-2xl text-yellow-300 font-bold">
              They are the foundation of everything we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}