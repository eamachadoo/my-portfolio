import React from 'react';
import CertificationCard from '../ui/CertificationCard';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "December 2023",
      description: "Demonstrates expertise in designing distributed systems on AWS, including compute, storage, networking, and security services.",
      pdfUrl: "/certificates/aws-solutions-architect.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "November 2023",
      description: "Validates skills in developing, testing, and maintaining cloud applications and services on Microsoft Azure.",
      pdfUrl: "/certificates/azure-developer.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_logo.svg"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "October 2023",
      description: "Certifies ability to build scalable and highly available applications using Google Cloud Platform services.",
      pdfUrl: "/certificates/google-cloud-developer.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Cloud_logo.svg"
    },
    {
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "September 2023",
      description: "Demonstrates understanding of Scrum framework and ability to facilitate Scrum events and remove impediments.",
      pdfUrl: "/certificates/csm-certification.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Scrum_alliance_logo.svg"
    },
    {
      title: "Oracle Certified Professional: Java SE 11 Developer",
      issuer: "Oracle",
      date: "August 2023",
      description: "Validates advanced knowledge of Java programming language and ability to develop robust applications.",
      pdfUrl: "/certificates/java-se-11-developer.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Oracle_logo.svg"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "July 2023",
      description: "Demonstrates knowledge of networking fundamentals, IP connectivity, network access, and security fundamentals.",
      pdfUrl: "/certificates/ccna-certification.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "June 2023",
      description: "Validates baseline cybersecurity skills and knowledge needed to perform core security functions.",
      pdfUrl: "/certificates/comptia-security-plus.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/CompTIA_logo.svg"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "May 2023",
      description: "Demonstrates proficiency with Docker platform and ability to containerize applications effectively.",
      pdfUrl: "/certificates/docker-certified-associate.pdf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_logo.svg"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Licenses & Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and licenses that validate my expertise in various technologies and methodologies
        </p>
        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 