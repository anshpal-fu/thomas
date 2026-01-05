import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function Services() {
  const { theme } = useTheme();
  
  const services = [
    {
      title: "1-on-1 Consulting Session",
      price: "$99",
      description: "Personalized strategy session to identify your unique path to Generational Wealth.",
      features: [
        "60 minute consultation",
        "1 on 1 with a professional",
        "Action plan",
        "Personalized wealth assignment"
      ],
      cta: "Book Session",
      id: "consulting",
      backgroundImage: "/download (2).jpg"
    },
    {
      title: "WORTHY OF CREDIT PROFILE / Business TRUST",
      price: "$3,333",
      description: "Professional credit profile to unlock credits through the system. a unincorporated business association for profit.",
      features: [
        "EIN & Set-up Assistance",
        "Business Address",
        "Business Phone Number",
        "Professional Website & Email",
        "Business Bank Account Assistance"
      ],
      cta: "Get Credit Profile",
      id: "credit-profile",
      backgroundImage: "/Accredited leadership pathways that actually work.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/15 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-yellow-500/15 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            SERVICE PACKAGES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
            Investment opportunities to accelerate your journey to global generational wealth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group border-2 border-gray-700 rounded-xl overflow-hidden hover:border-yellow-500 transition-all duration-500 animate-fadeInUp shadow-lg hover:shadow-xl h-full flex flex-col relative"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              {/* Background with image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
              {service.backgroundImage && (
                <img 
                  src={service.backgroundImage}
                  alt={`${service.title} background`}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  onError={(e) => console.log(`Failed to load image: ${service.backgroundImage}`)}
                />
              )}
              
              <div className="p-6 sm:p-8 flex-grow relative z-10">
                <div className="mb-6">
                  {/* Decorative icon above title */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                      <span className="text-black font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{service.title}</h3>
                  <div className="text-3xl font-black text-yellow-500 mb-4 text-center">{service.price}</div>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-yellow-500 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <div className="space-y-4">
                  <Link 
                    to={`/service/${service.id}`} 
                    className="block w-full text-center py-3 bg-yellow-500 text-black font-bold uppercase tracking-wider transition-all duration-300 hover:bg-yellow-600 rounded-lg shadow-md hover:shadow-lg relative z-20"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block w-full text-center py-3 border-2 border-gray-600 text-gray-300 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gray-800 rounded-lg"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section - Commented out as requested */}
        {/* 
        <div className="mt-16 p-8 bg-gradient-to-r from-white via-gray-50 to-gray-100 border-2 border-gray-300 rounded-2xl text-center animate-fadeInUp shadow-lg" style={{animationDelay: '0.5s'}}>
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <span className="text-2xl">💯</span>
            <h3 className="text-2xl font-bold text-gray-800">Our Ironclad Guarantee</h3>
            <span className="text-2xl">💯</span>
          </div>
          <p className="text-xl text-yellow-600 font-bold mb-2">
            If you don't see tangible results within 30 days, we'll refund your investment. No questions asked.
          </p>
          <p className="text-gray-600">
            * Terms and conditions apply. Results may vary based on individual commitment and effort.
          </p>
        </div>
        */}
      </div>
    </section>
  );
}