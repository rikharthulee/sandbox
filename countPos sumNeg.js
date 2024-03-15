// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

function countPositivesSumNegatives(input) {
  // If the input is an empty array or is null, return an empty array.  Need to check if it is null first.
  if (input === null || input.length === 0) {
    return [];
  }

  // Initialise variables positiveCount to count positive numbers and negativeSum to sum negative numbers.
  let positiveCount = 0;
  let negativeSum = 0;

  // Loop through the array and:
  for (i = 0; i < input.length; i++) {
    // If the number is positive, increment positiveCount by 1 each time.
    if (input[i] > 0) {
      positiveCount++;
    }
    // If the number is negative, add it to negativeSum.
    if (input[i] < 0) {
      negativeSum += input[i];
    }
  }
  // Return an array with positiveCount and negativeSum.
  return [positiveCount, negativeSum];
}
