 
 	// sum of 3 number..............
 
 const prompt = require("prompt-sync")();
 /*
let n= prompt("Enter something")

if (n % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

*/

let p = prompt("Enter the value for p:");
let q = prompt("Enter the value for q:");
let r = prompt("Enter the value for r:");

// Convert strings to numbers
p = parseFloat(p);
q = parseFloat(q);
r = parseFloat(r);

let s = p + q + r;
console.log(s);

