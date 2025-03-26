import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import DataCard from '../components/DataCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// Load environment variables
const UNSPLASH_ACCESS_KEY = process.env.GATSBY_UNSPLASH_ACCESS_KEY;

const generatePlaceholderImage = async (title) => {
  try {
    console.log("Fetching Unsplash image for:", title);
    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      // params: { query: title, orientation: 'landscape', client_id: UNSPLASH_ACCESS_KEY },
      params: { query: title, orientation: 'landscape' },
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    });
    console.log("Unsplash Response:", response.data.urls.regular);
    return response.data.urls.regular;
  } catch (error) {
    console.error('Error fetching Unsplash image:', error.response ? error.response.data : error.message);
    return `https://api.oneapipro.com/images/placeholder?text=${encodeURIComponent(title)}&width=318&height=200&color=524d66d`;
  }
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const githubUsername = 'ballack96'; // Replace with your GitHub username
        const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos?sort=updated`);

        if (response.data) {
          const formattedProjects = await Promise.all(
            response.data.map(async (project) => {
              const image = (await generatePlaceholderImage(project.name));
              return {
                ...project,
                name: project.name
                  .replace(/-/g, ' ') // Replace hyphens with spaces
                  .replace(/\b\w/g, (match) => match.toUpperCase()), // Capitalize each word
                image,
              };
            })
          );
          setProjects(formattedProjects);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        setError('Failed to load GitHub projects. Please try again later.');
        setLoading(false);
      }
    };
    fetchGitHubProjects();
  }, []);


  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };


  return (
    <Layout>
      <section style={{ padding: '1rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: '#34495E' }}>🛠️ My Projects</h2>
      {loading ? (
          <h3 style={{ textAlign: 'center' }}>🔄 Loading projects...</h3>
        ) : error ? (
          <h3 style={{ textAlign: 'center', color: 'red' }}>{error}</h3>
        ) : (
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            centerMode
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
          >
            {projects
              .filter((project) => project.description && project.description.trim() !== '')
              .map((project) => (
                <div key={project.id} style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
                  <DataCard
                    title={project.name}
                    description={project.description}
                    link={project.html_url}
                    image={project.image}
                  />
                </div>
              ))}
          </Carousel>
      )}
      </section>
    </Layout>
  );
};

export default ProjectsPage;
