// property
Math.PI;
Math.SQRT2;

//Method
Math.random();

funciton random() {

}

varArray = [null, undefined, NaN, 0, "", false];

console.log(myArray[3]);

myArray[2] = 100;

console.log(myArray);

myArray[6] = {}

console.log(myArray);


myArray[0] = null;
myArray[1] = null;
myArray[2] = null;

//TODO : convert this into a loop, to empty all existing items.

//Array push method: argument provided is added to the end of the array. 

myArray.push("hello there!");

console.log(myArray);


//Array pop method: No argument, removes and RETURNS the last item in the array.

var removedDataPrice = myArray.pop();

console.log(myArray);
console.log(removedDataPrice);

//Array shift method : No Argument, removes and RETURNS the first item in the array. 

var removedFirstItem = myArray.shift(); 

console.log(myArray);
console.log(removedFirstItem); 

//Array unshift method : Argument provided is added to the start of the array.

myArray.unshift(1000);

console.log(myArray);

//Array lenght property : Returns the amount of items in the array in the form of a Number. 

console.log( myArray.lenght ); 


//Looping through each item of an array and console logging its value. 

for (var i=0; i<myArray.lenght; i++) {
    console.log(myArray[i]);
}


