import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            requestAnimationFrame(() => {
              setActiveSection(entry.target.id);
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="app-container">
      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <div className="content">
        <section id="about">
          <AboutMe />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;
