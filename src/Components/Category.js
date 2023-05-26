import React from 'react';
import { category1, category2, category3, category4 } from '../assets/images';
import { Link } from 'react-router-dom';

const Category = () => {
  const categories = [
    {
      color: '170, 75%, 41%',
      icon: category1,
      title: 'Online Degree Programs',
      text: 'Explore our comprehensive range of online degree programs designed to empower you with in-depth knowledge and skills',
      badge: '7 Courses',
    },
    {
      color: '351, 83%, 61%',
      icon: category2,
      title: 'Non-Degree Programs',
      text: 'Discover our diverse selection of non-degree programs tailored to meet your specific learning interests and career goals.',
      badge: '4 Courses',
    },
    {
      color: '229, 75%, 58%',
      icon: category3,
      title: 'Off-Campus Programs',
      text: 'Embark on exciting off-campus programs that offer immersive learning experiences beyond traditional classroom.',
      badge: '8 Courses',
    },
    {
      color: '42, 94%, 55%',
      icon: category4,
      title: 'Hybrid Distance Programs',
      text: 'Experience the perfect blend of flexibility and interaction with our hybrid distance programs that suits you',
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
        <p className="section-text">Unlock your potential and embark on a transformative journey of knowledge with our cutting-edge online learning platform.</p>
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
