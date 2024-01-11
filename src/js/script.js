// navbar fixed
const header = document.querySelector('header'),
navbar_fixed = header.offsetTop;
window.onscroll = function() {
    if (window.scrollY > navbar_fixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    };
};