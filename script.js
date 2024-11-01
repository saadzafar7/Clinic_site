// JavaScript for responsive navbar toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('#mobileMenu');

    navbarToggler.addEventListener('click', function() {
        mobileMenu.classList.toggle('show'); // Toggle 'show' class
    });
});
