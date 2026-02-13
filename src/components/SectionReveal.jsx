// src/components/SectionReveal.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionReveal({ children, delay = 0, direction = "up" }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={inView ? { x: 0, y: 0, scale: 1, opacity: 1 } : directionVariants[direction]}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
