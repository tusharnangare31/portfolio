// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Tushar Nangare. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
