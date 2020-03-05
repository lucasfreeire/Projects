

function pyramidBuilder(height) {

    var pyramidHeight;

    if(height == undefined) {
        var randomNumber = (Math.random() * 20) + 1;
        pyramidHeight= Math.floor(randomNumber);
    } else {
        pyramidHeight = height;
    }

var randomNumber = (Math.random() * 20) + 1;
randomNumber = Math.floor(randomNumber);

var pyramidRow = "";
var pyramidHeight = randomNumber;

console.log(pyramidRow);


for (var i = 0; i < pyramidHeight; i++) {
    pyramidRow = pyramidRow + "*";
    console.log(pyramidRow);
}

var pyramidArray = pyramidRow.split("");

for (var i = 0; i < pyramidHeight - 1; i++) {
pyramidArray.pop();
pyramidRow = pyramidArray.join("");
console.log(pyramidRow);
}

}

//Gets an array built by process.argv and stores in arguments variable.
var arguments = process.argv;
console.log(arguments);
//We grab the 3rd item from the arguments array and store it in height.
var height = arguments[2];

//We grab the 4th item from arguments array and convert it to a number and then store in loops.
var loops = parseInt( arguments[3] );

// Take  value of height, convert into a number, put it back into height.
height = parseInt(height);
console.log(height);

// we loop for the amount of loops, and run pyramidBuilder with the approriate height value.
for (var i = 0; i < loops; i++) {
pyramidBuilder(height); 

}
