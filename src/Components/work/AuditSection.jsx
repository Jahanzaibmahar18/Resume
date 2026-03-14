import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Search, Target, FileText, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

const AuditSection = () => {
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="process" className="py-2 bg-black px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* TOP SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
          <Sparkles size={14} fill="currentColor" />
          Free Resume Audit
        </div>

        {/* Updated Heading with AOS */}
        <h2 
          data-aos="zoom-in-down"
          className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-tight"
        >
          Know Your <span className="text-yellow-500 italic">Weak Spots.</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
          Before you commit, I’ll personally audit your current CV. No bots, no generic scores—just a brutal, honest breakdown of what's stopping your interviews.
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8 relative z-10">
        
        {/* LEFT CARD: WHAT YOU RECEIVE (ZOOM-IN-UP) */}
        <div 
          data-aos="zoom-in-up"
          className="lg:col-span-3 bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 lg:p-12 transition-all duration-500 hover:border-yellow-500/30"
        >
          <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
            The Audit <span className="text-yellow-500">Payload</span>
          </h3>
          <p className="text-slate-500 font-medium mb-12 max-w-md">
            A surgical review of your professional profile designed to bypass ATS filters and catch recruiter eyes.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* ITEM 1 */}
            <div className="group">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                <Search size={24} />
              </div>
              <h4 className="font-black text-white text-sm uppercase tracking-wider mb-2">
                ATS Keyword Gap
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Identifying missing industry-standard terms that are getting you auto-rejected.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="group">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                <Target size={24} />
              </div>
              <h4 className="font-black text-white text-sm uppercase tracking-wider mb-2">
                Impact Quantifiers
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Transforming "did things" into "achieved results" using data-driven metrics.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="group">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                <FileText size={24} />
              </div>
              <h4 className="font-black text-white text-sm uppercase tracking-wider mb-2">
                Scanability Check
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Fixing layout issues that make recruiters skip your profile in 6 seconds.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                Tip: Attach your target job description
              </p>
            </div>
            <button className="w-full sm:w-auto bg-yellow-500 hover:bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_10px_30px_rgba(234,179,8,0.2)]">
              Get My Free Audit <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT CARD: COMPARISON (ZOOM-IN) */}
        <div 
          data-aos="zoom-in"
          className="lg:col-span-2 bg-yellow-500 rounded-[32px] p-1 font-bold shadow-[0_20px_50px_rgba(234,179,8,0.1)]"
        >
          <div className="bg-[#0A0A0A] rounded-[30px] h-full p-8 flex flex-col">
            <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
              Fix Preview
            </div>

            <h3 className="text-xl font-black text-white mb-8 tracking-tight uppercase">
              The Evolution of a <span className="text-yellow-500">Bullet Point</span>
            </h3>

            {/* BEFORE */}
            <div className="relative mb-8">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-500/30 rounded-full"></div>
              <span className="text-[9px] font-black text-red-500 uppercase tracking-widest block mb-2">
                Before (Generic)
              </span>
              <p className="text-slate-500 italic text-sm bg-white/5 p-4 rounded-2xl border border-white/5">
                “Responsible for managing projects and team tasks.”
              </p>
            </div>

            {/* AFTER */}
            <div className="relative mt-auto">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-500 rounded-full"></div>
              <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest block mb-2">
                After (Optimized)
              </span>
              <div className="bg-yellow-500/5 border border-yellow-500/20 p-5 rounded-2xl">
                <div className="flex gap-3">
                  <CheckCircle size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                  <p className="text-white text-sm leading-relaxed">
                    “Led a <span className="text-yellow-500 font-black underline decoration-yellow-500/30">6-person team</span> to deliver 12 projects on time, improving stakeholder satisfaction by <span className="text-yellow-500 font-black underline decoration-yellow-500/30">30%</span>.”
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 mt-8 text-center uppercase tracking-widest font-black opacity-50">
              * Actual audit results may vary based on role
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuditSection;