import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-10 py-20 bg-gradient-to-b from-[#0a0f1f] via-[#0d1b2a] to-[#1b263b] text-white flex flex-col justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg"
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-xl leading-relaxed"
        >
          Hi, I’m{" "}
          <span className="text-cyan-400 font-semibold">Kalyan Nagu</span>, a{" "}
          <span className="font-bold text-cyan-200">Full Stack Developer</span>{" "}
          with expertise in{" "}
          <span className="text-blue-400 font-semibold">MERN stack</span> and
          modern UI/UX design. I build{" "}
          <span className="text-cyan-300">creative, responsive, and scalable</span>{" "}
          web apps that focus on user experience.
        </motion.p>

        <motion.a
          href="https://drive.google.com/file/d/1bnvjTQOpeNyQ712zxEskvgvqcgqEHevf/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/40 transition"
        >
          View Resume
        </motion.a>
      </div>
    </section>
  );
}
