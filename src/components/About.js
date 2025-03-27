import React from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="about" ref={sectionRef}>
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="summary">
            A highly skilled Penetration Tester and Web Developer with 3 years of experience in both offensive
            security and software development. Proficient in identifying, analyzing, and mitigating security
            vulnerabilities in web applications, networks, and systems. Experienced in building dynamic,
            secure, and scalable web applications using modern frameworks and programming languages.
            Passionate about security best practices, code quality, and delivering secure, high-performance
            solutions. Committed to continuous learning and improving security measures to stay ahead of
            emerging threats.
          </p>
          <div className="expertise">
            <h3>Core Expertise</h3>
            <ul>
              <li>Penetration Testing & Vulnerability Assessment</li>
              <li>Web Application Security</li>
              <li>Network Security Analysis</li>
              <li>Security Automation & Scripting</li>
              <li>Security Architecture Design</li>
              <li>Incident Response & Threat Hunting</li>
              <li>Secure Software Development</li>
              <li>Security Tool Development</li>
              <li>Security Research & Analysis</li>
              <li>Security Training & Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 