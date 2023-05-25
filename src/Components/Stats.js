import React from 'react';

const Stats = () => {
  const statsData = [
    { title: 'Student Enrolled', value: '29.3k', color: '170, 75%, 41%' },
    { title: 'Class Completed', value: '32.4K', color: '351, 83%, 61%' },
    { title: 'Satisfaction Rate', value: '100%', color: '260, 100%, 67%' },
    { title: 'Top Instructors', value: '354+', color: '42, 94%, 55%' },
  ];

  return (
    <section className="section stats" aria-label="stats">
      <div className="container">
        <ul className="grid-list">
          {statsData.map((stat, index) => (
            <li key={index}>
              <div
                className="stats-card"
                style={{ '--color': `hsl(${stat.color})` }}
              >
                <h3 className="card-title">{stat.value}</h3>
                <p className="card-text">{stat.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
