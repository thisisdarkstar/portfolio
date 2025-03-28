import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Certifications from './components/certifications/Certifications';
import Languages from './components/languages/Languages';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
    </div>
  );
}

export default App;
