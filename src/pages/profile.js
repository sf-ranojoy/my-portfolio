import * as React from "react"
import Layout from "../components/layout"; // Assuming you have a Layout component
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StackIcon from "tech-stack-icons"; // You can also use any another import name
import { graphql, useStaticQuery } from "gatsby";


const ProfilePage = () => {
  const techStack = {
    "Data Science & Machine Learning": ["MLR", "Ensemble Methods", "LSTM", "ViT", "YOLO", "ARIMAX"],
    "Languages": ["Python", "PostgreSQL", "R", "JS", "Bash"],
    "Data Visualization & Tools": ["Tableau", "Power BI", "Reactjs", "Angular", "Vuejs", "Neo4j", "MongoDB"],
    "Cloud Platforms & DevOps": ["Azure", "Git", "Docker", "Apache Airflow"]
  };

  const achievements = [
    { title: "Azure Data Scientist Associate", image: "credly-azure-cert.png" },
    { title: "Google Cloud Certified ML Engineer", image: "credly-google-cert.png" },
    { title: "Kaggle Competitions Expert", image: "kaggle-badge.png" }
  ];

  const hobbies = [
    { title: "Photography", image: "photography.jpg" },
    { title: "Hiking", image: "hiking.jpg" },
    { title: "Chess", image: "chess.jpg" }
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const data = useStaticQuery(graphql`
    query {
      contentfulGatsbyPortfolio {
        imageLibrary {
          id
          title
          description
          file {
            url
          }
        }
      }
    }
  `);

  const images = data.contentfulGatsbyPortfolio.imageLibrary;


  return (
    <Layout>
      <section style={{ padding: '0.5rem', maxWidth: '1600px', margin: '0 auto', textAlign: 'justify' }}>
        <h2 style={{ fontSize: '2rem', color: '#34495E' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          I am an experienced Data Scientist and Software Engineer with expertise in machine learning, cloud platforms, and full-stack development.
          My career has been dedicated to solving real-world problems using AI, DevOps, and scalable software solutions.
        </p>

        <h2 style={{ marginTop: '2rem', fontSize: '2rem', color: '#34495E' }}>Tech Stack</h2>
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} style={{ marginBottom: '2rem' }}>
            <h3>{category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {items.map((item, index) => {
                return (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                     <StackIcon name={item.toLowerCase()} size={25} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <h2 style={{ marginTop: '2rem', fontSize: '2rem', color: '#34495E' }}>Achievements</h2>
        <Carousel responsive={responsive} infinite autoPlay>
          {achievements.map((ach, index) => (
            <div key={index} style={{ padding: '10px' }}>
              <img src={`/images/${ach.image}`} alt={ach.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <p>{ach.title}</p>
            </div>
          ))}
        </Carousel>

        <h2 style={{ marginTop: '2rem', fontSize: '2rem', color: '#34495E' }}>Hobbies & Pursuits</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Outside of work, I enjoy exploring my creative and adventurous side. Photography, hiking, and chess are some of my passions that allow me to
          unwind and challenge myself.
        </p>
        <Carousel responsive={responsive} infinite autoPlay>
          {images.map((img, index) => (
            // <div key={img.id} style={{ width: "300px", textAlign: "center" }}>
            //   <img
            //     src={img.file.url}
            //     alt={img.title}
            //     style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
            //   />
            //   <h3 style={{ fontSize: "1.2rem", marginTop: "10px" }}>{img.title}</h3>
            //   <p style={{ fontSize: "0.9rem", color: "#666" }}>{img.description}</p>
            // </div>
            <div key={index} style={{ textAlign: 'center', padding: '10px' }}>
              <img src={img.file.url} alt={img.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              <p>{img.title}</p>
            </div>
          ))}
        </Carousel>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="/resume.pdf"
            download
            style={{ padding: '10px 20px', backgroundColor: '#48C9B0', color: '#fff', textDecoration: 'none', fontSize: '1.2rem', borderRadius: '5px' }}
          >
            Download Resume
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ProfilePage;