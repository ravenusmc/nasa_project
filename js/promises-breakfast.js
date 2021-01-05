
const order = false;
const breakfastPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (order) {
			resolve('Order is ready');
		}else {
			reject( Error('Oh NO!!!! PROBLEM!!!'));
		}
		// resolve('Your order is ready!');

	}, 2000)
});

console.log(breakfastPromise)
breakfastPromise
	.then( val => console.log(val) )
	.catch( err => console.log(err))
