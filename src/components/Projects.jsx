import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({ darkMode, t }) => {
  const [modalImage, setModalImage] = useState(null);
  const [modalIndex, setModalIndex] = useState(null); // Índice da imagem
  const [modalProjectIndex, setModalProjectIndex] = useState(null); // Índice do projeto

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Lidar com o clique na imagem
  const handleImageClick = (image, projectIndex, imageIndex) => {
    setModalImage(image);
    setModalIndex(imageIndex);
    setModalProjectIndex(projectIndex); // Armazenando o índice do projeto
  };

  // Fechar o modal
  const handleCloseModal = () => {
    setModalImage(null);
    setModalIndex(null);
    setModalProjectIndex(null);
  };

  // Navegar para a próxima imagem
  const handleNextImage = () => {
    if (modalProjectIndex !== null && modalIndex !== null) {
      const project = t.projects.items[modalProjectIndex]; // Pega o projeto pelo índice
      const screenshots = project.screenshots;
      if (screenshots && screenshots.length > 0) {
        const nextIndex = (modalIndex + 1) % screenshots.length;
        setModalImage(screenshots[nextIndex]);
        setModalIndex(nextIndex);
      }
    }
  };

  // Navegar para a imagem anterior
  const handlePrevImage = () => {
    if (modalProjectIndex !== null && modalIndex !== null) {
      const project = t.projects.items[modalProjectIndex]; // Pega o projeto pelo índice
      const screenshots = project.screenshots;
      if (screenshots && screenshots.length > 0) {
        const prevIndex = (modalIndex - 1 + screenshots.length) % screenshots.length;
        setModalImage(screenshots[prevIndex]);
        setModalIndex(prevIndex);
      }
    }
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
        {t.projects.items.map((project, projectIndex) => (
          <motion.div
            key={projectIndex}
            className={`p-6 rounded-lg ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            } transition-transform hover:-translate-y-2`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
              <Slider {...sliderSettings}>
                {project.screenshots?.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt={`${project.title} - ${imageIndex + 1}`}
                    className="object-cover w-full h-[200px] cursor-pointer mx-auto"
                    onClick={() => handleImageClick(image, projectIndex, imageIndex)} // Passa o índice do projeto e da imagem
                  />
                ))}
              </Slider>
            </div>

            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>

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

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative inline-block max-w-[1200px] max-h-[900px] bg-white p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-md transition-colors"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              onClick={handlePrevImage}
            >
              &#8592;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-gray-700"
              onClick={handleNextImage}
            >
              &#8594;
            </button>
            <img
              src={modalImage}
              alt="Imagem ampliada"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
