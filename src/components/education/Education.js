import React from 'react';
import './Education.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Education = () => {
  const sectionRef = useScrollAnimation();

  const education = [
    {
      degree: "Diploma In Cybernatics",
      school: "ASD Academy",
      period: "Jul 2023 - Dec 2024",
      details: [
        "Basic Networking: Learned networking fundamentals, including protocols and IP configuration",
        "Web Development: Built responsive websites using HTML, CSS, JavaScript, and frameworks like React",
        "Android Development: Developed Android apps with Java and Kotlin, focusing on performance and UX",
        "CEH: Gained skills in ethical hacking and penetration testing using industry tools",
        "VAPT: Conducted security assessments and penetration tests to identify and fix vulnerabilities"
      ]
    },
    {
      degree: "Higher Secondary Education",
      school: "Godapiasal M.G.M High School",
      period: "Jan 2019 - June 2020",
      details: [
        "Completed high school with a focus on STEAM subjects",
        "Strong foundation in Mathematics, Chemistry, Physics, and Biology",
        "Developed analytical and scientific skills"
      ]
    }
  ];

  return (
    <section id="education" className="education" ref={sectionRef}>
      <h2>Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="education-period">{edu.period}</span>
            </div>
            <div className="school-name">{edu.school}</div>
            <ul className="education-content">
              {edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 