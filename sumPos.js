function positiveSum(arr) {
  // make a variable and assign an empty array to store the list of positive numbers
  const positiveNumbers = [];

  // make a for loop that runs as long as the arr is
  for (let i = 0; i < arr.length; i++) {
    // if the number in the list is equal to or more than 0, add it to the new array
    if (arr[i] >= 0) {
      positiveNumbers.push(arr[i]);
      console.log(
        "list of positive numbers (I'm in the loop) " + positiveNumbers
      ); //logs to the console on each loop
    }
  }

  // now we have an array of positive numbers - we need to add them together
  // create a variable to store the first number of the array
  let sum = 0;

  // create another loop to go through the even numbers array
  for (let i = 0; i < positiveNumbers.length; i++) {
    sum += positiveNumbers[i]; // adds the number to the right to the variable on the left
  }

  return sum;
}

function positiveSum2(arr) {
  // variable for total
  let total = 0;
  // loop through the length of the given array
  for (i = 0; i < arr.length; i++) {
    // if number in the array > 0
    if (arr[i] > 0) {
      // add the number in the array to total
      total += arr[i];
    }
  }
  return total;
}

function positiveSum3(arr) {
  // variable for total
  let total = 0;
  // loop through the length of the given array
  for (i = 0; i < arr.length; i++) {
    // if number in the array is positive
    if (Math.sign(arr[i]) === 1) {
      // add the number in the array to total
      total += arr[i];
    }
  }
  return total;
}
