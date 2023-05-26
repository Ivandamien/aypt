import React from 'react';
import './Name.css';

const Name = ({ width, height, className }) => {
  return (
    <div className={`name-container ${className}`} style={{ width, height }}>
      <div className="progress-bar"></div>
      <h1 className="name-title">Ray Sanchez</h1>
      <p className="name-text">Lorem10</p>
    </div>
  );
};

export default Name;
