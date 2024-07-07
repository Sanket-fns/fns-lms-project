$(document).ready(function(){
    $('#solutions-button').on('click', function() {
        var $flyoutMenu = $('#flyout-menu');
        var isExpanded = $(this).attr('aria-expanded') === 'true';
        
        if (isExpanded) {
            $flyoutMenu.removeClass('opacity-100 translate-y-0 duration-200 ease-out')
                       .addClass('opacity-0 -translate-y-1 duration-150 ease-in');
            $(this).attr('aria-expanded', 'false');
        } else {
            $flyoutMenu.removeClass('opacity-0 -translate-y-1 duration-150 ease-in')
                       .addClass('opacity-100 translate-y-0 duration-200 ease-out');
            $(this).attr('aria-expanded', 'true');
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#solutions-button, #flyout-menu').length) {
            var $flyoutMenu = $('#flyout-menu');
            if ($flyoutMenu.hasClass('opacity-100')) {
                $flyoutMenu.removeClass('opacity-100 translate-y-0 duration-200 ease-out')
                           .addClass('opacity-0 -translate-y-1 duration-150 ease-in');
                $('#solutions-button').attr('aria-expanded', 'false');
            }
        }
    });
});
