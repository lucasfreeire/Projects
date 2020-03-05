var counter = 0;

while (10 > counter) {
    // Code to run per loop.
    counter = counter + 1;
    console.log(counter);

    // The ++ will add a 1 to the existing variable value;
    //counter++;

    // The -- will subtract a 1 to the existing variable value;
    //counter--;
}

// Inside the parentheses we have three parts: counter, condition, and code that changes the counter. The third part only runs after the code block.
for (var counter = 0; 10 > counter; counter = counter + 1) {
    console.log(counter);
}

var special = 1;

// Outer loop will run for 10 times, for each time we are executing another loop that will itself run 10 times.
for (var i = 0; i < 10; i++) {

    //The inner loop that will run once (ten times).
    for (var e = 0; e < 10; e++) {
        console.log("running! " + special);
        special++;
    }

}


for (var i = 0; i <= 48; i = i + 1) {
    console.log("Loop #" + i);
    
    if (i % 2 == 0) {
        console.log(i);
    } else {
        continue;
    }
    
}


