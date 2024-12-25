import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset untuk navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Portfolio</div>
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
      </div>
      <div 
        className={`nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar; 