

	// Display the monument of that city.............



const prompt = require('prompt-sync')();

let city = prompt('Enter the city:');

if (city === 'delhi') {
    console.log('Red Fort');
}
else if (city === 'agra') {
    console.log('Taj Mahal');
}
else if (city === 'jaipur') {
    console.log('Jal Mahal');
}
else {
    console.log('Invalid');
}

