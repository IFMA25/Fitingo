/*----------------MENU------------------------*/
'use strict'
const menuIcon = document.querySelector('.menu-icon');
const containerNavigation = document.querySelector('.header__nav');
if (menuIcon){
    menuIcon.addEventListener("click", function(e){
        document.body.classList.toggle('body--lock');
        menuIcon.classList.toggle('menu-icon--open');
        containerNavigation.classList.toggle('header__nav--open');
    });

}
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){
        containerNavigation.classList.remove('header__nav--open');
        menuIcon.classList.remove('menu-icon--open');
        document.body.classList.remove('body--lock');
    }
});



/*-----------SWIPER SLIDER---------------------*/
new Swiper('.slide-card',{
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 21,
    breakpoints:{
      380:{
        slidesPerView: 'auto',
        spaceBetween: 32,
      }

    }
});
