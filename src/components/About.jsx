// src/components/About.jsx
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../assets/profile.png";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50, rotate: -10, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", type: "spring", stiffness: 80, damping: 12 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 dark:from-blue-800/10 dark:to-indigo-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-purple-200/20 to-pink-200/20 dark:from-purple-800/10 dark:to-pink-800/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Profile Image */}
        <motion.div
          className="md:w-1/3 flex justify-center mb-8 md:mb-0"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-60 transition duration-1000" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:shadow-indigo-500/30 transition-all duration-500">
              <img
                src={profileImage}
                alt="Tushar Nangare"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-2/3 text-gray-800 dark:text-gray-200 transition-colors duration-300"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
        <div className="text-center mb-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 relative inline-block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
        </div>

          <p className="mb-4 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I am a final-year IT student at PES Modern College of Engineering, Pune (CGPA 8.33).  
            I have experience in Python, Java, JavaScript, and databases, and I work on full-stack web development, machine learning, and DevOps projects.
          </p>

          <p className="mb-6 text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            I enjoy building practical and efficient applications and strive to write clean, maintainable code that solves real-world problems.
          </p>

          {/* Small Info Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm md:text-base lg:text-lg">
            <div>
              <p className="font-semibold">Contact No:</p>
              <p>+91 7499404445</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p className="break-all">tusharnangare311003@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">Location:</p>
              <p>Pune, India</p>
            </div>
            <div>
              <p className="font-semibold">Age:</p>
              <p>22</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
            <motion.a
              href="/resume.pdf"
              download="TusharNangare_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-center"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
