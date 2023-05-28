import React from 'react';
import { Link } from 'react-router-dom';
import { aytp } from '../assets/images';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url('./assets/images/footer-bg.png')` }}>
      <div className="footer-top section">
        <div className="container grid-list">

          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src={aytp} width="162" height="50" alt="EduWeb logo" />
            </Link>

            <p className="footer-brand-text">
            Empower Yourself Through Knowledge. Join Our Online Learning Platform
            </p>

                        
            <div className="wrapper">
            <span className="span">
                <FiMapPin size={20} color="lightgrey"  />
            </span>
            <address className="address">Nairobi, Westland</address>
            </div>

            {/* <div className="wrapper">
            <span className="span">
                <FiPhone size={20} color="lightgrey" />
            </span>
            <Link href="tel:+011234567890" className="footer-link">
                +01 123 4567 890
            </Link>
            </div> */}

            <div className="wrapper">
            <span className="span">
                <FiMail size={20} color="lightgrey" />
            </span>
            <Link to="mailto:info@ngamealms.io" className="footer-link">
                hello@ngameagames.io
            </Link>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Online Platform</p>
            </li>
            <li>
              <Link to="#" className="footer-link">About</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">Courses</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">Instructor</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">Events</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">Instructor Profile</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">Purchase Guide</Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Links</p>
            </li>
            <li>
              <Link to="#" className="footer-link">Contact Us</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">Gallery</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">News &amp; Articles</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">FAQ's</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">Sign In/Registration</Link>
            </li>
            <li>
              <Link to="#" className="footer-link">Coming Soon</Link>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>
            <p className="footer-list-text">
              Enter your email address to register for our newsletter subscription
            </p>
            <form action="" className="newsletter-form">
              <input type="email" name="email_address" placeholder="Your email" required className="input-field" />
              <button type="submit" className="btn has-before">
                <span className="span">Subscribe</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </button>
            </form>
            <ul className="social-list">
              <li>
                <Link to="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright 2023 All Rights Reserved by{' '}
            <Link to="#" className="copyright-link">Ngamea LMS</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
