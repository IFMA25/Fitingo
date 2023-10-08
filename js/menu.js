'use strict'
const menuIcon = document.querySelector('.menu-icon');
const containerNavigation = document.querySelector('.header__nav');
if (menuIcon){
    menuIcon.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_open');
        containerNavigation.classList.toggle('_open');
    })

}




