import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
];

const CircularClients = () => {
  const [isOpen, setIsOpen] = useState(false);
  const radius = 260; 

  return (
    <motion.div 
      animate={{ height: isOpen ? "700px" : "150px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="relative flex justify-center items-center bg-black overflow-hidden w-full"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        
        {/* Center Button - Initial size matches Client Cards */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`z-50 flex flex-col items-center justify-center bg-white border-2 border-yellow-500 shadow-xl cursor-pointer transition-all duration-500 ${
            isOpen ? "w-28 h-28 rounded-full" : "w-32 h-16 rounded-xl"
          }`}
        >
          <span className="font-bold uppercase text-[10px] tracking-widest text-black leading-none">
            {isOpen ? "Close" : "Clients"}
          </span>
          {!isOpen && (
            <span className="text-[7px] font-bold opacity-40 mt-1 uppercase leading-none">
              Click to Expand
            </span>
          )}
        </motion.button>

        {/* Circular Orbit - Classic Rotation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ rotate: 0, scale: 0, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              exit={{ rotate: 0, scale: 0, opacity: 0 }}
              transition={{ 
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                scale: { duration: 0.5, ease: "easeOut" },
                opacity: { duration: 0.3 }
              }}
              className="absolute w-[550px] h-[550px] flex items-center justify-center pointer-events-none"
            >
              {clients.map((client, idx) => {
                const angle = (idx / clients.length) * 2 * Math.PI;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={idx}
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: x, y: y }}
                    className="absolute pointer-events-auto"
                  >
                    {/* Reverse rotation ensures logos stay upright while orbiting */}
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="relative group"
                    >
                      {/* Logo Card */}
                      <div className="bg-white p-3 rounded-xl border border-gray-200 w-32 h-16 flex items-center justify-center shadow-md hover:border-yellow-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>

                      {/* Yellow Tooltip Name */}
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[9px] font-black uppercase px-3 py-1.5 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1 pointer-events-none whitespace-nowrap z-[60]">
                        {client.name}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CircularClients;