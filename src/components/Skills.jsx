import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiGit,
  SiDocker,
  SiNginx,
  SiShopify,
  SiWordpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import '../css/skills.css'

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 data-aos="fade-down">Skills</h2>

      {/* Skills Overview */}
      <div className="skills-overview" data-aos="fade-up">
        <p>
          With a diverse skill set spanning <strong>Frontend</strong>,{" "}
          <strong>Backend</strong>, <strong>Database Management</strong>, and{" "}
          <strong>DevOps</strong>, I bring a holistic approach to software
          development. Below is a breakdown of my technical expertise.
        </p>
      </div>

      {/* Frontend Development */}
      <div className="skill-category" data-aos="fade-right">
        <h3>Frontend Development</h3>
        <div className="skill-icons">
          <div className="skill-item" data-aos="zoom-in">
            <SiHtml5 className="skill-icon html" title="HTML5" />
            <span className="skill-name">HTML5</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="100">
            <SiCss3 className="skill-icon css" title="CSS3" />
            <span className="skill-name">CSS3</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="200">
            <SiJavascript
              className="skill-icon javascript"
              title="JavaScript"
            />
            <span className="skill-name">JavaScript</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="300">
            <SiReact className="skill-icon react" title="React.js" />
            <span className="skill-name">React.js</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
            <SiNextdotjs className="skill-icon nextjs" title="Next.js" />
            <span className="skill-name">Next.js</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="500">
            <SiAngular className="skill-icon angular" title="Angular" />
            <span className="skill-name">Angular</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="600">
            <SiBootstrap className="skill-icon bootstrap" title="Bootstrap" />
            <span className="skill-name">Bootstrap</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="700">
            <SiTailwindcss
              className="skill-icon tailwind"
              title="Tailwind CSS"
            />
            <span className="skill-name">Tailwind CSS</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="800">
            <SiShopify className="skill-icon shopify" title="Shopify" />
            <span className="skill-name">Shopify</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="900">
            <SiWordpress className="skill-icon wordpress" title="WordPress" />
            <span className="skill-name">WordPress</span>
          </div>
        </div>
      </div>

      {/* Backend Development */}
      <div className="skill-category" data-aos="fade-left">
        <h3>Backend Development</h3>
        <div className="skill-icons">
          <div className="skill-item" data-aos="zoom-in">
            <SiNodedotjs className="skill-icon nodejs" title="Node.js" />
            <span className="skill-name">Node.js</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="100">
            <SiExpress className="skill-icon express" title="Express.js" />
            <span className="skill-name">Express.js</span>
          </div>
        </div>
      </div>

      {/* Database Management */}
      <div className="skill-category" data-aos="fade-right">
        <h3>Database Management</h3>
        <div className="skill-icons">
          <div className="skill-item" data-aos="zoom-in">
            <SiMongodb className="skill-icon mongodb" title="MongoDB" />
            <span className="skill-name">MongoDB</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="100">
            <SiMysql className="skill-icon mysql" title="MySQL" />
            <span className="skill-name">MySQL</span>
          </div>
        </div>
      </div>

      {/* State Management */}
      <div className="skill-category" data-aos="fade-left">
        <h3>State Management</h3>
        <div className="skill-icons">
          <div className="skill-item" data-aos="zoom-in">
            <SiRedux className="skill-icon redux" title="Redux Toolkit" />
            <span className="skill-name">Redux Toolkit</span>
          </div>
        </div>
      </div>

      {/* Version Control */}
      <div className="skill-category" data-aos="fade-right">
        <h3>Version Control</h3>
        <div className="skill-icons">
          <div className="skill-item" data-aos="zoom-in">
            <SiGit className="skill-icon git" title="Git" />
            <span className="skill-name">Git</span>
          </div>
        </div>
      </div>

      {/* Development Tools */}
      <div className="skill-category" data-aos="fade-left">
        <h3>Development Tools</h3>
        <div className="skill-icons">
          <div className="skill-item" data-aos="zoom-in">
            <SiDocker className="skill-icon docker" title="Docker" />
            <span className="skill-name">Docker</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="100">
            <SiNginx className="skill-icon nginx" title="Nginx" />
            <span className="skill-name">Nginx</span>
          </div>
          <div className="skill-item" data-aos="zoom-in" data-aos-delay="200">
            <VscVscode className="skill-icon vscode" title="VS Code" />
            <span className="skill-name">VS Code</span>
          </div>
        </div>
      </div>

      {/* GitHub Contributions */}
      {/* <div className="github-contributions" data-aos="fade-up">
        <h3>GitHub Contributions</h3>
        <img
          src="https://ghchart.rshah.org/yourusername" // Replace with your GitHub username
          alt="GitHub Contributions"
          className="github-chart"
        />
      </div> */}
    </div>
  );
};

export default Skills;
