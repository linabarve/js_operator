
	// calculator depending upon the operator enterd by user.....

const prompt = require('prompt-sync')();	
let a = Number(prompt("enter the value:"));
let b = Number(prompt("enter the value:"));
let c = prompt("enter the operator:")

if(c === '+')
{
	console.log(a+b)
}
else if(c  === '-')
{
	console.log(a-b)
}
else if(c === '*')
{
	console.log(a*b)
}
else if(c === '/')
{
	console.log(a/b)
}
else
{
	console.log("invalid")
}
	
	
