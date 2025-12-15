import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Services() {
  const { theme } = useTheme();
  
  const services = [
    {
      title: "1-on-1 Consulting Session",
      price: "$99",
      description: "Personalized strategy session to identify your unique path to generational wealth",
      features: [
        "60-minute intensive consultation",
        "Personalized wealth assessment",
        "Immediate action plan",
        "Q&A with Thomas John Hong"
      ],
      cta: "Book Session"
    },
    {
      title: "Transfiguration Package",
      price: "$3,333",
      description: "Comprehensive transformation program for complete life and business overhaul",
      features: [
        "3-month intensive program",
        "Weekly 1-on-1 sessions",
        "Personalized strategy development",
        "Accountability and progress tracking",
        "Resource library access",
        "Community access"
      ],
      cta: "Transform Now"
    },
    {
      title: "3-Month Mastery Immersion",
      price: "$9,999",
      description: "Elite mentorship program for those committed to complete mastery",
      features: [
        "90-day immersive experience",
        "Daily check-ins and support",
        "Complete business/system overhaul",
        "Investor pitch development",
        "Network introductions",
        "Lifetime community access",
        "Ongoing alumni support"
      ],
      cta: "Achieve Mastery"
    }
  ];

  const getServiceId = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 bg-yellow-400 text-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-500/25 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-yellow-500/25 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6">
            SERVICE PACKAGES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-black max-w-3xl mx-auto leading-relaxed font-medium">
            Investment opportunities to accelerate your journey to global generational wealth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl overflow-hidden hover:border-yellow-500 transition-all duration-500 animate-fadeInUp shadow-lg hover:shadow-xl"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <div className="text-3xl font-black text-yellow-600 mb-4">{service.price}</div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-yellow-600 mt-1">✓</span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <a 
                    href={`/service/${getServiceId(service.title)}`} 
                    className="block w-full text-center py-3 bg-yellow-500 text-black font-bold uppercase tracking-wider transition-all duration-300 hover:bg-yellow-600 rounded-lg"
                  >
                    Learn More
                  </a>
                  <button className="w-full py-3 border-2 border-gray-400 text-gray-700 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gray-200 rounded-lg">
                    {service.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
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
      </div>
    </section>
  );
}