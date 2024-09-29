// // // gatsby-browser.js
// // import $ from 'jquery';

// /*import './assets/css/bootstrap.min.css';
// import './assets/css/magnific-popup.css';
// import './assets/css/slick.css';
// import './assets/css/animate.css';
// import './assets/css/fontawesome.css';
// import './assets/css/aos.css';
// import './assets/css/remixicon.css';
// import './assets/css/main.css';
// import './assets/css/app.min.css';

// // // Import JS files
// import './assets/js/jquery-3.7.1.min.js';
// import './assets/js/bootstrap.bundle.min.js';
// import './assets/js/aos.js';
// // import './assets/js/menu/menu.js';
// import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/slick.js';
// import './assets/js/top-to-bottom.js';
// // import './assets/js/countdown.js';
//  import './assets/js/wow.min.js';
// // import './assets/js/skill-bar.js';
// // import './assets/js/slick-animation.min.js';
// // import './assets/js/faq.js';
//  import './assets/js/isotope.pkgd.min.js';
// // import './assets/js/tabs-slider.js';
// // import './assets/js/product-increment.js';
// // import './assets/js/app.js';
// */
// // gatsby-browser.js

// // Import stylesheets
// import './assets/css/bootstrap.min.css';
// import './assets/css/magnific-popup.css';
// import './assets/css/slick.css';
// import './assets/css/animate.css';
// import './assets/css/fontawesome.css';
// import './assets/css/aos.css';
// import './assets/css/remixicon.css';
// import './assets/css/main.css';
// import './assets/css/app.min.css';

// // Import jQuery
// import $ from 'jquery'; // Ensure this is at the top

// import './assets/js/jquery-3.7.1.min.js';
// import './assets/js/bootstrap.bundle.min.js';
// import './assets/js/aos.js';
// import './assets/js/menu/menu.js';
// import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/slick.js';
// import './assets/js/top-to-bottom.js';
// import './assets/js/countdown.js';
// import './assets/js/wow.min.js';
// import './assets/js/skill-bar.js';
// import './assets/js/slick-animation.min.js';
 
// import './assets/js/faq.js';
// import './assets/js/isotope.pkgd.min.js';
// import './assets/js/tabs-slider.js';
// import './assets/js/product-increment.js';
// import './assets/js/app.js';

// // Optional: Using jQuery in this file to avoid unused variable warning
// //console.log($); // This is just to ensure $ is defined


// gatsby-browser.js

// Import stylesheets
import './assets/css/bootstrap.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/slick.css';
import './assets/css/animate.css';
import './assets/css/fontawesome.css';
import './assets/css/aos.css';
import './assets/css/remixicon.css';
import './assets/css/main.css';
import './assets/css/app.min.css';

// Import jQuery
import $ from 'jquery'; 

// Import JS scripts
import './assets/js/jquery-3.7.1.min.js';
import './assets/js/bootstrap.bundle.min.js';
import './assets/js/aos.js';
import './assets/js/menu/menu.js';
import './assets/js/jquery.magnific-popup.min.js';
import './assets/js/slick.js';
import './assets/js/top-to-bottom.js';
import './assets/js/countdown.js';

// Correct WOW.js import
import WOW from 'wowjs'; // This will fix the WOW.js is not defined error

import './assets/js/skill-bar.js';
import './assets/js/slick-animation.min.js';
import './assets/js/faq.js';
import './assets/js/isotope.pkgd.min.js';
import './assets/js/tabs-slider.js';
import './assets/js/product-increment.js';
import './assets/js/app.js';

$(document).ready(function () {
  // Ensure jQuery is working
  if ($('.slick-carousel').length > 0) {
    import('./assets/js/slick.js').then(() => {
      // Initialize the Slick carousel
      $('.slick-carousel').on('init', function (event, slick) {
        // Make the carousel visible after initialization
        $(this).css('opacity', '1');
      }).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });
    });
  }

  // Initialize WOW.js for animations
  new WOW.WOW().init(); // Make sure WOW.js initializes correctly
});
// gatsby-browser.js
import 'aos/dist/aos.css';
import AOS from 'aos';

export const onInitialClientRender = () => {
  AOS.init();
};

