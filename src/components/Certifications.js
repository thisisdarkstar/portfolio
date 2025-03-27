import React from 'react';
import './Certifications.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Certifications = () => {
  const sectionRef = useScrollAnimation();

  const certifications = [
    {
      name: "Certified Ethical Hacker",
      issuer: "Skill India Digital",
      date: "2023",
      description: "Comprehensive training in ethical hacking methodologies and tools",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Tools", "Ethical Hacking"]
    },
    {
      name: "Python Development",
      issuer: "Skill India Digital",
      date: "2023",
      description: "Advanced Python programming and development skills",
      skills: ["Python", "Web Development", "Automation", "Scripting"]
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera",
      date: "2025",
      description: "Professional certification in cybersecurity fundamentals and best practices",
      skills: ["Security Fundamentals", "Risk Management", "Security Operations", "Compliance"]
    }
  ];

  return (
    <section id="certifications" className="certifications" ref={sectionRef}>
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-header">
              <h3>{cert.name}</h3>
              <span className="certification-date">{cert.date}</span>
            </div>
            <div className="certification-issuer">{cert.issuer}</div>
            <p className="certification-description">{cert.description}</p>
            <div className="certification-skills">
              {cert.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 