// Instagram feed
var userFeed = new Instafeed({
  get: 'user',
  userId: 6917635878,
  accessToken: '6917635878.1677ed0.f7f3b63faeeb4689af3c54d0c4301f2d'
});
userFeed.run();

// Stick nav on scroll
// When the user scrolls the page, execute myFunction 
function sticky() {
  // Get the navbar
  let navbar = document.querySelector("#nav");
  // Get the offset position of the navbar
  const offSet =  200;

  window.onscroll = function() {stickIt(offSet, navbar)};
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickIt(sticky, nav) {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}

document.addEventListener('scroll', sticky);