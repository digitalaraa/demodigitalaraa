// src/components/HeroSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const settings = {
    dots: false, // No navigation dots
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Add fade effect for smooth transitions
    cssEase: 'linear',
  };

  return (
    <div className="tekup-hero-section2">
      <Slider {...settings}>
        <div
          className="tekup-hero-slider-item"
          style={{ backgroundImage: "url('/assets/images/hero/hero-bg3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container">
            <div className="tekup-hero-content center white-color large-content">
              <h1>Innovative Tech Solutions for Your Business</h1>
              <p>
                We are architects of innovation, trailblazers of technological advancement
              </p>
              <a className="tekup-default-btn tekup-white-btn" href="contact-us.html">
                Start a Project <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="tekup-hero-slider-item"
          style={{ backgroundImage: "url('/assets/images/hero/hero-bg1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="container">
            <div className="tekup-hero-content center white-color large-content">
              <h1>Transforming Ideas into Reality</h1>
              <p>
                Our expertise drives the evolution of technology solutions for your needs.
              </p>
              <a className="tekup-default-btn tekup-white-btn" href="contact-us.html">
                Start a Project <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
