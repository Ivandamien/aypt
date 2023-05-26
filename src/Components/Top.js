import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Top = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to="#top" className={`back-top-btn ${isActive ? 'active' : ''}`} aria-label="back to top" data-back-top-btn onClick={handleClick}>
      <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
    </Link>
  );
};

export default Top;
