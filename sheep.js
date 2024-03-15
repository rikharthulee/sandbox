const sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(sheep) {
  // interate through the array and count the amount of trues

  // create a variable for the total of true
  let total = 0;

  // create a for loop that runs for the length of the array passed to sheep
  // run the loop until sheep.length is less than the index
  for (i = 0; i < sheep.length; i++) {
    // if the item in the array is equal to true then add 1 to the total
    if (sheep[i] === true) {
      total++;
    }
  }
  // when finished, return total
  return total;
}
