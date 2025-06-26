import React from 'react';
import './Writeups.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Helper for screenshot preview (using thum.io)
const getScreenshotUrl = url =>
  `https://image.thum.io/get/width/1000/crop/1920/${url}`;

const writeupsData = [
  {
    title: "Static Android Testing Checklist",
    description: "A checklist for static analysis of Android applications.",
    details: [
      "Covers manifest, code, and resource checks",
      "Helps ensure secure Android app development"
    ],
    preview: getScreenshotUrl("https://github.com/thisisdarkstar/Static-Android-Testing-Checklist"),
    links: [
      { label: "GitHub", url: "https://github.com/thisisdarkstar/Static-Android-Testing-Checklist" }
    ]
  },
  {
    title: "SSL Pinning Android",
    description: "Write-up on SSL pinning techniques and bypass for Android apps.",
    details: [
      "Explains SSL pinning concepts",
      "Shows methods for bypassing SSL pinning"
    ],
    preview: getScreenshotUrl("https://github.com/thisisdarkstar/SSL-Pinning-Android"),
    links: [
      { label: "GitHub", url: "https://github.com/thisisdarkstar/SSL-Pinning-Android" }
    ]
  },
  {
    title: "Red TryHackMe",
    description: "Walkthrough and notes for the Red room on TryHackMe.",
    details: [
      "Step-by-step exploitation process",
      "Key takeaways and commands"
    ],
    preview: getScreenshotUrl("https://github.com/thisisdarkstar/Red-TryHackMe"),
    links: [
      { label: "GitHub", url: "https://github.com/thisisdarkstar/Red-TryHackMe" }
    ]
  },
  {
    title: "TryHack3M Bricks Heist",
    description: "Write-up for the Bricks Heist challenge on TryHackMe.",
    details: [
      "Challenge overview and solution steps",
      "Screenshots and explanations"
    ],
    preview: getScreenshotUrl("https://github.com/thisisdarkstar/TryHack3M-Bricks-Heist"),
    links: [
      { label: "GitHub", url: "https://github.com/thisisdarkstar/TryHack3M-Bricks-Heist" }
    ]
  },
  {
    title: "Passive Reconnaissance TryHackMe",
    description: "Notes and walkthrough for Passive Reconnaissance on TryHackMe.",
    details: [
      "Passive recon techniques",
      "Tools and commands used"
    ],
    preview: getScreenshotUrl("https://github.com/thisisdarkstar/Passive-Reconnaissance-TryHackMe"),
    links: [
      { label: "GitHub", url: "https://github.com/thisisdarkstar/Passive-Reconnaissance-TryHackMe" }
    ]
  },
  {
    title: "Web Application Basic THM",
    description: "Basic web application security concepts and TryHackMe walkthrough.",
    details: [
      "Covers common web vulnerabilities",
      "Hands-on lab solutions"
    ],
    preview: getScreenshotUrl("https://github.com/thisisdarkstar/Web-Application-Basic-THM"),
    links: [
      { label: "GitHub", url: "https://github.com/thisisdarkstar/Web-Application-Basic-THM" }
    ]
  },
  {
    title: "Shell Color Codes",
    description: "Reference for shell color codes and their usage in scripts.",
    details: [
      "List of color codes",
      "Examples for colored output"
    ],
    preview: getScreenshotUrl("https://github.com/thisisdarkstar/Shell-Color-Codes"),
    links: [
      { label: "GitHub", url: "https://github.com/thisisdarkstar/Shell-Color-Codes" }
    ]
  },
  {
    title: "Hospitality Challenges Without NOC",
    description: "Write-up for Hospitality challenges without NOC.",
    details: [
      "Challenge descriptions and solutions",
      "Techniques and tools used"
    ],
    preview: getScreenshotUrl("https://github.com/thisisdarkstar/Hospitality-Challanges-Without-NOC"),
    links: [
      { label: "GitHub", url: "https://github.com/thisisdarkstar/Hospitality-Challanges-Without-NOC" }
    ]
  }
];

const WriteupPreview = ({ url }) => {
  if (!url) return null;
  return (
    <div className="project-preview">
      <img
        src={url}
        alt="Writeup Preview"
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
        loading="lazy"
      />
    </div>
  );
};

const Writeups = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="projects" id="writeups">
      <h2>Write-Ups</h2>
      <div className="projects-grid">
        {writeupsData.map((writeup, idx) => (
          <div key={idx} className="project-card">
            {writeup.preview && <WriteupPreview url={writeup.preview} />}
            <div className="project-header">
              <h4 className="project-title">{writeup.title}</h4>
            </div>
            <p className="project-description">{writeup.description}</p>
            <div className="project-details">
              <h5>Key Points</h5>
              <ul>
                {writeup.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
            {writeup.links && (
              <div className="project-links">
                {writeup.links.map((link, i) => (
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
    </section>
  );
};

export default Writeups;