import React from 'react';
import '../styles/About.css';

const About = () => {
  const skills = [
    {
      name: "React",
      icon: "fab fa-react",
      color: "#61DAFB"
    },
    {
      name: "JavaScript",
      icon: "fab fa-js",
      color: "#F7DF1E"
    },
    {
      name: "HTML5",
      icon: "fab fa-html5",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt",
      color: "#1572B6"
    },
    {
      name: "Node.js",
      icon: "fab fa-node-js",
      color: "#339933"
    },
    {
      name: "Python",
      icon: "fab fa-python",
      color: "#3776AB"
    },
    {
      name: "Git",
      icon: "fab fa-git-alt",
      color: "#F05032"
    },
    {
      name: "Laravel",
      icon: "fab fa-laravel",
      color: "#FF2D20"
    }
  ];

  return (
    <section id="about" className="about">
      <h2>Tentang Saya</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Saya adalah seorang developer yang passionate dalam membuat aplikasi web
            yang menarik dan fungsional. Dengan pengalaman dalam React dan teknologi
            frontend modern lainnya.
          </p>
          <div className="skills">
            <h3>Skills:</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i 
                    className={skill.icon} 
                    style={{ color: skill.color }}
                  ></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 