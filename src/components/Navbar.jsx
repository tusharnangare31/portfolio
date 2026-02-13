// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#hero", icon: <FaHome className="inline-block mr-1 mb-1" /> },
    { name: "About", href: "#about", icon: <FaUser className="inline-block mr-1 mb-1" /> },
    { name: "Skills", href: "#skills", icon: <FaTools className="inline-block mr-1 mb-1" /> },
    { name: "Education", href: "#education", icon: <FaGraduationCap className="inline-block mr-1 mb-1" /> },
    { name: "Work", href: "#work", icon: <FaBriefcase className="inline-block mr-1 mb-1" /> },
    { name: "Experience", href: "#experience", icon: <FaBriefcase className="inline-block mr-1 mb-1" /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope className="inline-block mr-1 mb-1" /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);

      // Update active section based on scroll
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop - 80; // adjust for navbar height
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(link.href.substring(1)); // remove #
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent shadow-none"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold relative group"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              &lt;TN/&gt;
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      activeSection === link.href.substring(1)
                        ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 shadow-md"
                        : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {link.icon}
                      <span className="hidden xl:inline">{link.name}</span>
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
            
            {/* Theme Toggle for Desktop */}
            <motion.button
              onClick={toggleTheme}
              className="ml-3 p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? (
                    <FaMoon className="text-lg text-indigo-400" />
                  ) : (
                    <FaSun className="text-lg text-amber-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle for Mobile */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <FaMoon className="text-base text-indigo-400" />
                  ) : (
                    <FaSun className="text-base text-amber-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            
            {/* Hamburger Menu */}
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-700 dark:text-gray-300"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col px-4 py-3 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className={`flex items-center gap-3 w-full py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === link.href.substring(1) 
                        ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 shadow-md font-semibold" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                    }`}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
