import React from 'react';

const Footer = ({ darkMode, t }) => {
  return (
    <footer className={`py-6 text-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <p>{t.footer}</p>
    </footer>
  );
};

export default Footer;
