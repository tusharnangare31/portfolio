// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaRegFileAlt, FaStar, FaCalendarAlt, FaTrophy, FaCheckCircle } from "react-icons/fa";

// Import your images
import modernImg from "../assets/modern.jpg";
import rahuriEduImg from "../assets/rahuriEdu.jpg";
import spmvImg from "../assets/spmv.jpg";

const education = [
  {
    college: "PES Modern College of Engineering",
    degree: "B.E. in Information Technology",
    duration: "2022 – 2026",
    status: "ongoing",
    resultValue: "8.33",
    resultLabel: "CGPA",
    imgUrl: modernImg,
    IconComponent: FaGraduationCap,
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
  },
  {
    college: "Rahuri Education Society",
    degree: "HSC (Higher Secondary Certificate)",
    duration: "2019 – 2021",
    status: "completed",
    resultValue: "90%",
    resultLabel: "Percentage",
    imgUrl: rahuriEduImg,
    IconComponent: FaRegFileAlt,
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
  },
  {
    college: "SPVM, Rahuri",
    degree: "SSC (Secondary School Certificate)",
    duration: "2018 – 2019",
    status: "completed",
    resultValue: "88.4%",
    resultLabel: "Percentage",
    imgUrl: spmvImg,
    IconComponent: FaStar,
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-4 md:px-6 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 dark:from-blue-900/10 to-indigo-200/20 dark:to-indigo-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200/20 dark:from-purple-900/10 to-pink-200/20 dark:to-pink-900/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaGraduationCap className="w-4 h-4" />
            <span>Academic Journey</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            My academic background and achievements that shaped my career
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-pink-300 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 transform -translate-x-1/2"></div>

          {/* Education Cards */}
          <div className="space-y-8 md:space-y-12">
            {education.map((edu, idx) => {
              const IconComponent = edu.IconComponent;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node - Hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-full md:w-[calc(54%-2rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image Section */}
                      <div className="sm:w-2/5 h-32 sm:h-auto relative overflow-hidden">
                        <img
                          src={edu.imgUrl}
                          alt={`${edu.college} campus`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x400/cccccc/333333?text=College";
                          }}
                        />
                        {/* Mobile Icon Badge */}
                        <div className="md:hidden absolute top-4 left-4 z-20">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="sm:w-3/5 p-4 md:p-5 flex flex-col justify-between">
                        <div>
                          {/* Status Badge */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                              edu.status === 'ongoing' 
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' 
                                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                            }`}>
                              {edu.status === 'ongoing' ? (
                                <>
                                  <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                  </span>
                                  Ongoing
                                </>
                              ) : (
                                <>
                                  <FaCheckCircle className="w-3 h-3" />
                                  Completed
                                </>
                              )}
                            </span>
                            
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <FaCalendarAlt className="w-3 h-3" />
                              {edu.duration}
                            </span>
                          </div>

                          {/* Degree & College */}
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3">
                            {edu.college}
                          </p>
                        </div>

                        {/* Result Badge */}
                        <div className={`bg-gradient-to-br ${edu.bgColor} border-2 border-gray-200 dark:border-gray-700 rounded-xl p-3 flex items-center justify-between`}>
                          <div className="flex items-center gap-2.5">
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-md`}>
                              <FaTrophy className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase">{edu.resultLabel}</p>
                              <p className={`text-xl md:text-2xl font-black bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                                {edu.resultValue}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
