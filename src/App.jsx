// src/App.jsx
import React from "react";
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

function App() {
  return (
    <div className="font-sans text-gray-900">
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
  );
}

export default App;
