import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css'; // Ensure to import the CSS file

const HeroSlider = () => {
  const settings = {
    dots: false, // No navigation dots
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false, // Set to false to remove fade effect
    cssEase: 'linear',
  };

  return (
    <div className="tekup-hero-section2">
      <Slider {...settings}>
        <div className="tekup-hero-slider-item hero-bg-1">
          <div className="container">
            <div className="tekup-hero-content center large-content">
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
        <div className="tekup-hero-slider-item hero-bg-2">
          <div className="container">
            <div className="tekup-hero-content center large-content">
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
        <div className="tekup-hero-slider-item hero-bg-3">
          <div className="container">
            <div className="tekup-hero-content center large-content">
              <h1>Innovate Your Business</h1>
              <p>
                Leading the way in business innovation and tech solutions.
              </p>
              <a className="tekup-default-btn tekup-white-btn" href="contact-us.html">
                Start a Project <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
        <div className="tekup-hero-slider-item hero-bg-4">
          <div className="container">
            <div className="tekup-hero-content center large-content">
              <h1>Empower Your Future</h1>
              <p>
                Harness the power of technology for a brighter future.
              </p>
              <a className="tekup-default-btn tekup-white-btn" href="contact-us.html">
                Start a Project <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
        <div className="tekup-hero-slider-item hero-bg-5">
          <div className="container">
            <div className="tekup-hero-content center large-content">
              <h1>Redefine Success</h1>
              <p>
                Your success story starts with us. Let’s make it happen.
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
