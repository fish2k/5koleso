$(document).ready(function () {
    const burger  = $('.header-burger'),
        body      = $('body'),
        overlay   = $('.overlay')

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
    
    $('.header-nav-link').click(evt => {
        body.removeClass('state-nav')
    })

    
})