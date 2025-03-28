import React from 'react';
import './Experience.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Experience = () => {
  const sectionRef = useScrollAnimation();

  const experiences = [
    {
      title: 'LLM Trainer/Data Labeling',
      period: 'Oct 2024 - Present',
      company: 'Turing and Soul AI',
      details: [
        'Worked with Python and JavaScript to provide prompts and evaluate model responses',
        'Applied prompt engineering techniques for improved output quality',
        'Utilized JavaScript and Bash to refine model interactions and analyze responses',
        'Enhanced LLM performance through targeted hints and corrections',
        'Systematically identified and addressed weaknesses in generated outputs'
      ]
    },
    {
      title: 'MERN Stack Developer',
      period: '2023 - 2024 (6 months)',
      company: 'Codemap',
      details: [
        'Built and maintained scalable, dynamic web applications using MongoDB, Express.js, React, and Node.js',
        'Created responsive and user-friendly front-end interfaces for an education platform',
        'Developed and integrated RESTful APIs to manage user data, courses, and content',
        'Optimized MongoDB database queries and Node.js server performance'
      ]
    },
    {
      title: 'Vulnerability Assessment and Penetration Testing',
      period: 'Jan-Mar 2024 (3 months)',
      company: 'ASD Academy',
      details: [
        'Performed comprehensive vulnerability assessments using Burp Suite, Nmap, and Metasploit',
        'Discovered and analyzed high-risk vulnerabilities (SQLi, XSS, RCE) in web applications',
        'Provided detailed reports with actionable remediation steps',
        'Advised development teams on secure coding and best practices'
      ]
    }
  ];

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-company">{exp.company}</p>
              <ul className="experience-details">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 