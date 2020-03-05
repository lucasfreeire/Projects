// If-Else Statments 
//if (condition){}


if (true) {

    console.log("This code ran if the if statement was true.");
}

console.log("End of script");

var age = 14;

if (age>=21){
    console.log("Congratz, go get a drunk!");
}

var password = 123456;
if (password == "abdcef"){

    console.log ("welcome to your profile");
}

var isSleepy = true;
if (isSleepy = true) {
    console.log("go home sleep");
}

var test = "1000";
if( test=1000 ) {
    console.log("test!");
}

//Type coercion: Forces a datatype to be another datatype.
//The follow allow type coercion: == >= <= !=

//These do not allow type coercion: === >== <== !==


//_______________If and Else parts________________

 sayHello = true;

if (sayHello) {
    console.log("hello");
} else {
    console.log("goodbye")
}

//Truthy and Falsy values.
//If a variable is holding any of the following it will become a false boolean:

/*
LIST OF MOST COMMON FALSYS  
undefined 
null
0
""
NaN

LIST OF MOST COMMON TRUTHYS 
ANYTHING ELSE
"0"
-1

*/

var checkIfTrue = "0";
if (checkIfTrue) {
    console.log("The" + checkIfTrue + "value is truthy");
} else {
    console.log("the" + checkIfTrue + "value is falsy.");
}

//Logical Operators: &&, ||, ! 
/*
&& = both side must be true.
|| = either side must be true.
! =  opposite of the current boolen (if true, it becomes false. If false, it becomes true).

*/

var firstBool = true;
var secondBool= false;

if(firstBool && secondBool) {
    console.log("This has runned because the condition is true.");

}

if (firstBool||secondBool) {
    // do something;
}

var level = 25;

if (level > 0 && level < 18 ) {
    console.log("You are child");
} else if (level < 0) {
    console.log("You are not born yet");
} else if (level >=18 && level < 112) {
    console.log("You are an adult");
} else {
    console.log("Thank you for living, come again next time.");
}

/*
'if' always comes first. 
Only one 'if' per if statement.
'Else if' must bome after if. 'Else if' is optional.
'Else' must come last. 'else' is optional. 
Only one 'else' per if statement.

 */

 //______Multiple Logical Operators 

 //All && go first, then || .
 // if equal, then left to right. 

 if (true && false || true && false){
     
 }