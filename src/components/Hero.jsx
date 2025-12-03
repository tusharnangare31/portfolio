// src/components/Hero.jsx
import React, { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import heroAnimation from "../assets/hero.json";

// -- CONSTANTS --
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
  const { ref, inView } = useInView({ threshold: 0.2 }); // Lower threshold for mobile triggering

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  // -- ANIMATION VARIANTS --
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Changed to y for safer mobile animation
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const socialLinks = [
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tusharnangare31/", color: "#0A66C2" },
    { icon: <FaGithub />, link: "https://github.com/tusharnangare31", color: "#171515" },
    { icon: <FaEnvelope />, link: "mailto:tusharnangare311003@gmail.com", color: "#D44638" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/u/tusharnangare311003/", color: "#FFA116" },
  ];

  return (
    <section
      id="hero"
      ref={ref}
      // Layout: Vertical on mobile (flex-col), Horizontal on Desktop (md:flex-row)
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-32 py-24 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100"
    >
      {/* Particle background canvas */}
      <ParticleNetwork
        color="#3b82f6"
        mousePointColor="#f59e0b"
        particleCount={100}
        maxDistance={120}
        particleSize={1.5}
        speed={0.4}
        mouseRepelRadius={180}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* --- TEXT CONTENT SECTION --- */}
      <motion.div
        // Mobile: Centered text, Full Width
        // Desktop: Left-aligned text, Half Width, Padding Right
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 md:pr-12"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        {/* Mobile: Smaller Header / Desktop: Large Header */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 pb-2">
          Tushar Nangare
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg md:max-w-xl">
          I am a passionate IT student and developer exploring modern web and mobile technologies to build intuitive and scalable solutions.
        </p>

        {/* Typewriter: Flex row on desktop, centered column/row on mobile */}
        <p className="mt-5 text-lg sm:text-xl md:text-2xl text-gray-800 font-medium h-12 md:h-10 flex flex-col md:flex-row items-center justify-center md:justify-start">
          <span className="mb-1 md:mb-0 md:mr-2 text-gray-600">I am a</span>
          <span className="text-blue-600 font-bold">
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
        </p>

        {/* CTA Button */}
        <div className="mt-8 md:mt-10 flex justify-center md:justify-start w-full">
          <a
            href="#about"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 text-sm md:text-base"
          >
            Learn More About Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex gap-5 justify-center md:justify-start flex-wrap">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full p-3 sm:p-4 text-xl md:text-2xl shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 bg-white"
              style={{ color: item.color }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* --- ILLUSTRATION SECTION --- */}
      <motion.div
        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-10"
        initial="hidden"
        animate={controls}
        variants={animationVariants}
      >
        {/* MOBILE VIEW: Simple Div (No Tilt) 
            Hidden on Desktop (md:hidden)
        */}
        <div className="block md:hidden w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem]">
           <Lottie animationData={heroAnimation} loop={true} className="w-full h-full drop-shadow-xl" />
        </div>

        {/* DESKTOP VIEW: Tilt Enabled 
            Hidden on Mobile (hidden md:block)
        */}
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

/* ------------------------------------------------------------------
   ParticleNetwork Component
   (Handles both mouse and touch subtly, fits container)
   ------------------------------------------------------------------ */

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

      // Adjust particle count based on screen size for performance
      const isSmallScreen = logicalW < 768;
      const count = isSmallScreen 
        ? Math.floor(particleCount * 0.6) 
        : Math.max(10, Math.floor(particleCount));
      
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
      // Handle both mouse and touch coordinates
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
    host.addEventListener("touchmove", onMoveFromHost); // Add touch support
    host.addEventListener("mouseleave", onLeaveFromHost);
    host.addEventListener("touchend", onLeaveFromHost); // Add touch end support
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