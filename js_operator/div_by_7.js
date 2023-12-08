	
	
	//  divisible by 7 or not....................
	
const prompt = require('prompt-sync')();

let n = prompt('enter the input');

if (n % 7 == 0){
	console.log(n,"is divisible by 7")
}
else
{
	console.log(n,"is not divisible by 7")
}
