import React, { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { aytp } from '../assets/images';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeNavbar = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'active' : ''}`} data-header>
      <div className="container">
        <Link to={'/'} className="logo">
          <img src={aytp} width="162" height="50" alt="EduWeb logo" />
        </Link>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
          <div className="wrapper">
            <Link to={'/'} className="logo">
              <img src={aytp} width="162" height="50" alt="EduWeb logo" />
            </Link>

            <button className="nav-close-btn" aria-label="close menu" onClick={toggleMenu}>
              <IoCloseOutline aria-hidden="true" />
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link home" data-nav-link onClick={closeNavbar}>
                <AiFillHome aria-hidden="true" size={20} />
                <span className="span">Home</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                Admin
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                Student
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                Tutor
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                Partner
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to={'#'} className="btn has-before">
            <BsFillPersonPlusFill aria-hidden="true" />
            <span className="span">Register</span>
          </Link>
          <button className="header-action-btn" aria-label="open menu" data-nav-toggler onClick={toggleMenu}>
            <IoMenuOutline aria-hidden="true" />
          </button>
        </div>

        {isMenuOpen && <div className="overlay" data-nav-toggler data-overlay onClick={closeNavbar}></div>}
      </div>
    </header>
  );
};

export default Header;
