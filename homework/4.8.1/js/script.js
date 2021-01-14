
function haveEnough () {
    let totalCash = +prompt('Your cash');
	let watchesCount = +prompt('How many watches do you want?');
	let earringsCount = +prompt('How many earrings do you want?');
	let price = +prompt('Price of items');
	let watchesSum = watchesCount*price;
	let earringsSum = earringsCount*price;

	if (totalCash >= watchesSum+earringsSum) {
		console.log('Enough $$$');
	} else {
		console.log('Not enough $$$');
	}
}

haveEnough();



	

