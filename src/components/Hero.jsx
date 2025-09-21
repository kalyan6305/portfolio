import React from "react";
import { motion } from "framer-motion";
import profileIMG from "../assets/profile.jpg";

export default function Home() {
  const tagline =
    "Full Stack Developer | MERN | React | UI/UX | Building modern web apps with style";

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 pt-20 lg:pt-0 bg-gradient-to-br from-[#0a0f1f] via-[#0d1b2a] to-[#1b263b] text-white"
    >
      {/* Left Content */}
      <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left lg:pr-10 order-2 lg:order-1">
        {/* Name with typing animation */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold"
        >
          Hi, I'm{" "}
          <span className="relative inline-block text-cyan-400 overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 animate-typing">
            Kalyan Nagu
          </span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-cyan-300 leading-snug max-w-2xl mx-auto lg:mx-0 flex flex-wrap justify-center lg:justify-start"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {tagline.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center lg:justify-start">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-cyan-500/40 transition text-center"
          >
            View My Work
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1bnvjTQOpeNyQ712zxEskvgvqcgqEHevf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 sm:px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-pink-500/40 transition text-center"
          >
            Resume
          </motion.a>
        </div>
      </div>

      {/* Right Side Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex-1 flex justify-center mt-8 lg:mt-0 order-1 lg:order-2"
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-[0_0_30px_8px_rgba(0,255,255,0.4)] animate-float">
          <img
            src={profileIMG}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>

      {/* Extra Animations */}
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          50% { border-color: transparent }
        }
        .animate-typing {
          animation: typing 3s steps(20, end), blink 0.75s step-end infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-15px) }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
