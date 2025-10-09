// src/components/Work.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const workExperience = [
  {
    company: "Infosys Springboard",
    role: "Virtual Internship 6.0 (AI/DS)",
    duration: "2025",
    description:
      "Worked on AI and Data Science concepts including data preprocessing, machine learning model development, and cloud deployment.",
  },
  
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900">
          Work / Internship
        </h2>

        <div className="relative border-l-2 border-gray-300 ml-4 md:ml-8">
          {workExperience.map((work, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-10 ml-6 md:ml-10 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-6 md:-left-9 top-2 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white"></span>

              {/* Content Box */}
              <div className="p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FaBriefcase className="text-indigo-600" /> {work.role}
                </h3>
                <p className="text-indigo-600 font-medium flex items-center gap-2 mt-1">
                  {work.company}
                </p>
                <p className="text-gray-500 flex items-center gap-2 mt-1">
                  <FaCalendarAlt /> {work.duration}
                </p>
                <p className="text-gray-700 mt-2">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
