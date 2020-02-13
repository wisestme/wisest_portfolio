// Get hold of UI elements
let hamMenu = document.querySelector('.fa-hamburger');
let modal = document.querySelector('.modal-wrapper');
let closeIcon = document.querySelector('.fa-cross');


// Show modal, hide hamburger
hamMenu.addEventListener('click', function() {
modal.classList.remove('toggle-hide');
hamMenu.style.display = 'none';
});

// Show modal, hide hamburger
closeIcon.addEventListener('click', function() {
modal.classList.add('toggle-hide');
hamMenu.style.display = 'block';
});