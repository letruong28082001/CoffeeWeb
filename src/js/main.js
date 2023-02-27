$('.slide-show').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2.2,
    slidesToScroll: 1
});

const pre = document.querySelector('#slick-pre');
const next = document.querySelector('#slick-next');
const slickPrev = document.querySelector('.slick-prev');
const slickNext = document.querySelector('.slick-next');

pre.onclick = ()=>{
    if(pre.checked === true){
        slickPrev.click();
    }
}

next.onclick = ()=>{
    if(next.checked === true){
        slickNext.click();
    }
}

const menu = document.querySelector('.icon-menu');
const mobile = document.querySelector('#mobile');
const overplay = document.querySelector('.overplay');
const close = document.querySelector('.icon-close');


console.log(menu);
menu.onclick = () => {
    mobile.style.display = 'block';
    overplay.style.display = 'block';
}

close.onclick = () => {
    mobile.style.display = 'none';
    overplay.style.display = 'none';
}