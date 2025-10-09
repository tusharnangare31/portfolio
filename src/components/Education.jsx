// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaRegFileAlt, FaStar } from "react-icons/fa";

// Import your images
import modernImg from "../assets/modern.jpg";
import rahuriEduImg from "../assets/rahuriEdu.jpg";
import spmvImg from "../assets/spmv.jpg";

const education = [
  {
    college: "PES Modern College of Engineering",
    degree: "B.E. in Information Technology",
    duration: "2022 – 2026 (Expected)",
    resultValue: "8.33",
    resultLabel: "CGPA",
    imgUrl: modernImg,
    IconComponent: FaGraduationCap,
  },
  {
    college: "Rahuri Education Society",
    degree: "HSC (Higher Secondary Certificate)",
    duration: "2019 – 2021",
    resultValue: "90%",
    resultLabel: "Percentage",
    imgUrl: rahuriEduImg,
    IconComponent: FaRegFileAlt,
  },
  {
    college: "SPVM, Rahuri",
    degree: "SSC (Secondary School Certificate)",
    duration: "2018 – 2019",
    resultValue: "88.4%",
    resultLabel: "Percentage",
    imgUrl: spmvImg,
    IconComponent: FaStar,
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800"
        >
          Academic Qualifications
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="space-y-10"
        >
          {education.map((edu, idx) => {
            const IconComponent = edu.IconComponent;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: `0px 15px 35px -10px rgba(0,0,0,0.1)`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row overflow-hidden h-[15rem]" // <-- fixed height
              >
                {/* Image Section */}
                <div className="md:w-1/3 w-full h-full flex-shrink-0 relative">
                  <img
                    src={edu.imgUrl}
                    alt={`${edu.college} campus`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400/cccccc/333333?text=College+Image";
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col justify-between md:w-2/3 h-full">
                  <div>
                    <p className="text-sm font-semibold uppercase text-indigo-600 mb-2">
                      {edu.duration}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-xl text-gray-700 font-medium mt-1 mb-4">
                      {edu.college}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-6 h-6 text-gray-400" />
                      <span className="text-4xl font-black text-gray-800">
                        {edu.resultValue}
                      </span>
                      <p className="text-lg font-semibold text-gray-600 uppercase">
                        {edu.resultLabel}
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
