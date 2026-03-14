import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from "lucide-react";

const faqs = [
  { question: "How long does it take to get my resume?", answer: "We usually deliver high-impact resumes within 2–4 business days, ensuring every line is engineered for performance." },
  { question: "Can I request revisions?", answer: "Yes. All packages include a dedicated revision period to ensure your final documents are 100% aligned with your career goals." },
  { question: "Do you provide LinkedIn profile optimization?", answer: "Absolutely. We rebuild your LinkedIn profile to maximize recruiter search visibility and professional authority." },
  { question: "What payment methods are accepted?", answer: "We accept all major secure payment methods including VISA, Mastercard, PayPal, and Stripe." },
  { question: "Can I chat directly with your team?", answer: "Yes. You'll have a direct line for communication via WhatsApp or our integrated support portal." },
  { question: "Is my data secure?", answer: "Completely. We follow strict privacy protocols; your personal data and career history are never shared with third parties." },
  { question: "Do you offer student packages?", answer: "Yes, we have specialized entry-level pricing. Reach out to verify your student status for a custom quote." },
  { question: "Can I upgrade my package later?", answer: "You can upgrade your service level at any point before the final delivery is signed off." },
  { question: "Do you provide cover letter services?", answer: "Yes, our premium packages include target-specific cover letters designed to bypass gatekeepers." },
  { question: "What if I need urgent delivery?", answer: "We offer a 'Fast-Track' 12-hour delivery service for high-priority career moves." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const profileImageUrl = "https://resumesuplift.com/_next/image?url=%2Fbrand%2FWhatsApp%2520Image%25202026-01-31%2520at%252012.05.58%2520AM.jpeg&w=1920&q=75";

  return (
    <section id="faq" className="py-0 px-6 bg-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">

        {/* Left Sticky Card */}
        <div className="lg:col-span-2 relative">
          <div className="bg-[#0A0A0A] border border-white/10 p-10 rounded-[32px] sticky top-32 h-fit transition-all duration-500 hover:border-yellow-500/20 shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <HelpCircle size={14} />
              Assistance
            </div>
            
            <h2 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase">
              Got <span className="text-yellow-500 italic">Questions?</span>
            </h2>
            
            <p className="text-slate-400 font-medium mb-10 leading-relaxed">
              Everything you need to know about the UPLIFT process. Can't find the answer? Abubakar is here to help.
            </p>

            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-4 mb-6">
                {/* SET IMAGE HERE */}
                <div className="relative">
                    <div className="absolute inset-0 bg-yellow-500 blur-md opacity-20 rounded-full"></div>
                    <img 
                        src={profileImageUrl} 
                        alt="Abubakar - Support Lead" 
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-yellow-500 shadow-lg"
                    />
                </div>
                <div>
                  <p className="text-white font-black uppercase text-sm tracking-wider">Abubakar</p>
                  <p className="text-yellow-500/60 text-[10px] font-bold uppercase tracking-widest">Support Lead</p>
                </div>
              </div>
              
              <p className="text-slate-500 text-xs font-medium mb-6">
                Still have questions? We usually reply within minutes during business hours.
              </p>

              <button className="w-full flex items-center justify-center gap-3 bg-yellow-500 hover:bg-white text-black font-black py-4 px-6 rounded-2xl transition-all duration-300 uppercase text-xs tracking-widest shadow-[0_10px_30px_rgba(234,179,8,0.1)] active:scale-95">
                <MessageCircle size={18} fill="currentColor" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Right Scrollable Questions */}
        <div
          className="lg:col-span-3 max-h-[700px] overflow-y-auto space-y-4 pr-4 custom-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border transition-all duration-500 rounded-2xl overflow-hidden ${
                openIndex === index 
                ? "bg-[#0F0F0F] border-yellow-500/40 shadow-[0_0_30px_rgba(234,179,8,0.05)]" 
                : "bg-[#0A0A0A] border-white/5 hover:border-white/20"
              }`}
            >
              <button
                className="w-full p-6 flex justify-between items-center text-left"
                onClick={() => toggle(index)}
              >
                <span className={`font-black uppercase tracking-tight transition-colors duration-300 ${
                  openIndex === index ? "text-yellow-500" : "text-white"
                }`}>
                  {faq.question}
                </span>
                <div className={`transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <p className="px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;