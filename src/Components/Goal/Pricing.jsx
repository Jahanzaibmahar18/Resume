import React, { useState } from "react";
import { Sparkles, ArrowRight, Clock3, FileText, Linkedin, PencilLine, Layers3, Zap } from "lucide-react";

// --- Mock Data: Levels and Pricing ---
// Is data ko change karke aap pricing update kar sakte hain.
const pricingData = {
  entry: {
    title: "Entry Level",
    desc: "Perfect for students, fresh graduates, and early-career professionals",
    delivery: "2 days",
    rush: "12H",
    rushPrice: "$20",
    revisions: 2,
    resumePrice: 70,
    coverPrice: 40,
    linkedinPrice: 40,
  },
  mid: {
    title: "Mid-Level Professionals",
    desc: "Designed for professionals with 3-8 years of experience looking to advance.",
    delivery: "3 days",
    rush: "24H",
    rushPrice: "$35",
    revisions: 3,
    resumePrice: 120,
    coverPrice: 55,
    linkedinPrice: 55,
  },
  executive: {
    title: "Executive & C-Suite",
    desc: "Tailored for senior leaders, directors, and executives (10+ years exp).",
    delivery: "4 days",
    rush: "24H",
    rushPrice: "$50",
    revisions: "Unlimited",
    resumePrice: 200,
    coverPrice: 75,
    linkedinPrice: 75,
  },
};

// --- Sub-Component 1: Main Heading ---
const PricingHeading = () => (
  <div className="text-center mb-16 relative z-10">
    <div className="inline-flex items-center gap-2 bg-[#FF5722]/10 text-[#FF5722] border border-[#FF5722]/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-inner">
      <Sparkles size={14} fill="currentColor" />
      Pricing
    </div>

    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-tight max-w-4xl mx-auto">
      Choose the package that fits your <span className="text-[#FF5722] italic relative">goal<span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF5722]/30 rounded-full"></span>.</span>
    </h2>

    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
      Select a level, then pick one of the 6 packages. Checkout in seconds.
    </p>
  </div>
);

// --- Sub-Component 2: Individual Pricing Card ---
const PricingCard = ({ title, price, icon: Icon, items, recommended, isRevamp, revampPrice }) => (
  <div className={`relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 flex flex-col transition-all duration-300 group hover:border-[#FF5722]/40 hover:shadow-[0_0_30px_rgba(255,87,34,0.1)] ${recommended ? 'border-[#FF5722]/50 shadow-[0_10px_40px_rgba(234,179,8,0.05)]' : ''}`}>
    
    {recommended && (
      <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 bg-[#FF5722] text-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md">
        <Zap size={12} fill="black" />
        Recommended
      </div>
    )}

    {/* Icon & Title */}
    <div className="flex items-center gap-5 mb-8">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-300 ${recommended ? 'bg-[#FF5722]/10 border-[#FF5722]/30 text-[#FF5722]' : 'bg-white/5 border-white/10 text-slate-400 group-hover:bg-[#FF5722]/10 group-hover:border-[#FF5722]/30 group-hover:text-[#FF5722]'}`}>
        <Icon size={28} />
      </div>
      <h4 className="font-black text-white text-lg tracking-tight uppercase group-hover:text-[#FF5722] transition-colors">
        {title}
      </h4>
    </div>

    {/* Price */}
    <div className="mb-8 border-b border-white/5 pb-8">
      <p className="text-5xl font-black text-white tracking-tighter">
        ${price}<span className="text-xs font-medium text-slate-500 ml-2 tracking-normal">USD</span>
      </p>
    </div>

    {/* Included Items */}
    <div className="space-y-3.5 mb-12 flex-grow">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <Layers3 size={16} className="text-[#FF5722] shrink-0" />
          <p className="text-slate-300 text-sm font-medium">{item}</p>
        </div>
      ))}
    </div>

    {/* Action Button(s) */}
    {isRevamp ? (
      <div className="grid grid-cols-2 gap-3 mt-auto pt-8 border-t border-white/5">
        <button className="flex items-center justify-center gap-2 text-white/70 bg-white/5 hover:bg-white hover:text-black border border-white/10 p-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all">
          Scratch <ArrowRight size={14}/>
        </button>
        <button className="flex items-center justify-center gap-2 text-black bg-[#FF5722] hover:bg-white p-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-md">
          Revamp <ArrowRight size={14}/>
        </button>
      </div>
    ) : (
      <button className="w-full bg-[#FF5722] hover:bg-white text-black px-6 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all mt-auto shadow-md shadow-[#FF5722]/10 active:scale-95 group-hover:gap-3">
        Order Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
      </button>
    )}
  </div>
);

// --- Main Component ---
const Pricing = () => {
  const [selectedLevel, setSelectedLevel] = useState("entry"); // default entry level

  const currentData = pricingData[selectedLevel];
  const tabs = Object.keys(pricingData);

  return (
    <section id="pricing" className="py-24 bg-black px-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5722]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <PricingHeading />

        {/* --- LEVEL TABS --- */}
        <div className="flex justify-center gap-3 mb-16 border border-white/5 p-1.5 rounded-full w-fit mx-auto bg-black shadow-inner">
          {tabs.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ease-out active:scale-95 whitespace-nowrap ${
                selectedLevel === level
                  ? "bg-[#FF5722] text-black shadow-[0_4px_15px_rgba(255,87,34,0.3)]"
                  : "bg-transparent text-slate-400 hover:text-white"
              }`}
            >
              {pricingData[level].title}
            </button>
          ))}
        </div>

        {/* --- DATA DISPLAY AREA (Cards from 2nd Picture) --- */}
        {/* Is div mein grid mobile par 1 card aur desktop par 3 cards dikhayega */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Cover Letter */}
          <PricingCard 
            title="Cover Letter"
            price={currentData.coverPrice}
            icon={PencilLine}
            items={["Tailored Cover Letter"]}
          />

          {/* Card 2: LinkedIn */}
          <PricingCard 
            title="LinkedIn Optimization"
            price={currentData.linkedinPrice}
            icon={Linkedin}
            items={["Complete Profile Redesign"]}
          />

          {/* Card 3: Resume/CV (Revamp Option) */}
          <PricingCard 
            title="Resume / CV"
            price={currentData.resumePrice}
            icon={FileText}
            items={["ATS Compliant Document"]}
            isRevamp={true}
          />

          {/* Card 4: Combo 1 */}
          <PricingCard 
            title="Cover Letter + LinkedIn"
            price={currentData.coverPrice + currentData.linkedinPrice}
            icon={Layers3}
            items={["Cover Letter", "LinkedIn Profile Optimization"]}
          />

          {/* Card 5: Combo 2 (Revamp) */}
          <PricingCard 
            title="Resume + Cover Letter"
            price={currentData.resumePrice + currentData.coverPrice}
            icon={Layers3}
            items={["ATS Resume/CV", "Tailored Cover Letter"]}
            isRevamp={true}
          />

          {/* Card 6: All-in-One (Recommended) */}
          <PricingCard 
            title="All-in-One Package"
            price={currentData.resumePrice + currentData.coverPrice + currentData.linkedinPrice}
            icon={Layers3}
            recommended={true}
            items={["ATS Resume/CV", "Tailored Cover Letter", "LinkedIn Profile Optimization"]}
            isRevamp={true}
          />
        </div>

        {/* --- Bottom Action & Satisfaction Guarantee --- */}
        <div className="text-center mt-20 border-t border-white/5 pt-16 max-w-xl mx-auto">
          <button className="bg-white text-black px-12 py-5 rounded-full font-black text-sm tracking-[0.2em] uppercase hover:bg-[#FF5722] hover:shadow-[0_0_30px_rgba(255,87,34,0.3)] transition-all transform hover:scale-105 active:scale-95 group">
            Book a Free Strategy Call <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform"/>
          </button>
          
          <div className="mt-8 flex items-center justify-center gap-3 text-slate-600">
            <CheckCircle size={18} className="text-green-600" />
            <p className="text-[10px] font-bold uppercase tracking-widest">
              100% satisfaction guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;