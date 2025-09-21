export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/60 backdrop-blur-md z-50 border-b border-gray-700">
      <ul className="flex justify-center gap-8 p-4 text-gray-200 font-medium tracking-wide">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
