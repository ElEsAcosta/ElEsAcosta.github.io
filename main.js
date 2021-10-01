document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('mostrar')
});

ScrollReveal().reveal('.banner');
ScrollReveal().reveal('.tarjetas_proyectos', {delay: 500});
ScrollReveal().reveal('.banner_2',{delay: 500});