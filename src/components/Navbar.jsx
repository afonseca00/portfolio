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
        <h1 className="text-xl font-bold">Alexandre Rodrigues</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-500">{t.nav.home}</a>
          <a href="#about" className="hover:text-blue-500">{t.nav.about}</a>
          <a href="#projects" className="hover:text-blue-500">{t.nav.projects}</a>
          <a href="#skills" className="hover:text-blue-500">{t.nav.skills}</a>
          <a href="#contact" className="hover:text-blue-500">{t.nav.contact}</a>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')} className="p-2 rounded-full hover:bg-gray-700">
            <img src={languageFlags[language === 'en' ? 'pt' : 'en']} alt="Language" className="w-6 h-4" />
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white p-4 rounded-lg shadow-lg">
          <a href="#home" className="block py-2 px-4 hover:bg-blue-500 hover:text-white rounded">{t.nav.home}</a>
          <a href="#about" className="block py-2 px-4 hover:bg-blue-500 hover:text-white rounded">{t.nav.about}</a>
          <a href="#projects" className="block py-2 px-4 hover:bg-blue-500 hover:text-white rounded">{t.nav.projects}</a>
          <a href="#skills" className="block py-2 px-4 hover:bg-blue-500 hover:text-white rounded">{t.nav.skills}</a>
          <a href="#contact" className="block py-2 px-4 hover:bg-blue-500 hover:text-white rounded">{t.nav.contact}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
