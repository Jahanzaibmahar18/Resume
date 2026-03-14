import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star, CheckCircle, ArrowUpRight } from "lucide-react";

const HeroHome = () => {
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 bg-black min-h-screen relative overflow-hidden">
      {/* Subtle Background Glow for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">

        {/* Card 1: Value Proposition - ZOOM IN */}
        <div 
          data-aos="zoom-in"
          className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-10 flex flex-col justify-center"
        >
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest transition duration-300">
              <Star size={14} fill="currentColor" />
              Rated #1 CV Service
            </span>

            <span className="flex items-center gap-2 bg-white/5 text-white/70 border border-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
              <CheckCircle size={14} className="text-yellow-500" />
              ATS Optimized
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black mt-8 text-white leading-[1.1] tracking-tighter">
            <span className="text-yellow-500 italic underline decoration-white/10">ATS-Optimized</span> <br />
            Resumes That Land <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Interviews.</span>
          </h1>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-lg">
            Stop getting filtered. I craft recruiter-approved CVs and 
            LinkedIn profiles that showcase your impact and beat the 
            algorithms.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20">
              Get My CV Now
            </button>

            <button className="group flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all">
              View Samples <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                    USR
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-500 tracking-wide">
              <span className="text-white">500+</span> PROFESSIONALS HIRED
            </p>
          </div>
        </div>

        {/* Card 2: Expert Profile - ZOOM IN UP */}
        <div 
          data-aos="zoom-in-up"
          className="relative bg-slate-900/60 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-10 overflow-hidden flex flex-col justify-center shadow-2xl"
        >
          
          {/* Decorative Sparkle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <span className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-md text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              Expert Writer
            </span>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-yellow-500 rounded-full blur opacity-25"></div>
                <img
                  src="https://resumesuplift.com/_next/image?url=%2Fbrand%2FWhatsApp%2520Image%25202026-01-31%2520at%252012.05.58%2520AM.jpeg&w=1920&q=75"
                  alt="Muhammad Abu Bakar"
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-yellow-500 p-1"
                />
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-black text-white tracking-tight">
                  Muhammad Abu Bakar
                </h2>
                <p className="text-yellow-500 font-bold tracking-widest text-xs uppercase mt-1">
                  Founder & Strategy Head
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  <span className="text-xs font-black text-white ml-3 tracking-tighter opacity-60">
                    TOP RATED EXPERT
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4">
               <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    "Specializing in Executive Career Branding and ATS-compliant storytelling that turns applications into offers."
                  </p>
               </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-xl text-[11px] font-bold text-slate-300">
                <CheckCircle size={14} className="text-yellow-500" />
                RECRUITER APPROVED
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-xl text-[11px] font-bold text-slate-300">
                <CheckCircle size={14} className="text-yellow-500" />
                LINKEDIN SPECIALIST
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroHome;