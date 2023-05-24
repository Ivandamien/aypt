import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiBook, FiUsers, FiArrowRight, FiStar } from 'react-icons/fi';
import { course1, course2, course3 } from '../assets/images';

const courses = [
  {
    image: course1,
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    duration: '3 Weeks',
    level: 'Beginner',
    rating: '5.0/7 Rating',
    price: '$29.00',
    lessonCount: '8 Lessons',
    studentCount: '20 Students',
  },
  {
    image: course2,
    title: 'Java Programming Masterclass for Software Developers',
    duration: '8 Weeks',
    level: 'Advanced',
    rating: '4.5/9 Rating',
    price: '$49.00',
    lessonCount: '15 Lessons',
    studentCount: '35 Students',
  },
  {
    image: course3,
    title: 'The Complete Camtasia Course for Content Creators',
    duration: '3 Weeks',
    level: 'Intermediate',
    rating: '4.9/7 Rating',
    price: '$35.00',
    lessonCount: '13 Lessons',
    studentCount: '18 Students',
  },
];

const Course = () => {
  return (
    <section className="section course" id="courses" aria-label="course">
      <div className="container">
        <p className="section-subtitle">Popular Courses</p>
        <h2 className="h2 section-title">Pick A Course To Get Started</h2>
        <ul className="grid-list">
          {courses.map((course, index) => (
            <li key={index}>
              <div className="course-card">
                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                  <img
                    src={course.image}
                    width="370"
                    height="220"
                    loading="lazy"
                    alt={course.title}
                    className="img-cover"
                  />
                </figure>
                <div className="abs-badge">
                  <FiClock aria-hidden="true" />
                  <span className="span">{course.duration}</span>
                </div>
                <div className="card-content">
                  <span className="badge">{course.level}</span>
                  <h3 className="h3">
                    <Link to="#" className="card-title">{course.title}</Link>
                  </h3>
                  <div className="wrapper">
                    <div className="rating-wrapper">
                      <FiStar />
                      <FiStar />
                      <FiStar />
                      <FiStar />
                      <FiStar />
                    </div>
                    <p className="rating-text">{course.rating}</p>
                  </div>
                  <data className="price" value="29">{course.price}</data>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <FiBook aria-hidden="true" />
                      <span className="span">{course.lessonCount}</span>
                    </li>
                    <li className="card-meta-item">
                      <FiUsers aria-hidden="true" />
                      <span className="span">{course.studentCount}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link to="#" className="btn has-before">
          <span className="span">Browse more courses</span>
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default Course;
