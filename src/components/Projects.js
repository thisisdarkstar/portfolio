import React from 'react';
import './Projects.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const sectionRef = useScrollAnimation();

  const projects = [
    {
      title: "VAPT Report Generator",
      description: "An automated system for generating professional Vulnerability Assessment and Penetration Testing reports from Invicti JSON data.",
      details: [
        "Developed a robust parser to extract and structure vulnerability data from Invicti scans",
        "Implemented custom report templates with detailed findings and remediation steps",
        "Added support for multiple report formats and customization options",
        "Integrated automated severity assessment and risk scoring",
        "Created a user-friendly interface for report customization and export"
      ],
      technologies: ["Python", "Python Docx", "JavaScript", "JSON Processing", "Report Generation"],
      category: "Security Automation"
    },
    {
      title: "Bug Bounty Recon Automation",
      description: "A comprehensive reconnaissance automation framework for bug bounty programs.",
      details: [
        "Developed an integrated pipeline combining multiple reconnaissance tools",
        "Implemented automated subdomain enumeration and asset discovery",
        "Created custom vulnerability scanning workflows with Nuclei",
        "Added support for automated reporting and result aggregation",
        "Integrated with popular bug bounty platforms for seamless workflow"
      ],
      technologies: ["Bash", "Python", "Subfinder", "Amass", "Nuclei", "Recon Tools"],
      category: "Bug Bounty"
    },
    {
      title: "Security Automation Scripts",
      description: "A collection of automation scripts for security testing and vulnerability scanning.",
      details: [
        "Developed custom scripts for automated security testing workflows",
        "Created tools for vulnerability scanning and reporting",
        "Implemented automated security assessment pipelines",
        "Built custom security testing frameworks",
        "Integrated multiple security tools for comprehensive testing"
      ],
      technologies: ["Python", "Bash", "Automation", "Security Tools", "Scripting"],
      category: "Development"
    }
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-category">{project.category}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-details">
              <h4>Key Features</h4>
              <ul>
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="project-tech">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 