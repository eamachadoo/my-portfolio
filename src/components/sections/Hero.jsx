import './Hero.css';
import profileImage from '../../assets/images/foto_perfil.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">eduardo</h1>
          <h2 className="hero-subtitle">Developer portfolio</h2>
          <div className="location">
            <span>📍 PORTO, PORTUGAL</span>
          </div>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <button className="connect-btn">LET'S CONNECT</button>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Eduardo Afonso Machado" />
        </div>
      </div>
    </section>
  );
};

export default Hero;