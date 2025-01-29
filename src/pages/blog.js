import React, { useEffect, useState } from 'react';
import Layout from "../components/layout";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
          {posts.map((post) => (
            <Card key={post.guid} style={{ width: '300px', border: '1px solid #48C9B0', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              {post.thumbnail && (
                <CardMedia
                  component="img"
                  image={post.thumbnail}
                  alt={post.title}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
              )}
              <CardContent>
                <Typography variant="h6" component="div" style={{ color: '#48C9B0', fontWeight: 'bold', marginBottom: '1rem' }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" style={{ color: '#34495E', marginBottom: '1rem' }}>
                  {new Date(post.pubDate).toLocaleDateString()}
                </Typography>
                <Button
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  style={{ backgroundColor: '#48C9B0', color: '#fff' }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;