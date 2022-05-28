let header = document.querySelector('.bg__header'),
    headerH = document.querySelector('.bg__header').clientHeight;

document.onscroll = function () {
    let scroll = window.scrollY;

    if (scroll > headerH) {
        header.classList.add('fixed');
        
    } else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
    }
}

/******************************
*************БУРГЕР************
******************************/
$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, body , .header__menu__nav , .bg__header , .nav__menu , .button__to__top').toggleClass('open active');
    });

    $('.nav__menu').click(function(event) {
        $('.burger, body , .header__menu__nav , .bg__header , .nav__menu , .button__to__top').removeClass('open active');
    });
});

