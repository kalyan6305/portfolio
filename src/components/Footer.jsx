// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: FaGithub, link: "https://github.com/kalyan6305" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/kalyannagu-pasupuleti-185223297/" },
    { icon: FaTwitter, link: "" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-t from-[#0d1b2a] to-[#0a0f1f] py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Full-Width Glass Board */}
      <div className="w-full px-4 sm:px-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 shadow-lg min-h-[180px] sm:min-h-[220px]">

        {/* Name / Branding - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-extrabold"
          style={{
            fontSize: "clamp(2rem, 8vw, 4rem)", // smaller for mobile
            lineHeight: "1.1"
          }}
        >
          Kalyan Nagu
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 sm:gap-6 text-white text-2xl sm:text-3xl mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15, color: "#A855F7" }}
                className="transition-colors duration-300"
              >
                <Icon />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-xs sm:text-sm md:text-base text-center mt-4 md:mt-0 w-full px-4"
        >
          © {new Date().getFullYear()} Kalyan Nagu. Built with using React, Tailwind CSS & Framer Motion.
        </motion.div>
      </div>

      {/* Animated Gradient Glow Circles */}
      <div className="absolute -top-10 -left-10 w-24 sm:w-36 h-24 sm:h-36 bg-purple-500 rounded-full opacity-30 animate-pulse-slow blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-32 sm:w-52 h-32 sm:h-52 bg-pink-500 rounded-full opacity-20 animate-pulse-slower blur-3xl"></div>
    </footer>
  );
}
