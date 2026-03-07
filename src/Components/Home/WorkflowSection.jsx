import React from "react";
import { UploadCloud, Search, PenTool, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Onboarding & Audit",
    desc: "Upload your current documents. I perform a clinical audit of your existing CV against ATS standards.",
    icon: UploadCloud,
  },
  {
    number: "02",
    title: "Market Alignment",
    desc: "I research your target industry and senior-level keywords to ensure your profile ranks at the top.",
    icon: Search,
  },
  {
    number: "03",
    title: "The Crafting Phase",
    desc: "Your new CV is built line-by-line. No generic AI bullet points; every sentence is a career win.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Launch & Hired",
    desc: "Receive your final ATS-optimized package, plus a LinkedIn guide to boost search visibility.",
    icon: Rocket,
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">

        <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold mb-4">
          Workflow
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Your Roadmap to
        </h2>

        <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
          The Next Level.
        </h2>

        <p className="text-gray-600 mt-4">
          A streamlined, white-glove process designed for high-performing professionals.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="relative group bg-white rounded-xl p-6 hover:shadow-lg transition"
            >

              {/* Number */}
              <span className="absolute top-5 right-6 text-sm text-gray-400 font-semibold">
                {step.number}
              </span>

              {/* Icon Box */}
              <div className="mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 group-hover:bg-orange-100 transition transform group-hover:scale-110">

                <Icon
                  size={30}
                  className="text-gray-700 group-hover:text-orange-500 transition"
                />

              </div>

              {/* Title */}
              <h4 className="font-semibold text-lg text-gray-900 group-hover:text-orange-500 transition">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {step.desc}
              </p>

            </div>
          );
        })}

      </div>

      {/* Button */}
      <div className="text-center mt-16">

        <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full transition">

          Ready to see the difference?
          <ArrowRight size={18} />

        </button>

      </div>

    </section>
  );
};

export default WorkflowSection;