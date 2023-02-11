const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    sideMenu.classList.add('show');
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    sideMenu.classList.remove('show');
    showMenu = false;
  }
}