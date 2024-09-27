import $ from 'jquery';

$(document).ready(function () {
    // Activate default tab contents
    var $magicLine, defaultActive;  

    // Get the default active tab
    defaultActive = $('.tekup-tabs-menu li.active a').attr('href');
    $(defaultActive).show();
                
    // Append the magic line for animation
    $('.tekup-tabs-menu').append("<li id='magic-line'></li>");
    $magicLine = $('#magic-line');		    
    $magicLine.width($('.active').width());

    // Click event for tabs
    $('.tekup-tabs-menu li a').click(function () {
        var $this, tabId, leftVal, $tabContent;
        $this = $(this);
        $tabContent = $('.tabContent');
        $this.parent().addClass('active').siblings().removeClass('active');
        tabId = $this.attr('href');		
		
        // Calculate the left value for the sliding animation
        leftVal = $($tabContent).index($(tabId)) * $tabContent.width() * -1;
        $('.tekup-tabs-wrapper').stop().animate({ left: leftVal });
		
        // Animate the magic line
        $magicLine
            .data('origLeft', $this.position().left)
            .data('origWidth', $this.width() + 40);
		
        return false; // Prevent default anchor click behavior
    });		
});
