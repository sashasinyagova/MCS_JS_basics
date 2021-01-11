
function haveEnough (totalCash, watchesCount, earringsCount, price, watchesSum, earringsSum) {
    totalCash = +prompt('Your cash');
	watchesCount = +prompt('How many watches do you want?');
	earringsCount = +prompt('How many earrings do you want?');
	price = +prompt('Price of items');
	watchesSum = watchesCount*price;
	earringsSum = earringsCount*price;

	if (totalCash >= watchesSum+earringsSum) {
		console.log('Enough $$$');
	} else {
		console.log('Not enough $$$');
	}
}

haveEnough();



	

