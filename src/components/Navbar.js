import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">CyberSec Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar; 