// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "KAKINADA INSTITUTE OF ENGINEERING & TECHNOLOGY",
    year: "2022 - 2026",
    description: "Focused on Machine Learning, AI, and full-stack development projects.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "SCHOLAR Junior College",
    year: "2020 - 2022",
    description: "Completed higher secondary with specialization in Mathematics, Physics, and Chemistry.",
  },
  {
    degree: "SSC",
    institution: "VIDYARDHI High School",
    year: "2019 - 2020",
    description: "Completed school education with distinction in academics.",
  },
];

export default function Education() {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0a0f1f] via-[#0d1b2a] to-[#1b263b] text-white flex flex-col items-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
      >
     Education
      </motion.h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center w-full max-w-[1200px]">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2, type: "spring" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 20px rgba(255,255,255,0.2)",
            }}
            className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-4 sm:p-5 shadow-lg cursor-pointer relative"
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <FaGraduationCap size={40} className="text-purple-400 animate-bounce sm:w-11 sm:h-11" />
            </div>

            {/* Degree */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyan-300 text-center mb-1 leading-tight">
              {edu.degree}
            </h3>

            {/* Institution */}
            <p className="text-gray-300 text-center text-xs sm:text-sm mb-1 leading-tight">{edu.institution}</p>

            {/* Year */}
            <p className="text-gray-400 text-center text-[10px] sm:text-xs mb-2">{edu.year}</p>

            {/* Description */}
            <p className="text-gray-200 text-center text-xs sm:text-sm leading-relaxed">{edu.description}</p>

            {/* Animated gradient border overlay */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
