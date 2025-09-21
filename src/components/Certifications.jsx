import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      title: "WEB DEVELOPMENT",
      issuer: "EDUSKILLS ACADEMY",
      category: "Coursera",
      date: "AUG 2021",
      link: "https://drive.google.com/file/d/1pYw8dpbKNB13gF3w-Dm6WIFbMKsXEUtV/view?usp=drive_link",
    },
    {
      title: "Embrace responsible AI principles and practices",
      issuer: "microsoft",
      category: "MICROSOFT",
      date: "Nov 2024",
      link: "https://drive.google.com/file/d/1uJFXXwALYP1zS_uQOTypF3DpYEXbyQY-/view?usp=drive_link",
    },
    {
      title: "Leverage AI tools and resources for your business",
      issuer: "microsoft",
      category: "MICROSOFT",
      date: "Nov 2024",
      link: "https://drive.google.com/file/d/1YmWk6Vyps-yUCcSaw9OwEZzUPNqyC46U/view?usp=drive_link",
    },
    {
      title: "AI for Digital Literacy",
      issuer: "AICTE",
      category: "AICTE",
      date: "Aug 2024",
      link: "https://aicte.com/certificate/your-certificate-id",
    },

    {
      title: "Android Developer virtual internship",
      issuer: "Edukills ",
      category: "AICTE ",
      date: "March 2025",
      link: "https://drive.google.com/file/d/1_QsEN2Mds64RCA23zSMiCWAZV2CupmjC/view?usp=drive_link",
    },
    {
      title: "JAVA FULL STOCK DEVELOPER",
      issuer: "EDUNET FOUNDATION",
      category: "AICTE",
      date: "OCT - Dec 2024",
      link: "https://drive.google.com/file/d/1TFqiCTSI27Vw3QTQjPN1acQ_cdlTr1_-/view?usp=drive_link",
    },
    {
      title: "AI-first Software Engineering",
      issuer: "INFOSYS",
      category: "INFOSYS",
      date: "NOV-2024 TO DEC -2024",
      link: "https://drive.google.com/file/d/1y83OMebIOfY-I-7ErwXdWnhhgW_HPmGF/view?usp=drive_link",
    },
    {
      title: "Artificial Intelligence and Data Analytics",
      issuer: "EDUNET",
      category: "EDUNET",
      date: "Aug 2024",
      link: "https://drive.google.com/file/d/1a1hepnuc_dwY6mZZHME88HDysigvACp0/view?usp=drive_link",
    },

    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft and LinkedIn",
      category: "LINKEDIN",
      date: "NOV 2024",
      link: "https://drive.google.com/file/d/1u-cuCC5HwY5vNq7Vej25v56pdnVnP8Ok/view?usp=drive_link",
    },
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "AICTE", "EDUNET","INFOSYS","MICROSOFT", "LINKEDIN"];

  // Filtered list
  const filteredCerts =
    filter === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === filter);

  return (
    <section
      id="certifications"
      className="relative min-h-screen px-4 sm:px-6 md:px-10 py-16 sm:py-20 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#1c2b4a] text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 drop-shadow-lg"
      >
         Certifications
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat)}
            className={`px-3 sm:px-5 py-2 rounded-full font-medium border transition text-xs sm:text-sm ${
              filter === cat
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-800/40 text-gray-300 border-gray-600 hover:bg-gray-700/40"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Certifications Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 relative z-10"
      >
        <AnimatePresence>
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-pink-500/20 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-pink-500/40 transition"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-300 leading-tight">{cert.title}</h3>

              {/* Issuer + Date */}
              <p className="mt-2 text-gray-300 text-sm sm:text-base">
                {cert.issuer} <br />
                <span className="text-xs sm:text-sm text-gray-400">{cert.date}</span>
              </p>

              {/* View Certificate */}
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 sm:mt-6 px-4 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transition text-sm sm:text-base"
              >
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
