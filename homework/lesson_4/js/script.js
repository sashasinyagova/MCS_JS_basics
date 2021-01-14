const button = document.querySelector('button');
const popup = document.querySelector('.popup');
const closepopup = document.querySelector('.closePopup');

button.addEventListener('click', ()=>{
		popup.style.display = 'flex';
	})

closepopup.addEventListener('click', ()=>{
		popup.style.display = 'none';
	})

const openmenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closemenu = document.querySelector('.closeMenu');

openmenu.addEventListener('click', ()=>{
		menu.style.left = '0';
	})

closemenu.addEventListener('click', ()=>{
		menu.style.left = '-50vw';
	})