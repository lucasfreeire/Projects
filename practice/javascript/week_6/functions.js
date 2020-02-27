//Intro to Functions

//Exemple of functions 
//Console.log();

//Math.round();
//Math.floor();
//...




//A function that belongs to a class ("library") is called a "Method".
//A Variable that belongs to a class("library") is called a "Property".


//The Syntax Structure of a Function definition.

function nameOfFunction() {
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

nameOfFunction();

function sum10() {
    var x = 10;
    console.log(x+10);
}

sum10();

function dataTypePrinter() {
    console.log(3000);
    console.log("Hello World");
    console.log(false);

}

dataTypePrinter();

//Arguments and Parameters 

//"helo" is the argument 
console.log("hello \n", 100, true);

//text is the parameter (variable) that will accept any data that is given to this function.

function takeDataIn(text1, text2) {
    console.log(text1);
    console.log(text2);

}

takeDataIn("How are you doing?", "jesse");
takeDataIn("Goodbye", 1000);


function adder(number1, number2) {
    var sum = number1 + number2;
    console.log("The sum of" + number1 + "and" + number2 + "is" + sum);
}

adder(400, 30);
