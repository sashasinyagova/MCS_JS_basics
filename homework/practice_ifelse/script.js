console.log('You are at '+window.location);

let number = prompt("Enter a number");
number = parseInt(number);

if(number > 0) {
	console.log(number);
}else if(number < 0) {
	console.log(-(number));
}else {
	console.log(0);
}