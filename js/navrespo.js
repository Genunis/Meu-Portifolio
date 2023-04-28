// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.links-container');
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const nav_container = document.querySelector('.nav-container');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
  logo.classList.toggle('active');
  nav_container.classList.toggle('active');
  if(document.body.style.overflow == 'hidden'){
        document.body.style.overflow = 'auto';
  }else{
    document.body.style.overflow = 'hidden';
  }
});

const navLinks = document.querySelectorAll('.links-container a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    menu.classList.remove('active');
    navbar.classList.remove('active');
    logo.classList.remove('active');
    nav_container.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});
