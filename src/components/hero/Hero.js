import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span style={{ color: 'var(--secondary-color)' }}>Arnab Maity</span></h1>
        <h2 className="hero-subtitle">Cyber Security Analyst & Software Developer</h2>
        <p className="hero-description">
          Dedicated to securing digital assets through ethical hacking, penetration testing, and security analysis.
          Specializing in identifying vulnerabilities and implementing robust security solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">View My Work</a>
          <a href="#contact" className="hero-button">Get in Touch</a>
          <div className="social-buttons">
            <a href="https://github.com/thisisdarkstar" target="_blank" rel="noopener noreferrer" className="hero-button">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/arnabmaity0007/" target="_blank" rel="noopener noreferrer" className="hero-button">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 