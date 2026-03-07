import React from "react";
import { Star, CheckCircle } from "lucide-react";

const HeroHome = () => {
  return (
    <div className="pt-28  px-6 bg-gray-50 dark:bg-gray-950 min-h-screen relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition">
          <div className="flex gap-4">
            <span className="flex items-center gap-2 bg-[#FAEBE1] text-[#FF6800] px-4 py-1 rounded-full text-sm font-medium transform hover:scale-105 transition duration-300">
              <Star size={16} fill="#FF6800" stroke="#FF6800" />
              Rated #1 CV Service
            </span>

            <span className="flex items-center gap-2 bg-[#FAEBE1] text-[#FF6800] px-4 py-1 rounded-full text-sm font-medium transform hover:scale-105 transition duration-300">
              <CheckCircle size={16} />
              ATS Optimized
            </span>
          </div>

          <h1 className="text-6xl font-bold mt-3 text-gray-800 dark:text-white leading-snug">
            <span className="text-[#FF6800]"> ATS-Optimized</span> <br />
            Resumes & CVs That Land You <span className="text-[#FF6800]"> Interviews</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            Stop getting filtered out by ATS. I craft recruiter-approved CVs,
            resumes, and LinkedIn profiles that highlight your impact and match
            your target role.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105 duration-300">
              Receive My CV
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition transform hover:scale-105 duration-300">
              Review Samples
            </button>
          </div>

          <p className="mt-6 font-semibold text-gray-700 dark:text-gray-200">
            500+ Clients Hired
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition max-h-100 overflow-hidden">
  {/* Star in corner with background */}
  <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-100/80 rounded-full flex items-center justify-center animate-rotate shadow-lg">
    <Star size={24} fill="#facc15" stroke="#facc15" />
  </div>

  <span className="bg-[#FAEBE1] text-[#FF6800] px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
    MEET OUR TEAM
  </span>

  <div className="flex items-center gap-6 mt-6">
    <img
      src="https://resumesuplift.com/_next/image?url=%2Fbrand%2FWhatsApp%2520Image%25202026-01-31%2520at%252012.05.58%2520AM.jpeg&w=1920&q=75"
      alt="Muhammad Abu Bakar"
      className="w-28 h-28 rounded-full object-cover border-4 border-blue-600"
    />

    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Muhammad Abu Bakar
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Expert Writing Head
      </p>

      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#facc15" stroke="#facc15" />
        ))}
        <span className="text-sm font-semibold text-yellow-500 ml-2">
          Top Rated
        </span>
      </div>
    </div>
  </div>

  <p className="mt-6 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
    Certified Professional Resume Writer · LinkedIn Optimization Specialist · Cover Letter Expert · ATS-Compliant Creator · Executive Career Branding · Job-Winning Resumes
  </p>

  <div className="mt-6 flex gap-4">
    <span className="flex items-center gap-2 bg-green-100/40 text-gray-600 px-4 py-1 rounded-full text-sm">
      <CheckCircle size={16} className="text-green-600" />
      Recruiter Approved
    </span>

    <span className="flex items-center gap-2 bg-blue-100/40 text-gray-600 px-4 py-1 rounded-full text-sm">
      <CheckCircle size={16} className="text-green-600" />
      ATS Optimized
    </span>
  </div>
</div>

      </div>
    </div>
  );
};

export default HeroHome;