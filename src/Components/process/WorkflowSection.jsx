import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { UploadCloud, Search, PenTool, Rocket, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Onboarding & Audit",
    desc: "Upload your current documents. I perform a clinical audit of your existing CV against global ATS standards.",
    icon: UploadCloud,
  },
  {
    number: "02",
    title: "Market Alignment",
    desc: "I research your target industry and senior-level keywords to ensure your profile ranks at the top of the pile.",
    icon: Search,
  },
  {
    number: "03",
    title: "The Crafting Phase",
    desc: "Your new CV is built line-by-line. No generic AI bullet points; every sentence is engineered as a career win.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Launch & Hired",
    desc: "Receive your final ATS-optimized package, plus a LinkedIn guide to boost your search visibility instantly.",
    icon: Rocket,
  },
];

const WorkflowSection = () => {
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="process" className="py-14 px-6 bg-black relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
          <Sparkles size={14} fill="currentColor" />
          Workflow
        </div>

        {/* AOS FADE RIGHT */}
        <h2 
          data-aos="fade-right"
          className="text-5xl lg:text-7xl font-black text-white mb-2 tracking-tighter uppercase"
        >
          Your Roadmap to
        </h2>
        
        {/* AOS FADE LEFT */}
        <h2 
          data-aos="fade-left"
          className="text-5xl lg:text-7xl font-black text-yellow-500 tracking-tighter uppercase italic"
        >
          The Next Level.
        </h2>

        <p className="text-slate-400 mt-8 text-lg max-w-2xl mx-auto font-medium">
          A streamlined, white-glove process designed exclusively for high-performing professionals and industry leaders.
        </p>
      </div>

      {/* Steps Container */}
      <div className="max-w-7xl mx-auto relative">
        
        {/* Connection Line (Desktop Only) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 z-0"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150} // Staggered delay for better visual flow
                className="group relative bg-[#0A0A0A] border border-white/5 rounded-[32px] p-8 transition-all duration-500 hover:border-yellow-500/40 hover:bg-[#0F0F0F]"
              >
                {/* Step Number */}
                <span className="absolute top-8 right-8 text-xs font-black text-white/10 group-hover:text-yellow-500/20 transition-colors tracking-widest">
                  {step.number}
                </span>

                {/* Icon Box */}
                <div className="mb-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-yellow-500 transition-all duration-500 group-hover:-rotate-6">
                  <Icon
                    size={28}
                    className="text-yellow-500 group-hover:text-black transition-colors"
                  />
                </div>

                {/* Title */}
                <h4 className="font-black text-xl text-white group-hover:text-yellow-500 transition-colors uppercase tracking-tight mb-4">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-yellow-500 transition-all duration-500 group-hover:w-1/3 rounded-t-full"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10 relative z-10">
        <button className="group inline-flex items-center gap-3 bg-yellow-500 hover:bg-white text-black font-black uppercase tracking-widest text-xs px-10 py-5 rounded-full transition-all shadow-[0_10px_40px_rgba(234,179,8,0.15)] active:scale-95">
          Ready to see the difference?
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

    </section>
  );
};

export default WorkflowSection;