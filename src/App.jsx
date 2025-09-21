import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Hero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Achievements from "./components/Achievements.jsx";

function App() {
  return (
    <>
      {/* ✅ Navbar Component */}
      <Navbar />  

      {/* ✅ Sections with IDs for smooth scrolling */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="certifications"><Certifications /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
