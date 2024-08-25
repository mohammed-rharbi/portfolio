import React from 'react';

const Project = () => {
  const projects = [
    {
      name: 'EVENTO',
      description: 'Evento is creating a platform for event management and reservations. Users can book and generate tickets, while organizers manage their events.',
      technologies: ['SQL', 'JavaScript', 'Bootstrap','Laravel'],
      link: 'https://github.com/yourusername/project-one',
      image: '/public/electro-maroc-2-65b3f59c5a3bc974840308.png' 
    },
    {
      name: 'MonGrandTaxi',
      description: 'MonGrandTaxi is a user-friendly platform enabling users to find available drivers and drivers to publish their availability',
      technologies: ['JavaScript', 'SQL','Laravel','Bootstrap'],
      link: 'https://github.com/yourusername/project-two',
      image: '/public/electro-maroc-17-65c0988f5116d694298253.png'
    },

    {
      name: 'recipe book',
      description: 'A brief description of Project Two.',
      technologies: ['HTML', 'JavaScript', 'SQL'],
      link: 'https://github.com/yourusername/project-two',
      image: '/public/electro-maroc-17-65c0988f5116d694298253.png'
    },
    {
      name: 'Smart Travel',
      description: 'A brief description of Project Two.',
      technologies: ['HTML', 'JavaScript', 'SQL'],
      link: 'https://github.com/yourusername/project-two',
      image: '/public/electro-maroc-17-65c0988f5116d694298253.png'
    },

    {
      name: 'Wiki™',
      description: 'A brief description of Project Two.',
      technologies: ['HTML', 'JavaScript', 'SQL'],
      link: 'https://github.com/yourusername/project-two',
      image: ''
    },

        {
      name: 'BookVerse ',
      description: 'A brief description of Project Two.',
      technologies: ['HTML', 'JavaScript', 'SQL'],
      link: 'https://github.com/yourusername/project-two',
      image: '/public/electro-maroc-2-65b3f59c5a3bc974840308.png'
    },
  ];

  return (
    <div className="projects-section">
      <h1>Some of My Recent Projects</h1>
      <div className="projects-grid ">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.name} image`} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
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
