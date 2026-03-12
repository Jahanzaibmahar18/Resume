import React, { useState } from "react";
import { ArrowLeft, Eye, X } from "lucide-react";

const samples = [
  {
    id: 1,
    img: "https://resumesuplift.com/_next/image?url=%2Fsamples%2FResumes%2520Uplift%2520Sample%25201.jpg&w=1200&q=75",
    title: "Sample Resume 1",
  },
  {
    id: 2,
    img: "https://resumesuplift.com/_next/image?url=%2Fsamples%2FResumes%2520Uplift%2520Sample%25202.jpg&w=1200&q=75",
    title: "Sample Resume 2",
  },
  {
    id: 3,
    img: "https://resumesuplift.com/_next/image?url=%2Fsamples%2FResumes%2520Uplift%2520Sample%25206.jpeg&w=1200&q=75",
    title: "Sample Resume 3",
  },
  {
    id: 4,
    img: "https://resumesuplift.com/_next/image?url=%2Fsamples%2FResumes%2520Uplift%2520Sample%25208.jpeg&w=1200&q=75",
    title: "Sample Resume 4",
  },
   {
    id: 3,
    img: "https://resumesuplift.com/_next/image?url=%2Fsamples%2FResumes%2520Uplift%2520Sample%25206.jpeg&w=1200&q=75",
    title: "Sample Resume 3",
  },
   {
    id: 2,
    img: "https://resumesuplift.com/_next/image?url=%2Fsamples%2FResumes%2520Uplift%2520Sample%25202.jpg&w=1200&q=75",
    title: "Sample Resume 2",
  },
   {
    id: 1,
    img: "https://resumesuplift.com/_next/image?url=%2Fsamples%2FResumes%2520Uplift%2520Sample%25201.jpg&w=1200&q=75",
    title: "Sample Resume 1",
  },
];

const SampleUplift = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-[#020200] py-24 px-6 relative">

      {/* Back */}
      <div className="text-center mb-8">
        <button className="inline-flex items-center gap-2 text-white hover:text-[#FDC700] font-medium transition">
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FDC700] mb-4">
          The Uplift Gallery
        </h2>

        <p className="text-white/50 text-lg">
          Explore our collection of high-performance, ATS-ready resumes.
          Click any sample to view the optimized design and content layout.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {samples.map((sample) => (
          <div key={sample.id} className="group cursor-pointer">

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200 group-hover:border-[#FDC700] transition duration-500 group-hover:shadow-[0_0_35px_rgba(250,204,21,0.4)]">

              <img
                src={sample.img}
                alt={sample.title}
                className="w-full h-[380px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-6">

                <div
                  onClick={() => setSelectedImage(sample.img)}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#FDC700] transition cursor-pointer"
                >
                  <Eye size={18} className="text-black" />
                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="mt-4">

              <h4 className="font-semibold text-white group-hover:text-[#FDC700] transition">
                {sample.title}
              </h4>

              <div className="flex items-center gap-3 mt-2">

                <span className="text-xs px-2 py-1 border border-[#FDC700] bg-yellow-200/30 text-white rounded">
                  JPEG
                </span>

                <span className="text-white px-2 py-1   rounded font-medium">
                  <span className="text-green-600 mr-1">●</span>
                  ATS Optimized
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>


      {/* IMAGE MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/80">

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-16 right-6 bg-white rounded-full p-2 hover:bg-[#FDC700] hover:text-white transition"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Resume Preview"
            className="max-w-4xl mt-15 max-h-[90vh]  rounded-lg shadow-2xl"
          />

        </div>
      )}

    </section>
  );
};

export default SampleUplift;