console.log('You are at '+window.location);

let person = {
	name : "Sasha",
	surname : "Sinyagova",
	age : 26,
	teacher : false,
	sayHello : function() { return 'Hello ' + this.name}
}

console.log(person.name);
console.log(person.sayHello());

person.canCode = true;

console.log(person);

person.age = 25;
console.log(person);

console.log(person['surname']);