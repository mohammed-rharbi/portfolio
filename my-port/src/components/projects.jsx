import React, { useState } from 'react';
import { FaHtml5, FaJs, FaBootstrap, FaLaravel, FaDatabase , FaReact , FaPhp , FaCss3Alt , FaNodeJs , FaDocker  } from 'react-icons/fa';
import {projects} from '../projects'
import { SiNestjs, SiJsonwebtokens, SiExpress, SiEjs, SiRedux, SiMongodb , SiTailwindcss , SiSocketdotio  } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";

const Project = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const techIcons = {
    HTML: <FaHtml5 className="text-orange-600" />,
    JavaScript: <FaJs className="text-yellow-500" />,
    Bootstrap: <FaBootstrap className="text-purple-600" />,
    Laravel: <FaLaravel className="text-red-600" />,
    SQL: <FaDatabase className="text-blue-600" />,
    React: <FaReact className="text-blue-600" />,
    PHP: <FaPhp className="text-blue-600" />,
    css: <FaCss3Alt className="text-blue-600" />,
    NodeJs: <FaNodeJs className="text-blue-600" />,
    Mongo: <SiMongodb className="text-green-600" />,
    Nest: <SiNestjs className="text-red-600" />,
    Next: <TbBrandNextjs className="text-red-600" />,
    JWT: <SiJsonwebtokens className="text-red-600" />,
    Express: <SiExpress className="text-red-600" />,
    EJS: <SiEjs className="text-red-600" />,
    Redux: <SiRedux className="text-red-600" />,
    Docker: <FaDocker className="text-blue-500" />,
    Tailwind: <SiTailwindcss className="text-blue-500" />,
    Socket: <SiSocketdotio className="text-blue-500" />,

  };

  return (
    <div className="projects-section">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">Some of My Recent Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {currentProjects.map((project, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col">
            <img src={project.image} alt={`${project.name} image`} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="relative p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="inline-flex items-center px-4 py-2 bg-gray-200 rounded-full text-gray-700">
                    {techIcons[tech] || tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">See Project</button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">Demo</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 mx-2 bg-gray-600 text-white rounded-md disabled:opacity-50">Previous</button>
        <span className="px-4 py-2 mx-2 text-gray-300">Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 mx-2 bg-gray-600 text-white rounded-md disabled:opacity-50">Next</button>
      </div>
    </div>
  );
};

export default Project;
