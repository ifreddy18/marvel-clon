videoPlayer = document.querySelector('#player');
videoCard = document.querySelectorAll('.video-slider-card');
videoSlider = document.querySelector('.video-slider');
category = document.querySelector('#videoCategory');
title = document.querySelector('#videoTitle');
description = document.querySelector('#videoDescription');

const data = [
    {
        poster: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/ac26ff26-4ed2-433a-8d18-58618e607b51/a7a4adaf-e9f7-46db-b4f0-d64814e28b44/1280x720/match/image.jpg',
        src: 'blob:https://www.marvel.com/e5e0bcb2-c704-4754-b66e-4f1fd26e37f2',
        srcYT: 'https://www.youtube.com/embed/oYO7o1Z8gk4',
        category: 'Trailers & Extras',
        title: 'The Secret Behind Bucky\'s Arm!',
        description: 'Lorraine Cink talks with Eric Leven, VFX Supervisor on Marvel Studios\' The Falcon and The Winter Soldier, about the behind-the-scenes secrets of how Bucky\'s iconic metal arm is made.'
    },
    {
        poster: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/cad0d24b-877c-4605-b5a6-6d726a3125d2/32dcff0f-3704-4cb3-90a6-78b9c69e2865/1280x720/match/image.jpg',
        src: 'blob:https://www.marvel.com/9d7bd6a7-bb16-4cd4-89de-2df0ddc26f14',
        srcYT: 'https://www.youtube.com/embed/xwNz6azm1ZE',
        category: 'Trailers & Extras',
        title: 'X-Men: HELLFIRE GALA Trailer | Marvel Comics',
        description: 'Twelve titles. Twelve stories. One can\'t-miss crossover. This June, you\'re invited to the HELLFIRE GALA!'
    },
    {
        poster: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/c9eeb937-b24c-4350-b1d3-e1d833469fbb/bac82cf1-49a5-4b3f-bd5c-6cd87c4b2beb/1280x720/match/image.jpg',
        src: 'blob:https://www.marvel.com/edf8a17e-3159-44ef-8e2c-0ab334231e8e',
        srcYT: 'https://www.youtube.com/embed/XQ2ImdWPM-c',
        category: 'Trailers & Extras',
        title: 'VFX Secrets Behind Marvel Studios\' The Falcon and The Winter Soldier',
        description: 'Lorraine Cink talks with Eric Leven, VFX Supervisor of Marvel Studios\' the Falcon and The Winter Soldier, about some of the VFX magic behind the scenes that helped bring some of Sam Wilson\'s high-flying action scenes to life.'
    },
    {
        poster: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/ec680658-f2e5-4dfe-8cbc-3aa0f90f11a7/06c6c8c5-1734-46d4-9ac3-576f80d08129/1280x720/match/image.jpg',
        src: 'blob:https://www.marvel.com/96cc097f-5c03-49c0-93ba-a40fe3dc6d4a',
        srcYT: 'https://www.youtube.com/embed/l-zsZA_nzSA',
        category: 'Trailers & Extras',
        title: 'Cable & Deadpool: Marvel\'s Oddest Odd Couple',
        description: 'Deadpool fans rejoice as you watch this iconic panel of 2000s Deadpool creators, Fabian Nicieza, Gail Simone, and Daniel Way!'
    },
    {
        poster: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/bf1701f8-7f63-4555-8494-f96cedb381c8/7604af28-92a3-49e7-845f-1ec0358af61d/1280x720/match/image.jpg',
        src: 'blob:https://www.marvel.com/5ab433e1-4c81-4d28-950d-39043e29da38',
        srcYT: 'https://www.youtube.com/embed/UJzsCGUp3Wc',
        category: 'Trailers & Extras',
        title: 'National Super Hero Day | Marvel Studios’ Black Widow',
        description: 'It\'s National Super Hero Day, and Natasha Romanoff will always be our hero. Experience the cinematic event, Marvel Studios’ “Black Widow,” in theaters and on Disney+ with Premiere Access July 9. Additional fee required.'
    },
    {
        poster: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/466465c0-209d-4593-9658-77f72ad47a2f/6dcb60d0-351b-44df-a62e-6e945a2da27f/1280x720/match/image.jpg',
        src: 'blob:https://www.marvel.com/8a3791a7-ccd6-4508-9f69-77dfe792a6d0',
        srcYT: 'https://www.youtube.com/embed/DGdINaQU8uM',
        category: 'Trailers & Extras',
        title: 'The Story Behind The Merc with the Mouth & Deadpool\'s First Ongoing Title!',
        description: 'Fabian Nicieza, Joe Kelly, and Ed McGuinness join Ryan \'Agent M\' Penagos to talk all things Deadpool in the 90s including the first use of "Merc with the Mouth", Deadpool\'s first ongoing title, and all the fourth-wall breaking moments!'
    },
    {
        poster: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/6277395c-a4ec-477f-84db-aab38e059906/5851034c-50e3-491e-9a48-56e1f2389af3/1280x720/match/image.jpg',
        src: 'blob:https://www.marvel.com/0fcb8321-12aa-4bcf-b93c-be7b49773cb7',
        srcYT: 'https://www.youtube.com/embed/Eo_PgoCIcik',
        category: 'Trailers & Extras',
        title: 'WOMEN OF MARVEL #1 Trailer | Marvel Comics',
        description: 'WHO RUN THE WORLD? YOU ALREADY KNOW. Celebrate the Women of Marvel with an extravaganza of extraordinary talent! WOMEN OF MARVEL #1 is on sale tomorrow! '
    },
    {
        poster: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/72487f2d-8658-449c-8fb5-f0b8b9f0650d/ec8460a4-b6e1-461d-a396-d905dccf72b4/1280x720/match/image.jpg',
        src: 'blob:https://www.marvel.com/a03435b7-925d-41c1-bd26-d95f84e4c63a',
        srcYT: 'https://www.youtube.com/embed/NDvWon53tVc',
        category: 'Ask Marvel',
        title: 'Wyatt Russell (John Walker) Answers YOUR Questions! | Ask Marvel',
        description: 'Watch Marvel Studio\'s The Falcon and The Winter Soldier streaming exclusively on Disney+.'
    }
];

setSliderSize();
selectVideo(0);

function selectVideo(index) {

    for (let i = 0; i < videoCard.length; i++) {
        videoCard[i].classList.remove('active'); 
    }

    videoCard[index].classList.add('active');

    // videoPlayer.poster = data[index].poster;
    // videoPlayer.src = data[index].src;
    videoPlayer.src = data[index].srcYT;
    category.innerText = data[index].category;
    title.innerText = data[index].title;
    description.innerText = data[index].description;


}

// Establecer tamaño slider
function setSliderSize() {
    if (window.innerWidth  > 839) {
        videoSlider.style.height = videoPlayer.offsetHeight; 
    }
}

window.onresize = () => setSliderSize();










