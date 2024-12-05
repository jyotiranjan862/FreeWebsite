import React from 'react';
import '../CSS/Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="content">
        <h1>
        <strong>Unlock Immersive Experiences <br /> with Cutting-Edge AR/VR Solutions</strong>
        </h1>
        <p>
        Blending technology and industry expertise to captivate audiences and
        drive engagement across Real Estate, Gaming, and Tourism.
        </p>
        <div className="buttons">
          <button><a href="https://sherlockstudio.in/">Get Started</a></button>
          <button><Link to="/login" >Learn More</Link></button>
        </div>
      </div>
      <div className="circle"></div>
    </section>
  );
};

export default Hero;
