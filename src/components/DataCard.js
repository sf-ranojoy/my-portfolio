// Reusable Card Component for Projects and Blog Posts
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// const generatePlaceholderImage = (title) => {
//   const baseUrl = 'https://via.placeholder.com/300x150/48C9B0/ffffff?text=';
//   return `${baseUrl}${encodeURIComponent(title)}`;
// };

const DataCard = ({ title, description, link, image }) => {
  
  useEffect(() => {
    console.log('CustomCard Props:', { title, description, link, image });
  }, [title, description, link, image]);

  return (
    <Card style={{ width: '300px', border: '1px solid #48C9B0', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" style={{ color: '#48C9B0', fontWeight: 'bold', marginBottom: '1rem' }}>
          {title}
        </Typography>
        <Typography variant="body2" style={{ color: '#34495E', marginBottom: '1rem' }}>
          {description || 'No description provided.'}
        </Typography>
        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          style={{ backgroundColor: '#48C9B0', color: '#fff' }}
        >
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

export default DataCard