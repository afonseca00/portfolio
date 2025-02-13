import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ darkMode, t }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-8">{t.projects.title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            } transition-transform hover:-translate-y-2`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Carrossel de imagens */}
            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
              <Slider {...sliderSettings}>
                {project.screenshots?.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`${project.title} - ${i + 1}`}
                    className="object-cover w-full h-full"
                  />
                ))}
              </Slider>
            </div>

            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>

            {/* Tecnologias usadas */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links para GitHub e Live Demo */}
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Github className="mr-2" size={20} />
                View Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
