// navbar fixed
const header = document.querySelector('header'),
navbar_fixed = header.offsetTop,
nav_links = document.querySelector('nav#navmenu');
window.onscroll = function() {
    if (window.scrollY > navbar_fixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    };
};

// hamborgir
const hamborgir = document.getElementById('hamborgir');
hamborgir.addEventListener('click', function() {
    hamborgir.classList.toggle('active');
    nav_links.classList.toggle('hidden');
});