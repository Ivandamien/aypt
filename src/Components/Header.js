import React from 'react';
import { IoSearchOutline, IoCartOutline, IoArrowForwardOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { logo } from '../assets/images';
import { Link } from 'react-router-dom';


const Header = () => {
  const toggleMenu = () => {
    // Handle menu toggle logic
  };

  const toggleSearch = () => {
    // Handle search toggle logic
  };

  const openCart = () => {
    // Handle cart opening logic
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to={'/'} className="logo">
          <img src={logo} width="162" height="50" alt="EduWeb logo" />
        </Link>

        <nav className="navbar" data-navbar>
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
              <Link to={'/'} className="navbar-link" data-nav-link>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link>
                About
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link>
                Courses
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link>
                Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link to={'/'} className="navbar-link" data-nav-link>
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

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;
