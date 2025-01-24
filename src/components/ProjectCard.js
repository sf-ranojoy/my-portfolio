import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff', textAlign: 'center', maxWidth:'45%', height:'auto', margin: '0 auto' }}>
      <img src={project.image} alt={project.title} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
      <h3 style={{ margin: '10px 0' }}>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#48C9B0', textDecoration: 'none' }}>Learn More</a>
    </div>
  );
};

export default ProjectCard;
