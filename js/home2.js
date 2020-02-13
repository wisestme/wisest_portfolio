let hamMenu = document.querySelector('.fa-hamburger');
let modal = document.querySelector('.modal-wrapper');
hamMenu.addEventListener('click', function() {
modal.classList.remove('toggle-hide');
hamMenu.style.display = 'none';
});