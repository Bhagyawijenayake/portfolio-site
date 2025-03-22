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
          {[
            { id: "about", label: "About Me" },
            { id: "portfolio", label: "Portfolio" },
            { id: "skills", label: "Skills" },
            { id: "education", label: "Education" },
            { id: "blog", label: "Blog" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
      {!open && (
        <FaBars size={40} className="menu-icon" onClick={() => setOpen(true)} />
      )}
    </>
  );
};

export default Sidebar;
