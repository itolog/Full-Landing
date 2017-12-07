$(document).ready(() => {
    let screen = 0,
        container = $('.main'),
        page = $('.page'),
        inscroll = false;

    $('body').on('mousewheel', (event) => {
       page.children(0).addClass('scroll');
        if (!inscroll) {
            inscroll = true;
            if (event.deltaY > 0) {
                screen--;
                page.eq(screen).addClass('scroll').siblings().removeClass('scroll');
            } else {
                screen++;
                page.eq(screen).addClass('scroll').siblings().removeClass('scroll');
            }
        }
        if (screen > page.length -1 || screen < 1) {
            screen = 0;
            page.children(0).removeClass('scroll');
        }
        let position = (-screen * 100) + '%';
        container.css('top', position);
        // container.css('transform', 'translateY('+position+')');
        setTimeout(function() {
            inscroll = false;
        }, 1300);
    })
});
