// src/components/Skills.jsx
import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGit,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFlask,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGithubactions,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "React.js", icon: FaReact, color: "#61DAFB", desc: "Building dynamic and scalable web apps." },
  { name: "Python", icon: FaPython, color: "#FFD43B", desc: "Used for scripting, automation, and backend development." },
  { name: "Flask", icon: SiFlask, color: "#000000", desc: "Lightweight Python framework for APIs and apps." },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", desc: "Utility-first CSS framework for rapid UI design." },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", desc: "NoSQL database for flexible and scalable data storage." },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", desc: "Server-side JavaScript runtime for APIs and backend." },
  { name: "Java", icon: FaJava, color: "#007396", desc: "Object-oriented programming for large-scale apps." },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", desc: "Core web language for frontend interactivity." },
  { name: "Git", icon: FaGit, color: "#F05032", desc: "Version control for tracking and collaboration." },
  
];

const SkillCard = ({ name, Icon, color, desc, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: false, amount: 0.5 }}
    className="relative border border-white/10 backdrop-blur-md rounded-xl px-4 py-5 flex items-center shadow-md min-h-[120px] cursor-pointer group bg-gradient-to-r from-cyan-600/20 to-blue-600/20"
    onClick={onClick}
  >
    {Icon && <Icon size={40} color={color} className="flex-shrink-0" />}
    <div className="ml-4 text-left">
      <span className="block text-base font-semibold mb-1">{name}</span>
      <span className="block text-sm text-gray-200">{desc}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <React.Fragment>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative bg-gradient-to-b from-[#1b263b] via-[#0d1b2a] to-[#0a0f1f]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-cyan-400 mb-4"
        >
          Skills
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 mb-12 max-w-3xl"
        >
          A tree view of my technical toolkit. Click on each card to learn more.
        </motion.p>

        <div className="relative w-full max-w-6xl flex flex-col items-center gap-10">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/30 to-blue-500/50 rounded" />
          {skills.map((skill, idx) => (
            <div key={skill.name} className="w-full flex justify-center relative">
              <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-cyan-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />
              <div className="w-full max-w-3xl flex justify-between items-center gap-4">
                {idx % 2 === 0 ? (
                  <>
                    <div className="w-1/2 flex justify-end">
                      <SkillCard
                        name={skill.name}
                        Icon={skill.icon}
                        color={skill.color}
                        desc={skill.desc}
                        onClick={() => setSelectedSkill(skill)}
                      />
                    </div>
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>
                    <div className="w-1/2 flex justify-start">
                      <SkillCard
                        name={skill.name}
                        Icon={skill.icon}
                        color={skill.color}
                        desc={skill.desc}
                        onClick={() => setSelectedSkill(skill)}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg relative"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-3 right-3 text-white/70 hover:text-white text-lg"
              >
                ✕
              </button>

              {/* Icon + Title */}
              <div className="flex flex-col items-center mb-4">
                {selectedSkill.icon && (
                  <selectedSkill.icon size={50} color={selectedSkill.color} />
                )}
                <h2 className="text-2xl font-bold mt-2">{selectedSkill.name}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-100 text-center">{selectedSkill.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Skills;
