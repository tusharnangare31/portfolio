// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import cisco from "../assets/certificate/cisco.png";
import cisco2 from "../assets/certificate/cisco2.png";
import aicte from "../assets/certificate/aicte.jpeg";
import oracle from "../assets/certificate/oracle.png";
import scaler from "../assets/certificate/scaler.webp";
import google from "../assets/certificate/google.png";

const experiences = [
  {
    title: "Infosys Springboard AI/DS Certificate",
    year: "2025",
    img: "https://www.samco.in/knowledge-center/wp-content/uploads/2024/12/Infosys-Share-Price.png",
    link: "#",
    category: "AI/ML",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Generative AI Professional – Oracle",
    year: "2025",
    img: oracle,
    link: "/certificates/oracle.pdf",
    category: "AI/ML",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Data Science Fundamentals – Scaler Topic",
    year: "2025",
    img: scaler,
    link: "/certificates/scaler.png",
    category: "Data Science",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Python Essentials I – Cisco",
    year: "2025",
    img: cisco,
    link: "/certificates/PythonEssentials1.pdf",
    category: "Programming",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Python Essentials II – Cisco",
    year: "2025",
    img: cisco2,
    link: "/certificates/PythonEssentials2.pdf",
    category: "Programming",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI-ML Virtual Internship – Google",
    year: "2025",
    img: google,
    link: "/certificates/google.pdf",
    category: "AI/ML",
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Full-Stack Python Development – AICTE",
    year: "2024",
    img: aicte,
    link: "/certificates/aicte.pdf",
    category: "Web Development",
    color: "from-indigo-500 to-purple-600",
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-900 dark:via-blue-950/10 dark:to-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaAward className="w-4 h-4" />
            <span>Professional Growth</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Certifications & Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, idx) => (
            <motion.a
              key={idx}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Card Content */}
              <div className="relative p-6 flex flex-col items-center text-center h-full">
                {/* Logo Container */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-3 shadow-sm group-hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                    <img
                      src={exp.img}
                      alt={exp.title}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/200x200/e5e7eb/6b7280?text=Cert";
                      }}
                    />
                  </div>
                  {/* Decorative Ring */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 -z-10`} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3 min-h-[3rem] flex items-center">
                  {exp.title}
                </h3>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white shadow-sm`}>
                    {exp.category}
                  </span>
                </div>

                {/* Year and Link */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 w-full flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {exp.year}
                  </span>
                  <div className="flex items-center gap-1.5 text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    <span className="text-xs font-medium">View</span>
                    <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4">
            Want to see more achievements and project work?
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>View My Projects</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}