// src/components/Achievements.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaMedal, FaTrophy } from "react-icons/fa";

const achievementsData = [
  { title: "Google Cloud Certified", organization: "Google", year: "2024", description: "Completed professional certification in cloud computing and deployment.", icon: FaAward },
  { title: "AICTE Internship", organization: "AICTE", year: "2023", description: "Internship on AI-based projects and full-stack application development.", icon: FaMedal },
  { title: "Hackathon Winner", organization: "TechFest", year: "2022", description: "Won first prize in a college-wide coding hackathon.", icon: FaTrophy },
  { title: "Top Performer", organization: "KITE College", year: "2021", description: "Recognized for excellence in academics and extracurricular projects.", icon: FaAward },
];

export default function Achievements() {
  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0a0f1f] via-[#0d1b2a] to-[#1b263b] text-white flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
      >
        Achievements
      </motion.h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 justify-center items-start w-full max-w-[1200px]">
        {achievementsData.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2, type: "spring" }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(255,255,255,0.2)" }}
            className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] bg-white/10 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-4 sm:p-6 shadow-lg cursor-pointer relative"
          >
            <div className="flex justify-center mb-4">
              <ach.icon size={40} className="text-pink-400 animate-bounce sm:w-12 sm:h-12" />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-300 text-center mb-2 leading-tight">{ach.title}</h3>
            <p className="text-gray-300 text-center text-sm sm:text-base mb-2">{ach.organization}</p>
            <p className="text-gray-400 text-center text-xs sm:text-sm mb-4">{ach.year}</p>
            <p className="text-gray-200 text-center text-sm sm:text-base leading-relaxed">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
