import React, { useEffect, useState } from 'react';
import Layout from "../components/layout";
import axios from 'axios';
import DataCard from '../components/DataCard';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const mediumUsername = 'r.deb1996'; // Replace with your Medium username
        const response = await axios.get(`https://api.rss2json.com/v1/api.json`, {
          params: {
            rss_url: `https://medium.com/feed/@${mediumUsername}`,
          },
        });

        if (response.data && response.data.items) {
          setPosts(response.data.items);
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <Layout>
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: '#34495E' }}>My Blog Posts</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {posts.map((project) => (
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

export default BlogPage;