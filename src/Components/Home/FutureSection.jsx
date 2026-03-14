import React from "react";

const FutureSection = () => {
  return (
    <section className="relative overflow-hidden -mt-35 bg-black text-white py-24">

      {/* Scrolling Background Text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-[120px] font-extrabold tracking-widest text-white/10 mx-10">
            READY TO START
          </span>
          <span className="text-[120px] font-extrabold tracking-widest text-white/10 mx-10">
            READY TO START
          </span>
          <span className="text-[120px] font-extrabold tracking-widest text-white/10 mx-10">
            READY TO START
          </span>
          <span className="text-[120px] font-extrabold tracking-widest text-white/10 mx-10">
            READY TO START
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-2xl mx-auto text-center px-6">
        <h1 className="text-[30px] md:text-[80px] lg:text-[100px] font-bold leading-tight text-white">
          Let’s Build <br />
          <span className="text-orange-500">Your Future.</span>
        </h1>

        <p className="mt-6 text-gray-300 text-2xl">
          Stop blending in. Get the career documents that put you in the top 1%
          of applicants.
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold text-white"
          >
            Chat on WhatsApp
          </a>

          <a
            href="#"
            className="border border-white hover:border-orange-500 hover:text-orange-500 transition px-6 py-3 rounded-lg font-semibold"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default FutureSection;