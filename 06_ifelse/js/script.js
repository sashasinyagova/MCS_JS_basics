console.log('You are at '+window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("How old are you?");
answer = parseInt(answer);

if(answer<18) {
	Image.style.backgroundImage = "url(img/1.jpg)";
}else if(answer<=25) {
	Image.style.backgroundImage = "url(img/2.jpg)";
}else if(answer<=50) {
	Image.style.backgroundImage = "url(img/3.jpg)";
}else {
	Image.style.backgroundImage = "url(img/4.jpg)";
}