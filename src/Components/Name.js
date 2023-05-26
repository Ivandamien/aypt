import React from 'react';
import './Name.css';

const Name = ({ width, height, className }) => {
  return (
      <div className={`name-container ${className}`} style={{ width, height }}>
          <div className="outer-bar">
            <div className="progress-bar">
                <div className="progress" style={{ transform: 'rotate(270deg)' }}></div>
            </div>
              
          </div>
      <h1 className="name-title">We Build the future</h1>
      <p className="name-text"></p>
    </div>
  );
};

export default Name;
