import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { 
    title, 
    description, 
    longDescription, 
    image, 
    technologies, 
    githubUrl, 
    liveUrl, 
    features 
  } = project;

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="project-actions">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
                aria-label="View on GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link live-link"
                aria-label="View live demo"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">
          {isExpanded ? longDescription : description}
        </p>
        
        {isExpanded && features && (
          <div className="project-features">
            <h4>Key Features:</h4>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <button 
          className="expand-btn"
          onClick={handleExpand}
          aria-label={isExpanded ? "Show less" : "Show more"}
        >
          {isExpanded ? "Show Less" : "Show More"}
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard; 