import '../src/scss/styles.scss';
import '../src/assets/images/spurs-favicon.png';
// import '../src/scripts/instafeed.min.js';
// let Instafeed = require("instafeed");

// Instagram feed
// var userFeed = new Instafeed({
//   get: 'user',
//   clientId: 6917635878,
//   accessToken: '6917635878.1677ed0.f7f3b63faeeb4689af3c54d0c4301f2d'
// });
// userFeed.run();

function navStick() {
  const navOffset = 200;
  const nav = document.querySelector("#nav");
  if (window.pageYOffset >= navOffset) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

document.addEventListener('scroll', navStick);

function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop - 55
  });
  console.log(element);
}

const about = document.querySelector('.about');
const aboutDiv  =document.querySelector('#about');
const matches = document.querySelector('.matches');
const matchesDiv = document.querySelector('#matches');
const gallery = document.querySelector('.gallery');
const galleryDiv = document.querySelector('#gallery');

about.addEventListener('click', () => scrollIt(aboutDiv));
matches.addEventListener('click', () => scrollIt(matchesDiv));
gallery.addEventListener('click', () => scrollIt(galleryDiv));