$(document).ready(function () {
    const burger  = $('.header-burger'),
        body      = $('body'),
        overlay   = $('.overlay')

    burger.click(() => {
        $(this).toggleClass('burger-active')

        body.toggleClass('state-nav')
    })

    // фоновая подложка
    overlay
        .click(() => {
            body.removeClass('state-nav')
        })
        
})