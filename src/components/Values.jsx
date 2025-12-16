import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Values() {
  const { theme } = useTheme();
  
  const values = [
    { 
      title: 'Integrity', 
      description: 'Operating with honesty and strong moral principles in everything we do'
    },
    { 
      title: 'Mastery', 
      description: 'Pursuing excellence and mastery in all areas of life'
    },
    { 
      title: 'Prosperity', 
      description: 'Building wealth that lasts for generations to come'
    },
    { 
      title: 'Impact', 
      description: 'Leaving stains on brains and footprints on this earth'
    },
    { 
      title: 'Service', 
      description: 'Supporting every client, family, and leader in reaching their highest vision'
    }
  ];

  return (
    <section id="values" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500 text-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-200/30 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-yellow-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 sm:mb-6">
            OUR VALUES
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-6"></div>
          <p className="text-base sm:text-xl text-black max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-medium">
            The foundational principles that guide everything we do
          </p>
        </div>

        {/* Circular Progress Layout with 5 Circles */}
        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="relative w-48 h-48"
            >
              {/* Circular progress background */}
              <div className="absolute inset-0 rounded-full border-8 border-yellow-200"></div>
              
              {/* Progress fill */}
              <div 
                className="absolute inset-0 rounded-full border-8 border-yellow-500 clip-path-progress"
                style={{ clipPath: `inset(0 0 ${100 - (index + 1) * 20}% 0)` }}
              ></div>
              
              {/* Content container */}
              <div className="absolute inset-4 rounded-full bg-white border-2 border-yellow-500 flex flex-col items-center justify-center p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600 mb-2">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-block p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto shadow-xl border-2 border-yellow-500">
            <p className="text-lg sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
              These values are not just words on a page.
            </p>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-yellow-600">
              They are the foundation of everything we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}