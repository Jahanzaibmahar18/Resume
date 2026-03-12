import React from "react";
import { ArrowRight, Check, User, Briefcase, Crown } from "lucide-react";

const plans = [
  {
    title: "Entry Level",
    icon: User,
    desc: "Perfect for students, fresh graduates, and early-career professionals",
    price: "$150",
    delivery: "2 days delivery",
    breakdown: [
      { name: "Resume", price: "$70" },
      { name: "Cover Letter", price: "$40" },
      { name: "LinkedIn Profile Optimization", price: "$40" },
    ],
    revisions: "2",
  },
  {
    title: "Mid Level",
    icon: Briefcase,
    desc: "Ideal for professionals with 3–7 years experience seeking career growth",
    price: "$250",
    delivery: "3 days delivery",
    breakdown: [
      { name: "Resume", price: "$120" },
      { name: "Cover Letter", price: "$70" },
      { name: "LinkedIn Profile Optimization", price: "$60" },
    ],
    revisions: "3",
  },
  {
    title: "Executive Level",
    icon: Crown,
    desc: "Designed for senior professionals, managers, and executives",
    price: "$400",
    delivery: "4 days delivery",
    breakdown: [
      { name: "Executive Resume", price: "$200" },
      { name: "Cover Letter", price: "$100" },
      { name: "LinkedIn Optimization", price: "$100" },
    ],
    revisions: "Unlimited",
  },
];

const InvestmentSection = () => {
  return (
    <section className="w-full bg-black py-24 px-6 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/5 blur-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

      {/* TOP */}
      <div className="max-w-3xl mx-auto text-center mb-20 relative z-10">

        <span className="bg-yellow-500/10 text-yellow-500 px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.3em] uppercase border border-yellow-500/20">
          Investment
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-white mt-6 tracking-tight">
          Invest in your <span className="text-yellow-500 italic">future self</span>
        </h2>

        <p className="text-slate-400 mt-4 text-lg">
          Transparent pricing. No hidden fees. 100% human-crafted.
        </p>

        <button className="mt-6 text-yellow-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
          View all pricing
          <ArrowRight size={18} />
        </button>

      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

        {plans.map((plan, index) => {
          const Icon = plan.icon;

          return (
            <div
              key={index}
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 
              rounded-3xl p-8 transition-all duration-500 hover:border-yellow-500/40 hover:-translate-y-2"
            >

              {/* hover glow */}
              <div className="absolute -inset-1 bg-yellow-500/5 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

              <div className="relative z-10">

                {/* icon */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl 
                bg-black border border-white/10 group-hover:border-yellow-500/40 transition">

                  <Icon size={26} className="text-yellow-500" />

                </div>

                {/* title */}
                <h3 className="text-xl font-black text-white mb-2">
                  {plan.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6">
                  {plan.desc}
                </p>

                {/* price */}
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>

                  <p className="text-slate-500 text-sm mt-1">
                    {plan.delivery}
                  </p>
                </div>

                {/* breakdown */}
                <div className="border-t border-white/10 pt-4 mb-6">

                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Package breakdown
                  </h4>

                  {plan.breakdown.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-sm text-slate-400 mb-2"
                    >
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                  ))}

                  <div className="flex justify-between font-bold text-white mt-3">
                    <span>All combined</span>
                    <span>{plan.price}</span>
                  </div>

                </div>

                {/* extras */}
                <div className="text-sm text-slate-400 mb-6 space-y-1">
                  <p>{plan.delivery}</p>
                  <p>12 hours: +$20</p>
                  <p>Revisions: {plan.revisions}</p>
                </div>

                {/* included */}
                <div className="mb-8">

                  <h4 className="font-bold text-white mb-3">
                    What's included
                  </h4>

                  <ul className="space-y-2 text-sm text-slate-400">

                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-yellow-500" />
                      Resume
                    </li>

                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-yellow-500" />
                      Cover Letter
                    </li>

                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-yellow-500" />
                      LinkedIn Profile Optimization
                    </li>

                  </ul>

                </div>

                {/* button */}
                <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition">
                  Order Now
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default InvestmentSection;