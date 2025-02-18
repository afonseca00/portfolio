import React from 'react';
import perfil from '../assets/perfil.png';
import curriculo from '../assets/CV_Alexandre.pdf';

const Home = ({ t }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-center md:text-left">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img 
          src={perfil} 
          alt="Alexandre Rodrigues" 
          className="w-32 sm:w-40 md:w-60 rounded-full border-4 border-blue-600 object-cover shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">{t.home.title}</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400">{t.home.subtitle}</p>
        
        <div className="mt-6 space-x-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            {t.home.cta}
          </a>
          <a href={curriculo} download className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            {t.home.downloadCV}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
