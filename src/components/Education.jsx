import React from "react";
import { motion } from "framer-motion";

// --- Custom Inline SVG Icons (For clean execution) ---
// Using neutral gray for primary icons
const GradIcon = ({ className = 'text-gray-400' }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <path d="M12 2v10" />
        <path d="M6 11l6-6 6 6" />
    </svg>
);
const CertIcon = ({ className = 'text-gray-400' }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.5V10" />
        <path d="M16 6a4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4z" />
        <path d="M21 15v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" />
    </svg>
);
const StarIcon = ({ className = 'text-gray-400' }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);
// -----------------------------------------------------------------


// Sample education data
const education = [
  {
    college: "PES Modern College of Engineering",
    degree: "B.E. in Information Technology",
    duration: "2022 – 2026 (Expected)",
    resultValue: "8.33",
    resultLabel: "CGPA",
    accentColor: "indigo-600", // Used for hover/text accent
    imgUrl: "https://placehold.co/600x400/94A3B8/1E293B?text=PES+College", 
    iconComponent: GradIcon, // Correct: Graduation Cap for B.E.
  },
  {
    college: "Rahuri Education Society",
    degree: "HSC (Higher Secondary Certificate)",
    duration: "2020 – 2022",
    resultValue: "90.10%",
    resultLabel: "Percentage",
    accentColor: "indigo-600",
    imgUrl: "https://placehold.co/600x400/D1FAE5/065F46?text=Rahuri+Campus", 
    iconComponent: CertIcon, // Correct: Certificate Icon for HSC
  },
  {
    college: "SPVM, Rahuri",
    degree: "SSC (Secondary School Certificate)",
    duration: "2019 – 2020",
    resultValue: "95.50%",
    resultLabel: "Percentage",
    accentColor: "indigo-600",
    imgUrl: "https://placehold.co/600x400/FDE68A/78350F?text=SPVM+School", 
    iconComponent: StarIcon, // Correct: Star Icon for SSC
  },
];

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};


export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800"
        >
          Academic Qualifications
        </motion.h2>

        {/* Outer Container for Staggering */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="space-y-10"
        >
          {education.map((edu, idx) => {
            const IconComponent = edu.iconComponent;
            const accentTextClass = `text-${edu.accentColor}`;
            const accentHoverBorderClass = `hover:border-${edu.accentColor}`;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: `0px 15px 35px -10px rgba(0,0,0,0.1)`, 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                
                // MAIN CARD: Flex Row for Image (1/3) and Content (2/3)
                className={`bg-white rounded-2xl shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row overflow-hidden border-l-4 border-gray-100 ${accentHoverBorderClass}`}
                style={{ 
                    // Dynamic border color is now just used for the left accent line
                    borderLeftColor: `var(--color-${edu.accentColor})`
                }}
              >
                
                {/* 1. BIG IMAGE SECTION (Left - Fixed 1/3 Width on Desktop) */}
                <div className="md:w-1/3 w-full h-56 md:h-auto flex-shrink-0 relative">
                    <img
                        src={edu.imgUrl}
                        alt={`${edu.college} campus photo`}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/333333?text=College+Image+Loading..."; }}
                    />
                </div>

                {/* 2. CONTENT & METRIC SECTION (Right - Takes up 2/3 Width) */}
                <div className="p-6 sm:p-8 flex flex-col justify-between md:w-2/3">
                    
                    {/* Top Content Block */}
                    <div>
                        <p className={`text-sm font-semibold uppercase ${accentTextClass} mb-2`}>
                            {edu.duration}
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                            {edu.degree}
                        </h3>
                        <p className="text-base sm:text-xl text-gray-700 font-medium mt-1 mb-4">
                            {edu.college}
                        </p>
                    </div>

                    {/* Bottom Metric & Result Block (Cleaned up and separated) */}
                    <div className="border-t border-gray-200 pt-4 mt-auto flex items-center justify-between">
                        
                        {/* Result Value */}
                        <div className="flex items-center space-x-3">
                            {/* Icon now uses the subtle gray color, not the accent color */}
                            <IconComponent className={`w-6 h-6 text-gray-400`} /> 

                            <span className="text-4xl font-black text-gray-800">
                                {edu.resultValue}
                            </span>
                            <p className="text-lg font-semibold text-gray-600 uppercase">
                                {edu.resultLabel}
                            </p>
                        </div>
                        
                        {/* Empty Space for alignment / Clean separation */}
                        <div></div>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
