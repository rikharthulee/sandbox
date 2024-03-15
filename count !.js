// Description:
// Convert the continuous exclamation marks or question marks to a digit, Use all the digits to form a number. If this number is a prime number, return it. If not, divide this number by the smallest factor that it is greater than 1, until it becomes a prime number.

// You can assume that all test results are greater than 1 and the length of a continuous substring(! or ?) is always less than 10.

//Initialize variables to keep track of the current character being processed, the count of consecutive characters, and an array to store the counts of consecutive characters.
function convert(s) {
  let counts = [];
  let count = 1;

  // Iterate through the input string character by character.

  for (let i = 1; i < s.length; i++) {
    // If the current character is the same as the previous character, increment the count.
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      counts.push(count);
      count = 1;
    }
  }

  counts.push(count); // Push the final count

  return counts;
}

console.log(counts);
