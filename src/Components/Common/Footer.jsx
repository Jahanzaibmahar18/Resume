import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#010202] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            RESUMES <span className="text-[#F0B100]">UPLIFT</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            We craft professional, ATS-optimized resumes that help you stand out
            and land more interviews.
          </p>

          <div className="flex gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#F0B100] transition cursor-pointer">
              <Linkedin size={18} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#F0B100] transition cursor-pointer">
              <Facebook size={18} />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-[#F0B100] transition cursor-pointer">
              <Instagram size={18} />
            </div>
          </div>
        </div>

        {/* Menu */}
        <div>
          <p className="text-gray-400 tracking-widest text-sm mb-6">MENU</p>

          <ul className="space-y-3">
            {["Home", "Services", "Work", "Process", "FAQ"].map((item) => (
              <li
                key={item}
                className="hover:text-[#F0B100] cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-gray-400 tracking-widest text-sm mb-6">CONTACT</p>

          <div className="space-y-4">
            <a
              href="mailto:resumeuplift@gmail.com"
              className="flex items-center gap-3 hover:text-[#F0B100] transition"
            >
              <Mail size={18} /> jahanzaibmahar18@gmail.com 
            </a>

            <a
              href="tel:+923076341312"
              className="flex items-center gap-3 hover:text-[#F0B100] transition"
            >
              <Phone size={18} /> +92 307 6341312 
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-gray-400 tracking-widest text-sm mb-6">
            NEWSLETTER
          </p>

          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get resume tips and career updates.
          </p>

          <div className="flex bg-white/5 rounded-lg overflow-hidden border border-white/10">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-3 text-sm w-full outline-none"
            />

            <button className="bg-[#F0B100] px-4 flex items-center justify-center hover:bg-[#F0B100]/90 transition">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

        <p>
          © {new Date().getFullYear()} Resumes Uplift. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-[#F0B100] cursor-pointer">
            Privacy Policy
          </span>

          <span className="hover:text-[#F0B100] cursor-pointer">
            Terms of Service
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;