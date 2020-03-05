var employeeSalaries = [100000, 10000, 1000000, 55000, 75000, 24000, 32000, 40000, 29500, 72000]; 

//Update all of these values so we add a 5% bonus if they make less than 50000, or 2.5% if they make more than 50000. 


//For each item in the employeeSalaries array...
for (var i = 0; i < employeeSalaries.length; i++) {

    //...console log the individual value...
    console.log(employeeSalaries[i]);

//...assign this value to the salary variable.
var salary = employeeSalaries [i];

//Test the salary variable to see whether its above or below 50000.
if (salary < 50000) {

    console.log("Old salary: " + salary);
    employeeSalaries[0] = salary + (salary * 0.05);
    console.log("New salary: " + salary);

    //Update the value.
    employeeSalaries[i] = salary;

} else {
    console.log("Old salary: " + salary);
    employeeSalaries[0] = salary + (salary * 0.025);
    console.log("New salary: " + salary);

    employeeSalaries = salary;
}

}

//____________ANOTHER WAY _______________



console.log(employeeSalaries);


function salaryBonus(salary, bonus) {

    var actualBonus = salary * bonus; 

    var NewSalary = salary + actualBonus; 

    return NewSalary; 

}

var test = salaryBonus(10000, .10);


