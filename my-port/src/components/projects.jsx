import React from 'react';

const Project = () => {
  const projects = [
    {
      name: 'Project One',
      description: 'Evento is creating a platform for event management and reservations. Users can book and generate tickets, while organizers manage their events.',
      technologies: ['React', 'Node.js', 'CSS'],
      link: 'https://github.com/yourusername/project-one',
      image: '/public/electro-maroc-2-65b3f59c5a3bc974840308.png' 
    },
    {
      name: 'Project Two',
      description: 'A brief description of Project Two.',
      technologies: ['HTML', 'JavaScript', 'SQL'],
      link: 'https://github.com/yourusername/project-two',
      image: '/public/electro-maroc-17-65c0988f5116d694298253.png'
    },
  ];

  return (
    <div className="projects-section">
      <h1>Some of My Recent Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.name} image`} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="categories">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="project-technology">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="project-button">See Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
