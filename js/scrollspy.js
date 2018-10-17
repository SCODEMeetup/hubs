$(function() {
    $(window).on('activate.bs.scrollspy',
        function() {
            var hash = $('.site-nav')
                .find('a.active')
                .attr('href');

            if (hash !== '#page-hero') {
                $('header nav').addClass('inbody');
            } else {
                $('header nav').removeClass('inbody');
            }
        });
    });