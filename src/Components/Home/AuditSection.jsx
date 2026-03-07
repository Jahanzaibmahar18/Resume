import React from "react";
import { Search, Target, FileText, CheckCircle, Sparkles } from "lucide-react";

const AuditSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 px-6">

      {/* TOP SECTION */}

      <div className="max-w-3xl mx-auto text-center mb-16">

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          <Sparkles size={14} />
          FREE RESUME AUDIT
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          See exactly what you'll get<span className="text-orange-500">.</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          Before you order, I can review your current CV and share a clear snapshot
          of what to fix to start getting interviews.
        </p>

      </div>

      {/* CARDS */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            What you'll receive
          </h3>

          <p className="text-gray-500 mb-10">
            A practical, actionable review (not generic feedback) so you know exactly what to improve.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">

            {/* ITEM 1 */}

            <div>
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-orange-200 text-orange-500 mb-4">
                <Search size={20} />
              </div>

              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                ATS Audit Snapshot
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Keyword match, missing skills, and quick wins to improve screening results.
              </p>
            </div>

            {/* ITEM 2 */}

            <div>
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-orange-200 text-orange-500 mb-4">
                <Target size={20} />
              </div>

              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                Stronger Impact Bullets
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Rewritten examples that turn responsibilities into measurable outcomes.
              </p>
            </div>

            {/* ITEM 3 */}

            <div>
              <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-orange-200 text-orange-500 mb-4">
                <FileText size={20} />
              </div>

              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                Clean, Recruiter-Friendly Format
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Structure that's easy to scan and safe for ATS parsing.
              </p>
            </div>

          </div>

          <div className="border-t pt-6 flex items-center justify-between">

            <p className="text-sm text-gray-500">
              <span className="font-semibold">Tip:</span> Send your current CV + target job title.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              Get My Free Audit →
            </button>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">

          <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">
            PREVIEW
          </span>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Example of what I fix
          </h3>

          {/* BEFORE */}

          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl border mb-6">

            <span className="text-xs text-gray-400 uppercase tracking-wider">
              Before
            </span>

            <p className="text-gray-600 italic mt-2">
              “Responsible for managing projects and team tasks.”
            </p>

          </div>

          {/* AFTER */}

          <div className="border border-orange-300 rounded-xl p-5 bg-orange-50/40 dark:bg-gray-800">

            <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
              After
            </span>

            <div className="flex gap-3 mt-3">

              <CheckCircle
                size={18}
                className="text-green-500 mt-1 shrink-0"
              />

              <p className="text-gray-700 dark:text-gray-300">

                “Led a
                <span className="bg-orange-200 px-1 rounded mx-1 font-semibold">
                  6-person team
                </span>
                to deliver 12 projects on time, improving stakeholder satisfaction by
                <span className="bg-orange-200 px-1 rounded mx-1 font-semibold">
                  30%
                </span>.”

              </p>

            </div>

          </div>

          <p className="text-sm text-gray-500 mt-6">
            You'll get role-specific keywords, a cleaner structure, and stronger impact statements.
          </p>

        </div>

      </div>

    </section>
  );
};

export default AuditSection;