export default function Footer() {
return (
<footer className="py-16 sm:py-24 bg-gradient-to-b from-[var(--gray-900)] to-black border-t border-[var(--gold)]/30 relative overflow-hidden">
{/* Animated background */}
<div className="absolute inset-0">
<div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-[var(--gold)]/5 to-transparent rounded-full blur-3xl animate-float"></div>
<div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-[var(--gold)]/5 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
{/* Brand Section */}
<div className="space-y-5 animate-fadeInUp">
<div className="mb-6">
<div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
<div className="relative group">
<img src="/Modern Geometric Head Logo.png" alt="Logo" className="h-10 w-10 sm:h-14 sm:w-14 object-contain" />
<div className="absolute inset-0 bg-[var(--gold)]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<h3 className="text-sm sm:text-base font-black gradient-text leading-tight">GLOBAL<br/>GENERATIONAL<br/>WEALTH</h3>
</div>
<p className="text-[var(--gold)] font-bold tracking-[0.2em] text-xs">REAL. RELIABLE. READY.</p>
</div>
<p className="text-xs text-[var(--gold)]/50 italic leading-relaxed">For Educational Purposes Only</p>
</div>

{/* Contact Section */}
<div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
<h4 className="text-white font-black mb-5 text-base tracking-wider uppercase border-b border-[var(--gold)]/20 pb-2">Contact</h4>
<div className="space-y-3 text-sm">
<div className="group">
<p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Email</p>
<a href="mailto:thomasjohnhong@globalgenerationalwealth.net" className="text-gray-300 hover:text-[var(--gold)] transition-colors duration-300 block leading-relaxed">
thomas@globalgenerationalwealth.net
</a>
</div>
<div className="pt-2">
<p className="text-gray-500 text-xs mb-1 uppercase tracking-wide">Address</p>
<p className="text-gray-300 leading-relaxed">600 1st Ave, Ste 102 - 2534</p>
<p className="text-gray-300">Seattle, WA 98104</p>
<p className="text-gray-300">United States</p>
</div>
</div>
</div>

{/* Social Section */}
<div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
<h4 className="text-white font-black mb-5 text-base tracking-wider uppercase border-b border-[var(--gold)]/20 pb-2">Follow Us</h4>
<div className="space-y-4">
<a href="http://www.youtube.com/@GLOBALGENERATIONALWEALTH" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300">
<span className="text-lg">▶</span>
<span className="text-sm font-medium">YouTube</span>
</a>
<a href="https://www.tiktok.com/@globalgenerationalwealth" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300">
<span className="text-lg">♪</span>
<span className="text-sm font-medium">TikTok</span>
</a>
</div>
</div>

{/* Legal Section */}
<div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
<h4 className="text-white font-black mb-5 text-base tracking-wider uppercase border-b border-[var(--gold)]/20 pb-2">Legal</h4>
<div className="space-y-4">
<a href="#terms" className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300">
<span className="text-base">📄</span>
<span className="text-sm font-medium">Terms & Conditions</span>
</a>
<a href="#privacy" className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300">
<span className="text-base">🔒</span>
<span className="text-sm font-medium">Privacy Policy</span>
</a>
<a href="#disclaimer" className="group flex items-center space-x-3 text-gray-300 hover:text-[var(--gold)] transition-all duration-300">
<span className="text-base">⚠️</span>
<span className="text-sm font-medium">Disclaimer</span>
</a>
</div>
</div>
</div>

{/* Divider with gradient */}
<div className="relative mb-8">
<div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent"></div>
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 bg-black">
<div className="w-2 h-2 bg-[var(--gold)] rounded-full animate-glow"></div>
</div>
</div>

{/* Copyright & Additional Info */}
<div className="text-center space-y-4">
<p className="text-sm text-gray-400 animate-fadeIn">
© {new Date().getFullYear()} <span className="text-[var(--gold)] font-bold">Global Generational Wealth</span>. All Rights Reserved.
</p>
<p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
Dedicated to empowering individuals and families worldwide to achieve lasting transformation and build generational wealth through education, alignment, and mastery.
</p>
</div>
</div>
</footer>
);
}
