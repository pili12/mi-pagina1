document.querySelector('.menu-btn').addEventListener('click', ()=> { 
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase', {delay: 500});