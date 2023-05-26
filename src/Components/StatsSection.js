import React from 'react';
// Import the CSS file for the component

const StatsCard = ({ color, title, text }) => {
  const cardStyle = {
    '--color': color, // Set the custom CSS variable --color with the provided color value
  };

  return (
    <li>
      <div className="stats-card" style={cardStyle}>
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </li>
  );
};

const StatsSection = () => {
  const statsData = [
    { color: '170, 75%, 41%', title: '29.3k', text: 'Student Enrolled' },
    { color: '351, 83%, 61%', title: '32.4K', text: 'Class Completed' },
    { color: '260, 100%, 67%', title: '100%', text: 'Satisfaction Rate' },
    { color: '42, 94%, 55%', title: '354+', text: 'Top Instructors' },
  ];

  return (
    <section className="section stats" aria-label="stats">
      <div className="container">
        <ul className="grid-list">
          {statsData.map((data, index) => (
            <StatsCard key={index} color={data.color} title={data.title} text={data.text} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StatsSection;
