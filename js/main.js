(function($){
    $(function(){
        $('.sidenav').sidenav();
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 210) {
            $('nav').addClass('fixed-on-top');
        }
        else {
            $('nav').removeClass('fixed-on-top');
        }
    });
    
})(jQuery);
