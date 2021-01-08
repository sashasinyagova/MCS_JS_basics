console.log('You are at '+window.location)

const Colored = document.querySelector('.colored');
console.log(Colored);

console.log(Colored.style);

let quest = prompt('Which color do you want?');
//Colored.style.backgroundColor = "yellow";
Colored.style['background-color'] = quest;