// Menu
let menuButton = document.getElementById('menu-button');
let nav = document.getElementById('nav');

if (menuButton) {
    menuButton.addEventListener('click', function(e) {
        nav.classList.toggle('show');
    });
}
// mobile menu
var headerMobile = document.querySelector('#headerMobile');
var header = document.querySelector('.header');
var mobileBurger = document.querySelector('.header-mobile__burger');
var headerMobileClose = document.querySelector('.header-mobile__close');

mobileBurger.addEventListener('click', function() {
    document.body.classList.toggle('hidden');
    headerMobile.classList.toggle('show');
    header.classList.add('full');
});

headerMobileClose.addEventListener('click', function(e) {
    document.body.classList.remove ('hidden');
    headerMobile.classList.remove('show');
    header.classList.remove('full');
});
