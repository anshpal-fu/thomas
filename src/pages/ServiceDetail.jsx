import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const services = [
  {
    id: "consulting",
    price: "$99",
    title: "1-on-1 Consulting Session",
    desc: "Personalized strategy session to identify your unique path to Generational Wealth.",
    includes: [
      "60 minute consultation",
      "1 on 1 with a professional",
      "Action plan",
      "Personalized wealth assignment"
    ],
    purpose: "Perfect for individuals seeking immediate clarity and direction.",
    details: "Our 1-on-1 Consulting Session is designed for individuals seeking immediate clarity and direction. During this intensive session, we dive deep into your current situation, identify blind spots, and create a personalized roadmap for your next steps. This is perfect for those who are ready to take action but need expert guidance to move forward effectively."
  },
  {
    id: "credit-profile",
    price: "$3,333",
    title: "WORTHY OF CREDIT PROFILE / Business TRUST",
    desc: "Professional credit profile to unlock credits through the system.",
    includes: [
      "EIN & Set-up Assistance",
      "Business Address",
      "Business Phone Number",
      "Professional Website & Email",
      "Business Bank Account Assistance"
    ],
    purpose: "Establish your business foundation and credit profile.",
    details: "The WORTHY OF CREDIT PROFILE / Business TRUST package helps you establish a professional credit profile to unlock credits through the system. We guide you through the process of creating your business foundation with proper setup, addresses, and banking to support your credit building journey."
  }
];

export default function ServiceDetail() {
  const { theme } = useTheme();
  const { serviceId } = useParams();
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-[var(--gray-900)] to-black pt-20">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-3xl font-bold gradient-text mb-4">Service Not Found</h1>
          <p className="text-gray-300">The service you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[var(--gray-900)] to-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        {/* Back to Services Link */}
        <div className="mb-8">
          <a 
            href="/#services" 
            className="inline-flex items-center text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </a>
        </div>
        
        {/* Service Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6 tracking-tight">
            {service.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {service.desc}
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-black/90 via-[var(--gray-900)]/80 to-black/90 border border-[var(--gold)]/30 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Program Details</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {service.details}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 via-[var(--gray-900)]/80 to-black/90 border border-[var(--gold)]/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
              <ul className="space-y-4">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-start">
                  <span className="text-[var(--gold)] mr-3 text-xl">✓</span>
                  <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-black/40 border-l-2 border-[var(--gold)]/50 rounded">
                <p className="text-gray-400 italic">
                  <span className="font-bold text-[var(--gold)]">Purpose:</span> {service.purpose}
                </p>
              </div>
            </div>
          </div>
          
          {/* Payment Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-black/90 via-[var(--gray-900)]/80 to-black/90 border-2 border-[var(--gold)] rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-black gradient-text mb-4">{service.price}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              </div>
              
              <Link to="/contact" className="block w-full py-4 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-bold hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 uppercase tracking-wider shadow-lg hover:shadow-[var(--gold)]/50 mb-4 text-center">
                Enroll Now
              </Link>
              
              <Link to="/contact" className="block w-full py-4 bg-gradient-to-r from-black via-[var(--gray-900)] to-black border-2 border-[var(--gold)]/30 text-[var(--gold)] hover:bg-gradient-to-r hover:from-[var(--gold-dark)] hover:via-[var(--gold)] hover:to-[var(--gold-dark)] hover:text-black hover:border-[var(--gold)] transition-all duration-500 font-bold uppercase tracking-wider text-center">
                Schedule Call
              </Link>
              
              <div className="mt-8 pt-6 border-t border-[var(--gold)]/30">
                <h4 className="text-sm font-bold text-[var(--gold)] mb-3 uppercase tracking-wider">Secure Payment</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All transactions are secured with 256-bit SSL encryption. Your payment information is never stored on our servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
