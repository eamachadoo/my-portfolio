import React from 'react';
import './TechnologyCard.css';

const TechnologyCard = ({ technology }) => {
  const { name, logo, color } = technology;
  
  return (
    <div className="technology-card" style={{ '--tech-color': color }}>
      <div className="technology-logo">
        <img src={logo} alt={`${name} logo`} />
      </div>
      <span className="technology-name">{name}</span>
    </div>
  );
};

export default TechnologyCard; 