// src/components/EasterEgg.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConfetti } from "../hooks/useConfetti";
import { FaRocket, FaCode, FaTrophy, FaMagic, FaHeart, FaStar, FaCrown, FaFire } from "react-icons/fa";

const SUCCESS_SOUND_URL = "https://cdn.freesound.org/previews/sounds/406/406063_5121236-lq.mp3"; 

const SECRETS = {
  KONAMI: {
    title: "⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA",
    subtitle: "Classic Gamer Detected!",
    message: "You know the ancient ways",
    icon: <FaTrophy className="w-16 h-16" />,
    color: "from-yellow-400 via-amber-500 to-orange-600",
    borderColor: "border-yellow-500",
    glowColor: "rgba(251, 191, 36, 0.6)",
  },
  DEVELOPER: {
    title: "< DEVELOPER />",
    subtitle: "Secret Code Unlocked!",
    message: "You typed 'developer' like a true pro",
    icon: <FaCode className="w-16 h-16" />,
    color: "from-blue-400 via-cyan-500 to-teal-600",
    borderColor: "border-cyan-500",
    glowColor: "rgba(34, 211, 238, 0.6)",
  },
  MATRIX: {
    title: "MATRIX MODE",
    subtitle: "Welcome to the Real World",
    message: "Follow the white rabbit...",
    icon: <FaMagic className="w-16 h-16" />,
    color: "from-green-400 via-emerald-500 to-green-600",
    borderColor: "border-green-500",
    glowColor: "rgba(34, 197, 94, 0.6)",
  },
  LEGEND: {
    title: "👑 LEGENDARY 👑",
    subtitle: "Ultimate Achievement!",
    message: "You've discovered all the secrets!",
    icon: <FaCrown className="w-16 h-16" />,
    color: "from-purple-400 via-pink-500 to-rose-600",
    borderColor: "border-purple-500",
    glowColor: "rgba(168, 85, 247, 0.6)",
  },
  ROCKET: {
    title: "🚀 BLAST OFF!",
    subtitle: "Sky's Not the Limit!",
    message: "Type 'rocket' to launch success",
    icon: <FaRocket className="w-16 h-16" />,
    color: "from-red-400 via-orange-500 to-yellow-600",
    borderColor: "border-orange-500",
    glowColor: "rgba(251, 146, 60, 0.6)",
  },
  COFFEE: {
    title: "☕ COFFEE LOVER",
    subtitle: "Caffeine Powers Activated!",
    message: "Running on coffee and code",
    icon: <FaFire className="w-16 h-16" />,
    color: "from-amber-600 via-orange-700 to-red-800",
    borderColor: "border-amber-700",
    glowColor: "rgba(180, 83, 9, 0.6)",
  },
};

export default function EasterEgg() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const [currentSecret, setCurrentSecret] = useState(null);
  const [discoveredSecrets, setDiscoveredSecrets] = useState(new Set());
  const audioRef = useRef(new Audio(SUCCESS_SOUND_URL));
  const { triggerConfetti } = useConfetti();
  const typingTimeoutRef = useRef(null);

  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  const secretWords = {
    'developer': 'DEVELOPER',
    'matrix': 'MATRIX',
    'rocket': 'ROCKET',
    'coffee': 'COFFEE',
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Konami Code Detection
      const key = e.key.toLowerCase();
      const expectedKey = konamiCode[konamiIndex].toLowerCase();

      if (key === expectedKey || e.key === konamiCode[konamiIndex]) {
        setKonamiIndex((prev) => prev + 1);

        if (konamiIndex === konamiCode.length - 1) {
          activateSecret('KONAMI');
          setKonamiIndex(0);
        }
      } else if (key !== "shift" && key !== "control" && key !== "alt") {
        setKonamiIndex(0);
      }

      // Secret Word Typing Detection
      if (key.length === 1 && /[a-z]/i.test(key)) {
        const newTypedWord = typedWord + key.toLowerCase();
        setTypedWord(newTypedWord);

        // Clear typing timeout
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }

        // Reset typed word after 2 seconds of inactivity
        typingTimeoutRef.current = setTimeout(() => {
          setTypedWord("");
        }, 2000);

        // Check for secret words
        Object.entries(secretWords).forEach(([word, secretKey]) => {
          if (newTypedWord.includes(word)) {
            activateSecret(secretKey);
            setTypedWord("");
          }
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [konamiIndex, typedWord]);

  // Check if all secrets are discovered
  useEffect(() => {
    const mainSecrets = Object.keys(SECRETS).filter(key => key !== 'LEGEND');
    if (mainSecrets.every(secret => discoveredSecrets.has(secret))) {
      setTimeout(() => activateSecret('LEGEND', true), 500);
    }
  }, [discoveredSecrets]);

  const activateSecret = (secretKey, skipAdd = false) => {
    if (!skipAdd) {
      setDiscoveredSecrets(prev => new Set([...prev, secretKey]));
    }
    
    const secret = SECRETS[secretKey];
    setCurrentSecret(secret);
    setShowSecret(true);
    
    // Play Sound
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.3;
    audioRef.current.play().catch(e => console.error("Audio blocked:", e));

    // Fire Confetti based on secret type
    if (secretKey === 'LEGEND') {
      // Epic confetti for legendary achievement
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          triggerConfetti(Math.random(), Math.random());
        }, i * 100);
      }
    } else {
      triggerConfetti(0.5, 0.5);
      setTimeout(() => triggerConfetti(0.2, 0.5), 200);
      setTimeout(() => triggerConfetti(0.8, 0.5), 400);
    }

    // Visual effects
    if (secretKey === 'MATRIX') {
      // Matrix rain effect
      document.body.style.filter = "hue-rotate(120deg)";
      document.body.style.transition = "filter 0.3s";
      setTimeout(() => { document.body.style.filter = "none"; }, 300);
    } else if (secretKey === 'LEGEND') {
      // Rainbow flash
      const colors = ['hue-rotate(0deg)', 'hue-rotate(120deg)', 'hue-rotate(240deg)'];
      let index = 0;
      const interval = setInterval(() => {
        document.body.style.filter = colors[index % colors.length];
        index++;
        if (index >= 6) {
          clearInterval(interval);
          document.body.style.filter = "none";
        }
      }, 200);
    } else {
      // Standard flash
      document.body.style.filter = "brightness(1.5)";
      document.body.style.transition = "filter 0.1s";
      setTimeout(() => { document.body.style.filter = "none"; }, 150);
    }

    // Close after duration
    const duration = secretKey === 'LEGEND' ? 8000 : 5000;
    setTimeout(() => setShowSecret(false), duration);
  };

  return (
    <AnimatePresence>
      {showSecret && currentSecret && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* Animated Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/95 to-black/90 backdrop-blur-md" 
          />

          {/* Dynamic Grid Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] bg-[size:40px_40px]"
            style={{ 
              color: currentSecret.glowColor.match(/\d+/g) ? 
                `rgba(${currentSecret.glowColor.match(/\d+/g).slice(0, 3).join(',')}, 0.3)` : 
                'rgba(255,255,255,0.1)'
            }}
          />

          {/* Floating Particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 50,
                opacity: 0 
              }}
              animate={{ 
                y: -50,
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.5],
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{ 
                background: `linear-gradient(135deg, ${currentSecret.glowColor}, transparent)`,
                boxShadow: `0 0 10px ${currentSecret.glowColor}`
              }}
            />
          ))}

          {/* Pulsing Rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`ring-${i}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 2, 2.5],
                opacity: [0.5, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
              className={`absolute w-64 h-64 border-4 ${currentSecret.borderColor} rounded-full`}
            />
          ))}

          {/* Main Modal Card */}
          <motion.div
            initial={{ scale: 0, rotateY: -180, z: -1000 }}
            animate={{ scale: 1, rotateY: 0, z: 0 }}
            exit={{ scale: 0, rotateY: 180, opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 15, 
              stiffness: 150,
              duration: 0.8 
            }}
            className="relative pointer-events-auto"
          >
            <div 
              className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 md:p-12 rounded-2xl border-4 ${currentSecret.borderColor} overflow-hidden max-w-xl w-full mx-4`}
              style={{ 
                boxShadow: `0 0 100px ${currentSecret.glowColor}, inset 0 0 50px rgba(0,0,0,0.5)` 
              }}
            >
              {/* Animated Background Pattern */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
                  backgroundSize: '200% 200%',
                }}
              />

              {/* Icon with Glow */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -10, 0],
                }}
                transition={{
                  scale: { type: "spring", damping: 10 },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`relative z-10 flex justify-center mb-6 text-transparent bg-clip-text bg-gradient-to-r ${currentSecret.color}`}
                style={{
                  filter: `drop-shadow(0 0 20px ${currentSecret.glowColor})`,
                }}
              >
                {currentSecret.icon}
              </motion.div>

              <div className="relative z-10 space-y-6 text-center">
                {/* Title with Glitch Effect */}
                <motion.h1
                  animate={{
                    textShadow: [
                      `0 0 20px ${currentSecret.glowColor}`,
                      `0 0 40px ${currentSecret.glowColor}, 0 0 60px ${currentSecret.glowColor}`,
                      `0 0 20px ${currentSecret.glowColor}`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${currentSecret.color} font-mono tracking-tight`}
                >
                  {currentSecret.title}
                </motion.h1>

                {/* Animated Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className={`h-1 w-full bg-gradient-to-r ${currentSecret.color} rounded-full my-4`}
                />

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${currentSecret.color} font-bold text-xl md:text-2xl tracking-wide`}
                >
                  {currentSecret.subtitle}
                </motion.p>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 text-base md:text-lg italic"
                >
                  {currentSecret.message}
                </motion.p>

                {/* Progress Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: 1, 
                    rotate: 0,
                  }}
                  transition={{ delay: 0.7, type: "spring", damping: 10 }}
                  className="flex items-center justify-center gap-3 mt-6"
                >
                  <div className={`px-6 py-3 bg-gradient-to-r ${currentSecret.color} rounded-full font-bold text-gray-900 shadow-lg flex items-center gap-2`}>
                    <FaStar className="text-yellow-300" />
                    <span>{discoveredSecrets.size}/{Object.keys(SECRETS).length - 1} Secrets</span>
                  </div>
                </motion.div>

                {/* Hint for next secret (if not all discovered) */}
                {discoveredSecrets.size < Object.keys(SECRETS).length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-4 text-sm text-gray-500 font-mono"
                  >
                    💡 Try typing secret words or key combinations...
                  </motion.div>
                )}

                {/* Sparkle Effects */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 360) / 8;
                  const radius = 150;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={`star-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        rotate: 360,
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.8 + i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="absolute text-2xl"
                      style={{ 
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      ✨
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
