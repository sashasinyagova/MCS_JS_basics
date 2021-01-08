const body = document.querySelector('body');
console.log(body);

console.log(body.style);
body.style['background-color'] = "#696969";

const page = document.querySelector('.page');
console.log(page);

console.log(page.style);
page.style['color'] = "ghostwhite";

const name = document.querySelector('.name');
name.textContent = 'DJ Rashad';

const image = document.querySelector('img');
console.log(image.getAttribute('src'));
image.setAttribute('src', 'https://planet.mu/wp-content/uploads/2016/04/flg-rashad-1-650x433.jpg');
console.log(image.getAttribute('src'));

const bio = document.querySelector('.short-bio');
console.log(bio.className);
bio.className += ' animated';