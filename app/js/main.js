$(document).ready(() => {
  let screen = 0,
      container = $('.main'),
      page = $('.page'),
      inscroll = false,
      content = $('.content h1'),
      navUl = $('.nav__ul'),
      navItems = $('.nav__li');
///////////////////////////////////////////// Scroll Function
let onScroll = () => {
  $('body').on('mousewheel', (event) => {
    page.children(0).addClass('scroll');
     if (!inscroll) {
         inscroll = true;
         if (event.deltaY > 0) {
             screen--;
             page.eq(screen).addClass('scroll').siblings().removeClass('scroll');
             content.eq(screen).addClass('roo').siblings().removeClass('roo');
             navItems.eq(screen).addClass('active').siblings().removeClass('active');
         } else {
             screen++;
             page.eq(screen).addClass('scroll').siblings().removeClass('scroll');
             content.eq(screen).addClass('roo').siblings().removeClass('roo');
             navItems.eq(screen).addClass('active').siblings().removeClass('active');
         }
         
     }

     // Обнуление счетчика
     if (screen > page.length -1 || screen < 1) {
         screen = 0;
         page.children(0).removeClass('scroll');
        navItems.eq(0).addClass('active').siblings().removeClass('active');
     }
// /////////////////////////////////////////////////
     let position = (-screen * 100) + '%';
     container.css('top', position);
     // задержа скрола
     setTimeout(function() {
         inscroll = false;
     }, 1300);
 });
};
  //////////////////////////////////////////////  Scroll Function END
  //  CLICK 
  let onClick = () => {
    content.on('click', () => {
      $(this).hide();
    });
  }
  // CLICK END
  onScroll();
  onClick();
});
