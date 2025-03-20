import React from "react";
import {
  FaGlobe,
  FaUser,
  FaLanguage,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaJava,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript,
  SiTypescript,
  SiMedium,
  SiIntellijidea,
  SiWebstorm,
  SiYoutube,
} from "react-icons/si";
import profileImage from "../assets/pp.webp"; // Add your profile image here
import "../css/aboutme.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Header Section */}
      <div className="header" data-aos="fade-down">
        <div className="profile">
          <img
            src={profileImage}
            alt="Bhagya Wijenayake"
            className="profile-photo"
            data-aos="zoom-in"
          />
          <div>
            <h1 data-aos="fade-right">Bhagya Wijenayake</h1>
            <h2 data-aos="fade-right" data-aos-delay="100">
              Freelance Software Developer
            </h2>
            <p data-aos="fade-right" data-aos-delay="200">
              "In a world filled with AI, trust your muscle memory to guide your
              code."
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about card" data-aos="fade-up">
        <h3>
          <FaUser /> About Bhagya
        </h3>
        <p style={{ textAlign: "center" }}>
          I am an graduate (unofficial) in Software Engineering (Second Class
          Lower Division) with skills in React, Angular, Node.js, Express.js,
          and MongoDB. I am eager to contribute to dynamic teams and projects
          and am committed to continuous learning and innovation.
        </p>
        <br />
        <p>
          <FaGlobe /> Sri Lanka
        </p>
      </div>

      {/* Language Proficiency Section */}
      <div className="languages card" data-aos="fade-up" data-aos-delay="100">
        <h3>
          <FaLanguage /> Language Proficiency
        </h3>
        <div className="language-icons">
          <span className="language-icon" data-aos="fade-right">
            <FaLanguage /> English
          </span>
          <span
            className="language-icon"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <FaLanguage /> Sinhala
          </span>
        </div>
      </div>

      {/* Developer Details Section */}
      <div
        className="developer-details card"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3>Developer Details</h3>
        <div className="details-grid">
          <div data-aos="fade-right">
            <h4>Favourite Languages</h4>
            <div className="about-skill-icons">
              <SiJavascript
                className="skill-icon javascript"
                title="JavaScript"
              />
              <SiTypescript
                className="skill-icon typescript"
                title="TypeScript"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h4>Career Goal</h4>
            <p>Build a Strong Client Base</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <h4>Favourite IDEs</h4>
            <div className="about-skill-icons">
              <VscVscode className="skill-icon vscode" title="VS Code" />
            </div>
          </div>
        </div>
      </div>

      {/* Find Me on the Internet Section */}
      <div
        className="social-links card"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3>Find Me on the Internet</h3>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/bhagyawijenayake/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            <FaLinkedin className="social-icon linkedin" title="LinkedIn" />
          </a>
          <a
            href="https://github.com/Bhagyawijenayake"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaGithub className="social-icon github" title="GitHub" />
          </a>
          <a
            href="https://medium.com/@bhagyasudaraka98"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <SiMedium className="social-icon medium" title="Medium" />
          </a>
          <a
            href="https://www.youtube.com/@Bhagyology"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <SiYoutube className="social-icon youtube" title="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
