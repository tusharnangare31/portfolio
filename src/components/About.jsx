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
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="md:w-1/3 flex justify-center"
          initial="hidden"
          animate={controls}
          variants={imageVariants}
        >
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <img
              src={profileImage}
              alt="Tushar Nangare"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-2/3 text-gray-800"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            About Me
          </h2>

          <p className="mb-4 text-lg md:text-xl leading-relaxed">
            I am a final-year IT student at PES Modern College of Engineering, Pune (CGPA 8.33).  
            I have experience in Python, Java, JavaScript, and databases, and I work on full-stack web development, machine learning, and DevOps projects.
          </p>

          <p className="mb-6 text-lg md:text-xl leading-relaxed">
            I enjoy building practical and efficient applications and strive to write clean, maintainable code that solves real-world problems.
          </p>

          {/* Small Info Block */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-lg">
            <div>
              <p className="font-semibold">Contact No:</p>
              <p>+91 7499404445</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>tusharnangare311003@gmail.com</p>
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
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download="TusharNangare_Resume.pdf"
              className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-semibold transition transform hover:scale-105 shadow-md"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border-2 border-gray-400 hover:border-gray-600 hover:bg-gray-100 text-gray-800 hover:text-gray-900 font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
