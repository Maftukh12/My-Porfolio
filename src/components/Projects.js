import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Deskripsi project 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Deskripsi project 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "Firebase", "Tailwind"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Deskripsi project 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/300x200",
      tech: ["React Native", "Express", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 