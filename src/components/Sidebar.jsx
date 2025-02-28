import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import '../css/sidebar.css'

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Bhagya</h2>
          <FaTimes className="close-icon" onClick={() => setOpen(false)} />
        </div>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/"
            onClick={() => setOpen(false)}
          >
            About Me
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/portfolio"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </NavLink>
          {/* Dummy Menus */}
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/skills"
            onClick={() => setOpen(false)}
          >
            Skills
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/education"
            onClick={() => setOpen(false)}
          >
            Education
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/blog"
            onClick={() => setOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/experience"
            onClick={() => setOpen(false)}
          >
            Experience
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {!open && (
        <FaBars size={30} className="menu-icon" onClick={() => setOpen(true)} />
      )}
    </>
  );
};

export default Sidebar;
