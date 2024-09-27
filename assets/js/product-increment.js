import $ from 'jquery';

$(document).ready(function() {
  // Decrease quantity
  $('.tekup-product-minus').click(function () {
    var $input = $(this).parent().find('input'); // Find the input element
    var count = parseInt($input.val()) - 1; // Decrease count by 1
    count = count < 1 ? 1 : count; // Ensure count doesn't go below 1
    $input.val(count); // Update input value
    $input.change(); // Trigger change event
    return false; // Prevent default behavior
  });

  // Increase quantity
  $('.tekup-product-plus').click(function () {
    var $input = $(this).parent().find('input'); // Find the input element
    $input.val(parseInt($input.val()) + 1); // Increase count by 1
    $input.change(); // Trigger change event
    return false; // Prevent default behavior
  });
});
