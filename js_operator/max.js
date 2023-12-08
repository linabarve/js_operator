

	// Maximum between 3 number...........
	
const prompt = require('prompt-sync')();

let a = prompt();
let b = prompt();
let c = prompt();
let m;

if (a > b){
	 m = a
}
else
{
	 m = b
}
if (m > c){
	console.log("it is max:",m)
}
else
{
	console.log("it is max:",c)
}

