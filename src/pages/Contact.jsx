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
                
                {/* Logo Image */}
                <div className="flex justify-start mb-6">
                  <img src="/Modern Geometric Head Logo.png" alt="Logo" className="h-32 w-32 object-contain" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center space-x-2">
                      <span className="text-blue-500">💼</span>
                      <span>LinkedIn</span>
                    </h3>
                    <a href="https://www.linkedin.com/in/tommy-hong-9963063a5/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 flex items-center space-x-2">
                      <span className="text-blue-500">🔗</span>
                      <span>Tommy Hong</span>
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
                      <a href="http://www.youtube.com/@GLOBALGENERATIONALWEALTH" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 flex items-center space-x-2">
                        <span>▶</span>
                        <span>YouTube</span>
                      </a>
                      <a href="https://www.tiktok.com/@globalgenerationalwealth" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 flex items-center space-x-2">
                        <span>♪</span>
                        <span>TikTok</span>
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