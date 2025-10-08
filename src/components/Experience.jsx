// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";

// Sample experience/certifications data (replace with experienceData.js later)
const experiences = [
  {
    title: "Infosys Springboard AI/DS Course Certificate",
    year: "2025",
    img: "https://picsum.photos/100/100?random=1",
  },
  {
    title: "Python Essentials I – Cisco",
    year: "2024",
    img: "https://picsum.photos/100/100?random=2",
  },
  {
    title: "Python Full-Stack Development – AICTE Internship",
    year: "2024",
    img: "https://picsum.photos/100/100?random=3",
  },
  {
    title: "AI-ML Virtual Internship – Google Developers",
    year: "2025",
    img: "https://picsum.photos/100/100?random=4",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
          Certifications & Achievements
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={exp.img}
                alt={exp.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {exp.title}
              </h3>
              <p className="text-gray-500 mt-1">{exp.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
