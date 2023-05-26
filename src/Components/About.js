import React from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { aboutBanner,  aboutShape2, aboutShape3, aboutShape4 } from '../assets/images';
import Name from './Name';
const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
            <img
              src={aboutBanner}
              width="520"
              height="370"
              loading="lazy"
              alt="about banner"
              className="img-cover"
            />
          </div>
          {/* <img src={aboutShape1} width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" /> */}
          <Name width={220} height={270} className="shape about-shape-1" />
          <img src={aboutShape2} width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
          <img src={aboutShape3} width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">
            Over 10 Years in <span className="span">Distant learning</span> for Skill Development
          </h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <IoCheckmarkDoneOutline aria-hidden="true" />
              <span className="span">Expert Trainers</span>
            </li>
            <li className="about-item">
              <IoCheckmarkDoneOutline aria-hidden="true" />
              <span className="span">Online Remote Learning</span>
            </li>
            <li className="about-item">
              <IoCheckmarkDoneOutline aria-hidden="true" />
              <span className="span">Lifetime Access</span>
            </li>
          </ul>
          <img src={aboutShape4} width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />
        </div>
      </div>
    </section>
  );
};

export default About;
