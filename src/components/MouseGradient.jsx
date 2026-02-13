// src/components/MouseGradient.jsx
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGradient() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Convert to percentage
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;
      
      mouseX.set(xPercent);
      mouseY.set(yPercent);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 opacity-30 dark:opacity-20 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x.get()}% ${y.get()}%, rgba(99, 102, 241, 0.15), transparent 80%)`,
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(800px circle at ${x.get()}% ${y.get()}%, rgba(59, 130, 246, 0.1), transparent 70%)`,
            `radial-gradient(800px circle at ${x.get()}% ${y.get()}%, rgba(139, 92, 246, 0.1), transparent 70%)`,
            `radial-gradient(800px circle at ${x.get()}% ${y.get()}%, rgba(59, 130, 246, 0.1), transparent 70%)`,
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
