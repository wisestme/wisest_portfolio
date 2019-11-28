

// Hamburger menu function
let headerNav = document.querySelector('.header-nav');
function toggleNavClass() {
  headerNav.classList.toggle('hide');
}

let hamburger = document.querySelector('.fa-hamburger');
hamburger.addEventListener('click', toggleNavClass);
