import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya!</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>maftukh@students.amikom.ac.id</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+6289509969989</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Cirebon, Indonesia</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/maftukh12" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/maftukh-zaki-mubarok-73055b341/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/Maftukh04" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/tukh___/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 