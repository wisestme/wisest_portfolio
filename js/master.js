let i = 0;
let text = 'Teacher + Web Developer @ FMVR';
let j = 0;
let text2 = 'I also freelance';
let speed = 50;

let textSpace = document.getElementById('auto');

function autoType() {
  if (i < text.length) {
    textSpace.innerHTML += text.charAt(i);
    i++;
    setTimeout(autoType, speed);
  } else if (i === text.length) {
    autoType2();
  }
}

autoType();
// document.addEventListener('DOMContentLoaded', function() {
//     autoType();
//     //autoDelete();
//
// }, false);

let textSpace2 = document.getElementById('auto2');

function autoType2() {
  if (j < text2.length) {
    textSpace2.innerHTML += text2.charAt(j);
    j++;
    setTimeout(autoType2, speed);
  }
}

// Hamburger menu function
let headerNav = document.querySelector('.header-nav');
function toggleNavClass() {
  headerNav.classList.toggle('hide');
}

let hamburger = document.querySelector('.fa-hamburger');
hamburger.addEventListener('click', toggleNavClass);
