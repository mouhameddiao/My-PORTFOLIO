// ✅ Projects.jsx - Responsive
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Site Fatimah Food',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'Une plateforme de Restaurant moderne avec intégration de paiement et gestion de panier en temps réel.',
    link: 'https://khaadeejafood.vercel.app/'
  },
  {
    title: 'Site khaadeejaa food',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'Une plateforme de e-commerce moderne avec intégration de paiement et gestion de panier en temps réel.',
    link: 'https://khaadeejafood.vercel.app/'
  },
  {
    title: 'Site KURINJI vetement',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'Une plateforme de e-commerce moderne avec intégration de paiement et gestion de panier en temps réel.',
    link: 'https://vercel.com/mohamet-diaos-projects/nabufood'
  },
  {
    title: 'Site Fatimah Food',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'Une plateforme de e-commerce moderne avec intégration de paiement et gestion de panier en temps réel.',
    link: 'https://vercel.com/mohamet-diaos-projects/nabufood'
  }
];

const Projects = () => {
  return (
    <div className="py-20 bg-gray-50 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-16">
          Mes Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex justify-between items-center">
                {project.title}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  <FaExternalLinkAlt className="ml-2 text-lg" />
                </a>
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
