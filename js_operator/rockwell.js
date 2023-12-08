

	// Rockwell,corbone content,tensile...............
	
const prompt = require("prompt-sync")();
let R = prompt("enter the input:-")
let C = prompt("Enter the input:")
let T = prompt("enter the input:")

	
if (R > 50 && T > 5600 && C > 0.7)
{
    console.log("Grade: 10");
} else if (R > 50 && T > 5600) 
{
    console.log("Grade: 7");
} else if (R > 50 && C > 0.7)
{
    console.log("Grade: 9");
} else if (T > 5600 && C > 0.7)
{
    console.log("Grade: 8");
} else 
{
    console.log("Grade: 0");
}

		
