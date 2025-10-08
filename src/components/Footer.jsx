// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tushar Nangare. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
