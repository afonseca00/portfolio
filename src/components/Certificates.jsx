import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Certificates = ({ darkMode, t }) => {
  if (!t.certificates || !t.certificates.items.length) return null;

  return (
    <motion.section
      id="certificates"
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{t.certificates.title}</h2>
        <a
          href={t.certificates.viewAllLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-all"
        >
          {t.certificates.viewAll} <ExternalLink className="ml-2" size={20} />
        </a>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.certificates.items.map((cert, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-md ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            } hover:shadow-lg transition-all`}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex justify-center mb-4">
              <motion.img
                src={cert.logo}
                alt={`Logo de ${cert.issuer}`}
                className="h-14 object-contain"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <h3 className="text-xl font-bold mb-1 text-center">{cert.title}</h3>
            <p className="text-sm text-gray-500 text-center">{cert.issuer}</p>
            <p className="mb-4 text-center">{cert.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-600">{cert.date}</span>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 inline-flex items-center transition-all"
              >
                {t.certificates.verify} <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Certificates;
