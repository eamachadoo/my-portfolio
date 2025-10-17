import React, { useRef, useState, useEffect } from 'react';
import TechnologyCard from '../ui/TechnologyCard';
import './Technologies.css';

const Technologies = () => {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const technologies = [
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      color: "#A8B9CC"
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "#00599C"
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#ED8B00"
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB"
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E"
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933"
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6"
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032"
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED"
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#336791"
    }
  ];

  // Intersection Observer for entrance/exit animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entering the section
            setIsVisible(true);
            setIsExiting(false);
          } else {
            // Leaving the section
            if (isVisible) {
              setIsExiting(true);
              // Reset after exit animation completes
              setTimeout(() => {
                setIsVisible(false);
                setIsExiting(false);
              }, 800);
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-10% 0px -10% 0px' // Add some margin for better triggering
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isAtStart = scrollLeft <= 0;
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 1;
      
      setCanScrollLeft(!isAtStart);
      setCanScrollRight(!isAtEnd);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current && canScrollLeft) {
      const cardWidth = 200 + 48; // updated card width + gap
      const scrollAmount = Math.min(cardWidth * 3, scrollRef.current.scrollLeft);
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && canScrollRight) {
      const cardWidth = 200 + 48; // updated card width + gap
      const scrollAmount = cardWidth * 3;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      
      // Initial check after component mounts
      const timer = setTimeout(checkScrollButtons, 100);
      
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <section id="technologies" className="technologies" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        
        <div className={`technologies-container ${isExiting ? 'exiting' : ''}`}>
          <button 
            className={`scroll-indicator scroll-left ${!canScrollLeft ? 'disabled' : ''} ${isExiting ? 'exiting' : ''}`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            type="button"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="technologies-grid" ref={scrollRef}>
            {technologies.map((tech, index) => (
              <TechnologyCard 
                key={index} 
                technology={tech} 
                className={isExiting ? 'exiting' : ''}
              />
            ))}
          </div>
          
          <button 
            className={`scroll-indicator scroll-right ${!canScrollRight ? 'disabled' : ''} ${isExiting ? 'exiting' : ''}`}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            type="button"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technologies;