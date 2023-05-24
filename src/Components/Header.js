import React, { useState } from 'react';
import { IoSearchOutline, IoCartOutline, IoArrowForwardOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    // Handle search toggle logic
  };

  const openCart = () => {
    // Handle cart opening logic
  };

  const closeNavbar = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to={'/'} className="logo">
          <img src={logo} width="162" height="50" alt="EduWeb logo" />
        </Link>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
          <div className="wrapper">
            <Link to={'/'} className="logo">
              <img src={logo} width="162" height="50" alt="EduWeb logo" />
            </Link>

            <button className="nav-close-btn" aria-label="close menu" onClick={toggleMenu}>
              <IoCloseOutline aria-hidden="true" />
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                Courses
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link onClick={closeNavbar}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="header-action-btn" aria-label="toggle search" title="Search" onClick={toggleSearch}>
            <IoSearchOutline aria-hidden="true" />
          </button>
          <button className="header-action-btn" aria-label="cart" title="Cart" onClick={openCart}>
            <IoCartOutline aria-hidden="true" />
            <span className="btn-badge">0</span>
          </button>
          <Link to={'#'} className="btn has-before">
            <span className="span">Try for free</span>
            <IoArrowForwardOutline aria-hidden="true" />
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
