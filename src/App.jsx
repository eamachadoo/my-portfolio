import React from 'react';
import Header from './components/layout/header';
import Hero from './components/sections/Hero';
import Technologies from './components/sections/Technologies';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;