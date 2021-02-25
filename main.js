const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');

burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    burger.classList.toggle('active');

    if (burger.classList.contains('active')) {
        burgerIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
    } else {
        burgerIcon.classList.remove('hide');
        closeIcon.classList.add('hide');
    };
});