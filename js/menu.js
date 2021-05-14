var menuBtn = document.querySelector('.menu-icon');
var menu = document.querySelector('.menu-mobile-wrapper');
var closeBtn = document.querySelector('.close-icon');
var submenuWindow = document.querySelector('.submenu-mobile');
var submenu = document.querySelector('.submenu');
var body = document.querySelector('body');

menuBtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());

function openMenu() {
    body.classList.add('fixed');
    menu.classList.add('active');
}

function closeMenu() {
    body.classList.remove('fixed');
    menu.classList.remove('active');
}

function openSubmenu(index) {
    submenu.innerHTML = '';
    body.classList.add('fixed');
    menu.classList.add('fixed');
    submenuWindow.classList.add('active');
    let submenuName = index.toLowerCase();

    switch (submenuName) {
        case 'videos':
            submenu.innerHTML = smVideo;
            break;
        case 'characters':
            submenu.innerHTML = smCharacters;
            break;
        case 'comics':
            submenu.innerHTML = smComics;
            break;
        case 'movies':
        submenu.innerHTML = smMovies;
            break;
        case 'tv shows':
            submenu.innerHTML = smTvShows;
            break;
        case 'games':
            submenu.innerHTML = smGames;
            break;
        case 'news':
            submenu.innerHTML = smNews;
            break;
            
    }

}

function closeSubmenu() {
    body.classList.remove('fixed');
    menu.classList.remove('fixed');
    submenuWindow.classList.remove('active');
}

const smVideo = `
    <span class="list-item" onclick="closeSubmenu()">
        <a href="#" class="title">
            <span class="list-item-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16">
                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                </svg>
            </span>
            Videos
        </a>
    </span>
    <ul>
        <li><a class="list-item" href="https://www.marvel.com/watch/trailers-and-extras">Trailers & Extras</a></li>
        <li><a class="list-item" href="https://www.marvel.com/watch/digital-series">Digital Series</a></li>
        <li><a class="list-item" href="https://www.marvel.com/watch">All video</a></li>
    </ul>

    <div class="submenu-secondary">
        <div class="title-secondary">
            Our shows
        </div>
        <ul>
            <li><a class="list-item" href="https://www.marvel.com/watch/digital-series/earth-s-mightiest-show">Earth's mightiest show</a></li>
            <li><a class="list-item" href="https://www.marvel.com/watch/digital-series/this-week-in-marvel">this week in marvel</a></li>
            <li><a class="list-item" href="https://www.marvel.com/watch/digital-series/women-of-marvel">women of marvel</a></li>
        </ul>
    </div>
`;

const smCharacters = `
    <span class="list-item" onclick="closeSubmenu()">
        <a href="#" class="title">
            <span class="list-item-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16">
                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                </svg>
            </span>
            Characters
        </a>
    </span>
    <ul>
        <li><a class="list-item" href="https://www.marvel.com/characters">All characters</a></li>
        <li><a class="list-item" href="https://www.marvel.com/teams-and-groups">Team & groups</a></li>
        <li><a class="list-item" href="https://www.marvel.com/explore">Explore all</a></li>
    </ul>
`;

const smComics = `
    <span class="list-item" onclick="closeSubmenu()">
        <a href="#" class="title">
            <span class="list-item-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16">
                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                </svg>
            </span>
            Comics
        </a>
    </span>
    <ul>
        <li><a class="list-item" href="https://www.marvel.com/comics/calendar">Release calendar</a></li>
        <li><a class="list-item" href="https://www.marvel.com/comics/unlimited">Marvel unlimited</a></li>
        <li><a class="list-item" href="https://www.marvel.com/marvel-comicstore">Shop digital comics</a></li>
        <li><a class="list-item" href="https://www.marvel.com/comics/discover">Reading list</a></li>
        <li><a class="list-item" href="https://subscriptions.marvel.com">Print subscripions</a></li>
        <li><a class="list-item" href="https://www.marvel.com/comics>All comics</a></li>
    </ul>

    <div class="submenu-secondary">
        <div class="title-secondary">
            Browse by
        </div>
        <ul>
            <li><a class="list-item" href="https://www.marvel.com/comics/series">Series</a></li>
            <li><a class="list-item" href="https://www.marvel.com/comics/characters"">Character</a></li>
            <li><a class="list-item" href="https://www.marvel.com/comics/creators">Creator</a></li>
            <li><a class="list-item" href="https://www.marvel.com/comics/events_crossovers">Event</a></li>
        </ul>
    </div>
`;

const smMovies = `
    <span class="list-item" onclick="closeSubmenu()">
        <a href="#" class="title">
            <span class="list-item-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16">
                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                </svg>
            </span>
            Movies
        </a>
    </span>
    <ul>
        <li><a class="list-item" href="https://www.marvel.com/movies/black-widow">Black widow</a></li>
        <li><a class="list-item" href="https://www.marvel.com/movies/shang-chi-and-the-legend-of-the-ten-rings">Shang-chi and the legend of the ten rings</a></li>
        <li><a class="list-item" href="https://www.marvel.com/movies/the-eternals">Eternals</a></li>
        <li><a class="list-item" href="https://www.marvel.com/movies">See all movies</a></li>
        <li><a class="list-item" href="https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-DropdownNav-Marvel_DisneyPlus_DropdownNav_Movies_Evergreen-NA">Disney+</a></li>
    </ul>
`;

const smTvShows = `
    <span class="list-item" onclick="closeSubmenu()">
        <a href="#" class="title">
            <span class="list-item-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16">
                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                </svg>
            </span>
            TV Shows
        </a>
    </span>
    <ul>
        <li><a class="list-item" href="https://www.marvel.com/tv-shows/the-falcon-and-the-winter-soldier/1">The falcon and the winter soldier</a></li>
        <li><a class="list-item" href="https://www.marvel.com/tv-shows/marvel-studios-assembled/1">Marvel studios: assembled</a></li>
        <li><a class="list-item" href="https://www.marvel.com/tv-shows/marvels-modok">Marvel's M.O.D.O.K.</a></li>
        <li><a class="list-item" href="https://www.marvel.com/tv-shows/marvels-modo">See all tv shows</a></li>
        <li><a class="list-item" href="https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-DropdownNav-Marvel_DisneyPlus_DropdownNav_Movies_Evergreen-NA">Disney+</a></li>
    </ul>
`;

const smGames = `
    <span class="list-item" onclick="closeSubmenu()">
        <a href="#" class="title">
            <span class="list-item-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16">
                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                </svg>
            </span>
            Games
        </a>
    </span>
    <ul>
        <li><a class="list-item" href="https://www.marvel.com/games/marvel-s-spider-man-miles-morales">Marvel's Spider-Man: Miles Morales</a></li>
        <li><a class="list-item" href="https://www.marvel.com/games/marvel-s-avengers">Marvel's Avengers</a></li>
        <li><a class="list-item" href="https://www.marvel.com/games/marvel-realm-of-champions">MARVEL Realm of Champions</a></li>
        <li><a class="list-item" href="https://www.marvel.com/games">See all Games</a></li>
    </ul>
`;

const smNews = `
    <span class="list-item" onclick="closeSubmenu()">
        <a href="#" class="title">
            <span class="list-item-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16">
                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                </svg>
            </span>
            News
        </a>
    </span>
    <ul>
        <li><a class="list-item" href="https://www.marvel.com/latestnews">Latest News</a></li>
        <li><a class="list-item" href="https://www.marvel.com/articles">All News</a></li>
    </ul>

    <div class="submenu-secondary">
        <div class="title-secondary">
            Browse by
        </div>
        <ul>
            <li><a class="list-item" href="https://www.marvel.com/articles#promo-2">Movies</a></li>
            <li><a class="list-item" href="https://www.marvel.com/articles#promo-4">Comics</a></li>
            <li><a class="list-item" href="https://www.marvel.com/articles#promo-6">TV Shows</a></li>
            <li><a class="list-item" href="https://www.marvel.com/articles#promo-8">Games</a></li>
            <li><a class="list-item" href="https://www.marvel.com/articles#promo-10">Digital Series</a></li>
            <li><a class="list-item" href="https://www.marvel.com/articles#promo-12">Culture & Lifestyle</a></li>
            <li><a class="list-item" href="https://www.marvel.com/articles#promo-14">Podcasts</a></li>
        </ul>
    </div>
`;
