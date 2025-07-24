// 1. Function Declaration (hoisted - can call before declaration)
sayHelloDeclaration(); // Works fine!

function sayHelloDeclaration() {
  console.log("Hello from function declaration!");
}

// 2. Function Expression (not hoisted - cannot call before assignment)
// Uncommenting the next line will cause an error:
// sayHelloExpression(); // Error: sayHelloExpression is not a function

const sayHelloExpression = function () {
  console.log("Hello from function expression!");
};

sayHelloExpression(); // Works fine after assignment

// 3. Arrow Function (also a function expression)
const sayHelloArrow = () => {
  console.log("Hello from arrow function!");
};

sayHelloArrow(); // Works fine

// 4. What happens with undefined variables
console.log(typeof notDefinedFunction); // "undefined"

// Trying to call an undefined function causes error:
// notDefinedFunction(); // Uncaught ReferenceError: notDefinedFunction is not defined

// 5. Calling a function expression variable before assignment
console.log(typeof sayHelloBeforeAssignment); // "undefined"

// sayHelloBeforeAssignment(); // Error: sayHelloBeforeAssignment is not a function

var sayHelloBeforeAssignment = function () {
  console.log("This won't run if called before this line.");
};

sayHelloBeforeAssignment(); // Works here after assignment
