import './Projects.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const projectsData = {
  "Web Projects": [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills and projects.",
      details: [
        "Responsive design with React",
        "Animated sections and smooth scrolling",
        "Contact form with email integration"
      ],
      technologies: ["React", "CSS", "EmailJS"],
      links: [
        { label: "Live Demo", url: "https://www.thisisdarkstar.xyz/" },
        { label: "GitHub", url: "https://github.com/thisisdarkstar/portfolio" }
      ],
      preview: "https://www.thisisdarkstar.xyz/" // Will be used for iframe preview
    }
  ],
  "Python Projects": [
    {
      title: "VAPT Report Generator",
      description: "Automated system for generating professional Vulnerability Assessment and Penetration Testing reports from Invicti JSON data.",
      details: [
        "Robust parser for Invicti scans",
        "Custom report templates",
        "Automated severity assessment"
      ],
      technologies: ["Python", "Python Docx", "JSON"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/VAPT-Report-Generator" }
      ],
      preview: "https://github.com/thisisdarkstar/VAPT-Report-Generator"
    },
    {
      title: "Basic Packet Sniffer",
      description: "A simple Python-based packet sniffer for capturing and analyzing network traffic.",
      details: [
        "Captures raw packets from the network interface",
        "Displays packet details in real-time",
        "Great for learning about network protocols"
      ],
      technologies: ["Python", "Socket"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/Basic-Packet-Sniffer" }
      ],
      preview: "https://github.com/thisisdarkstar/Basic-Packet-Sniffer"
    },
    {
      title: "Password Complexity Checker",
      description: "A Python tool to check password strength and complexity based on various criteria.",
      details: [
        "Checks for length, digits, symbols, and case",
        "Provides feedback on password strength",
        "Simple CLI usage"
      ],
      technologies: ["Python"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/Password-Complexity-Checker" }
      ],
      preview: "https://github.com/thisisdarkstar/Password-Complexity-Checker"
    },
    {
      title: "Ceaser Cipher Encrypt/Decrypt",
      description: "A Python script to encrypt and decrypt text using the classic Caesar cipher.",
      details: [
        "Supports both encryption and decryption",
        "Customizable shift value",
        "Easy to use for educational purposes"
      ],
      technologies: ["Python"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/Ceaser-Cipher-ED" }
      ],
      preview: "https://github.com/thisisdarkstar/Ceaser-Cipher-ED"
    },
    {
      title: "Pixel Manipulation for Images",
      description: "A Python project for basic pixel-level image manipulation and effects.",
      details: [
        "Read and modify image pixels",
        "Apply simple filters and effects",
        "Uses PIL (Pillow) for image processing"
      ],
      technologies: ["Python", "Pillow"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/Pixel-Manupulation-for-images" }
      ],
      preview: "https://github.com/thisisdarkstar/Pixel-Manupulation-for-images"
    }
  ],
  "Bash Projects": [
    {
      title: "Bug Bounty Recon Automation",
      description: "Comprehensive reconnaissance automation framework for bug bounty programs.",
      details: [
        "Integrated pipeline with multiple tools",
        "Automated subdomain enumeration",
        "Custom vulnerability scanning workflows"
      ],
      technologies: ["Bash", "Subfinder", "Amass", "Nuclei"],
      links: [
        { label: "GitHub", url: "https://github.com/yourusername/bugbounty-recon" }
      ],
      preview: "https://github.com/yourusername/bugbounty-recon"
    },
    {
      title: "VAPT Framework",
      description: "A powerful Vulnerability Assessment and Penetration Testing framework made with Python, React, and Bash.",
      details: [
        "Automates VAPT tasks and reporting",
        "Modular and extensible architecture",
        "Integrates Python, React, and Bash scripts"
      ],
      technologies: ["Python", "React", "Bash"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/VAPT-Framework" }
      ],
      preview: "https://github.com/thisisdarkstar/VAPT-Framework"
    },
    {
      title: "JSON Value Extractor",
      description: "A Bash utility to extract values from JSON files using simple queries.",
      details: [
        "Lightweight and fast",
        "Supports nested JSON structures",
        "Ideal for automation scripts"
      ],
      technologies: ["Bash"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/JSON-Value-Extractor" }
      ],
      preview: "https://github.com/thisisdarkstar/JSON-Value-Extractor"
    },
    {
      title: "Function Inspector",
      description: "A Bash script to list and extract function definitions from Bash scripts.",
      details: [
        "Lists all valid Bash function names",
        "Shows full body of any function by name",
        "Handles various declaration styles and edge cases"
      ],
      technologies: ["Bash"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/Function-Inspector" }
      ],
      preview: "https://github.com/thisisdarkstar/Function-Inspector"
    },
    {
      title: "URLS Organizer",
      description: "A Bash script to organize URLs or hostnames by root domain, grouping all subdomains together.",
      details: [
        "Extracts and organizes hostnames from URL lists",
        "Groups subdomains under their root domain",
        "Handles SLDs, skips IPs/localhost/comments",
        "Outputs each root domain as a folder with subdomains.txt"
      ],
      technologies: ["Bash"],
      links: [
        { label: "GitHub", url: "https://github.com/thisisdarkstar/URLS-Organizer" }
      ],
      preview: "https://github.com/thisisdarkstar/URLS-Organizer"
    }
  ]
};

const ProjectPreview = ({ url }) => {
  if (!url || !/^https?:\/\/.+/i.test(url)) return null;
  const screenshotUrl = `https://image.thum.io/get/width/720/crop/1920/${url}`;
  return (
    <div className="project-preview">
      <img
        src={screenshotUrl}
        alt="Project Preview"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
      />
    </div>
  );
};

const Projects = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2>Projects</h2>
      {Object.entries(projectsData).map(([category, projects]) => (
        <div key={category} className="project-category-section">
          <h3 className="project-category-title">{category}</h3>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                {project.preview && <ProjectPreview url={project.preview} />}
                <div className="project-header">
                  <h4 className="project-title">{project.title}</h4>
                </div>
                <span className="project-category">{category}</span>
                <p className="project-description">{project.description}</p>
                <div className="project-details">
                  <h5>Key Features</h5>
                  <ul>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  <h5>Technologies Used</h5>
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                {project.links && (
                  <div className="project-links">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        className="project-link"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;