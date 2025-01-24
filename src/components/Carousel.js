import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  const projects = [
    {
      title: "Project One",
      description: "This is the description for project one.",
      image: "https://www.gifcen.com/wp-content/uploads/2021/06/meme-gif-8.gif",
      link: "https://example.com/project-one"
    },
    {
      title: "Project Two",
      description: "This is the description for project two.",
      image: "https://www.gifcen.com/wp-content/uploads/2022/01/meme-gif-3.gif",
      link: "https://example.com/project-two"
    },
    {
      title: "Project Three",
      description: "This is the description for project three.",
      image: "https://media0.giphy.com/media/eMCVSw9v28iRARFFAt/giphy.gif",
      link: "https://example.com/project-three"
    }
  ];

  return (
    <div style={{ margin: '1%',  backgroundColor: '#f0f0f0', padding: '20px', justifyContent:'center'}}>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}  style={{ display: 'flex', justifyContent: 'center' }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;