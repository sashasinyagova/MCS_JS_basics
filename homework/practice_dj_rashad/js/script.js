const Body = document.querySelector('body');
console.log(Body);

console.log(Body.style);
Body.style['background-color'] = "#696969";

const Page = document.querySelector('.page');
console.log(Page);

console.log(Page.style);
Page.style['color'] = "ghostwhite";

const Name = document.querySelector('.name');
Name.textContent = 'DJ Rashad';

const image = document.querySelector('img');
console.log(image.getAttribute('src'));
image.setAttribute('src', 'https://planet.mu/wp-content/uploads/2016/04/flg-rashad-1-650x433.jpg');
console.log(image.getAttribute('src'));

const bio = document.querySelector('.short-bio');
console.log(bio.className);
bio.className += ' animated';