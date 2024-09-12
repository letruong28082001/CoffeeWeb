$('.slide-show').slick({
    infinite: true,
    lazyLoad: 'ondemand',
    slidesToShow: 2.17,
    centerMode: true,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
          breakpoint: 818,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }
      ]
});
const menu = document.querySelector('.icon-menu');
const closed = document.querySelector('.icon-close');
const showMenuMobile = document.querySelector('.menu-mobile');
const headerMenu = document.querySelector('.header-menu');
menu.onclick = () => {
    headerMenu.style.display = 'none';
    showMenuMobile.style.display = 'block';
    showMenuMobile.style.animation = 'fadeIn liner 1.5s'
}
closed.onclick = (e) => {
    showMenuMobile.style.display = 'none';
    headerMenu.style.display = 'flex';
}
document.body.onresize = () => {
    if (window.innerWidth > 768) {
        showMenuMobile.style.display = 'none';
        headerMenu.style.display = 'none';
    } else {
        headerMenu.style.display = 'flex';
    }
}
