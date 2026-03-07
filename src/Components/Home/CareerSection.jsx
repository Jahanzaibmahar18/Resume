import React from "react";
import { CheckCircle } from "lucide-react";

const CareerSection = () => {

  const differenceCards = [
    {
      title: "100% Human-Written",
      desc: "No AI generators. Every sentence is crafted to highlight your unique value."
    },
    {
      title: "ATS-Friendly Formats",
      desc: "Clean layouts ensuring your CV passes the bots and reaches the recruiter."
    },
    {
      title: "Industry-Specific Strategy",
      desc: "Keywords and phrasing tailored to your target role and sector."
    },
    {
      title: "Fast Turnaround",
      desc: "Get your new CV in as little as 48 hours without compromising quality."
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-950 py-20">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT CARD */}
        <div className="relative w-full h-150 flex items-end justify-center overflow-hidden rounded-xl group">

          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
            alt="Expert Guidance"
            className="absolute inset-0 w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-110"
          />

          <div className="relative z-10 text-center pb-12 px-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-orange-500 transition duration-500">
              Expert Guidance
            </h3>

            <p className="text-white text-lg md:text-xl">
              “Your career story deserves to be told with power, precision, and purpose.”
            </p>
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="flex flex-col bg-white dark:bg-gray-900 rounded-xl shadow p-8">

          {/* LABEL */}
          <span className="bg-[#FAEBE1] w-fit text-[#FF6800] px-4 py-1 rounded-full text-xs font-semibold tracking-wide inline-flex items-center mb-4">
            <CheckCircle className="text-[#FF6800] mr-2" size={16} />
            THE DIFFERENCE
          </span>

          {/* HEADING */}
          <h4 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Trust Me With Your <span className="text-[#FF6800]">Career?</span>
          </h4>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Most resume writers just fix grammar. I rebuild your professional narrative to position you as the high-value candidate companies are fighting for.
          </p>

          {/* CARDS GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {differenceCards.map((card, index) => (

              <div
                key={index}
                className="relative p-6 rounded-xl bg-gray-100 dark:bg-gray-800 group overflow-hidden cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* Hover background */}
                <span className="absolute inset-0 bg-linear-to-r from-orange-200 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-30 transition duration-500 pointer-events-none"></span>

                <h5 className="flex items-center font-semibold text-gray-900 dark:text-white mb-2 relative z-10 group-hover:text-orange-500 transition duration-500">
                  <CheckCircle className="text-orange-500 mr-2" size={18} />
                  {card.title}
                </h5>

                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  {card.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default CareerSection;