import React from 'react';
import { Link } from 'gatsby';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa6'; // Ensure you've installed react-icons using npm or yarn
import profileImage from '../images/DSC_0676.jpg'; // Adjust the path if necessary

const Bio = () => {
  return (
    <section className="hero-section" style={{ textAlign: 'justify', padding: '1rem 1rem' }}>
      <div style={{ padding: '1%', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', justifyContent: 'center', maxWidth: '100%', marginTop: '0%' }}>
        <div style={{ fontSize: '1.0rem', paddingLeft: '10%' }}>
        <img src={profileImage} alt="Profile" style={{ width: '250px', height: '250px', borderRadius: '50%' }} />
          <h4 style={{fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Data Scientist <span style={{ marginLeft: '10px' }}>🔍</span> | Machine Learning Enthusiast <span style={{ marginLeft: '5px' }}>🤖</span> | Problem Solver <span style={{ marginLeft: '5px' }}>💡</span>
          </h4>
        </div>
        <div style={{ fontSize: '1.0rem', paddingLeft: '10%' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.25rem', margin: '1rem 0' }}>
            Turning data into actionable insights with AI and ML.
          </p>
          <h2 style={{ marginTop: '2rem' }}>About Me</h2>
          <p style={{ textAlign: 'justify', overflowWrap: 'normal' }}>
            Hello, I’m Ranojoy. Welcome to my personal portfolio! As a dedicated data scientist and software developer, 
            my projects harness the power of data to drive meaningful change and create cutting-edge applications.<br/>
            <br/>
            Here, you’ll find a showcase of my work, blending data analysis and software development to solve real-world problems and create impactful tools.
          </p>
          <div>
            <a href="https://www.linkedin.com/in/ranojoy-deb/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '12px' }}>
              <FaLinkedin size={40} color="#48C9B0" />
            </a>
            <a href="https://github.com/ballack96" target="_blank" rel="noopener noreferrer" style={{ marginRight: '12px' }}>
              <FaGithub size={40} color="#48C9B0" />
            </a>
            <a href="https://medium.com/@r.deb1996" target="_blank" rel="noopener noreferrer" style={{ marginRight: '12px' }}>
              <FaMedium size={40} color="#48C9B0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;