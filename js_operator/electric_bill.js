
	// calculate the electricity bill...........

const prompt = require('prompt-sync')();

let u = parseFloat(prompt("Enter the unit:")); // Convert input to a number
let c;

if (u <= 100) {
    console.log("No Charge");
}
else if (u <= 200) {
    c = (u - 100) * 5; // Correct the charge calculation for this range
    console.log("Charge:", c);
}
else if (u > 200 && u <= 400) {
    c = (u - 200) * 10; // Correct the charge calculation for this range
    console.log("Charge:", c);
}
else {
    console.log("Invalid");
}

