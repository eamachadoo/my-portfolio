import React from 'react';
import './CertificationCard.css';

const CertificationCard = ({ certification }) => {
  const { title, issuer, date, pdfUrl, logo, description } = certification;
  
  const handleClick = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };
  
  return (
    <div className="certification-card" onClick={handleClick}>
      <div className="certification-header">
        <div className="certification-logo">
          <img src={logo} alt={`${issuer} logo`} />
        </div>
        <div className="certification-info">
          <h3 className="certification-title">{title}</h3>
          <p className="certification-issuer">{issuer}</p>
          <p className="certification-date">{date}</p>
        </div>
      </div>
      <p className="certification-description">{description}</p>
      <div className="certification-action">
        <span className="view-certificate">View Certificate</span>
        <i className="fas fa-external-link-alt"></i>
      </div>
    </div>
  );
};

export default CertificationCard; 