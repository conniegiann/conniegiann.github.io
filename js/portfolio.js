var hello = 'Hi, my name is Connie.'

$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: false
            });

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });    

    $(function() {
        var chars = 1,
            len = hello.length;

        var typewriter = window.setInterval(function() {
            $('#typewriter').text(hello.slice(0, chars));
            chars++;

            if (chars > len + 1) {
                clearInterval(typewriter);
            }
        }, 120);

    //    $('#typewriter').text(hello);
        

    });

});



