import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Clients array with logos
const clients = [
  { name: "Nvidia", logo: "/logos/nvidia.png" },
  { name: "Itel", logo: "/logos/itel.png" },
  { name: "British Airways", logo: "/logos/british_airways.png" },
  { name: "Emirates", logo: "/logos/emirates.png" },
  { name: "Qatar Airways", logo: "/logos/qatar_airways.png" },
  { name: "Nvidia", logo: "/logos/nvidia.png" },
  { name: "Itel", logo: "/logos/itel.png" },
  { name: "British Airways", logo: "/logos/british_airways.png" },
  { name: "Emirates", logo: "/logos/emirates.png" },
  { name: "Qatar Airways", logo: "/logos/qatar_airways.png" },
];

const ClientsSwiper = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-950">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Clients hired at companies like
      </h2>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="mx-auto"
      >
        {clients.map((client, idx) => (
          <SwiperSlide
            key={idx}
            className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md px-4 py-3"
            style={{ width: "auto" }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-10 w-auto mr-3"
            />
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {client.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSwiper;