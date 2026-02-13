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
    <section id="work" className="py-24 bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-gray-900 dark:via-indigo-950/10 dark:to-gray-900 px-6 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 dark:from-indigo-900/20 to-blue-200/30 dark:to-blue-900/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 dark:from-blue-900/20 to-purple-200/30 dark:to-purple-900/20 rounded-full blur-3xl -z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Work / Internship</span>
        </h2>

        <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-4 md:ml-8">
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
              <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <FaBriefcase className="text-indigo-600 dark:text-indigo-400" /> {work.role}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-2 mt-1">
                  {work.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                  <FaCalendarAlt /> {work.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
