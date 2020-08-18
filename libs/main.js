$(document).ready(function () {
    const burger  = $('.header-burger, .button-nav-close'),
        body      = $('body'),
        overlay   = $('.overlay')

        body.addClass('onloader');

    var loader = setTimeout(function () {
        $('.loader').fadeOut(599);
        body.removeClass('onloader');

        clearTimeout(loader)
    }, 2500)
    
    burger.click(() => {
        $(this).toggleClass('burger-active')

        body.toggleClass('state-nav')
    })

    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 70
    });

    // фоновая подложка
    overlay
        .click(() => {
            body.removeClass('state-nav')
        })
    
    $('.header-nav-link, .header-nav-btn').click(evt => {
        body.removeClass('state-nav')
    })

    $(window).scroll(evt => {
        var st = $(this).scrollTop();

        if (st >= 100) {
            $('.header').addClass('header-active')
        } else {
            $('.header').removeClass('header-active')
        }
    })
})