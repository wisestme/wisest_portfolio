// Check Service Workers support
if('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
		.register('../cache.js')
		.then(reg => console.log('Service Worker: Registered'))
		.catch(err => console.log(`Service Worker: Error: ${err}`));
	})
}

// Get hold of UI elements
let hamMenu = document.querySelector('.fa-hamburger');
let modal = document.querySelector('.modal-wrapper');
let closeIcon = document.querySelector('.fa-cross');
let modalContact = document.querySelector('.modal_contact');

// Show modal, hide hamburger
hamMenu.addEventListener('click', function() {
//modal.classList.remove('toggle-hide');
modal.style.width = '100vw';
modal.style.right = '0';

hamMenu.style.display = 'none';
});


function closeModal () {
	hamMenu.style.display = 'block';
	modal.style.width = '0';
	modal.style.right = '-40px';
}

// Show modal, hide hamburger on click
closeIcon.addEventListener('click', closeModal);

// go to contact form from modal
modalContact.addEventListener('click', closeModal);