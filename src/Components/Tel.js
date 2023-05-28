import React from 'react';
import { FiPhone } from 'react-icons/fi';
import './Tel.css';

const Tel = ({ width, height, className }) => {
  const telContainerStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={`tel-container ${className}`} style={telContainerStyle}>
      <div className="tel-icon-container">
        <div className="tel-icon-background">
          <FiPhone size={20} color=" #ff6666" fill=' #ff6666' />
        </div>
      </div>
      <div className="tel-info-container">
        <h1 className="tel-title">Online Support</h1>
        <p className="tel-number">hello@ngameagames.io</p>
      </div>
    </div>
  );
};

export default Tel;
