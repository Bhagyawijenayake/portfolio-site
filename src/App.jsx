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
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <div className="content">
        <section id="about" data-aos="fade-up">
          <AboutMe />
        </section>
        <section id="portfolio" data-aos="fade-up">
          <Portfolio />
        </section>
        <section id="skills" data-aos="fade-up">
          <Skills />
        </section>
        <section id="education" data-aos="fade-up">
          <Education />
        </section>
        <section id="blog" data-aos="fade-up">
          <Blog />
        </section>
        <section id="experience" data-aos="fade-up">
          <Experience />
        </section>
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
        <section id="contact" data-aos="fade-up">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;
