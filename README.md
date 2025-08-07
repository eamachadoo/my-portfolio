# Eduardo Machado - Software Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and certifications.

## Features

### 🎯 Hero Section
- Personal introduction with profile image
- Social media links
- Call-to-action button

### 🛠️ Technologies Section
- Interactive technology cards with logos
- Hover effects and animations
- Responsive grid layout
- Technologies include: C, C++, Java, Python, JavaScript, React, Node.js, HTML5, CSS3, Git, Docker, PostgreSQL

### 📁 Projects Section
- Detailed project cards with mockups
- Expandable project descriptions
- Technology tags for each project
- GitHub and live demo links
- Key features list for each project
- Projects include: Compilers, E-Commerce Platform, Task Management App, Weather Dashboard, Portfolio Website, Data Visualization Tool

### 🏆 Certifications Section
- Interactive certification cards
- PDF document links for verification
- Professional certifications from major tech companies
- Certifications include: AWS, Microsoft Azure, Google Cloud, Scrum Master, Oracle Java, Cisco CCNA, CompTIA Security+, Docker

## Tech Stack

- **Frontend**: React.js
- **Styling**: CSS3 with modern features (Grid, Flexbox, Backdrop-filter)
- **Icons**: Font Awesome
- **Build Tool**: Vite
- **Deployment**: Ready for any static hosting service

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Technologies.jsx
│   │   ├── Projects.jsx
│   │   └── Certifications.jsx
│   └── ui/
│       ├── TechnologyCard.jsx
│       ├── ProjectCard.jsx
│       └── CertificationCard.jsx
├── assets/
│   └── images/
└── App.jsx
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Customization

### Adding New Projects
Edit `src/components/sections/Projects.jsx` and add new project objects to the `projects` array.

### Adding New Technologies
Edit `src/components/sections/Technologies.jsx` and add new technology objects to the `technologies` array.

### Adding New Certifications
Edit `src/components/sections/Certifications.jsx` and add new certification objects to the `certifications` array.

### Styling
- Shared styles are in `src/components/sections/shared.css`
- Component-specific styles are in their respective `.css` files
- The design uses a dark theme with gradient backgrounds

## Features

- ✅ Responsive design
- ✅ Modern UI with glassmorphism effects
- ✅ Interactive components
- ✅ Smooth animations
- ✅ Accessible design
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Cross-browser compatible

## License

MIT License - feel free to use this portfolio as a template for your own projects!
