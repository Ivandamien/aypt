import React from 'react';
import { category1, category2, category3, category4 } from '../assets/images';
import { Link } from 'react-router-dom';

const Category = () => {
  const categories = [
    {
      color: '170, 75%, 41%',
      icon: category1,
      title: 'Online Degree Programs',
      text: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor.',
      badge: '7 Courses',
    },
    {
      color: '351, 83%, 61%',
      icon: category2,
      title: 'Non-Degree Programs',
      text: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor.',
      badge: '4 Courses',
    },
    {
      color: '229, 75%, 58%',
      icon: category3,
      title: 'Off-Campus Programs',
      text: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor.',
      badge: '8 Courses',
    },
    {
      color: '42, 94%, 55%',
      icon: category4,
      title: 'Hybrid Distance Programs',
      text: 'Lorem ipsum dolor consec tur elit adicing sed umod tempor.',
      badge: '8 Courses',
    },
  ];

  return (
    <section className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Categories</p>
        <h2 className="h2 section-title">
          Online <span className="span">Classes</span> For Remote Learning.
        </h2>
        <p className="section-text">Consectetur adipiscing elit sed do eiusmod tempor.</p>
        <ul className="grid-list">
          {categories.map((category, index) => (
            <li key={index}>
              <div className="category-card" style={{ '--color': category.color }}>
                <div className="card-icon">
                  <img src={category.icon} width="40" height="40" loading="lazy" alt="" className="img" />
                </div>
                <h3 className="h3">
                  <Link to="#" className="card-title">
                    {category.title}
                  </Link>
                </h3>
                <p className="card-text">{category.text}</p>
                <span className="card-badge">{category.badge}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
