// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa6";

// --- Framer Motion Variants for Staggering ---

// Parent container dictates the overall timing and staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time delay between children appearing
    },
  },
};

// Child item dictates the individual card's entrance animation
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const skills = [
  { name: "Python", icon: "SiPython", color: "#3776AB" },
  { name: "Java", icon: "FaJava", color: "#E76F00" },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "Django", icon: "SiDjango", color: "#092E20" },
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "AWS", icon: "FaAws", color: "#FF9900" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
];

export default function Skills() {
  // Utility function to merge icon sets and return the correct component
  const getIconComponent = (iconName) => SiIcons[iconName] || FaIcons[iconName];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 px-6 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 dark:from-blue-700/5 dark:to-indigo-700/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-tl from-purple-300/10 to-pink-300/10 dark:from-purple-700/5 dark:to-pink-700/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center relative inline-block w-full"
        >
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Technologies and tools I work with
        </motion.p>

        {/* NEW SKILLS CONTAINER: Visually groups and frames all skill items */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.1 }}
          className="relative"
        >
          {/* Gradient border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000" />
          
          <div className="relative bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            {/* Skill Grid: Uses the containerVariants for staggered animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
            >
              {skills.map((skill, idx) => {
                const IconComponent = getIconComponent(skill.icon);
                
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{
                      y: -12,
                      scale: 1.08,
                      boxShadow: `0px 20px 40px ${skill.color}30`,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 hover:from-white hover:to-gray-50 dark:hover:from-gray-700 dark:hover:to-gray-800 shadow-lg hover:shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                      style={{ background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)` }}
                    />
                    
                    {IconComponent && (
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent
                          size={56}
                          style={{ color: skill.color }}
                          className="mb-4 drop-shadow-lg relative z-10"
                        />
                      </motion.div>
                    )}
                    <span
                      className="relative z-10 font-bold text-center text-gray-800 dark:text-gray-200 text-base md:text-lg transition-all duration-300 group-hover:scale-110"
                    >
                      {skill.name}
                    </span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}