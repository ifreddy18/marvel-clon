var menuBtn = document.querySelector('.menu-icon');
var menu = document.querySelector('.menu-mobile');
var closeBtn = document.querySelector('.close-icon');

menuBtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());


function openMenu() {
    console.log('Abrir menu');
    menu.classList.add('active');
}

function closeMenu() {
    console.log('Cerrar menu');
    menu.classList.remove('active');
}
