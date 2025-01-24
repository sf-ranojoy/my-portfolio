// Horizontal Timeline Component
import React from 'react';

const experiences = [
  {
    title: 'Consultant, School Frontiers',
    date: 'Aug 2024 - Present',
    description: 'Onboarding team members on GitHub, Apache Airflow, and Azure. Developed an in-house database.'
  },
  {
    title: 'Graduate Research Assistant, Penn State',
    date: 'Jan 2023 - May 2024',
    description: 'Mentored startups, improved UI features, and increased user satisfaction by 25%.'
  },
  {
    title: 'Data Science Intern, Essentials Utilities',
    date: 'May 2023 - Aug 2023',
    description: 'Optimized wastewater processes and streamlined customer acquisition.'
  },
  {
    title: 'Decision Science Team Lead, Mu-Sigma',
    date: 'Jun 2018 - Jul 2022',
    description: 'Led a team to develop an NLP chatbot, secured $7M in RFPs, and received awards for high-quality MVPs.'
  }
];

const HorizontalTimeline = () => {
  return (
    <section className="horizontal-timeline" style={{ padding: '2rem 0', position: 'relative', overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Professional Experience</h2>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', margin: '0 auto', maxWidth: '100%' }}>
        <div style={{ position: 'absolute', top: '50%', width: '100%', height: '2px', backgroundColor: '#48C9B0', zIndex: '-1' }} />
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              flex: '0 0 auto',
              margin: '0 2rem',
              textAlign: 'center',
              maxWidth: '250px',
            }}
          >
            <div
              style={{
                position: 'relative',
                border: '1px solid #48C9B0',
                borderRadius: '8px',
                padding: '1rem',
                backgroundColor: '#F4F6F6',
              }}
            >
              <h3 style={{ color: '#48C9B0', fontSize: '1.1rem' }}>{exp.title}</h3>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#2C3E50' }}>{exp.date}</p>
              <p style={{ fontSize: '0.85rem', color: '#34495E' }}>{exp.description}</p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                backgroundColor: '#48C9B0',
                borderRadius: '50%',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalTimeline;
