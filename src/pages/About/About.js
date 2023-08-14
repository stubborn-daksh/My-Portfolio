import React from 'react';
import './About.css';
import Jump from 'react-reveal/Jump';
import My_image from '../../assets/images/my6-modified.png';

const About = () => {
  return (
    <>
    <Jump>
     <div className='about' id='about'>
      <div className='row'>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
             <img src={My_image} alt='profile_pic' />
          </div>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'> 
          <h1>About Me</h1>
          <p> I'm a B.Tech Computer Science Engineering Graduate, Currently Working as a Software Engineer at Anudip Foundation. My journey began with a strong educational foundation, where I mastered programming languages, fundamentals of computer science and problem-solving principles. Currently, I contribute to developing software that addresses real-world challenges. My coding philosophy prioritizes clean, scalable solutions that push boundaries. I thrive on dissecting complex problems into manageable steps and believe in continuous learning to stay updated with industry trends. With a knack for detail and a commitment to excellence, I am dedicated to crafting innovative and impactful solutions. Through my portfolio, I aim to showcase my passion for coding and problem solving, highlighting projects that reflect my dedication to technological advancement.
          </p>
          </div> 
      </div>
     </div>
     </Jump>
    </>
  )
}

export default About