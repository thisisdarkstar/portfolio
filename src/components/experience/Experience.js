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
      ],
      credential: "https://drive.google.com/file/d/1BqeHfIFxJl56abPq7rnsRyG3dEWaSeNj/view?usp=sharing"
    },
    {
      title: 'Front End Developer Lead',
      period: 'March 1st - March 30th 2024',
      company: 'EduNear',
      details: [
        'Supervised and supported frontend developers on the team',
        'Reviewed, maintained, and corrected code as needed',
        'Provided guidance and solutions when team members were stuck',
        'Worked with React.js and Tailwind CSS'
      ],
      credential: "https://drive.google.com/file/d/11CZ2bCl40ltU2TFoqL6e3u9Sm1e2UIGQ/view?usp=sharing"
    },
    {
      title: 'Cyber Security Intern',
      period: 'March 26 - April 28 2024',
      company: 'CFSS',
      details: [
        'Performed security awareness tasks such as CCTV camera and webcam hacking demonstrations (for awareness, with PoC writeups)',
        'Wrote Python scripts for password complexity checking, image encryption/decryption, and network sniffing',
        'Documented findings and created awareness materials'
      ],
      credential: "https://drive.google.com/file/d/1PyxhYHKDQzK6sQZLsZfIh3y7yXrlN-6o/view?usp=sharing"
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
                <div className="experience-meta">
                  <span className="experience-company">{exp.company}</span>
                  {exp.credential && (
                    <a
                      className="experience-credential"
                      href={exp.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
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