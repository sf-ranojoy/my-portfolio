import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import DataCard from '../components/DataCard';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const githubUsername = 'ballack96';
        const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos?sort=updated`);
        if (response.data) {
          setProjects(response.data);
        }
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };
    fetchGitHubProjects();
  }, []);

  return (
    <Layout>
      <section style={{ padding: '1rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: '#34495E' }}>My Projects</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {projects.map((project) => (
            <DataCard
              key={project.id}
              title={project.name}
              description={project.description}
              link={project.html_url}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
