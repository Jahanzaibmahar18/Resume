import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const flickityOptions = {
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
  pageDots: true,
  prevNextButtons: false,
  selectedAttraction: 0.01,
  friction: 0.2,
  contain: true
};

const reviews = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James Walker",
    role: "Marketing Manager",
    date: "Feb 2026",
    review: "Amazing resume writing service. My CV now looks extremely professional and ATS optimized. Highly impressed with the quality."
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emily Carter",
    role: "Software Engineer",
    date: "Jan 2026",
    review: "Very professional and quick turnaround. My LinkedIn profile improved instantly, and I started getting recruiter hits immediately."
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Daniel Smith",
    role: "Business Analyst",
    date: "Dec 2025",
    review: "Highly recommended. They understand ATS systems and industry keywords very well. The best investment for my career."
  },
  {
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Sophia Lee",
    role: "HR Specialist",
    date: "Nov 2025",
    review: "Professional service and great communication. My resume looks much more impactful and tells my story perfectly."
  }
];

const ClientReviews = () => {
  return (
    <div className="py-0 bg-black relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-8 relative z-10 mb-20">
        <div className="flex items-center justify-center w-fit mx-auto gap-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
          <Sparkles size={14} fill="currentColor" />
          Client Testimonials
        </div>

        <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
          What Clients <span className="text-yellow-500 italic">Shared.</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
          Verified feedback from professionals who successfully leveled up their careers through our premium writing services.
        </p>
      </div>

      {/* Slider Container */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <Flickity
          className={"carousel focus:outline-none"}
          elementType={"div"}
          options={flickityOptions}
        >
          {reviews.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
              <div className="group bg-[#0A0A0A] border border-white/5 p-8 rounded-[32px] h-full relative transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                
                {/* Quote Icon Overlay */}
                <div className="absolute top-6 right-8 text-white/5 group-hover:text-yellow-500/10 transition-colors">
                  <Quote size={60} strokeWidth={3} />
                </div>

                {/* Client Info */}
                <div className="flex items-center mb-8 relative z-10">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-yellow-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/10 relative z-10"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-black text-white text-lg tracking-tight uppercase">
                      {item.name}
                    </h4>
                    <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Service Badge */}
                <div className="inline-block bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[9px] font-black text-white uppercase tracking-widest mb-6">
                  Resume Writing
                </div>

                {/* Review Text */}
                <p className="text-slate-400 text-base leading-relaxed mb-8 italic italic font-medium">
                  "{item.review}"
                </p>

                {/* Bottom Row: Stars + Date */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5 relative z-10">
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Flickity>
      </div>

      {/* Custom Slider Dots Styling */}
      <style jsx="true">{`
        .flickity-page-dots .dot {
          background: #333;
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        .flickity-page-dots .dot.is-selected {
          background: #eab308;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ClientReviews;