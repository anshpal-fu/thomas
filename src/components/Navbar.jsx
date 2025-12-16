import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-2xl border-b border-[var(--gold)]/20 shadow-2xl shadow-[var(--gold)]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - now wrapped in Link to navigate to home */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4 group">
            <div className="relative">
              <img 
                src="/Modern Geometric Head Logo.png" 
                alt="Global Generational Wealth" 
                className="h-10 w-10 sm:h-14 sm:w-14 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
              />
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-[var(--gold)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div>
              <h1 className="text-xs sm:text-lg font-black tracking-wider gradient-text">
                GLOBAL GENERATIONAL WEALTH
              </h1>
              <p className="text-[0.5rem] sm:text-xs text-[var(--gold)]/80 tracking-[0.2em] font-semibold hidden xs:block">REAL. RELIABLE. READY.</p>
            </div>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[var(--gold)] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 sm:space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 font-medium text-sm uppercase tracking-wider">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 font-medium text-sm uppercase tracking-wider">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 font-medium text-sm uppercase tracking-wider">
              Services
            </Link>
            
            <Link
              to="/services"
              className="group relative px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-bold hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 uppercase text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-[var(--gold)]/50 overflow-hidden"
            >
              <span className="relative z-10">Book Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-[var(--gold)]/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/services"
                className="block w-full text-center mt-2 px-4 py-2 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-bold hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 uppercase text-sm tracking-wider shadow-lg hover:shadow-[var(--gold)]/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}