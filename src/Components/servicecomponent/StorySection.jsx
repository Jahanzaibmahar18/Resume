import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Star, Zap, Globe, Clock, Smile } from "lucide-react";

const StorySection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const animate = (setter, end, duration = 2000) => {
      let start = 0;
      const increment = end / (duration / 20);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 20);
    };

    animate(setCount1, 98);
    animate(setCount2, 10);
    animate(setCount3, 4);
    animate(setCount4, 24);
  }, []);

  return (
    <div className="py-0 bg-black overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT VISUAL: The "Digital Resume" Card */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative group">
            
            {/* Floating Live Stats Badge */}
            <div className="absolute -top-12 -right-8 bg-slate-900 border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.2)] rounded-2xl px-6 py-4 z-20 backdrop-blur-md transform transition-transform group-hover:scale-110">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Impact</p>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tighter">500+</h3>
              <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-tight">Success Stories</p>
            </div>

            {/* Main Resume Visual */}
            <div className="w-[300px] sm:w-[360px] h-[480px] bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-[40px] flex flex-col justify-center items-center p-10 transition-all duration-700 group-hover:-rotate-3 group-hover:border-yellow-500/40 relative shadow-2xl">
              
              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-8 rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                    <Zap size={32} className="text-black" fill="currentColor" />
                </div>
                
                <h2 className="text-5xl font-black text-white tracking-tighter mb-4">
                  RESUME
                </h2>
                <p className="text-yellow-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-8">Premium Quality</p>

                {/* Stars with Glow */}
                <div className="flex gap-1.5 p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-500 fill-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                  ))}
                </div>
              </div>

              {/* Decorative side bar */}
              <div className="absolute left-6 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"></div>
            </div>

            {/* Bottom Floating Tag */}
            <div className="absolute -bottom-6 left-10 bg-yellow-500 text-black px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase shadow-xl group-hover:-translate-y-2 transition-transform">
               ATS Proof Certified
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
             <div className="w-8 h-[2px] bg-yellow-500"></div>
             <p className="text-yellow-500 font-black text-xs uppercase tracking-[0.4em]">Proof of Results</p>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Your Career Story <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent italic decoration-white/10 underline">Unforgettable.</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
            We don't just write resumes; we craft high-conversion career narratives. 
            100% personalized and designed to position you as the <span className="text-white font-bold underline decoration-yellow-500/30">top 1% candidate</span> in your field.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 mb-16">
            <button className="flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(234,179,8,0.15)]">
              View Samples
              <ArrowRight size={18} strokeWidth={3}/>
            </button>

            <button className="flex items-center gap-3 border border-white/10 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Free CV Review
              <ArrowRight size={18}/>
            </button>
          </div>

          {/* ANIMATED STATS GRID */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-6">
            {[
              { label: "Interviews Secured", val: `${count1}.5%`, icon: <Zap size={18}/> },
              { label: "Global Markets", val: `${count2}+`, icon: <Globe size={18}/> },
              { label: "Client Rating", val: `${count3}.9/5`, icon: <Smile size={18}/> },
              { label: "Express Delivery", val: `${count4}h`, icon: <Clock size={18}/> }
            ].map((stat, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="mt-1 text-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity">
                   {stat.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white tracking-tighter leading-none mb-2">
                    {stat.val}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StorySection;