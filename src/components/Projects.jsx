// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

// Sample project data (replace with projectsData.js later)
const projects = [
  {
    title: "Diabetes Prediction Application",
    tech: "Django, SQLite, Logistic Regression",
    description:
      "Web-based predictive model to assess diabetes risk using patient health data with a clean, responsive interface.",
    img: "https://picsum.photos/400/250?random=1",
  },
  {
    title: "Pizza Ordering & Management System",
    tech: "Python, MySQL",
    description:
      "Desktop system for menu management, order processing, bill generation, and inventory tracking.",
    img: "https://picsum.photos/400/250?random=2",
  },
  {
    title: "Poetry Blogging Website",
    tech: "Django, PostgreSQL",
    description:
      "Blogging platform for posting, editing, and sharing poems with authentication and commenting.",
    img: "https://picsum.photos/400/250?random=3",
  },
  {
    title: "MERN Stack Applications",
    tech: "MongoDB, Express, React, Node.js",
    description:
      "Responsive, dynamic web applications with REST API integration, secure login, and optimized database queries.",
    img: "https://picsum.photos/400/250?random=4",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
          Projects
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{project.tech}</p>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
