import React from 'react';
import './Skills.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Skills = () => {
  const sectionRef = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Security Tools',
      skills: [
        { name: 'Burp Suite', level: 90 },
        { name: 'Metasploit', level: 85 },
        { name: 'Wireshark', level: 80 },
        { name: 'Nmap', level: 85 },
        { name: 'John the Ripper', level: 75 },
        { name: 'Nessus', level: 80 },
        { name: 'Invicti', level: 75 },
        { name: 'ELK Stack', level: 70 }
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Bash', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'XML', level: 70 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'SQL', level: 85 },
        { name: 'REST APIs', level: 80 },
        { name: 'Web Security', level: 85 }
      ]
    },
    {
      title: 'Security Concepts',
      skills: [
        { name: 'Penetration Testing', level: 90 },
        { name: 'Network Security', level: 85 },
        { name: 'Web Security', level: 85 },
        { name: 'Cryptography', level: 80 },
        { name: 'Malware Analysis', level: 75 },
        { name: 'Reverse Engineering', level: 70 }
      ]
    },
    {
      title: 'Operating Systems',
      skills: [
        { name: 'Linux', level: 90 },
        { name: 'Windows', level: 85 },
        { name: 'Android', level: 75 },
        { name: 'Kali Linux', level: 90 },
        { name: 'Parrot Sec', level: 90 },
        { name: 'Black Arch', level: 70 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Digital Ocean', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Git', level: 85 },
        { name: 'CI/CD', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-bars">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 