import $ from 'jquery';
import WOW from 'wowjs';

"use strict";

(function ($) {
  "use strict";

  $.fn.is_exist = function () {
    return this.length > 0;
  };
  
  $(function () {
    // Other scripts...

    /*--------------------------------------------------------------
    TEKUP COUNTER JS INIT
    --------------------------------------------------------------*/
    var a = 0;
    var counter = $('.counter');

    // Check if '.counter' element exists before accessing its offset
    if (counter.is_exist()) {
      var oTop = counter.offset().top - window.innerHeight;
      $(window).scroll(function () {
        if (a === 0 && $(window).scrollTop() > oTop) {
          $('.counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({
              countNum: countTo
            }, {
              duration: 8000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }

    // Other scripts...

  });
})($);
