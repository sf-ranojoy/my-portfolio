// Reusable Card Component for Projects and Blog Posts
import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const generatePlaceholderImage = (title) => {
  return `https://api.oneapipro.com/images/placeholder?text=${title}&width=318&height=200&color=524d66d`
};


const DataCard = ({ title, description, link, image }) => {

  return (
    <Card style={{ width: '350px', height: '500px', border: '1px solid #48C9B0', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', margin: '10px auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <img
        src={image || generatePlaceholderImage(title)}
        onError={(e) => { e.target.onerror = null; e.target.src = generatePlaceholderImage(title); }}
        alt={title}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" style={{ color: '#48C9B0', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
          {title}
        </Typography>
        <Typography variant="body2" style={{ color: '#34495E', marginBottom: '1rem', textAlign: 'center', minHeight: '60px' }}>
          {description || 'No description provided.'}
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            style={{ backgroundColor: '#48C9B0', color: '#fff' }}
          >
            View More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataCard