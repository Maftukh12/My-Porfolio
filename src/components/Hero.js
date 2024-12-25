import React, { useEffect } from 'react';
import '../styles/Hero.css';
import html2pdf from 'html2pdf.js';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.querySelector('.hero-content');
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = async () => {
    // Fetch HTML content
    const response = await fetch('/cv.html');
    const html = await response.text();

    // Create temporary container
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.appendChild(container);

    // Wait for image to load
    const img = container.querySelector('.profile-image');
    if (img) {
      await new Promise((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = resolve;
        }
      });
    }

    // PDF options
    const options = {
      margin: 10,
      filename: 'CV_Maftukh_Zaki.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true, // Penting untuk gambar
        logging: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().from(container).set(options).save().then(() => {
      document.body.removeChild(container);
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="profile-container">
          <img 
            src="/images/profile.jpg"
            alt="Maftukh Zaki Mubarok" 
            className="profile-image"
          />
        </div>
        <h1>
          <span className="typewriter">Selamat Datang di Portfolio Saya</span>
        </h1>
        <p className="typewriter-delay-1">Frontend Developer | UI/UX Designer | React Specialist</p>
        <div className="hero-buttons typewriter-delay-2">
          <button 
            className="cta-button bounce"
            onClick={scrollToProjects}
          >
            Lihat Project
          </button>
          <button 
            onClick={handleDownloadCV}
            className="cv-button"
          >
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 