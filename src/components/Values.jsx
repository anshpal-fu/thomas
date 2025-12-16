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
    <section id="values" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 text-black relative overflow-hidden">
      {/* Enhanced Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/5 left-1/4 w-[450px] h-[450px] bg-gradient-to-r from-yellow-200/35 via-transparent to-yellow-500/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/5 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-yellow-600/35 via-transparent to-yellow-300/25 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-yellow-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-gradient-to-bl from-yellow-500/25 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
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
              className="group bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl p-6 hover:border-yellow-500 transition-all duration-500 animate-fadeInUp shadow-lg hover:shadow-xl"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 sm:mt-20 text-center animate-fadeInUp" style={{animationDelay: '1s'}}>
          <div className="inline-block p-8 bg-gradient-to-r from-white via-gray-50 to-gray-100 border-2 border-gray-300 rounded-2xl shadow-lg">
            <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              These values are not just words on a page.
            </p>
            <p className="text-xl sm:text-2xl text-yellow-600 font-bold">
              They are the foundation of everything we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}