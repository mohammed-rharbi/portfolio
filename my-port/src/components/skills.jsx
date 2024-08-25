import React from 'react';
import Projects from './projects';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt, FaLaravel , FaPhp ,FaBootstrap , FaDocker   } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', icon: <FaJs />, level: 'Intermediate' },
  { name: 'React', icon: <FaReact />, level: 'Intermediate' },
  { name: 'HTML', icon: <FaHtml5 />, level: 'Advanced' },
  { name: 'CSS', icon: <FaCss3Alt />, level: 'Advanced' },
  { name: 'SQL', icon: <FaDatabase />, level: 'Intermediate' }, 
  { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
  { name: 'Laravel', icon: <FaLaravel />, level: 'Intermediate' }, 
  { name: 'PHP', icon: <FaPhp />, level: 'Intermediate' }, 
  { name: 'Bootstrap', icon: <FaBootstrap />, level: 'Advanced' }, 
  { name: 'Docker', icon: <FaDocker />, level: 'Intermediate' }, 


];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>My Top Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>

      <Projects></Projects>
    </div>

  );
};

export default Skills;
