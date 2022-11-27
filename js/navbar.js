let nav = document.querySelector('#navbar');
let navLinks = document.querySelector('#navbar .links__menuBar');
let btnCerrar = document.querySelector('#cerrarNavbar');
let btnAbrir = document.querySelector('#abrirNavbar');
let bg = document.querySelector('#backgroundNavbar');


bg.addEventListener('click', () => cerrarNavbar());
btnCerrar.addEventListener('click', () => cerrarNavbar());
btnAbrir.addEventListener('click', () => abrirMenu());

function cerrarNavbar(){
  nav.classList.add('menuBar--disable');
  navLinks.classList.add('desaparecer');
  btnCerrar.classList.add('desaparecer');
  btnAbrir.classList.remove('desaparecer');
  bg.style.display="none"
}

function abrirMenu(){
  nav.classList.remove('menuBar--disable');
  navLinks.classList.remove('desaparecer');
  btnCerrar.classList.remove('desaparecer');
  bg.classList.remove('desaparecer')
  btnAbrir.classList.add('desaparecer');
  bg.style.display="inline"
}