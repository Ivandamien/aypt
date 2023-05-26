import React from 'react';
// import {  FiCalendar } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blog1, blog2, blog3, blogShape } from '../assets/images';
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import { BsChatDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const blogItems = [
  {
    image: blog1,
    title: 'Become A Better Blogger: Content Planning',
    subtitle: 'Online',
    date: 'Oct 10, 2021',
    commentCount: 'Com 09',
    text: 'Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.',
  },
  {
    image: blog2,
    title: 'Become A Better Blogger: Content Planning',
    subtitle: 'Online',
    date: 'Oct 10, 2021',
    commentCount: 'Com 09',
    text: 'Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.',
  },
  {
    image: blog3,
    title: 'Become A Better Blogger: Content Planning',
    subtitle: 'Online',
    date: 'Oct 10, 2021',
    commentCount: 'Com 09',
    text: 'Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.',
  },
];

const Blog = () => {
  const settings = {
    dots: true,
    infinite: blogItems.length > 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'ease',
    centerPadding: '50px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section blog has-bg-image" id="blog" aria-label="blog" style={{ backgroundImage: "url('./assets/images/blog-bg.svg')" }}>
      <div className="container">
        <p className="section-subtitle">Latest Articles</p>
        <h2 className="h2 section-title">Join Our Online Community</h2>
        <Slider {...settings}>
          {blogItems.map((item, index) => (
            <div key={index} className="course-card-wrapper">
              <div className="blog-card">
              <figure className="card-banner img-holder has-after" style={{ '--width': 370, '--height': 370 }}>
                <img src={item.image} width="370" height="370" loading="lazy" alt={item.title} className="img-cover" />
              </figure>
              <div className="card-content">
                <Link to="#" className="card-btn" aria-label="read more">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
                <Link to="#" className="card-subtitle">
                  {item.subtitle}
                </Link>
                <h3 className="h3">
                  <Link to="#" className="card-title">
                    {item.title}
                  </Link>
                </h3>
                <ul className="card-meta-list">
                  <li className="card-meta-item">
                  <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                    <span className="span">{item.date}</span>
                  </li>
                  <li className="card-meta-item">
                  <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
                    <span className="span">{item.commentCount}</span>
                  </li>
                </ul>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
            </div>
          ))}
        </Slider>
        <img src={blogShape} width="186" height="186" loading="lazy" alt="" className="shape blog-shape" />
      </div>
    </section>
  );
};

export default Blog;
