import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Compilers",
      description: "A full Java-based compiler that translates source code into executable machine code. Features include lexical analysis, syntax parsing, semantic analysis, and code generation.",
      longDescription: "This project demonstrates advanced compiler design principles including lexical analysis using ANTLR, syntax tree construction, semantic analysis for type checking, and code generation targeting a custom virtual machine. The compiler supports a subset of Java-like syntax with basic data types, control structures, and function definitions.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      technologies: ["Java", "ANTLR", "Compiler Design", "Parsing"],
      githubUrl: "https://github.com/eamachadoo/Compilers",
      liveUrl: null,
      features: [
        "Lexical Analysis with ANTLR",
        "Abstract Syntax Tree Construction",
        "Semantic Analysis and Type Checking",
        "Code Generation"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.",
      longDescription: "Built with React frontend and Node.js backend, this e-commerce platform includes user registration and authentication, product catalog with search and filtering, shopping cart functionality, order management, and Stripe payment integration. Features responsive design and admin dashboard for product management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/eamachadoo/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Search",
        "Shopping Cart & Checkout",
        "Payment Integration (Stripe)",
        "Admin Dashboard"
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      longDescription: "A comprehensive task management solution built with React and Firebase. Features include real-time collaboration, task assignment, progress tracking, deadline management, and team communication. The app uses Firebase for real-time database and authentication.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Real-time Database"],
      githubUrl: "https://github.com/eamachadoo/task-manager",
      liveUrl: "https://task-manager-demo.com",
      features: [
        "Real-time Collaboration",
        "Task Assignment & Tracking",
        "Team Communication",
        "Progress Analytics",
        "Mobile Responsive"
      ]
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using external APIs with interactive maps.",
      longDescription: "A weather dashboard that integrates with multiple weather APIs to provide comprehensive weather information. Features include current weather display, 7-day forecast, interactive maps, location-based weather, and weather alerts. Built with vanilla JavaScript and modern CSS.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      technologies: ["JavaScript", "CSS3", "Weather API", "Geolocation"],
      githubUrl: "https://github.com/eamachadoo/weather-dashboard",
      liveUrl: "https://weather-demo.com",
      features: [
        "Current Weather Display",
        "7-Day Forecast",
        "Interactive Maps",
        "Location-based Weather",
        "Weather Alerts"
      ]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      longDescription: "A personal portfolio website built with React and modern CSS. Features include smooth scrolling navigation, animated components, project showcase with detailed descriptions, skills section with technology logos, and contact form. The design is fully responsive and optimized for performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/eamachadoo/portfolio",
      liveUrl: "https://eduardo-portfolio.com",
      features: [
        "Responsive Design",
        "Smooth Animations",
        "Project Showcase",
        "Skills Display",
        "Contact Form"
      ]
    },
    {
      title: "Data Visualization Tool",
      description: "An interactive data visualization tool that creates charts and graphs from CSV data with customizable options.",
      longDescription: "A web-based data visualization tool that allows users to upload CSV files and create various types of charts including bar charts, line graphs, pie charts, and scatter plots. Features include data filtering, chart customization, export functionality, and responsive design.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["JavaScript", "D3.js", "HTML5", "CSS3"],
      githubUrl: "https://github.com/eamachadoo/data-viz-tool",
      liveUrl: "https://data-viz-demo.com",
      features: [
        "Multiple Chart Types",
        "CSV Data Import",
        "Interactive Charts",
        "Export Functionality",
        "Customizable Options"
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've developed, showcasing my skills in various technologies and problem-solving approaches
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;