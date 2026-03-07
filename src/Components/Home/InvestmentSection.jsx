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
    <section className="py-24 px-6 bg-white">

      {/* Top Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
          Investment
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Invest in your future self.
        </h2>

        <p className="text-gray-600 mt-3">
          Transparent pricing. No hidden fees. 100% human-crafted.
        </p>

        <button className="mt-6 text-orange-500 font-semibold inline-flex items-center gap-2">
          View all pricing
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {plans.map((plan, index) => {
          const Icon = plan.icon;

          return (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-8 border border-transparent 
                         hover:border-orange-200 hover:shadow-xl duration-1000 transition-transform transform 
                         hover:-translate-y-3"
            >
              {/* Icon */}
              <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-xl 
                              bg-gray-100 group-hover:bg-orange-500 transition duration-1000 transform 
                              group-hover:scale-110">
                <Icon
                  size={28}
                  className="text-gray-700 group-hover:text-white transition"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 mb-6">
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <p className="text-gray-500 text-sm mt-1">
                  {plan.delivery}
                </p>
              </div>

              {/* Breakdown */}
              <div className="border-t pt-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Package breakdown
                </h4>

                {plan.breakdown.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm text-gray-600 mb-2"
                  >
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                ))}

                <div className="flex justify-between font-semibold text-gray-900 mt-3">
                  <span>All combined</span>
                  <span>{plan.price}</span>
                </div>
              </div>

              {/* Extra */}
              <div className="text-sm text-gray-600 mb-6">
                <p>{plan.delivery}</p>
                <p>12 hours: +$20</p>
                <p>Revisions: {plan.revisions}</p>
              </div>

              {/* Included */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">
                  What's included
                </h4>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-orange-500" />
                    Resume
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-orange-500" />
                    Cover Letter
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-orange-500" />
                    LinkedIn Profile Optimization
                  </li>
                </ul>
              </div>

              {/* Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white 
                                 font-semibold py-3 rounded-lg transition">
                Order Now
              </button>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default InvestmentSection;