// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import LoadingBar from "./components/LoadingBar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import MouseGradient from "./components/MouseGradient";
import CommandPalette from "./components/CommandPalette";
import EasterEgg from "./components/EasterEgg";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading bar after content is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingBar />}
      
      {/* Extraordinary Features */}
      <CustomCursor />
      <ScrollProgress />
      <MouseGradient />
      <CommandPalette />
      <EasterEgg />
      
      <div className="font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950 transition-colors duration-300 cursor-none">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Work />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;
