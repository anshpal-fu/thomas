import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
export default function CTA() {
  const { theme } = useTheme();
  
  return (
<section className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-black via-[var(--gray-900)] to-black relative overflow-hidden" data-bg-section data-bg-color="#000000">
{/* Animated Background Elements */}
<div className="absolute inset-0">
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-[var(--gold)]/10 to-transparent rounded-full blur-3xl animate-float"></div>
<div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-[var(--gold)]/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
</div>

<div className="max-w-6xl mx-auto relative z-10">
{/* Legacy Section */}
<div className="text-center mb-16 sm:mb-20 animate-fadeInUp">
<h2 className="text-3xl sm:text-4xl md:text-6xl font-black gradient-text mb-6 sm:mb-8 leading-tight">
THE FUTURE WE'RE BUILDING — OUR LEGACY
</h2>
<p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
We spent years trying to "get to it first." Now, we're committed to building what lasts.
</p>
<div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
{[
'A global network of aligned leaders',
'Families passing down wealth with intention',
'Stronger, healthier, more aware communities',
'Systems that last beyond our lifetime'
].map((item, idx) => (
<div key={idx} className="group flex items-start space-x-4 p-6 bg-gradient-to-r from-black/60 via-[var(--gray-900)]/40 to-black/60 border border-[var(--gold)]/20 rounded-lg hover:border-[var(--gold)]/60 transition-all duration-500 animate-fadeInUp" style={{animationDelay: `${idx * 0.1}s`}}>
<span className="text-3xl text-[var(--gold)] group-hover:scale-125 transition-transform duration-500">✓</span>
<p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-500">{item}</p>
</div>
))}
</div>
<div className="mt-12 p-8 bg-gradient-to-r from-black/80 via-[var(--gray-900)]/60 to-black/80 border-2 border-[var(--gold)]/30 rounded-lg animate-glow">
<p className="text-2xl md:text-3xl font-black gradient-text italic">
This is not short-term success. This is generational architecture.
</p>
</div>
</div>

{/* Standards Section */}
<div className="mb-20 p-12 bg-gradient-to-br from-black via-[var(--gray-900)] to-black border-2 border-[var(--gold)]/30 rounded-lg text-center animate-fadeInUp relative overflow-hidden" style={{animationDelay: '0.4s'}}>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--gold)]/5 to-transparent"></div>
<div className="relative z-10">
<h3 className="text-4xl md:text-5xl font-black gradient-text mb-6">
OUR STANDARD — THE ENERGY WE CARRY
</h3>
<div className="flex items-center justify-center space-x-4 mb-6">
<div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--gold)]"></div>
<p className="text-3xl font-black text-[var(--gold)] tracking-[0.3em]">
REAL. RELIABLE. READY.
</p>
<div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--gold)]"></div>
</div>
<p className="text-gray-400 mb-6 text-lg">We move with:</p>
<p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
Excellence • Precision • Humility with high standards • Ethical leadership • 
Long-term vision • No shortcuts • Truth • Discipline
</p>
<p className="mt-8 text-sm text-[var(--gold)]/60 italic max-w-2xl mx-auto">
This is the frequency of our company. This is the culture. This is the foundation. This is the brand.
</p>
</div>
</div>

{/* Final CTA */}
<div className="text-center bg-gradient-to-r from-[var(--gold)]/10 via-[var(--gold)]/5 to-[var(--gold)]/10 border-2 border-[var(--gold)]/40 rounded-2xl p-8 sm:p-12 md:p-16 animate-fadeInUp relative overflow-hidden" style={{animationDelay: '0.6s'}}>
{/* Animated gradient background */}
<div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 to-transparent opacity-50"></div>

<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4 sm:mb-6">
Ready to Build Generational Wealth?
</h2>
<p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
This is not for the comfortable. This is for the ones ready to change legacies. 
This is for the ones ready to leave stains on brains and separate themselves from the rest.
</p>
<a
href="#services"
className="group inline-block px-16 py-5 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black font-black text-xl uppercase tracking-wider hover:from-[var(--gold)] hover:via-[var(--gold-light)] hover:to-[var(--gold)] transition-all duration-500 shadow-2xl hover:shadow-[var(--gold)]/60 relative overflow-hidden"
>
<span className="relative z-10">Start Your Transformation</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
</a>
<div className="mt-8 flex items-center justify-center space-x-3">
<div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--gold)]/50"></div>
<p className="text-gray-400 text-sm">
Contact: <a href="mailto:thomasjohnhong@globalgenerationalwealth.net" className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-300 font-semibold">thomasjohnhong@globalgenerationalwealth.net</a>
</p>
<div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--gold)]/50"></div>
</div>
</div>
</div>
</div>
</section>
);
}
