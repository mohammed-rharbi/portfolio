import React from 'react';
import { FaHtml5, FaCss3Alt ,  FaJs, FaReact, FaDatabase, FaGitAlt, FaLaravel , FaPhp ,FaBootstrap , FaDocker  } from 'react-icons/fa';
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs, SiNodedotjs, SiJsonwebtokens, SiExpress, SiEjs, SiRedux, SiJira , SiMongodb , SiTailwindcss , SiSocketdotio , SiTypescript , SiJest} from 'react-icons/si';


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
  { name: 'Next.js', icon: <TbBrandNextjs />, level: 'Intermediate' }, 
  { name: 'Node.js', icon: <SiNodedotjs />, level: 'Intermediate' },
  { name: 'NestJS', icon: <SiNestjs />, level: 'Intermediate' },
  { name: 'JWT', icon: <SiJsonwebtokens />, level: 'Intermediate' },
  { name: 'Express', icon: <SiExpress />, level: 'Intermediate' },
  { name: 'EJS', icon: <SiEjs />, level: 'Intermediate' },
  { name: 'Redux', icon: <SiRedux />, level: 'Intermediate' },
  { name: 'Jira', icon: <SiJira />, level: 'Intermediate' },
  { name: 'MongoDb', icon: <SiMongodb />, level: 'Intermediate' },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 'Intermediate' },
  { name: 'Socket.io', icon: <SiSocketdotio />, level: 'Intermediate' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediate' },
  { name: 'Jest', icon: <SiJest />, level: 'Intermediate' },

];

const Skills = () => {
  return (


    <div className="skills-section">
      <h2 className="text-2xl font-bold mt-20">My Top Skills</h2>
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

      </div>

  );
};

export default Skills;
