// src/components/LoadingBar.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaDatabase, FaCode, FaRocket } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Initializing portfolio...",
    "Loading projects...",
    "Preparing skills...",
    "Almost ready...",
  ];

  const techIcons = [
    { icon: <FaReact className="w-8 h-8" />, color: "text-blue-500", name: "React" },
    { icon: <FaPython className="w-8 h-8" />, color: "text-yellow-500", name: "Python" },
    { icon: <SiDjango className="w-8 h-8" />, color: "text-green-600", name: "Django" },
    { icon: <FaNodeJs className="w-8 h-8" />, color: "text-green-500", name: "Node.js" },
    { icon: <SiTailwindcss className="w-8 h-8" />, color: "text-cyan-500", name: "Tailwind" },
    { icon: <SiJavascript className="w-8 h-8" />, color: "text-yellow-400", name: "JavaScript" },
    { icon: <SiMongodb className="w-8 h-8" />, color: "text-green-600", name: "MongoDB" },
    { icon: <FaDatabase className="w-8 h-8" />, color: "text-blue-600", name: "Database" },
  ];

  useEffect(() => {
    // Update loading messages based on progress
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (progress < 25) return 0;
        if (progress < 50) return 1;
        if (progress < 75) return 2;
        return 3;
      });
    }, 500);

    return () => clearInterval(messageInterval);
  }, [progress]);

  useEffect(() => {
    // Simulate loading progress with smoother, slower transitions
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowSuccess(true);
          setTimeout(() => setIsComplete(true), 1500);
          return 100;
        }
        // Smoother, slower progress throughout
        const increment = prev < 60 ? Math.random() * 8 : Math.random() * 3;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Create floating particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: Math.random() * 3 + 1,
  }));

  // Create geometric shapes
  const shapes = [
    { id: 1, size: 80, color: "from-blue-500/20 to-indigo-500/20", x: 15, y: 20 },
    { id: 2, size: 60, color: "from-purple-500/20 to-pink-500/20", x: 80, y: 70 },
    { id: 3, size: 100, color: "from-indigo-500/20 to-blue-500/20", x: 70, y: 15 },
    { id: 4, size: 50, color: "from-pink-500/20 to-purple-500/20", x: 20, y: 75 },
  ];

  // Create wave rings
  const waveRings = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    delay: i * 0.5,
  }));

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 transition-colors duration-300 overflow-hidden py-12"
        >
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-tr from-purple-500/30 to-pink-500/30 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-3xl"
          />

          {/* Floating Geometric Shapes */}
          {shapes.map((shape) => (
            <motion.div
              key={shape.id}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8 + shape.id,
                repeat: Infinity,
                ease: "linear",
                delay: shape.id * 0.5,
              }}
              className={`absolute bg-gradient-to-br ${shape.color} rounded-2xl backdrop-blur-sm`}
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
              }}
            />
          ))}

          {/* Floating Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0 }}
              animate={{
                y: [particle.y + "%", particle.y - 20 + "%", particle.y + "%"],
                x: [particle.x + "%", particle.x + 5 + "%", particle.x + "%"],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
              className="absolute bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{
                width: particle.size + "px",
                height: particle.size + "px",
              }}
            />
          ))}

          {/* Top Section - Logo/Name */}
          <div className="relative z-10 flex flex-col items-center pt-8">
            {/* Logo/Name with Enhanced Shimmer Effect */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12"
              />
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent relative drop-shadow-2xl">
                Tushar Nangare
              </h1>
            </motion.div>
          </div>

          {/* Center Section - Rocket Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Pulsing Wave Rings */}
            {waveRings.map((ring) => (
              <motion.div
                key={ring.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.5, 2],
                  opacity: [0.5, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: ring.delay,
                  ease: "easeOut",
                }}
                className="absolute w-64 h-64 border-4 border-blue-500/30 dark:border-blue-400/30 rounded-full"
              />
            ))}

            {/* Rotating Tech Icons */}
            <div className="absolute">
              {techIcons.map((tech, index) => {
                const angle = (index * 360) / techIcons.length;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: progress > index * 8 ? [0.3, 0.7, 0.3] : 0,
                      scale: progress > index * 8 ? [0.8, 1, 0.8] : 0,
                      rotate: 360,
                    }}
                    transition={{
                      opacity: { duration: 2, repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    }}
                    className={`absolute ${tech.color} bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700`}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                );
              })}
            </div>

            {/* Rocket Icon Animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: showSuccess ? -100 : 0,
                opacity: showSuccess ? 0 : 1,
                rotate: showSuccess ? 45 : 0,
              }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl"
              >
                <FaRocket className="text-blue-600 dark:text-blue-400 drop-shadow-lg" />
              </motion.div>
            </motion.div>

            {/* Success Checkmark */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced Particle Burst on Completion */}
            <AnimatePresence>
              {showSuccess && (
                <>
                  {/* Radial Burst */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 360) / 24;
                    const radius = 120;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <motion.div
                        key={i}
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        animate={{ 
                          x, 
                          y, 
                          opacity: 0, 
                          scale: 0,
                        }}
                        transition={{ 
                          duration: 1, 
                          ease: "easeOut",
                          delay: i * 0.02,
                        }}
                        className={`absolute w-3 h-3 rounded-full ${
                          i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-indigo-500' : 'bg-purple-500'
                        }`}
                        style={{ top: "50%", left: "50%" }}
                      />
                    );
                  })}
                  
                  {/* Success Stars */}
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 360) / 8;
                    const radius = 80;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <motion.div
                        key={`star-${i}`}
                        initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
                        animate={{ 
                          x, 
                          y, 
                          opacity: [0, 1, 0], 
                          scale: [0, 1.5, 0],
                          rotate: 360,
                        }}
                        transition={{ 
                          duration: 1.2, 
                          ease: "easeOut",
                          delay: 0.2 + i * 0.05,
                        }}
                        className="absolute text-2xl"
                        style={{ top: "50%", left: "50%" }}
                      >
                        ⭐
                      </motion.div>
                    );
                  })}
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Section - Progress Bar */}
          <div className="relative z-10 flex flex-col items-center w-full px-4 pb-8">
            {/* Progress Bar Container with Glow */}
            <div className="relative w-full max-w-md mb-4">
              {/* Glow Effect */}
              {progress > 0 && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-xl rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
              
              <div className="relative w-full h-4 bg-gray-200/50 dark:bg-gray-800/50 rounded-full overflow-hidden shadow-inner backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50">
                {/* Animated Background Pattern */}
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  style={{ width: "50%" }}
                />
                
                {/* Progress Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 rounded-full shadow-lg overflow-hidden"
                >
                  {/* Moving Shine Effect */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                  
                  {/* Ripple Effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5],
                      opacity: [0.5, 0],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Progress Percentage with Glitch Effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                y: progress === 100 ? [-2, 2, -2] : 0,
              }}
              transition={{ 
                opacity: { delay: 0.3 },
                y: { duration: 0.1, repeat: progress === 100 ? 3 : 0 },
              }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-3"
            >
              {Math.round(progress)}%
            </motion.p>

            {/* Loading Text with Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showSuccess ? 0 : 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 min-h-[2rem]"
            >
              <FaCode className="text-blue-600 dark:text-blue-400 animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-base font-semibold text-gray-700 dark:text-gray-300"
                >
                  {loadingMessages[currentMessage]}
                </motion.span>
              </AnimatePresence>
              {progress < 100 && (
                <div className="flex gap-1">
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.span
                      key={i}
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        y: [0, -4, 0],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay,
                      }}
                      className="text-base text-blue-600 dark:text-blue-400 font-bold"
                    >
                      .
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Enhanced Corner Accents */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-blue-500/30 dark:border-blue-400/30 rounded-tl-2xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 dark:border-purple-400/30 rounded-br-2xl"
          />
          
          {/* Animated Corner Dots */}
          {[
            { pos: "top-4 left-4" },
            { pos: "top-4 right-4" },
            { pos: "bottom-4 left-4" },
            { pos: "bottom-4 right-4" },
          ].map((corner, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className={`absolute ${corner.pos} w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
