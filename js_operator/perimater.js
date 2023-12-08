
	// Rectangle and check whether its area is greater or parimeter....



const prompt = require('prompt-sync')();

let l = parseFloat(prompt('Enter the length:'));
let b = parseFloat(prompt('Enter the width:'));

let a = l * b;
let p = 2 * (l + b);

if (a > p) {
    console.log('Area is greater:', a);
} else if (a === p) {
    console.log('Both area and perimeter are equal:', a);
} else {
    console.log('Perimeter is greater:', p);
}

