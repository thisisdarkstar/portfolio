import React from 'react';
import './Languages.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Languages = () => {
  const sectionRef = useScrollAnimation();

  const languages = [
    {
      name: 'Bengali',
      level: 'Fluent',
      type: 'Native'
    },
    {
      name: 'Hindi',
      level: 'Fluent Speaking',
      type: 'Proficient'
    },
    {
      name: 'English',
      level: 'Fluent',
      type: 'Professional'
    }
  ];

  return (
    <section id="languages" className="languages" ref={sectionRef}>
      <h2>Languages</h2>
      <div className="languages-grid">
        {languages.map((language, index) => (
          <div key={index} className="language-card">
            <h3>{language.name}</h3>
            <div className="language-details">
              <span className="language-level">{language.level}</span>
              <span className="language-type">{language.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages; 