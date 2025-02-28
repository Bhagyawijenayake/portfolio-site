import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css"; // Import the CSS file
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import Contact from "./components/Contact";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing type
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <Router>
      <div className="app-container">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className={`content ${sidebarOpen ? "shift-right" : ""}`}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
