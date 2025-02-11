import React, { useEffect, useState } from 'react';
import Layout from "../components/layout";
import axios from 'axios';
import DataCard from '../components/DataCard';

const extractImageFromHTML = (html) => {
  if (!html) return '';
  // console.log('Raw HTML:', html);
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const imgTag = doc.querySelector('img');
  console.log('Extracted Image Tag:', imgTag);
  return imgTag ? imgTag.src : '';
};

const extractTextFromHTML = (html) => {
  if (!html) return '';
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent.trim().slice(0, 150) + '...';
};

 

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
          setPosts(response.data.items.map(post => ({
            title: post.title,
            description: extractTextFromHTML(post.description),
            link: post.link,
            image: extractImageFromHTML(post.description),
          })));
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
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;