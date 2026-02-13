// src/components/EasterEgg.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConfetti } from "../hooks/useConfetti";

// 8-bit powerup sound
const SUCCESS_SOUND_URL = "https://cdn.freesound.org/previews/sounds/406/406063_5121236-lq.mp3"; 

export default function EasterEgg() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const audioRef = useRef(new Audio(SUCCESS_SOUND_URL));
  const { triggerConfetti } = useConfetti();

  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      const expectedKey = konamiCode[konamiIndex].toLowerCase();

      if (key === expectedKey || e.key === konamiCode[konamiIndex]) {
        setKonamiIndex((prev) => prev + 1);

        if (konamiIndex === konamiCode.length - 1) {
          activateGodMode();
          setKonamiIndex(0);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex, konamiCode, triggerConfetti]);

  const activateGodMode = () => {
    setShowSecret(true);
    
    // Play Sound
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.5;
    audioRef.current.play().catch(e => console.error("Audio block:", e));

    // Fire Confetti
    triggerConfetti(0.5, 0.5);
    setTimeout(() => triggerConfetti(0.2, 0.5), 200);
    setTimeout(() => triggerConfetti(0.8, 0.5), 400);

    // Invert Colors Flash
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    document.body.style.transition = "filter 0.1s";
    setTimeout(() => { document.body.style.filter = "none"; }, 200);

    // Close after 6s
    setTimeout(() => setShowSecret(false), 6000);
  };

  return (
    <AnimatePresence>
      {showSecret && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Tailwind: fixed full screen, z-index top, prevent clicks passing through
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* 1. Dark Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* 2. CRT Scanlines (Created with Tailwind Repeating Gradients) */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay animate-[pulse_0.2s_infinite]"
            style={{
              backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
              backgroundSize: "100% 4px, 6px 100%"
            }}
          />

          {/* 3. Main Modal Card */}
          <motion.div
            initial={{ scale: 0, rotateX: 90 }}
            animate={{ scale: 1, rotateX: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 12, stiffness: 200 }}
            className="relative bg-black p-8 md:p-12 rounded-xl border-[6px] border-green-500 shadow-[0_0_80px_rgba(34,197,94,0.6)] text-center overflow-hidden max-w-lg w-full mx-4"
          >
            {/* Background glowing grid effect inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,#00ff0011_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

            <div className="relative z-10 space-y-6">
              {/* Glitchy Heading */}
              <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-600 font-mono tracking-tighter drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
                GOD MODE
              </h1>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 my-4" />

              <p className="text-green-400 font-mono text-lg md:text-xl tracking-[0.2em] uppercase animate-pulse">
                System Overridden
              </p>

              {/* Achievement Badge */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mt-4 bg-yellow-400 text-black font-extrabold px-6 py-2 rounded-full border-4 border-white shadow-[0_4px_0_rgb(0,0,0)] transform rotate-2 hover:scale-110 transition-transform"
              >
                🏆 100% UNLOCKED
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}