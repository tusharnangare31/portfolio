// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    description:
      "My personal portfolio showcasing projects, skills, and work experience with interactive animations and responsive design.",
    img: "/screenShots/hero.png",
    sourceLink: "https://github.com/tusharnangare31/portfolio",
    liveLink: "https://tusharnangare.netlify.app/",
  },
  {
    title: "Diabetes Prediction Application",
    tech: ["Django", "SQLite", "Logistic Regression"],
    description:
      "Web-based predictive model to assess diabetes risk using patient health data.",
    img: "https://picsum.photos/400/250?random=1",
    sourceLink: "https://github.com/yourusername/diabetes-prediction",
    liveLink: "https://diabetes-predict-app.com",
  },
  {
    title: "Pizza Ordering & Management System",
    tech: ["Python", "MySQL"],
    description:
      "Desktop system for menu management, order processing, and inventory tracking.",
    img: "https://picsum.photos/400/250?random=2",
    sourceLink: "https://github.com/yourusername/pizza-management",
    liveLink: "#",
  },
  {
    title: "Poetry Blogging Website",
    tech: ["Django", "PostgreSQL"],
    description:
      "Blogging platform for posting, editing, and sharing poems with authentication and commenting.",
    img: "https://picsum.photos/400/250?random=3",
    sourceLink: "https://github.com/yourusername/poetry-blog",
    liveLink: "#",
  },
  {
    title: "MERN Stack Applications",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "Responsive web applications with REST API integration, secure login, and optimized database queries.",
    img: "https://picsum.photos/400/250?random=4",
    sourceLink: "https://github.com/yourusername/mern-apps",
    liveLink: "#",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }, // faster stagger
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }, // faster duration
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900"
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              variants={cardVariants}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-1">
                    {project.tech.map((tech, tid) => (
                      <span
                        key={tid}
                        className="bg-indigo-100 text-indigo-700 text-xs md:text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm md:text-sm mb-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-1.5 rounded-md text-center text-sm transition-colors duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
