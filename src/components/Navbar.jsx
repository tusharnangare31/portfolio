// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-3xl font-serif font-bold text-gray-800 transition-colors"
        >
          &lt;Tushar/Nangar&gt;
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href.substring(1))}
                className={`relative group transition-all ${
                  activeSection === link.href.substring(1)
                    ? "text-indigo-600 font-bold"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {link.icon} {link.name}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all ${
                    activeSection === link.href.substring(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md transition-colors ${
              isScrolled ? "text-gray-700" : "text-gray-700"
            }`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden shadow-md transition-max-height duration-500 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        } ${isScrolled ? "bg-white" : "bg-white/90"}`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-2 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href.substring(1))}
                className={`block w-full text-left hover:text-indigo-600 transition-colors ${
                  activeSection === link.href.substring(1) ? "text-indigo-600 font-bold" : "text-gray-700"
                }`}
              >
                {link.icon} {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
