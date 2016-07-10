var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var numberF;
for (var i = 0; i < 10; ++i) {
	var number = numbers[i];
	var filtered = number.filter( function evenNumbers (number) {  
       return number % 2 === 0;  
 	});
 	numberF[i] = filtered;

};

console.log(numberF);