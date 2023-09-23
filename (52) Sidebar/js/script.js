const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const close = document.querySelector('.close');
const navOverlay = document.querySelector('.nav-overlay');



navToggle.addEventListener('click', () => {
    navShow();
});


close.addEventListener('click', () => {
    navHide();
});

navOverlay.addEventListener('click', () => {
    navHide();
});



function navShow() {
    navOverlay.style.transition = " all .5s ease";
    navOverlay.classList.add('open');
    nav.classList.add('open');
    nav.style.transition = " all .3s ease .5s";
}

function navHide() {
    nav.style.transition = " all .5s ease";
    nav.classList.remove('open');
    navOverlay.style.transition = " all .3s ease .5s";
    navOverlay.classList.remove('open');
}






