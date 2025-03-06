import { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  // Initialize AOS inside the component
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "Flutter E-Commerce Store",
      date: "September 2020",
      description:
        "Sample hybrid mobile application for Google Perks Store using Provider pattern in Flutter.",
      category: "mobile",
      github: "#",
      demo: "#",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Bulk TikTok Video Downloader",
      date: "February 2025",
      description:
        "A Python-based GUI application to download TikTok videos, organize them into categories, and reframe them to a specific resolution (e.g., 1080x1920 for vertical videos).",
      category: "desktop",
      github: "https://github.com/Bhagyawijenayake/bulk_tiktok_downloader",
      demo: "#",
      technologies: ["Python"],
    },
    {
      title: "Unity Cube Runner Game",
      date: "2022",
      description: "simple 3D Cube-Runner game using  Unity and C#.",
      category: "games",
      github: "https://github.com/Bhagyawijenayake/Cube-Runner",
      demo: "https://www.linkedin.com/posts/bhagyawijenayake_unity-unity3d-activity-6952676097222205440-2l8y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9o5HIBDJNwPM5xh0qpi38oM4Iit9_vpNA",
      technologies: ["Unity", "C#", "3D Game Development"],
    },
    {
  "title": "Fiverr Gig Data Copier",
  "date": "2025",
  "description": "A Chrome extension that allows users to quickly copy Fiverr gig details, including the title, URL, description, and tags, with a single click.",
  "category": "browser-extension",
  "github": "https://github.com/Bhagyawijenayake/Fiverr-Gig-Data-Copier,
  "demo": "https://github.com/Bhagyawijenayake/Fiverr-Gig-Data-Copier",
  "technologies": ["JavaScript", "Chrome Extensions", "Manifest V3", "CSS"]
}

  ];

  return (
    <div className="portfolio">
      <h1 data-aos="fade-up">Portfolio</h1>
      {/* Remove AOS from tabs to ensure they are always visible */}
      <div className="tabs" data-aos="fade-down">
        {["all", "web", "mobile", "desktop", "games", "shopify" ,"browser-extension"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`tab-button ${filter === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="projects">
        {projects
          .filter((p) => filter === "all" || p.category === filter)
          .map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100} // Staggered delay for each project
            >
              <h2>{project.title}</h2>
              <p className="date">{project.date}</p>
              <p>{project.description}</p>
              <div className="links">
                <a
                  href={project.github}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  <FaGithub /> Source Code
                </a>
                <a
                  href={project.demo}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-badge"
                    data-aos="fade-up"
                    data-aos-delay={300 + i * 50} // Staggered delay for each technology
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
