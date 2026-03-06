import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

// Clients array
const clients = [
  { name: "Nvidia", logo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/202512/692f50553d6332b453bbc5c2_nvidia-logo-vert-blk/nvidia-logo-vert-blk_thmb.png" },
  { name: "Itel", logo: "https://static.vecteezy.com/system/resources/previews/020/927/134/non_2x/itel-brand-logo-phone-symbol-black-design-china-mobile-illustration-free-vector.jpg" },
  { name: "British Airways", logo: "https://i.pinimg.com/564x/49/57/07/4957072a43937ac100d9e2052fc95d70.jpg" },
  { name: "Emirates", logo: "https://thumbs.dreamstime.com/b/emirates-airline-based-dubai-united-arab-subsidiary-group-which-wholly-owned-government-s-investment-138609634.jpg" },
  { name: "Qatar Airways", logo: "https://images.seeklogo.com/logo-png/11/2/qatar-airways-logo-png_seeklogo-114155.png" },
  { name: "Salesforce", logo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2024/02/Salesforce-logo.jpg?w=1414&h=796&crop=1" },
  { name: "Accenture", logo: "https://discovertemplate.com/wp-content/uploads/2024/01/Accenture.jpg" },
  { name: "Barclays", logo: "https://images.icon-icons.com/2699/PNG/512/barclays_logo_icon_168534.png" },
  { name: "HSBC", logo: "https://substackcdn.com/image/fetch/$s_!mcSX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F60f56974-23cc-4a3b-980c-6669e4f11629_1200x1200.jpeg" },
  { name: "Google", logo: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.faa49ab5e1fff880.webp" },
  { name: "Tesla", logo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg" },
  { name: "OpenAI", logo: "https://1000logos.net/wp-content/uploads/2025/02/OpenAI-Logo.png" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
  { name: "Uber", logo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" },
  { name: "Amazon", logo: "https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg" },
  { name: "Airbnb", logo: "https://images.seeklogo.com/logo-png/28/2/airbnb-logo-png_seeklogo-284907.png" },
];

const ClientsSwiper = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-950">
      
      <h5 className="text-xl text-center text-gray-800 dark:text-white mb-8">
        Clients hired at companies like
      </h5>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={15}
        slidesPerView={8}
        loop={true}
        freeMode={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="mx-auto"
      >

        {clients.map((client, idx) => (
          <SwiperSlide key={idx}>

            <div className="
            flex items-center justify-center gap-2
            bg-white dark:bg-gray-800
            rounded-md
            px-3 py-2
            h-12
            border border-transparent
            hover:border-orange-500
            transition-all duration-300
            shadow-sm hover:shadow-md
            
            ">

              <img
                src={client.logo}
                alt={client.name}
                className="h-5 w-auto object-contain"
              />

              <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                {client.name}
              </span>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
};

export default ClientsSwiper;