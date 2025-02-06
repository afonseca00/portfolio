import React from 'react';
import { Github } from 'lucide-react';

const Projects = ({ darkMode, t }) => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">{t.projects.title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.items.map((project, index) => (
          <div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-blue-600">{tech}</span>
              ))}
            </div>
            <button className="inline-flex items-center text-blue-500 hover:text-blue-400">
              <Github className="mr-2" size={20} />
              View Code
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
