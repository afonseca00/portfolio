import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ darkMode, t }) => {
  return (
    <motion.section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8">{t.skills.title}</h2>
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.skills.categories.map((skillGroup, index) => (
          <motion.div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
            <motion.div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-blue-600">{skill}</span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
