import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p className="date">{project.date}</p>
      <p className="description">{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-icon">
            {tech}
          </span>
        ))}
      </div>
      <div className="links">
        <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
