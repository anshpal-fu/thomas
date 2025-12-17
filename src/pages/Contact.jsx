import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Contact() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Contact Us</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our team to begin your journey toward financial freedom and generational wealth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-[var(--gold)]/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-[var(--gold)]">Get In Touch</h2>
                
                {/* Logo */}
                <div className="flex justify-start mb-6">
                  <img 
                    src="/Modern Geometric Head Logo.png" 
                    alt="Global Generational Wealth Logo" 
                    className="h-32 w-auto"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:thomasjohnhong@globalgenerationalwealth.net" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300">
                      thomas@globalgenerationalwealth.net
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-gray-300">
                      600 1st Ave, Ste 102 - 2534<br />
                      Seattle, WA 98104<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="http://www.youtube.com/@GLOBALGENERATIONALWEALTH" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 flex items-center">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        YouTube
                      </a>
                      <a href="https://www.tiktok.com/@globalgenerationalwealth" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 flex items-center">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                        </svg>
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-[var(--gold)]/20 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-[var(--gold)]">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent appearance-none"
                    >
                      <option value="">Select a Service</option>
                      <option value="1-on-1 Consulting Session">1-on-1 Consulting Session ($99)</option>
                      <option value="Transfiguration Package">Transfiguration Package ($3,333)</option>
                      <option value="3-Month Mastery Immersion">3-Month Mastery Immersion ($9,999)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-bold hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 uppercase tracking-wider"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}