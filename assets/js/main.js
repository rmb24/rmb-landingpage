/* Menu show and hidden */
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/* Menu show */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/* Mouse move */
document.addEventListener('mousemove', move)
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/* GSAP ANIMATION */
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay: 2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2})

gsap.from('.home__title', {opacity: 0, duration: 1, delay: 1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay: 1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay: 2, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay: 1.3, y: 30})