

	// leap year or not.................
	
const prompt = require('prompt-sync')();

let y = prompt("enter the number:")

if (y % 400 == 0 || y % 4 == 0){
	console.log("It is Leapyear")
}
else if(y % 100){
	console.log("Not leap year")
}

