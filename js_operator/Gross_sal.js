

	// Basic sale of an employee and calculate its GS........
	

const prompt = require("prompt-sync")();

let b = Number(prompt("Enter the basic salary:")); 

if (b <= 10000) {
    let HRA = 0.2, DA = 0.8;
    let GS = b + HRA + DA;
    console.log("Gross salary:", GS);
} 
else if (b <= 20000) {
    let HRA = 0.25, DA = 0.9;
    let GS = b + HRA + DA;
    console.log("Gross salary:", GS);
} 
else if (b > 20000) {
    let HRA = 0.3, DA = 0.95;
    let GS = b + HRA + DA;
    console.log("Gross salary:", GS);
} 
else {
    console.log("No salary");
}

