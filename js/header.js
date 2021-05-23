var header = document.querySelector('.header-container');

window.onscroll = () => {

    // let window
    let currentScrollPos = window.pageYOffset;
    let headerHeight = 52;

    if (window.innerWidth >= 839) {
        headerHeight = 92;
    }

    if (currentScrollPos >= headerHeight) {
        header.classList.add('hide-on-scroll');
    } else {
        header.classList.remove('hide-on-scroll');
    }

};