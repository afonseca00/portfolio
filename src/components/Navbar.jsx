import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import flagEn from '../assets/flag-en.png';
import flagPt from '../assets/flag-pt.png';

const Navbar = ({ darkMode, setDarkMode, language, setLanguage, menuOpen, setMenuOpen, t }) => {
  const languageFlags = {
    en: flagEn,
    pt: flagPt
  };

  return (
    <nav className="fixed w-full z-10 p-4 backdrop-blur-md bg-opacity-80">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Nome do Portfólio */}
        <h1 className="text-xl font-bold">Alexandre Rodrigues</h1>

        {/* Menu Desktop (Visível apenas em telas médias para cima) */}
        <div className="hidden md:flex space-x-6">
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <a 
              key={section} 
              href={`#${section}`} 
              className="hover:text-blue-500"
            >
              {t.nav[section]}
            </a>
          ))}
        </div>

        {/* Ícones de Idioma, Tema e Menu */}
        <div className="flex items-center space-x-4">
          {/* Troca de idioma */}
          <button onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')} className="p-2 rounded-full hover:bg-gray-700">
            <img src={languageFlags[language === 'en' ? 'pt' : 'en']} alt="Language" className="w-6 h-4" />
          </button>

          {/* Modo escuro/claro */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Botão do Menu Mobile */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Abre quando `menuOpen` está true) */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6">
          <X size={32} className="text-white" />
        </button>

        <div className="flex flex-col items-center space-y-6 text-white text-xl">
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <a 
              key={section} 
              href={`#${section}`} 
              className="hover:text-gray-400"
              onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
            >
              {t.nav[section]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
