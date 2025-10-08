// src/components/Work.jsx
import React from "react";
import { motion } from "framer-motion";

// Sample work data (replace with workData.js later)
const workExperience = [
  {
    company: "Infosys Springboard",
    role: "Virtual Internship 6.0 (AI/DS)",
    duration: "2025",
    description:
      "Worked on AI and Data Science concepts including data preprocessing, machine learning model development, and cloud deployment.",
    img: "https://picsum.photos/150/150?random=1",
  },
  // You can add more internships or work experience here
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
          Work / Internship
        </h2>

        <motion.div
          className="flex flex-col space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {workExperience.map((work, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 bg-white p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={work.img}
                alt={work.company}
                className="w-24 h-24 rounded-lg shadow-sm mb-4 md:mb-0"
              />
              <div className="text-gray-800">
                <h3 className="text-xl font-semibold">{work.role}</h3>
                <p className="text-gray-600">{work.company}</p>
                <p className="text-gray-500">{work.duration}</p>
                <p className="mt-2">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
