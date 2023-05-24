import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { heroBg, heroBanner1, heroBanner2, heroShape1, heroShape2 } from '../assets/images';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="section hero has-bg-image" id="home" aria-label="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 section-title">
            Best Programs Offered by  <span className="span">Top Tutors</span> 
          </h1>
          <p className="hero-text">
          Lets discover new knowledge and new friend and have a learning experience with beautiful tutors
          </p>
          <Link to="#" className="btn has-before">
            <span className="span">Enroll</span>
            <AiOutlineArrowRight aria-hidden="true" />
          </Link>
        </div>
        <figure className="hero-banner">
          <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
            <img src={heroBanner1} width="270" height="300" alt="hero banner" className="img-cover" />
          </div>
          <div className="img-holder two" style={{ '--width': 240, '--height': 370 }}>
            <img src={heroBanner2} width="240" height="370" alt="hero banner" className="img-cover" />
          </div>
          <img src={heroShape1} width="380" height="190" alt="" className="shape hero-shape-1" />
          <img src={heroShape2} width="622" height="551" alt="" className="shape hero-shape-2" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
