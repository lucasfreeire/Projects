

function adder (num1, num2) {
    return num1 + num2;
}

console.log(  adder(100,"Tonny")  );

/*

1) 100 and Tony get sent tho the Adder function.
2) Adder function runs, and places 100 and Tony, into num1 and num2.
3) Before we can return a value, we need to add/concatenate. We call num1 and num2 for its variables, and then add/concatenate them together.
4) The return keyword says that we will returns this singe value back to whereever the function callde.
5) The adder function has returned "100 Tony" as a single string and is replaced by that value.
6)Because this value is inside of the console.log function.

*/


function taxCalculator(itemPrice) {

    var tax = itemPrice * .085;
    var taxedFixedToTwoDecimalPlaces = tax.toFixed(2);
    var taxNumber = parseInt(taxedFixedToTwoDecimalPlaces);

    return taxedFixedToTwoDecimalPlaces;

}

var laptopPrice = 999.95;
var laptopTax = taxCalculator(laptopPrice);

console.log("Price of item:" + laptopPrice + ". Tax on item: " + laptopTax + ". Total Cost: $" + (laptopPrice + laptopTax) + ".");




/*
Create a function called mathifier

This function will take two Numbers

Whith these two numbers, you will add them, then add the sum to the first number, and then multiply that by the second number. 

The function will return the result. 
*/

function mathifier(x, y) {

    var sum = x + y;

var result = ( (sum + x) *y );

return result;
}

console.log( mathifier(2,3) );


/*

This function will be called mathResults
This function takes only 2 numbers
This function will console.log Each of the following:

The sum 
The difference
The Product 
The Dividend
The leftovers (modulo)

Bonus: each console log will tell me what that number is about. 
*/

function mathResults(a,b) {
    var sum = a + b;
    console.log("The sum of these numbers is " + sum);
    var difference = a - b;
    console.log("The difference "+difference);
    var product = a * b;
    console.log("The product "+product);
    var dividend = a / b;
    console.log("The dividend "+ dividend);
    var leftovers = a % b;
    console.log("The leftover "+leftovers);
}

    console.log( mathResults(1,2) );
