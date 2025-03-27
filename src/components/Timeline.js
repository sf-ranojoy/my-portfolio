// Horizontal Timeline Component using gatsby-plugin-material-ui
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const experiences = [
  {
    title: 'Full-Stack Developer',
    employer: 'Kiss Applications Inc.',
    date: 'Nov 2024 - Present',
    logo: '/logos/kissuxlogo.png'
  },
  {
    title: 'Chief Data Architect',
    employer: 'School Frontiers',
    date: 'Aug 2024 - Feb 2025',
    logo: '/logos/school-frontiers.png'
  },
  {
    title: 'Graduate Research Assistant',
    employer: 'The Pennsylvania State Univeristy',
    date: 'Jan 2023 - May 2024',
    logo: '/logos/penn-state.png'
  },
  {
    title: 'Data Science Intern',
    employer: 'Essentials Utilities',
    date: 'May 2023 - Aug 2023',
    logo: '/logos/essentials-utilities.png'
  },
  {
    title: 'Decision Science Team Lead',
    employer: 'Mu-Sigma',
    date: 'Jun 2018 - Jul 2022',
    logo: '/logos/mu-sigma.png'
  }
];

const HorizontalTimeline = () => {
  return (
    <section className="horizontal-timeline" style={{ padding: '1rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Professional Experience</h2>
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', padding: '0.5rem' }}>
        {experiences.map((exp, index) => (
          <Card key={index} style={{ minWidth: '300px', maxWidth: '300px', border: '1px solid #48C9B0', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px', marginBottom: '1rem' }}>
                <img src={exp.logo} alt={`${exp.title} logo`} style={{ maxWidth: '120px', maxHeight: '120px', objectFit: 'contain' }} />
              </div>
              <Typography variant="h6" component="div" style={{ color: '#48C9B0', fontWeight: 'bold', textAlign: 'center' }}>
                {exp.title}
              </Typography>
              <Typography variant="subtitle1" style={{ textAlign: 'center', fontStyle: 'italic', color: '#2C3E50' }}>
                {exp.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HorizontalTimeline;
