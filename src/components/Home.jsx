import React from 'react';
import perfil from '../assets/perfil.png';
import curriculo from '../assets/CV_Alexandre.pdf';

const Home = ({ t }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center flex-col">
      <div className="text-center mb-8">
        <img
          src={perfil}
          alt="Alexandre Rodrigues"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-600 object-cover scale-125 mb-6"
        />
        
        <h1 className="text-5xl font-bold mb-6">{t.home.title}</h1>
        <p className="text-xl mb-8">{t.home.subtitle}</p>
        
        <div className="space-x-4">
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
