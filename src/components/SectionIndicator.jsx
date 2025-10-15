import React, { useState, useEffect } from 'react';
import './SectionIndicator.css';

const SectionIndicator = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', name: 'Home', icon: '🏠' },
    { id: 'technologies', name: 'Tech', icon: '⚡' },
    { id: 'projects', name: 'Projects', icon: '💼' },
    { id: 'certifications', name: 'Certs', icon: '🏆' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i].id);
          break;
        }
      }

      // Show indicator after scrolling past hero section
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Use scrollTo for better compatibility with scroll-snap
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="section-indicator">
      <div className="indicator-container">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`indicator-item ${currentSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            title={section.name}
          >
            <span className="indicator-icon">{section.icon}</span>
            <span className="indicator-text">{section.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionIndicator;

