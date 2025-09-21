// src/components/Contact.jsx
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "Email",
    value: "pasupuletikalyannagu@gmail.com",
    icon: FaEnvelope,
    link: "mailto:pasupuletikalyannagu@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 6305030599",
    icon: FaPhone,
    link: "tel:+6305030599",
  },
  {
    label: "Location",
    value: "Andhra Pradesh, India",
    icon: FaMapMarkerAlt,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kalyannagu",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/kalyannagu-pasupuleti-185223297/",
  },
  {
    label: "GitHub",
    value: "github.com/kalyannagu",
    icon: FaGithub,
    link: "https://github.com/kalyan6305",
  },
  {
    label: "Instagram",
    value: "_kalyan_nagu_",
    icon: FaInstagram,
    link: "https://www.instagram.com/_kalyan_nagu/",
  },
];

const ContactCard = ({ label, value, Icon, link }) => (
  <motion.a
    href={link || "#"}
    target={link ? "_blank" : "_self"}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.07, backgroundColor: "rgba(30,41,59,0.7)" }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="group border border-white/10 backdrop-blur-md text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-md min-h-[65px] cursor-pointer relative overflow-hidden"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-transparent blur-2xl"></div>
    <motion.div whileHover={{ rotate: 12, scale: 1.2 }} className="relative z-10">
      {Icon && <Icon size={22} />}
    </motion.div>
    <div className="relative z-10">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-xs text-gray-300">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-b from-[#0a0f1f] via-[#0d1b2a] to-[#1b263b]"
    >
      <h1 className="text-7xl font-extrabold text-purple-500 mb-4">
        Contact Me
      </h1>

      <p className="text-lg text-gray-300 mb-4 max-w-2xl">
        Whether you have an idea, a project, or just want to say hi — my inbox
        is always open. I love connecting with people and exploring new
        opportunities.
      </p>

      <p className="text-md text-gray-400 italic mb-12">
        Let’s collaborate, innovate, and create something impactful together.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {contacts.map((c, index) => (
          <ContactCard
            key={index}
            label={c.label}
            value={c.value}
            Icon={c.icon}
            link={c.link}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 p-6 border border-white/10 bg-white/5 rounded-2xl max-w-2xl backdrop-blur-xl"
      >
        <h3 className="text-xl font-semibold text-purple-400 mb-2">
          Ready to collaborate?
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          Drop me a message via email or connect on LinkedIn. I’ll respond as
          soon as possible.
        </p>
        <a
          href="mailto:kalyannagu@example.com"
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition duration-300"
        >
          Send a Message ✉️
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
