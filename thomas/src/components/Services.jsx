const services = [
{
price: "$99",
title: "1 ON 1 CONSULTING SESSION",
desc: "A direct clarity session designed to identify, correct, and elevate.",
includes: [
"Full vision discovery (goals, purpose, mission)",
"Identification of hidden liabilities",
"Weakness confrontation with actionable solutions",
"Blueprint for immediate next steps",
"Personal optimization recommendations",
"Documented notes & action list"
],
purpose: "This tier is for realignment, direction, and activation."
},
{
price: "$3,333",
title: "PUBLIC → PRIVATE TRANSFIGURATION",
desc: "A full restructuring of identity, health, and financial foundation.",
includes: [
"Public-to-Private Transfiguration Process",
"Formation of UBA / Business Trust",
"EIN creation & verification",
"Credit repair (public & private strategy)",
"Customized health routine",
"3 private strategy consultations"
],
purpose: "This tier creates your foundation, your identity, and your private structure.",
popular: false
},
{
price: "$9,999",
title: "MASTERY IMMERSION (3 MONTHS)",
desc: "Complete, hands-on, transformative program to reset your entire life.",
includes: [
"3-month mentorship & hand-holding",
"Weekly accountability check-ins",
"Private network introductions",
"UNLIMITED Credits (within capacity)",
"Full credit reconstruction",
"Debt discharge/negotiation guidance",
"Weekly 1-on-1 sessions",
"Priority messaging support"
],
purpose: "Complete transformation — financially, mentally, emotionally, structurally.",
popular: true
}
];


export default function Services() {
return (
<section id="services" className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-black via-[var(--gray-900)] to-black relative overflow-hidden">
{/* Animated Background */}
<div className="absolute inset-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[var(--gold)]/10 to-transparent rounded-full blur-3xl animate-float"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[var(--gold)]/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
</div>

<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 sm:mb-20 animate-fadeInUp">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-4 tracking-tight">
SERVICE PACKAGES
</h2>
<p className="text-sm text-[var(--gold)]/60 italic tracking-widest mb-6">FOR EDUCATIONAL PURPOSES ONLY</p>
<div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto"></div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
{services.map((s, i) => (
<div 
key={i} 
className={`group relative bg-gradient-to-br from-black/90 via-[var(--gray-900)]/80 to-black/90 border-2 ${
s.popular ? 'border-[var(--gold)]' : 'border-[var(--gold)]/20'
} p-10 hover:border-[var(--gold)] transition-all duration-700 hover:transform hover:scale-105 overflow-hidden animate-fadeInUp`}
style={{animationDelay: `${i * 0.2}s`}}
>
{/* Background gradient overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-[var(--gold)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

{/* Content */}
<div className="relative z-10">
{s.popular && (
<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-dark)] text-black px-6 py-2 text-xs font-black tracking-widest animate-glow">
MOST TRANSFORMATIVE
</div>
)}

<div className="text-center mb-8">
<div className="text-5xl font-black gradient-text mb-6 group-hover:scale-110 transition-transform duration-500">{s.price}</div>
<h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-[var(--gold)] transition-colors duration-500">{s.title}</h3>
<p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">{s.desc}</p>
</div>

<div className="mb-8">
<h4 className="text-sm font-bold text-[var(--gold)] mb-4 uppercase tracking-wider">Includes:</h4>
<ul className="space-y-3">
{s.includes.map((item, idx) => (
<li key={idx} className="flex items-start text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
<span className="text-[var(--gold)] mr-3 text-lg font-bold">✓</span>
<span className="leading-relaxed">{item}</span>
</li>
))}
</ul>
</div>

<div className="mb-6 p-4 bg-black/40 border-l-2 border-[var(--gold)]/50 rounded">
<p className="text-xs text-gray-500 italic leading-relaxed">{s.purpose}</p>
</div>

<button className="w-full py-4 bg-gradient-to-r from-black via-[var(--gray-900)] to-black border-2 border-[var(--gold)]/30 text-[var(--gold)] hover:bg-gradient-to-r hover:from-[var(--gold-dark)] hover:via-[var(--gold)] hover:to-[var(--gold-dark)] hover:text-black hover:border-[var(--gold)] transition-all duration-500 font-bold uppercase tracking-wider group-hover:shadow-lg group-hover:shadow-[var(--gold)]/30">
Learn More
</button>
</div>

{/* Hover shine effect */}
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
</div>
))}
</div>
</div>
</section>
);
}