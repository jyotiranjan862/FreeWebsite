import React from 'react';
import '../CSS/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="content">
        <h1>
          Welcome to <span>SherLock Studio</span>
        </h1>
        <p>
          Experience the future of design and development with our cutting-edge
          solutions.
        </p>
        <div className="buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="circle"></div>
    </section>
  );
};

export default Hero;
