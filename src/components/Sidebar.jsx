import { FaBars, FaTimes } from "react-icons/fa";
import "../css/sidebar.css";
import { useState } from "react";

const Sidebar = ({ activeSection, scrollToSection }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Bhagya</h2>
          <FaTimes className="close-icon" onClick={() => setOpen(false)} />
        </div>
        <nav>
          <button
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            About Me
          </button>
          <button
            className={`nav-link ${
              activeSection === "portfolio" ? "active" : ""
            }`}
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className={`nav-link ${
              activeSection === "education" ? "active" : ""
            }`}
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>
          <button
            className={`nav-link ${activeSection === "blog" ? "active" : ""}`}
            onClick={() => scrollToSection("blog")}
          >
            Blog
          </button>
          <button
            className={`nav-link ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
          <button
            className={`nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>
      </div>
      {!open && (
        <FaBars size={40} className="menu-icon" onClick={() => setOpen(true)} />
      )}
    </>
  );
};

export default Sidebar;
