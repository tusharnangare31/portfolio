// src/components/CommandPalette.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaTimes } from "react-icons/fa";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const commands = [
    { name: "Home", icon: <FaHome />, action: () => scrollToSection("hero"), keywords: ["home", "start", "top"] },
    { name: "About Me", icon: <FaUser />, action: () => scrollToSection("about"), keywords: ["about", "bio", "info"] },
    { name: "Skills", icon: <FaCode />, action: () => scrollToSection("skills"), keywords: ["skills", "tech", "technologies"] },
    { name: "Education", icon: <FaUser />, action: () => scrollToSection("education"), keywords: ["education", "school", "university"] },
    { name: "Experience", icon: <FaBriefcase />, action: () => scrollToSection("experience"), keywords: ["experience", "work", "jobs", "certifications"] },
    { name: "Projects", icon: <FaCode />, action: () => scrollToSection("projects"), keywords: ["projects", "portfolio", "work"] },
    { name: "Contact", icon: <FaEnvelope />, action: () => scrollToSection("contact"), keywords: ["contact", "email", "message"] },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      setSearch("");
    }
  };

  const filteredCommands = commands.filter((cmd) =>
    cmd.keywords.some((keyword) => keyword.includes(search.toLowerCase())) ||
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      // Escape to close
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearch("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Trigger Hint */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 z-50 hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaSearch className="w-3 h-3" />
        <span>Quick Nav</span>
        <kbd className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">⌘K</kbd>
      </motion.button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-[9998]"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-[9999] overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
                <FaSearch className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search navigation..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent outline-none text-lg text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <FaTimes className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto p-2">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => (
                    <motion.button
                      key={idx}
                      onClick={cmd.action}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-200 text-left group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white group-hover:scale-110 transition-transform">
                        {cmd.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {cmd.name}
                      </span>
                    </motion.button>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    No results found
                  </div>
                )}
              </div>

              {/* Footer Hint */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                <span>Navigate with ↑↓ • Select with ↵</span>
                <span>Press ESC to close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
