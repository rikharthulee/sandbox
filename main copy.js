function solution(number) {
  // if number is negative return 0
  if (number === 0) {
    return 0;
  }

  // variable for total sum
  let sum = 0;
  // get all of the numbers from 1 - given number
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }

    // if the number is a multiple of 3 and 5 remove it from the total?
    if (i % 3 === 0 && i % 5 === 0) {
      sum -= i;
    }
  }

  // return the total
  return sum;
}
