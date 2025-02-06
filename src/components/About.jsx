import React from 'react';

const About = ({ t }) => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8">{t.about.title}</h2>
      <div className="space-y-4">
        <p>{t.about.paragraph1}</p>
        <p>{t.about.paragraph2}</p>
      </div>
    </section>
  );
};

export default About;
