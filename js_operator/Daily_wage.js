
	
	// Daily wage of work is determined by hours  worker.........
	
const prompt = require('prompt-sync')();

let H = prompt("Enter the  daily hours: ");
let R = prompt("Enter the rate: ");

let D =  H*R;
console.log("Display the daily wage:",D);
