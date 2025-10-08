import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import heroAnimation from "../assets/hero.json";

const ANIMATION_PHRASES = [
  "Final-Year IT Student",
  "Aspiring Software Engineer",
  "Full-Stack Developer",
];

export default function Hero() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  // Animate forward or reverse based on inView
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-32 py-20 overflow-hidden bg-gray-50"
    >
      {/* Text Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left md:pr-16 z-10"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Tushar Nangare
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
          I am a passionate IT student and developer exploring modern web and mobile technologies to build intuitive and scalable solutions.
        </p>

        <p className="mt-4 text-xl md:text-2xl text-gray-700 font-medium h-10">
          <Typewriter
            words={ANIMATION_PHRASES}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="mt-8 flex justify-center md:justify-start">
          <a
            href="#about"
            className="px-6 py-3 rounded-lg border-2 border-gray-400 hover:border-indigo-600 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 font-semibold transition-colors transform hover:scale-105"
          >
            Learn More About Me
          </a>
        </div>
      </motion.div>

      {/* Lottie Animation Section */}
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-10"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <Tilt
          className="w-[35rem] h-[35rem] rounded-3xl"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <Lottie animationData={heroAnimation} loop={true} className="w-full h-full" />
        </Tilt>
      </motion.div>
    </section>
  );
}
