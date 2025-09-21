import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ✅ Import icons

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern React + Tailwind portfolio with animations and smooth UI.",
      github: "https://github.com/yourgithub/portfolio",
      demo: "https://your-portfolio-demo.com",
    },
    {
      title: "Leaf Image Classifier",
      description:
        "AI-powered leaf image classifier with 30-tree species recognition using CNN + Streamlit frontend",
      github: "https://github.com/kalyan6305/Leaf-Image-Classifier",
      demo: "#",
    },
    {
      title: "Healthcare Chatbot",
      description:
        "AI-powered chatbot with multilingual support using OpenAI API + Flask backend.",
      github: "https://github.com/yourgithub/healthcare-chatbot",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen px-10 py-20 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#1c2b4a] text-white overflow-hidden"
    >
      {/* Floating blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg"
      >
         My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            className="relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-transform duration-500"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6">{project.description}</p>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium shadow-md overflow-hidden group"
              >
                <FaGithub size={20} /> {/* ✅ GitHub Icon */}
                <span className="relative z-10">Code</span>
              </motion.a>

              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 px-5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-md overflow-hidden group"
              >
                <FaExternalLinkAlt size={18} /> {/* ✅ Demo Icon */}
                <span className="relative z-10">Demo</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
