(function($){
    $(function(){
        $('.sidenav').sidenav();
    });
    $(window).bind('scroll', function() {
        console.log($('.yellow').height());
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > $('.yellow').height()) {
            $('nav').addClass('fixed-on-top');
        }
        else {
            $('nav').removeClass('fixed-on-top');
        }
    });
})(jQuery);
