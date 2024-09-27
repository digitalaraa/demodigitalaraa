import $ from 'jquery';

var Accordion = function (el, multiple) {
  this.el = el || {};
  this.multiple = multiple || false;

  var links = this.el.find('.init-header');
  links.on('click', {
    el: this.el,
    multiple: this.multiple
  }, this.dropdown);
}

Accordion.prototype.dropdown = function (e) {
  var $el = e.data.el;
  var $this = $(this); // Use 'var' for proper scoping
  var $next = $this.next();

  $next.slideToggle();
  $this.parent().toggleClass('open');

  if (!e.data.multiple) {
    $el.find('.init-body').not($next).slideUp().parent().removeClass('open');
  }
};

// Initialize the accordion when the document is ready
$(document).ready(function () {
  var accordion = new Accordion($('.init-wrap'), false);
});
