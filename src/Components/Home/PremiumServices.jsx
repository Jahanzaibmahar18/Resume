import React from "react";
import {
  FileText,
  RefreshCcw,
  Mail,
  Linkedin,
  Briefcase,
  ArrowRight,
  Star
} from "lucide-react";

const PremiumServices = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>

            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-500 border border-orange-300 hover:border-orange-600 px-4 py-1 rounded-full text-sm mb-4">
              <Star size={14}/>
              Premium Services
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Get Noticed. <span className="text-orange-500">Get Hired.</span>
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl">
              Strategic career documents crafted to bypass bots and impress humans.
            </p>
          </div>

          {/* View Pricing Button */}
          <button className="text-black dark:text-white font-semibold mt-20 transition hover:text-orange-500">
            View all pricing →
          </button>

        </div>

        {/* Row 1 */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">

          {/* Big Card */}
          <div className="group md:col-span-2 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl transition">

            <FileText className="text-gray-500 mb-4 group-hover:text-orange-500 transition" size={28} />

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition">
              ATS Optimized CV/Resume Writing
            </h3>

            <div className="w-full h-px bg-gray-300 mb-4 group-hover:bg-transparent"></div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Built from scratch with keywords that pass Automated Tracking Systems and catch recruiter attention.
            </p>

            <button className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition">
              Resume from scratch
              <ArrowRight size={18} className="text-gray-500 group-hover:text-orange-500 transition"/>
            </button>

          </div>

          {/* Small Card */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-6 rounded-xl transition">

            <RefreshCcw className="text-gray-500 mb-4 group-hover:text-orange-500 transition" size={24} />

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition">
              Resume Revamp
            </h3>

            <div className="w-full h-px bg-gray-300 mb-4 group-hover:bg-transparent"></div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Modernize your existing resume with a clean, professional layout that highlights achievements.
            </p>

            <button className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition">
              Order resume revamp
              <ArrowRight size={18} className="text-gray-500 group-hover:text-orange-500 transition"/>
            </button>

          </div>

        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-6 rounded-xl transition">

            <Mail className="text-gray-500 mb-4 group-hover:text-orange-500 transition" size={24} />

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition">
              Cover Letters
            </h3>

            <div className="w-full h-px bg-gray-300 mb-4 group-hover:bg-transparent"></div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Persuasive, tailored cover letters that tell your story.
            </p>

            <button className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition">
              View details
              <ArrowRight size={18} className="text-gray-500 group-hover:text-orange-500 transition"/>
            </button>

          </div>

          {/* Card 2 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-6 rounded-xl transition">

            <Linkedin className="text-gray-500 mb-4 group-hover:text-orange-500 transition" size={24} />

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition">
              LinkedIn Optimization
            </h3>

            <div className="w-full h-px bg-gray-300 mb-4 group-hover:bg-transparent"></div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Full profile overhaul to increase visibility and connection requests.
            </p>

            <button className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition">
              View details
              <ArrowRight size={18} className="text-gray-500 group-hover:text-orange-500 transition"/>
            </button>

          </div>

          {/* Card 3 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-6 rounded-xl transition">

            <Briefcase className="text-gray-500 mb-4 group-hover:text-orange-500 transition" size={24} />

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition">
              Career-Specific CVs
            </h3>

            <div className="w-full h-px bg-gray-300 mb-4 group-hover:bg-transparent"></div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Strategically written resumes for Tech, Finance, Healthcare, and Executive roles.
            </p>

            <button className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition">
              View details
              <ArrowRight size={18} className="text-gray-500 group-hover:text-orange-500 transition"/>
            </button>

          </div>

        </div>

        {/* Bottom Button */}
        <div className="mt-14 flex justify-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Choose Your Package
          </button>
        </div>

        <p className="text-center text-gray-500 mt-3 text-sm">
          100% satisfaction guaranteed
        </p>

      </div>
    </div>
  );
};

export default PremiumServices;