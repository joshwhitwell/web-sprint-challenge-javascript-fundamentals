// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/*
The function nestedFunction() is able to access the variable internal using "closure". Closure occurs when a function reaches outside of its own functional scope to access the functional scope of a parent function. In this case, nestedFunction is a child function of myFunction, which means that it has access to the lexical scope of myFunction using closure. The reverse is not true, i.e. myFunction would be unable to access internal if internal was declared in the scope of nestedFunction.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  let counter = 0;
    for (let i = 0; i < number; i++){
      counter += (i+1);
    }
    return counter;
}

console.log(summation(4));