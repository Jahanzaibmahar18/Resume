import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

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
    <div className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CARD */}
        <div className="flex justify-center">

          <div className="relative group">

            {/* Live Stats Box */}
            <div className="absolute -top-10 left-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg px-5 py-3 z-10">
              <p className="text-sm text-gray-500">
                <span className="text-green-700 text-3xl font-bold">.</span> Live Stats
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                500+
              </h3>
              <p className="text-xs text-gray-500">
                Clients Hired Globally
              </p>
            </div>

            {/* Resume Card */}
            <div className="w-[320px] h-105 bg-gray-100 dark:bg-gray-900 rounded-xl flex flex-col justify-between items-center p-8 transition duration-500 hover:-rotate-3 hover:shadow-2xl">

              {/* Resume Text */}
              <h2 className="text-6xl 'mt-25 font-bold text-gray-900 dark:text-white mt-10">
                Resume
              </h2>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                <Star className="text-yellow-500 fill-yellow-500" />
                <Star className="text-yellow-500 fill-yellow-500" />
                <Star className="text-yellow-500 fill-yellow-500" />
                <Star className="text-yellow-500 fill-yellow-500" />
                <Star className="text-yellow-500 fill-yellow-500" />
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="text-orange-500 font-semibold mb-3 ">
            <span className=" text-orange-500 text-3xl font-bold">.</span>
            Proof of Results
          </p>

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Your Career, Your Story <span className="text-orange-500 text-6xl">Unforgettable.</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            We don't just write resumes; we craft career narratives.
            100% personalized, ATS-optimized, and designed to position
            you as the top 1% candidate in your field.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-12">

            <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              View Samples
              <ArrowRight size={18}/>
            </button>

            <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:border-orange-500 hover:text-orange-500 transition">
              Get Free Review
              <ArrowRight size={18}/>
            </button>

          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-10">

            <div className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500"/>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {count1}.5%
                </h3>
                <p className="text-sm text-gray-500">Interviews Secured</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500"/>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {count2}+
                </h3>
                <p className="text-sm text-gray-500">Global Markets</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500"/>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {count3}.9/5
                </h3>
                <p className="text-sm text-gray-500">Client Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="text-yellow-500"/>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {count4}h
                </h3>
                <p className="text-sm text-gray-500">Express Delivery</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default StorySection;