var myFirstVar = 1000;

var yearsLeft = 1000;

//Units in meters
var buildingHeightMeters = 100;

var humanAge = 16;

var humanAgeDays = 5840;


//Bad Name.
var x = "Super Important";

//Equal sign, everything on the right side always happens first.
var sum = 1000 + 50;

var product = 50 * 50;

var dividend = 20 / 10;

var difference = 100 - 10;

var total = product + sum;

console.log(total);
//Result = 2500 + 1050 = 3550


//Looked at the built-in Math library of JavaScript.
var radius = 40;
var diameterOfCircle = 2 * radius;
var perimeterOfCircle = Math.PI * diameterOfCircle;

console.log("The diameter of the circle with a radius of " + radius +"is "+ diameterOfCircle + ". The perimeter of the circle is " + perimeterOfCircle);


//Rounds to the nearest whole number.
var rounded = Math.round(3.14);

console.log(rounded);

//Round up
var roundedUp = Math.ceil(45.1);

//Round down
var roundedDown = Math.floor(45.9);

//Math.random() returns a value between 0 and .9infinity
//We add a 1 so minimum is now 1, and we multiply 1000 so maximum is 1000.9
var someNumber = ( Math.random() * 10 ) + 1;

var roundedRandomNumber = Math.floor(someNumber);
//or use the existing variable:
//someNumber = Math.floor(someNumber);

console.log(rondedRandomNumber);


var variable1 = "10", variable2 = 100, variable3 = true;

console.log(variable2);


//Calling before Definig

console.log(howAreYou);
var howAreYou = "Hello";

//You will get undefined

//We reassign the howAreYou value to 100, then we call howAreYou for it`s value and assign that to coolVariable.

var coolVariable = howAreYOU = 100;
console.log(coolVariable);
//The result is gonna be 100.








