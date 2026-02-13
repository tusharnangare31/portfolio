// src/components/Hero.jsx - PROFESSIONAL IMPROVEMENTS
import React, { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import heroAnimation from "../assets/hero.json";

const ANIMATION_PHRASES = [
  "Final-Year IT Student",
  "Full-Stack Developer",
  "Python, Java, JavaScript",
  "Django & MERN Stack",
  "Machine Learning Enthusiast",
  "DevOps & Cloud Explorer",
];

export default function Hero() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  };

  const socialLinks = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tusharnangare31/", color: "#0A66C2", label: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com/tusharnangare31", color: "#171515", label: "GitHub" },
    { icon: <FaEnvelope />, link: "mailto:tusharnangare311003@gmail.com", color: "#D44638", label: "Email" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/u/tusharnangare311003/", color: "#FFA116", label: "LeetCode" },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-32 py-24 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 dark:from-gray-900 dark:via-blue-950/10 dark:to-gray-900 transition-colors duration-300"
    >
      <ParticleNetwork
        color="#3b82f6"
        mousePointColor="#f59e0b"
        particleCount={80}
        maxDistance={120}
        particleSize={1.5}
        speed={0.4}
        mouseRepelRadius={180}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 dark:from-blue-600/10 to-indigo-500/20 dark:to-indigo-700/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 dark:from-indigo-600/10 to-purple-500/20 dark:to-purple-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 md:pr-12"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        {/* Status badge with pulse */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-700 px-4 py-2 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Available for opportunities</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-500">
            Tushar Nangare
          </span>
        </h1>

        <div className="mt-6 mb-6 h-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
          <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">I am a</span>
          <span className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold min-h-[2rem] flex items-center">
            <Typewriter
              words={ANIMATION_PHRASES}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg md:max-w-xl mb-8">
          A passionate IT student and developer exploring modern web and mobile technologies 
          to build <span className="font-semibold text-gray-900 dark:text-gray-100">intuitive</span> and 
          <span className="font-semibold text-gray-900 dark:text-gray-100"> scalable</span> solutions that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
          <a
            href="#about"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore My Work
              <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          {socialLinks.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center rounded-xl p-4 text-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              style={{ color: item.color }}
            >
              {item.icon}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-1 group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-blue-600 dark:group-hover:bg-blue-400"
            />
          </div>
        </motion.button>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end z-10"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        <div className="block md:hidden w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem]">
          <Lottie animationData={heroAnimation} loop={true} className="w-full h-full drop-shadow-2xl" />
        </div>

        <div className="hidden md:block">
          <Tilt
            className="w-[30rem] h-[30rem] lg:w-[35rem] lg:h-[35rem] rounded-3xl bg-white/0"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="w-full h-full drop-shadow-2xl">
              <Lottie animationData={heroAnimation} loop={true} className="w-full h-full" />
            </div>
          </Tilt>
        </div>
      </motion.div>
    </section>
  );
}

function ParticleNetwork({
  color = "#3b82f6",
  mousePointColor = "#f59e0b",
  background = "transparent",
  particleCount = 100,
  maxDistance = 130,
  particleSize = 1.5,
  speed = 0.4,
  mouseRepelRadius = 180,
  className = "absolute inset-0 z-0 pointer-events-none",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const hostRectRef = useRef({ width: 0, height: 0 });
  const mouseRef = useRef({ x: null, y: null, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rand = (min, max) => Math.random() * (max - min) + min;

    function createParticle(logicalW, logicalH) {
      const angle = rand(0, Math.PI * 2);
      const v = rand(0.1, 0.5) * speed;
      return {
        x: rand(0, logicalW),
        y: rand(0, logicalH),
        baseVx: Math.cos(angle) * v,
        baseVy: Math.sin(angle) * v,
        vx: 0,
        vy: 0,
        size: particleSize * rand(0.8, 1.5),
      };
    }

    function resize() {
      const host = canvas.parentElement || document.body;
      const rect = host.getBoundingClientRect();
      const logicalW = Math.max(1, Math.floor(rect.width));
      const logicalH = Math.max(1, Math.floor(rect.height));

      canvas.width = Math.round(logicalW * dpr);
      canvas.height = Math.round(logicalH * dpr);
      canvas.style.width = `${logicalW}px`;
      canvas.style.height = `${logicalH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      hostRectRef.current.width = logicalW;
      hostRectRef.current.height = logicalH;

      const isSmallScreen = logicalW < 768;
      const count = isSmallScreen ? Math.floor(particleCount * 0.6) : Math.max(10, Math.floor(particleCount));

      const particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(logicalW, logicalH));
      }
      particlesRef.current = particles;
    }

    function hexWithAlpha(hex, alpha) {
      const h = hex.replace("#", "");
      const r = parseInt(h.substring(0, 2), 16);
      const g = parseInt(h.substring(2, 4), 16);
      const b = parseInt(h.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function onMoveFromHost(e) {
      const host = canvas.parentElement || document.body;
      const rect = host.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      mouseRef.current.x = clientX - rect.left;
      mouseRef.current.y = clientY - rect.top;
      mouseRef.current.active = true;
    }

    function onLeaveFromHost() {
      mouseRef.current.active = false;
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    }

    function animate() {
      const logicalW = hostRectRef.current.width;
      const logicalH = hostRectRef.current.height;
      ctx.clearRect(0, 0, logicalW, logicalH);

      if (background && background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, logicalW, logicalH);
      }

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let p of particles) {
        p.vx = p.baseVx;
        p.vy = p.baseVy;

        if (mouse.active && mouse.x != null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;

          if (dist < mouseRepelRadius) {
            const force = (1 - dist / mouseRepelRadius) * 2;
            p.vx += (dx / dist) * force * speed;
            p.vy += (dy / dist) * force * speed;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= logicalW) {
          p.baseVx *= -1;
          p.x = Math.max(0, Math.min(logicalW, p.x));
        }
        if (p.y <= 0 || p.y >= logicalH) {
          p.baseVy *= -1;
          p.y = Math.max(0, Math.min(logicalH, p.y));
        }
      }

      ctx.lineWidth = 1.2;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.4;
            ctx.strokeStyle = hexWithAlpha(color, alpha);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        if (mouse.active && mouse.x != null) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.7;
            ctx.strokeStyle = hexWithAlpha(color, alpha);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = color;
      for (let p of particles) {
        ctx.beginPath();
        ctx.globalAlpha = 0.8;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      if (mouse.active && mouse.x != null) {
        ctx.beginPath();
        ctx.fillStyle = mousePointColor;
        ctx.arc(mouse.x, mouse.y, particleSize * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = hexWithAlpha(mousePointColor, 0.3);
        ctx.lineWidth = 2;
        ctx.arc(mouse.x, mouse.y, particleSize * 6, 0, Math.PI * 2);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    const host = canvas.parentElement || document.body;
    host.addEventListener("mousemove", onMoveFromHost);
    host.addEventListener("touchmove", onMoveFromHost);
    host.addEventListener("mouseleave", onLeaveFromHost);
    host.addEventListener("touchend", onLeaveFromHost);
    window.addEventListener("resize", resize);

    resize();
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      host.removeEventListener("mousemove", onMoveFromHost);
      host.removeEventListener("touchmove", onMoveFromHost);
      host.removeEventListener("mouseleave", onLeaveFromHost);
      host.removeEventListener("touchend", onLeaveFromHost);
      window.removeEventListener("resize", resize);
    };
  }, [particleCount, maxDistance, particleSize, speed, color, mousePointColor, mouseRepelRadius, background]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}