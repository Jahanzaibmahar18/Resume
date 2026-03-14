import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // navigation targets use react-router paths now
  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Samples", path: "/samples" },
    { name: "Work", path: "/work" },
    { name: "Process", path: "/process" },
    { name: "FAQ", path: "/fqs" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${scrolled
        ? "py-3 bg-black/95 backdrop-blur-xl border-b border-yellow-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
        : "py-6 bg-black"
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Brand Identity */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.5)]">
            <Sparkles size={22} className="text-black" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">
              UPLIFT<span className="text-yellow-500">.</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-yellow-500 uppercase">Gallery</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.path}
                className="text-[12px] font-black uppercase tracking-[0.2em] text-white/80 group-hover:text-yellow-500 transition-colors duration-300 block py-2"
              >
                {link.name}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Action Area */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:flex items-center gap-2 bg-yellow-500 text-black px-7 py-2.5 rounded-full font-black text-[12px] tracking-[0.15em] uppercase hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            Hire Me <ArrowUpRight size={16} />
          </button>

          <button
            className="lg:hidden text-yellow-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 h-screen bg-black z-[110] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
        <div className="flex justify-end p-8">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-yellow-500">
            <X size={40} />
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center h-[70vh] space-y-10">
          {navLinks.map((link, i) => (
            <li key={link.name} className="text-center">
              <Link
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-black text-white hover:text-yellow-500 transition-all uppercase tracking-tighter"
              >
                <span className="text-yellow-500 text-sm mr-2 italic">0{i + 1}.</span>
                {link.name}
              </Link>
            </li>
          ))}
          <button className="mt-8 bg-yellow-500 text-black px-10 py-4 rounded-full font-black tracking-widest uppercase text-sm">
            Start A Project
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;