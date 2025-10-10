// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import cisco from "../assets/certificate/cisco.png";
import cisco2 from "../assets/certificate/cisco2.png";
import aicte from "../assets/certificate/aicte.jpeg"
import oracle from "../assets/certificate/oracle.png"
import scaler from "../assets/certificate/scaler.webp"
// import infosys from "../assets/certificate/infosys.png"
import google from "../assets/certificate/google.png"


const experiences = [
  {
    title: "Infosys Springboard AI/DS Certificate",
    year: "2025",
    img: "https://www.samco.in/knowledge-center/wp-content/uploads/2024/12/Infosys-Share-Price.png",
    link: "#",
  },
  {
    title: "Generative AI Professional – Oracle",
    year: "2025",
    img: oracle,
    link: "/certificates/oracle.pdf",
  },
  {
    title: "Data Science Fundamentals – Scaler Topic",
    year: "2025",
    img: scaler,
    link: "/certificates/scaler.png",
  },
  {
    title: "Python Essentials I – Cisco",
    year: "2025",
    img: cisco,
    link: "/certificates/PythonEssentials1.pdf",
  },
  {
    title: "Python Essentials II – Cisco",
    year: "2025",
    img: cisco2,
    link: "/certificates/PythonEssentials2.pdf",
  },
  {
    title: "AI-ML Virtual Internship – Google",
    year: "2025",
    img: google,
    link: "/certificates/google.pdf",
  },
  {
    title: "Full-Stack Python Development – AICTE",
    year: "2024",
    img: aicte,
    link: "/certificates/aicte.pdf",
  },
  
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 px-5 bg-gradient-to-b from-gray-50 to-white relative"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        >
          Certifications & Achievements
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {experiences.map((exp, idx) => (
            <motion.a
              key={idx}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.35 }}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col items-center p-3 sm:p-4"
            >
              <img
                src={exp.img}
                alt={exp.title}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover mb-2"
              />
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 text-center leading-tight mb-1">
                {exp.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                {exp.year}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
