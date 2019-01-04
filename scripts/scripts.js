// Instagram feed
var userFeed = new Instafeed({
  get: 'user',
  userId: 6917635878,
  accessToken: '6917635878.1677ed0.f7f3b63faeeb4689af3c54d0c4301f2d'
});
userFeed.run();

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