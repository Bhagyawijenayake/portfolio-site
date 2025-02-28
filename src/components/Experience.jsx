import React, { useEffect } from "react";
import thinkadoLogo from "../assets/thinkado.png"; // Add your Thinkado logo here
import starGarmentsLogo from "../assets/star.jpeg"; // Add your Star Garments logo here
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../css/experience.css";

const Experience = () => {
  // Initialize AOS inside the component
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="experience-section">
      <h2 data-aos="fade-up">Experience</h2>

      {/* Thinkado Pvt. Ltd */}
      <div className="experience-card" data-aos="fade-up" data-aos-delay="100">
        <div className="company-header">
          <img
            src={thinkadoLogo}
            alt="Thinkado Logo"
            className="company-logo"
            data-aos="zoom-in"
          />
          <div>
            <h3>Thinkado Pvt. Ltd</h3>
            <p>Software Engineer Intern</p>
            <p>Jan 2023 - Jul 2023</p>
          </div>
        </div>
        <ul>
          <li data-aos="fade-up">
            Developed web applications and landing pages utilizing React, Redux
            Toolkit, and Bootstrap.
          </li>
          <li data-aos="fade-up">
            Designed and implemented an e-commerce site using Figma and
            developed it with React and Redux Toolkit.
          </li>
        </ul>
        <a
          href="https://thinkado.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="company-link"
          data-aos="fade-up"
        >
          Visit Thinkado
        </a>
      </div>

      {/* Star Garments Group - IT Department */}
      <div className="experience-card" data-aos="fade-up" data-aos-delay="200">
        <div className="company-header">
          <img
            src={starGarmentsLogo}
            alt="Star Garments Logo"
            className="company-logo"
            data-aos="zoom-in"
          />
          <div>
            <h3>Star Garments Group - IT Department</h3>
            <p>Software Engineering Trainee</p>
            <p>May 2024 - Dec 2024</p>
          </div>
        </div>
        <ul>
          <li data-aos="fade-up">
            Contributed to the development of a 'Smart Tag' shop floor system
            for garment manufacturing, utilizing Angular and RxJS to optimize
            production workflows and enhance real-time data visibility.
          </li>
        </ul>
        <a
          href="https://www.star.lk/"
          target="_blank"
          rel="noopener noreferrer"
          className="company-link"
          data-aos="fade-up"
        >
          Visit Star Garments
        </a>
      </div>
    </div>
  );
};

export default Experience;
