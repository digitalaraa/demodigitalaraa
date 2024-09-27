import React from 'react';
// src/components/header.js
// import React from 'react';
// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/magnific-popup.css';
// import '../../assets/css/slick.css';
// import '../../assets/css/animate.css';
// import '../../assets/css/fontawesome.css';
// import '../../assets/css/aos.css';
// import '../../assets/css/remixicon.css';
// import '../../assets/css/main.css';
// import '../../assets/css/app.min.css';

// Your header component code here


const Header = () => {
  return (
    <>
  {/* progress circle */}
  <div className="paginacontainer">
    <div className="progress-wrap">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <div className="top-arrow">
        <img src="assets/images/rightarrow.svg" alt="" />
      </div>
    </div>
  </div>
  {/* End All Js */}
  <header className="site-header tekup-header-section" id="sticky-menu">
    <div className="tekup-header-top bg-light1">
      <div className="container-fuild">
        <div className="tekup-header-info-wrap">
          <div className="tekup-header-info dark-color">
            <ul>
              <li>
                <i className="ri-map-pin-2-fill" />
                2774 Oak Drive, Plattsburgh, New York
              </li>
            </ul>
          </div>
          <div className="tekup-header-info dark-color">
            <ul>
              <li>
                <a href="tel:123">
                  <i className="ri-phone-fill" />
                  518-564-3200
                </a>
              </li>
              <li>
                <a href="mailto:name@email.com">
                  <i className="ri-mail-fill" />
                  mathemeus@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="tekup-header-bottom bg-white">
      <div className="container-fuild">
        <nav className="navbar site-navbar">
          {/* Brand Logo*/}
          <div className="brand-logo">
            <a href="index.html">
              <img
                src="assets/images/logo/logo-dark.svg"
                alt=""
                className="light-version-logo"
              />
            </a>
          </div>
          <div className="menu-block-wrapper">
            <div className="menu-overlay" />
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left" />
                </div>
                <div className="current-menu-title" />
                <div className="mobile-menu-close">×</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Demo <i className="ri-arrow-down-s-line" />
                  </a>
                  <ul className="sub-menu" id="submenu-1">
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        OnePage <i className="fas fa-angle-down" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-2">
                        <li className="sub-menu--item">
                          <a href="index-op-01.html">
                            <span className="menu-item-text">Home 1</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-02.html">
                            <span className="menu-item-text">Home 2</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-03.html">
                            <span className="menu-item-text">Home 3</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-04.html">
                            <span className="menu-item-text">Home 4</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-05.html">
                            <span className="menu-item-text">Home 5</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-06.html">
                            <span className="menu-item-text">Home 6</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-07.html">
                            <span className="menu-item-text">Home 7</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-08.html">
                            <span className="menu-item-text">Home 8</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-09.html">
                            <span className="menu-item-text">Home 9</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-op-10.html">
                            <span className="menu-item-text">Home 10</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Multipage
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-3">
                        <li className="sub-menu--item">
                          <a href="index.html">
                            <span className="menu-item-text">Home 01</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-02.html">
                            <span className="menu-item-text">home 02</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-03.html">
                            <span className="menu-item-text">home 03</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-04.html">
                            <span className="menu-item-text">home 04</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-05.html">
                            <span className="menu-item-text">home 05</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-06.html">
                            <span className="menu-item-text">home 06</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-07.html">
                            <span className="menu-item-text">home 07</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-08.html">
                            <span className="menu-item-text">home 08</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-09.html">
                            <span className="menu-item-text">home 09</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="index-10.html">
                            <span className="menu-item-text">home 10</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="about-us.html" className="nav-link-item">
                    About Us
                  </a>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Pages <i className="ri-arrow-down-s-line" />
                  </a>
                  <ul className="sub-menu" id="submenu-2">
                    <li className="sub-menu--item">
                      <a href="about-us.html">
                        <span className="menu-item-text">About Us</span>
                      </a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="pricing.html">
                        <span className="menu-item-text">Pricing</span>
                      </a>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        blog <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-3">
                        <li className="sub-menu--item">
                          <a href="blog.html">
                            <span className="menu-item-text">Blog</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="blog-grid.html">
                            <span className="menu-item-text">Blog grid</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-blog.html">
                            <span className="menu-item-text">blog details</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Service
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-4">
                        <li className="sub-menu--item">
                          <a href="service.html">
                            <span className="menu-item-text">service</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-service.html">
                            <span className="menu-item-text">
                              service details
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Team
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-5">
                        <li className="sub-menu--item">
                          <a href="team.html">
                            <span className="menu-item-text">team</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-team.html">
                            <span className="menu-item-text">team details</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Portfolio
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-6">
                        <li className="sub-menu--item">
                          <a href="portfolio-01.html">
                            <span className="menu-item-text">
                              Portfolio Grid
                            </span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="portfolio-02.html">
                            <span className="menu-item-text">
                              Portfolio masonry
                            </span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-portfolio.html">
                            <span className="menu-item-text">
                              Single Portfolio
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Utility
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-7">
                        <li className="sub-menu--item">
                          <a href="faq.html">
                            <span className="menu-item-text">faq</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="errors-404.html">
                            <span className="menu-item-text">Error 404</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="testimonial.html">
                            <span className="menu-item-text">testimonial</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-menu--item nav-item-has-children">
                      <a href="#" data-menu-get="h3" className="drop-trigger">
                        Shop
                        <i className="ri-arrow-down-s-line" />
                      </a>
                      <ul className="sub-menu shape-none" id="submenu-8">
                        <li className="sub-menu--item">
                          <a href="shop.html">
                            <span className="menu-item-text">shop</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="single-shop.html">
                            <span className="menu-item-text">Shop Details</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="my-cart.html">
                            <span className="menu-item-text">My Cart</span>
                          </a>
                        </li>
                        <li className="sub-menu--item">
                          <a href="checkout.html">
                            <span className="menu-item-text">Checkout</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Blog <i className="ri-arrow-down-s-line" />
                  </a>
                  <ul className="sub-menu" id="submenu-9">
                    <li className="sub-menu--item">
                      <a href="blog.html">
                        <span className="menu-item-text">blog</span>
                      </a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="blog-grid.html">
                        <span className="menu-item-text">Blog grid</span>
                      </a>
                    </li>
                    <li className="sub-menu--item">
                      <a href="single-blog.html">
                        <span className="menu-item-text">blog Details</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="contact-us.html" className="nav-link-item">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <div className="tekup-header-icon">
              <div className="tekup-header-search">
                <i className="ri-search-line" />
              </div>
              <a
                className="tekup-default-btn tekup-header-btn"
                href="contact-us.html"
              >
                Get in Touch <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger">
            <span />
          </div>
          {/*/.Mobile Menu Hamburger Ends*/}
        </nav>
      </div>
    </div>
    <div className="tekup-header-search-section">
      <div className="container">
        <div className="tekup-header-search-box">
          <input type="search" placeholder="Search here..." />
          <button id="header-search" type="button">
            <img src="assets/images/v1/search-dark.png" alt="" />
          </button>
          <p>Type above and press Enter to search. Press Close to cancel.</p>
        </div>
      </div>
      <div className="tekup-header-search-close">
        <i className="ri-close-line" />
      </div>
    </div>
  </header>
  <div className="search-overlay" />
  {/*End landex-header-section */}
  <div className="tekup-hero-section2">
    <div className="tekup-hero-slider">
      <div
        className="tekup-hero-slider-item"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg3.png)" }}
      >
        <div className="container">
          <div className="tekup-hero-content center white-color large-content">
            <div className="animated" data-animation-in="fadeInRight">
              <h1>The best innovative technology solutions</h1>
              <p>
                We are architects of innovation, trailblazers of technological
                advancement
              </p>
            </div>
            <div
              className="tekup-extra-mt animated"
              data-animation-in="fadeInUp"
              data-delay-in="0.3"
            >
              <a
                className="tekup-default-btn tekup-white-btn"
                href="contact-us.html"
              >
                Start a Project <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tekup-hero-slider-item"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg1.png)" }}
      >
        <div className="container">
          <div className="tekup-hero-content center white-color large-content">
            <div className="animated" data-animation-in="fadeInRight">
              <h1>The best innovative technology solutions</h1>
              <p>
                We are architects of innovation, trailblazers of technological
                advancement
              </p>
            </div>
            <div
              className="tekup-extra-mt animated"
              data-animation-in="fadeInUp"
              data-delay-in="0.3"
            >
              <a
                className="tekup-default-btn tekup-white-btn"
                href="contact-us.html"
              >
                Start a Project <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
  <div className="section tekup-section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={600}>
          <div className="tekup-thumb mr-30">
            <img src="assets/images/v2/thumb1.png" alt="" />
            <div className="tekup-thumb-card">
              <img src="assets/images/v3/rating.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="tekup-default-content ml-60">
            <h2>We are increasing business success with technology</h2>
            <div className="tekup-extra-mt">
              <div className="tekup-icon-list-wrap">
                <div className="tekup-icon-list-item">
                  <div className="tekup-icon-list-icon">
                    <img src="assets/images/v2/icon1.png" alt="" />
                  </div>
                  <div className="tekup-icon-list-data">
                    <h5>Quality Solution for Business</h5>
                    <p>
                      We are architects of innovation, trailblazers of
                      technological advancement, and partners in your success
                      dynamic
                    </p>
                  </div>
                </div>
                <div className="tekup-icon-list-item">
                  <div className="tekup-icon-list-icon">
                    <img src="assets/images/v2/icon2.png" alt="" />
                  </div>
                  <div className="tekup-icon-list-data">
                    <h5>Amazing Expert Teams</h5>
                    <p>
                      Support company that will learn the intimate details of
                      your business technology and process while also
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tekup-extra-mt">
              <a className="tekup-default-btn" href="about-us.html">
                More About <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
  <div className="section tekup-section-padding-bottom">
    <div className="container">
      <div id="tekup-counter" />
      <div className="tekup-counter-wrap wrap2">
        <div
          className="tekup-counter-data tekup-counter-data2"
          data-aos="fade-up"
          data-aos-duration={400}
        >
          <h2>
            <span data-percentage={26} className="tekup-counter" />+
          </h2>
          <h5>Years of Experience</h5>
          <p>
            To succeed, every software solution be deeply integrated into the
          </p>
        </div>
        <div
          className="tekup-counter-data tekup-counter-data2"
          data-aos="fade-up"
          data-aos-duration={600}
        >
          <h2>
            <span data-percentage={730} className="tekup-counter" />+
          </h2>
          <h5>Successfully Projects Done</h5>
          <p>
            To succeed, every software solution be deeply integrated into the
          </p>
        </div>
        <div
          className="tekup-counter-data tekup-counter-data2"
          data-aos="fade-up"
          data-aos-duration={800}
        >
          <h2>
            <span data-percentage={198} className="tekup-counter" />+
          </h2>
          <h5>Satisfied Happy Clients</h5>
          <p>
            To succeed, every software solution be deeply integrated into the
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
  <div className="section bg-light1 tekup-section-padding2">
    <div className="container">
      <div className="tekup-section-title center">
        <h2>We deal with the aspects of professional IT services</h2>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-iconbox-wrap3 bg-white"
            data-aos="fade-up"
            data-aos-duration={400}
          >
            <div className="tekup-iconbox-icon3">
              <img src="assets/images/v2/icon3.png" alt="" />
            </div>
            <div className="tekup-iconbox-data3">
              <a href="single-service.html">
                <h5>Web Development</h5>
              </a>
              <p>
                We are architects technological advancement, and partners in
                your success. As a dynamic
              </p>
            </div>
          </div>
          <div
            className="tekup-iconbox-wrap3 bg-white"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="tekup-iconbox-icon3">
              <img src="assets/images/v2/icon6.png" alt="" />
            </div>
            <div className="tekup-iconbox-data3">
              <a href="single-service.html">
                <h5>Digital Marketing</h5>
              </a>
              <p>
                We are architects technological advancement, and partners in
                your success. As a dynamic
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-iconbox-wrap3 bg-white"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <div className="tekup-iconbox-icon3">
              <img src="assets/images/v2/icon4.png" alt="" />
            </div>
            <div className="tekup-iconbox-data3">
              <a href="single-service.html">
                <h5>App Development</h5>
              </a>
              <p>
                We are architects technological advancement, and partners in
                your success. As a dynamic
              </p>
            </div>
          </div>
          <div
            className="tekup-iconbox-wrap3 bg-white"
            data-aos="fade-up"
            data-aos-duration={1200}
          >
            <div className="tekup-iconbox-icon3">
              <img src="assets/images/v2/icon7.png" alt="" />
            </div>
            <div className="tekup-iconbox-data3">
              <a href="single-service.html">
                <h5>IT Management</h5>
              </a>
              <p>
                We are architects technological advancement, and partners in
                your success. As a dynamic
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-12">
          <div className="row">
            <div className="col-xl-12 col-md-6">
              <div
                className="tekup-iconbox-wrap3 bg-white"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <div className="tekup-iconbox-icon3">
                  <img src="assets/images/v2/icon5.png" alt="" />
                </div>
                <div className="tekup-iconbox-data3">
                  <a href="single-service.html">
                    <h5>UI/UX Design</h5>
                  </a>
                  <p>
                    We are architects technological advancement, and partners in
                    your success. As a dynamic
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-md-6">
              <div
                className="tekup-iconbox-wrap3 bg-white"
                data-aos="fade-up"
                data-aos-duration={1400}
              >
                <div className="tekup-iconbox-icon3">
                  <img src="assets/images/v2/icon8.png" alt="" />
                </div>
                <div className="tekup-iconbox-data3">
                  <a href="single-service.html">
                    <h5>Cyber Security</h5>
                  </a>
                  <p>
                    We are architects technological advancement, and partners in
                    your success. As a dynamic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
  <div className="section tekup-section-padding">
    <div className="container">
      <div className="tekup-section-title center">
        <h2>Explore our recent projects</h2>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-portfolio-wrap2"
            data-aos="fade-up"
            data-aos-duration={400}
          >
            <div className="tekup-portfolio-thumb2">
              <img src="assets/images/p2/p_1.png" alt="" />
              <div className="tekup-portfolio-data2">
                <a href="single-portfolio.html">
                  <h5>Design of the year</h5>
                </a>
                <p>UI/UX Design</p>
                <a
                  className="tekup-portfolio-btn2"
                  href="single-portfolio.html"
                >
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-portfolio-wrap2"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <div className="tekup-portfolio-thumb2">
              <img src="assets/images/p2/p_2.png" alt="" />
              <div className="tekup-portfolio-data2">
                <a href="single-portfolio.html">
                  <h5> Ways to level up your brand</h5>
                </a>
                <p>Branding</p>
                <a
                  className="tekup-portfolio-btn2"
                  href="single-portfolio.html"
                >
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-portfolio-wrap2"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            <div className="tekup-portfolio-thumb2">
              <img src="assets/images/p2/p_3.png" alt="" />
              <div className="tekup-portfolio-data2">
                <a href="single-portfolio.html">
                  <h5>Cyber Security Analysis</h5>
                </a>
                <p>Technology</p>
                <a
                  className="tekup-portfolio-btn2"
                  href="single-portfolio.html"
                >
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-portfolio-wrap2"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="tekup-portfolio-thumb2">
              <img src="assets/images/p2/p_4.png" alt="" />
              <div className="tekup-portfolio-data2">
                <a href="single-portfolio.html">
                  <h5>Design Discussion</h5>
                </a>
                <p>Design</p>
                <a
                  className="tekup-portfolio-btn2"
                  href="single-portfolio.html"
                >
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-md-12">
          <div
            className="tekup-portfolio-wrap2"
            data-aos="fade-up"
            data-aos-duration={1200}
          >
            <div className="tekup-portfolio-thumb2">
              <img src="assets/images/p2/p_5.png" alt="" />
              <div className="tekup-portfolio-data2">
                <a href="single-portfolio.html">
                  <h5>Product Security Analysis</h5>
                </a>
                <p>Product</p>
                <a
                  className="tekup-portfolio-btn2"
                  href="single-portfolio.html"
                >
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tekup-center-btn">
        <a className="tekup-default-btn" href="portfolio-01.html">
          View All Projects <i className="ri-arrow-right-up-line" />
        </a>
      </div>
    </div>
  </div>
  {/* End section */}
  <div className="section tekup-section-padding2 dark-bg">
    <div className="container">
      <div className="tekup-section-title center light-color">
        <h2>Effective &amp; flexible pricing</h2>
      </div>
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-pricing-wrap"
            data-aos="fade-up"
            data-aos-duration={400}
          >
            <div className="tekup-pricing-header">
              <h4>Startup</h4>
              <p>
                Best for Startup business owners who needs website for business.
              </p>
            </div>
            <div className="tekup-pricing-price">
              <h2>
                $99<span>/month</span>
              </h2>
            </div>
            <a className="tekup-pricing-btn" href="pricing.html">
              Select This Package <i className="ri-arrow-right-up-line" />
            </a>
            <div className="tekup-pricing-feature">
              <ul>
                <li>
                  <i className="ri-check-line" />
                  10 GB disk space availability
                </li>
                <li>
                  <i className="ri-check-line" />
                  50 GB NVMe SSD for use
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free platform access for all
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free lifetime updates facility
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free one year support
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-pricing-wrap"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <div className="tekup-pricing-header">
              <h4>Business</h4>
              <p>
                Best for Startup business owners who needs website for business.
              </p>
            </div>
            <div className="tekup-pricing-price">
              <h2>
                $299<span>/month</span>
              </h2>
            </div>
            <a className="tekup-pricing-btn active" href="pricing.html">
              Select This Package <i className="ri-arrow-right-up-line" />
            </a>
            <div className="tekup-pricing-feature">
              <ul>
                <li>
                  <i className="ri-check-line" />
                  10 GB disk space availability
                </li>
                <li>
                  <i className="ri-check-line" />
                  50 GB NVMe SSD for use
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free platform access for all
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free lifetime updates facility
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free one year support
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div
            className="tekup-pricing-wrap"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            <div className="tekup-pricing-header">
              <h4>Enterprise</h4>
              <p>
                Best for Startup business owners who needs website for business.
              </p>
            </div>
            <div className="tekup-pricing-price">
              <h2>
                $779<span>/month</span>
              </h2>
            </div>
            <a className="tekup-pricing-btn" href="pricing.html">
              Select This Package <i className="ri-arrow-right-up-line" />
            </a>
            <div className="tekup-pricing-feature">
              <ul>
                <li>
                  <i className="ri-check-line" />
                  10 GB disk space availability
                </li>
                <li>
                  <i className="ri-check-line" />
                  50 GB NVMe SSD for use
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free platform access for all
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free lifetime updates facility
                </li>
                <li>
                  <i className="ri-check-line" />
                  Free one year support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
  <div className="section tekup-section-padding">
    <div className="container">
      <div className="tekup-section-title center">
        <h2>Trusted by more than 200+ client’s around the world</h2>
      </div>
      <div className="tekup-t-two-column-slider-wrap">
        <div className="tekup-t-two-column-slider">
          <div className="tekup-t-two-column-slider-item">
            <div className="row">
              <div className="col-lg-5">
                <div className="tekup-t-two-column-thumb">
                  <img src="assets/images/v2/t-thumb1.png" alt="" />
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center">
                <div className="tekup-t-two-column-data">
                  <div className="tekup-t-two-column-rating">
                    <ul>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                    </ul>
                  </div>
                  <p>
                    “ If you’re looking for a rewarding career and a chance to
                    make an impact, you’ve come to the right place We will
                    transform your business through our techniques! ”
                  </p>
                  <div className="tekup-t-two-column-author">
                    <h5>Alexander Cameron</h5>
                    <span>Lead Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tekup-t-two-column-slider-item">
            <div className="row">
              <div className="col-lg-5">
                <div className="tekup-t-two-column-thumb">
                  <img src="assets/images/v2/t-thumb2.png" alt="" />
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center">
                <div className="tekup-t-two-column-data">
                  <div className="tekup-t-two-column-rating">
                    <ul>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                      <li>
                        <i className="ri-star-s-fill" />
                      </li>
                    </ul>
                  </div>
                  <p>
                    “ If you’re looking for a rewarding career and a chance to
                    make an impact, you’ve come to the right place We will
                    transform your business through our techniques! ”
                  </p>
                  <div className="tekup-t-two-column-author">
                    <h5>Alexander Cameron</h5>
                    <span>Lead Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
  <div className="section bg-light1 tekup-section-padding2">
    <div className="container">
      <div className="tekup-section-title">
        <div className="row">
          <div className="col-xxl-5 col-lg-6">
            <h2>Recent blog &amp; articles about technology</h2>
          </div>
          <div className="col-xxl-7 col-lg-6 d-flex align-items-center justify-content-end">
            <div className="tekup-title-btn">
              <a className="tekup-default-btn" href="blog.html">
                View All Posts <i className="ri-arrow-right-up-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration={400}
        >
          <div className="tekup-blog-wrap2">
            <div className="tekup-blog-thumb2">
              <img src="assets/images/blog/blog4.png" alt="" />
              <div className="tekup-blog-content2">
                <a href="single-blog.html">
                  <h3>Technology support allows erie non-profit to serve</h3>
                </a>
                <div className="tekup-blog-meta tekup-blog-meta2">
                  <ul>
                    <li>
                      <a href="single-blog.html">Technology</a>
                    </li>
                    <li>
                      <a href="single-blog.html">26 June 2023</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration={600}
        >
          <div className="tekup-blog-wrap2">
            <div className="tekup-blog-thumb2">
              <img src="assets/images/blog/blog5.png" alt="" />
              <div className="tekup-blog-content2">
                <a href="single-blog.html">
                  <h3>The act of knowledge &amp; the act of design thinking</h3>
                </a>
                <div className="tekup-blog-meta tekup-blog-meta2">
                  <ul>
                    <li>
                      <a href="single-blog.html">Technology</a>
                    </li>
                    <li>
                      <a href="single-blog.html">26 June 2023</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration={800}
        >
          <div className="tekup-blog-wrap2">
            <div className="tekup-blog-thumb2">
              <img src="assets/images/blog/blog6.png" alt="" />
              <div className="tekup-blog-content2">
                <a href="single-blog.html">
                  <h3>Core on web vitals, a smas magazine case study</h3>
                </a>
                <div className="tekup-blog-meta tekup-blog-meta2">
                  <ul>
                    <li>
                      <a href="single-blog.html">Technology</a>
                    </li>
                    <li>
                      <a href="single-blog.html">26 June 2023</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End section */}
  {/* Footer  */}
  <footer className="tekup-footer-section dark-bg">
    <div className="container">
      <div className="tekup-footer-top tekup-section-padding">
        <div className="row">
          <div className="col-xl-4 offset-xl-1 col-lg-4 order-lg-4">
            <div className="tekup-footer-title light-color light-color">
              <h5>Subscribe Our Newsletter</h5>
              <p>
                Get ready to work together for the better solution for your
                business
              </p>
            </div>
            <div className="tekup-subscription">
              <form action="#">
                <input type="email" placeholder="Enter your email" />
                <button id="tekup-subscription-btn" type="button">
                  <i className="ri-send-plane-fill" />
                </button>
              </form>
            </div>
            <div className="tekup-social-icon m_bottom">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="ri-facebook-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="ri-linkedin-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <i className="ri-twitter-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="ri-instagram-fill" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4">
            <div className="tekup-footer-menu light-color">
              <div className="tekup-footer-title light-color">
                <h5>Quick Links</h5>
              </div>
              <ul>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="team.html">Our Team</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="blog.html">Blogs</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4">
            <div className="tekup-footer-menu light-color extar-margin">
              <div className="tekup-footer-title light-color">
                <h5>Services</h5>
              </div>
              <ul>
                <li>
                  <a href="">UI/UX Design</a>
                </li>
                <li>
                  <a href="">App Development</a>
                </li>
                <li>
                  <a href="">Digital Marketing</a>
                </li>
                <li>
                  <a href="">Web Development</a>
                </li>
                <li>
                  <a href="">Cyber Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4">
            <div className="tekup-footer-menu light-color mb-0">
              <div className="tekup-footer-title light-color">
                <h5>Information</h5>
              </div>
              <ul>
                <li>
                  <a href="">Working Process</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="faq.html">Faqs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tekup-footer-bottom center">
        <div className="tekup-copywright light-color right">
          <p>
            {" "}
            © <span id="current-year" /> MthemeUs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

  );
};

export default Header;
