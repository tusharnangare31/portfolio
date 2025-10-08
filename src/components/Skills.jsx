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
    <section id="skills" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800"
        >
          Technical Skills
        </motion.h2>

        {/* NEW SKILLS CONTAINER: Visually groups and frames all skill items */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} // Animates in slightly after the heading
          viewport={{ amount: 0.1 }}
          className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-indigo-100" // Main container style
        >
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
                    y: -8, // Subtle vertical lift
                    scale: 1.03, // Slight scale up
                    boxShadow: `0px 10px 20px ${skill.color}40`, // Soft, colored shadow
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  // Adjusted card styling to look good inside the white container
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-50 hover:bg-white shadow-lg cursor-pointer border border-gray-100"
                >
                  {IconComponent && (
                    <IconComponent
                      size={48}
                      style={{ color: skill.color }}
                      className="mb-4"
                    />
                  )}
                  <span
                    className="font-semibold text-center text-gray-800 text-sm md:text-base transition-colors"
                    // Dynamic color change on text for polish
                    style={{ 
                      '--hover-color': skill.color 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-color');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#1f2937'; // Revert to text-gray-800
                    }}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}