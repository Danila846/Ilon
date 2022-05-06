const body = document.querySelector('body');
const menu = document.querySelector('.header__burger');
const menuList = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const bg = document.querySelector('.header__bg');

menu.addEventListener('click', () => {
	body.classList.toggle('lock');
	menu.classList.toggle('active');
	logo.classList.toggle('active');
	logo.classList.toggle('noactive');
	bg.classList.toggle('active');
	bg.classList.toggle('noactive');
	menuList.classList.toggle('active');
	menuList.classList.toggle('noactive');
})