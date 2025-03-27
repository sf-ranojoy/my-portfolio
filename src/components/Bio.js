import React from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa6'; // Ensure you've installed react-icons using npm or yarn
import profileImage from '../images/DSC_0676.jpg'; // Adjust the path if necessary

const Bio = () => {
  return (
    <section className="hero-section" style={{ textAlign: 'justify', padding: '1rem 1rem' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space around',
          alignItems: 'flex-start',
          padding: '1rem',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '1rem',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        {/* Profile Image */}
        <div style={{ fontSize: '1rem', width: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={profileImage}
            alt="Profile"
            style={{
              width: '15rem',
              heiught: 'auto',
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
          <h4
            style={{
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '1rem',
              lineHeight: '1.5',
            }}
          >
            Data Scientist 🔍 | A.I. Enthusiast 🤖 | Problem Solver 💡
          </h4>
        </div>

        {/* Bio Text */}
        <div style={{ flex: 1, minWidth: 0, textAlign: 'justify', display: 'flex', flexDirection: 'column'}}>
          <p style={{ fontStyle: 'italic', fontSize: '1rem', margin: '0.5rem 0' }}>
            Turning data into actionable insights with AI and ML.
          </p>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#2c3e50' }}>About Me</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Hello, I'm Ranojoy. Welcome to my personal portfolio! As a dedicated data scientist and software developer,
            my projects harness the power of data to drive meaningful change and create cutting-edge applications.
            <br />
            <br />
            Here, you'll find a showcase of my work, blending data analysis and software development to solve real-world
            problems and create impactful tools.
          </p>

          {/* Social Icons */}
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <a href="https://www.linkedin.com/in/ranojoy-deb/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '12px' }}>
              <FaLinkedin size={32} color="#48C9B0" />
            </a>
            <a href="https://github.com/ballack96" target="_blank" rel="noopener noreferrer" style={{ marginRight: '12px' }}>
              <FaGithub size={32} color="#48C9B0" />
            </a>
            <a href="https://medium.com/@r.deb1996" target="_blank" rel="noopener noreferrer">
              <FaMedium size={32} color="#48C9B0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;