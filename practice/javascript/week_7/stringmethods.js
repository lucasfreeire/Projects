//Manually replace the question mark.

var myString = "Hello there how are you?";

console.log(myString.length);

var myStringArray = myString.split(" ");

console.log(myStringArray);

myStringArray[23] = ".";

console.log(myStringArray);

myStringArray.pop();
myStringArray.pop();
myStringArray.shift();
myStringArray.shift();

var finishedString = myString.join("");

console.log(finishedString);


