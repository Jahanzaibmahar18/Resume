import React from "react";
import { Star } from "lucide-react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

const flickityOptions = {
  wrapAround: true,
  autoPlay: 1500,
  pauseAutoPlayOnHover: true,
  pageDots: false,
  selectedAttraction: 0.015,
  friction: 0.25
};

const reviews = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James Walker",
    role: "Marketing Manager",
    date: "Feb 2025",
    review:
      "Amazing resume writing service. My CV now looks extremely professional and ATS optimized."
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emily Carter",
    role: "Software Engineer",
    date: "Jan 2025",
    review:
      "Very professional and quick turnaround. My LinkedIn profile improved instantly."
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Daniel Smith",
    role: "Business Analyst",
    date: "Dec 2024",
    review:
      "Highly recommended. They understand ATS systems and industry keywords very well."
  },
  {
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Sophia Lee",
    role: "HR Specialist",
    date: "Nov 2024",
    review:
      "Professional service and great communication. My resume looks much more impactful."
  },
  {
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Michael Brown",
    role: "Product Manager",
    date: "Oct 2024",
    review:
      "Excellent resume writing service. I received multiple interview calls."
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Olivia Davis",
    role: "UI/UX Designer",
    date: "Sep 2024",
    review:
      "The resume redesign was fantastic. Clean, ATS friendly and very professional."
  }
];

const ClientReviews = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-950">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-6">

        <div className="flex items-center justify-center w-fit mx-auto gap-2 bg-orange-200 text-orange-600 border border-orange-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          <Star size={14} />
          Client Reviews
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          What clients shared <span className="text-orange-500">with us.</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300">
          Real screenshots from WhatsApp, LinkedIn, and messages from happy clients.
        </p>

      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto mt-14 px-6">

        <Flickity
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
        >

          {reviews.map((item, index) => (

            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 h-full">

                {/* Client Info */}
                <div className="flex items-center mb-4">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>

                </div>

                {/* Button */}
                <button className="text-sm mb-4 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md">
                  Resume Writing
                </button>

                {/* Stars + Date */}
                <div className="flex items-center justify-between mb-3">

                  <div className="flex text-orange-500">
                    <Star size={16} fill="currentColor"/>
                    <Star size={16} fill="currentColor"/>
                    <Star size={16} fill="currentColor"/>
                    <Star size={16} fill="currentColor"/>
                    <Star size={16} fill="currentColor"/>
                  </div>

                  <span className="text-sm text-gray-500">{item.date}</span>

                </div>

                {/* Review */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.review}
                </p>

              </div>

            </div>

          ))}

        </Flickity>

      </div>

    </div>
  );
};

export default ClientReviews;