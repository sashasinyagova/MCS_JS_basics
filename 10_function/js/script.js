console.log('You are at '+window.location);

function sayHi() {
	return 'Hi, student!';
	//console.log('Hi, student');
}

document.body.innerHTML = sayHi();

function sayName(name) {
	return 'Hi '+ name;
}

console.log(sayName('Sasha'));