var arguments = process.argv;

console.log("Contents of process.argv:", arguments);





function wordCount (testText){

var textArray = testText.split(' ');
console.log(textArray); 
console.log("The text: `" + testText + "has a total of " + textArray.length + "word(s) in it.`");

}

var textToTest = process.argv[2]; 

wordCount(textToTest);
