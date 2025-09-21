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
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-[#0a0f1f] via-[#0d1b2a] to-[#1b263b] text-white flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
      >
        Achievements
      </motion.h2>

      {/* Cards Container */}
      <div className="flex flex-wrap gap-6 justify-center items-start w-full max-w-[1200px]">
        {achievementsData.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2, type: "spring" }}
            whileHover={{ scale: 1.05, rotateY: 3, rotateX: 2, boxShadow: "0 10px 25px rgba(255,255,255,0.2)" }}
            className="flex-shrink-0 w-[320px] md:w-[360px] bg-white/10 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-6 shadow-lg cursor-pointer relative"
          >
            <div className="flex justify-center mb-4">
              <ach.icon size={50} className="text-pink-400 animate-bounce" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-cyan-300 text-center mb-2">{ach.title}</h3>
            <p className="text-gray-300 text-center text-sm md:text-base mb-2">{ach.organization}</p>
            <p className="text-gray-400 text-center text-xs md:text-sm mb-4">{ach.year}</p>
            <p className="text-gray-200 text-center text-sm md:text-base">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
