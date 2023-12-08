 const prompt = require('prompt-sync')();

let h = Number(prompt("Enter the number:"));
let m = Number(prompt("Enter the number:"));
let E = Number(prompt("Enter the number:"));
let S = Number(prompt("Enter the number:"));
let c = Number(prompt("Enter the number:"));

let t = h+m+E+S+c;

let per = t/500*100;
	console.log(per)

if (per >= 90){
	console.log("Grade A")
}
else if(per >= 80){
	console.log("Grade B")
}
else if(per >= 70){
	console.log("Grade C")
}
else if(per >= 60){
	console.log("Grade E")
}
else
{
	console.log("Grade F")
}

