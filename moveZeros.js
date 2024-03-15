// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  // initialise a new array to store zeros ✅
  let zeroArray = [];

  // initialise an array to store the rest of the elements
  let remainingArray = [];

  // iterate through the array and pick out the zeros ✅
  for (i = 0; i < arr.length; i++) {
    // if element is a zero then move it to another array ✅
    // convert the array to a string, if it is "0" ✅
    if (String(arr[i]) === "0") {
      // push to the zeroArray ✅
      zeroArray.push(arr[i]);
      // if the element isnt a 0 then ✅
    } else if (String(arr[i]) !== "0") {
      // add it to remainingArray ✅
      remainingArray.push(arr[i]);
    }
  }

  // join remainingArray and zeroArray together
  const newArray = remainingArray.concat(zeroArray);

  return newArray;
}
