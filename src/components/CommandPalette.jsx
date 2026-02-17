// src/components/CommandPalette.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaTerminal, FaDownload, FaMoon } from "react-icons/fa";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const navCommands = [
    { name: "Home", icon: <FaHome />, action: () => scrollToSection("hero"), keywords: ["home", "start", "top"] },
    { name: "About Me", icon: <FaUser />, action: () => scrollToSection("about"), keywords: ["about", "bio", "info"] },
    { name: "Skills", icon: <FaCode />, action: () => scrollToSection("skills"), keywords: ["skills", "tech", "technologies"] },
    { name: "Experience", icon: <FaBriefcase />, action: () => scrollToSection("experience"), keywords: ["experience", "work", "jobs"] },
    { name: "Projects", icon: <FaCode />, action: () => scrollToSection("projects"), keywords: ["projects", "portfolio", "work"] },
    { name: "Contact", icon: <FaEnvelope />, action: () => scrollToSection("contact"), keywords: ["contact", "email", "message"] },
  ];

  const quickActions = [
    { name: "Download Resume", icon: <FaDownload />, action: () => window.open('/resume.pdf', '_blank'), keywords: ["resume", "cv", "pdf"] },
    { name: "Dark Mode Toggle", icon: <FaMoon />, action: () => document.documentElement.classList.toggle('dark'), keywords: ["theme", "dark", "light"] },
  ];

  const allCommands = [...quickActions, ...navCommands];

  const filteredCommands = allCommands.filter((cmd) =>
    cmd.keywords.some((keyword) => keyword.includes(search.toLowerCase())) ||
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      closePalette();
    }
  };

  const closePalette = () => {
    setIsOpen(false);
    setSearch("");
    setActiveIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        filteredCommands[activeIndex]?.action();
      } else if (e.key === "Escape") {
        closePalette();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex, filteredCommands]);

  return (
    <>
      {/* HUD Navigation Trigger */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 px-5 py-3 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl shadow-2xl z-50 hidden md:flex items-center gap-3 text-gray-700 dark:text-gray-300 group overflow-hidden"
        whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <FaTerminal className="w-4 h-4 text-blue-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Protocol</span>
        <kbd className="px-2 py-1 bg-black/10 dark:bg-white/10 rounded-md text-[10px] font-black border border-white/10">⌘K</kbd>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePalette}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* --- The Command Window --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#08080a] backdrop-blur-2xl rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-gray-200 dark:border-white/10 overflow-hidden"
            >
              {/* Header: Input Field */}
              <div className="flex items-center gap-4 p-6 border-b border-gray-100 dark:border-white/5">
                <FaSearch className="w-5 h-5 text-blue-500" />
                <input
                  type="text"
                  placeholder="Execute command..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent outline-none text-xl font-bold tracking-tight text-gray-900 dark:text-white placeholder-gray-500"
                />
              </div>

              {/* Body: Result List */}
              <div className="max-h-[420px] overflow-y-auto p-4 custom-scrollbar">
                {filteredCommands.length > 0 ? (
                  <div className="space-y-2">
                    {filteredCommands.map((cmd, idx) => {
                      const isQuickAction = quickActions.some(qa => qa.name === cmd.name);
                      const isSelected = activeIndex === idx;

                      return (
                        <motion.button
                          key={idx}
                          onClick={cmd.action}
                          onMouseEnter={() => setActiveIndex(idx)}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                            isSelected 
                            ? "bg-blue-600 text-white shadow-xl shadow-blue-500/20 translate-x-2" 
                            : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`text-xl ${isSelected ? "text-white" : isQuickAction ? "text-purple-500" : "text-blue-500"}`}>
                              {cmd.icon}
                            </div>
                            <div className="text-left">
                              <span className="text-lg font-black tracking-tight block leading-none">{cmd.name}</span>
                              {isQuickAction && !isSelected && (
                                <span className="text-[9px] uppercase tracking-widest text-purple-400 font-bold">Quick Action</span>
                              )}
                            </div>
                          </div>
                          
                          {isSelected && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                              <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-white/20 px-2 py-1 rounded-md">Execute ↵</span>
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-gray-500 dark:text-gray-400 font-black text-xs tracking-[0.4em] uppercase">No Transmission Found</p>
                  </div>
                )}
              </div>

              {/* Footer: System Status */}
              <div className="px-8 py-4 bg-gray-50 dark:bg-black/40 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                <div className="flex gap-6">
                  <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest flex items-center gap-1">
                    <span className="p-1 rounded bg-gray-200 dark:bg-white/10 text-[8px]">↑↓</span> Navigate
                  </span>
                  <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest flex items-center gap-1">
                    <span className="p-1 rounded bg-gray-200 dark:bg-white/10 text-[8px]">↵</span> Select
                  </span>
                </div>
                <div className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase opacity-50">
                  Press ESC to close
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}