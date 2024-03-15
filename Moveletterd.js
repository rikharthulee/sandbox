// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!

function gimmeTheLetters(sp) {
  // Determine the start and end characters of the range.
  // get the first letter from the string - done
  const firstLetter = sp[0];
  // get the last letter from the string - done
  const lastLetter = sp[2];
  // initialise an empty string to store the result
  let result = "";

  let firstCode = firstLetter.charCodeAt(); // Get the character code of the first letter
  console.log(firstCode);
  let lastCode = lastLetter.charCodeAt(); // Get the character code of the last letter
  console.log(lastCode);

  // Use a loop to iterate over the character codes from the code of the first letter to the code of the last letter.
  for (let i = firstCode; i <= lastCode; i++) {
    let letter = String.fromCharCode(i); // Convert character code back to a letter
    result += letter; // Append the letter to the result string
  }

  return result;
}

// Return the string with all the letters in the correct case (capital or lowercase based on the input range).
