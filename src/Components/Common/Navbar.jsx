import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-white">
          Resume
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">Samples</li>
          <li className="hover:text-blue-600 cursor-pointer">Work</li>
          <li className="hover:text-blue-600 cursor-pointer">Process</li>
          <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>

          {/* Hire Me Button */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;