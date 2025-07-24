// Original
const finalGradeA = (num1, num2, num3) => {
  if (
    num1 < 0 ||
    num1 > 100 ||
    num2 < 0 ||
    num2 > 100 ||
    num3 < 0 ||
    num3 > 100
  ) {
    return "You have entered an invalid grade.";
  }

  const averageNum = (num1 + num2 + num3) / 3;

  if (averageNum >= 0 && averageNum <= 59) {
    return "F";
  } else if (averageNum >= 60 && averageNum <= 69) {
    return "D";
  } else if (averageNum >= 70 && averageNum <= 79) {
    return "C";
  } else if (averageNum >= 80 && averageNum <= 89) {
    return "B";
  } else if (averageNum >= 90 && averageNum <= 100) {
    return "A";
  }
};

//With ternary chain
const finalGradeB = (num1, num2, num3) => {
  if (
    num1 < 0 ||
    num1 > 100 ||
    num2 < 0 ||
    num2 > 100 ||
    num3 < 0 ||
    num3 > 100
  ) {
    return "You have entered an invalid grade.";
  }

  const averageNum = (num1 + num2 + num3) / 3;

  return averageNum <= 59
    ? "F"
    : averageNum <= 69
    ? "D"
    : averageNum <= 79
    ? "C"
    : averageNum <= 89
    ? "B"
    : averageNum <= 100
    ? "A"
    : "You have entered an invalid grade."; // fallback just in case
};

// With array and find
const finalGradeC = (n1, n2, n3) => {
  if ([n1, n2, n3].some((n) => n < 0 || n > 100))
    return "You have entered an invalid grade.";
  const avg = (n1 + n2 + n3) / 3;
  return [
    [59, "F"],
    [69, "D"],
    [79, "C"],
    [89, "B"],
    [100, "A"],
  ].find(([max]) => avg <= max)[1];
};

// One line version - implicit return
const finalGradeD = (n1, n2, n3) =>
  [n1, n2, n3].some((n) => n < 0 || n > 100)
    ? "You have entered an invalid grade."
    : [
        [59, "F"],
        [69, "D"],
        [79, "C"],
        [89, "B"],
        [100, "A"],
      ].find(([max]) => (n1 + n2 + n3) / 3 <= max)[1];

// Testing the functions
console.log(finalGradeA(50, 40, 60)); // F
console.log(finalGradeA(65, 70, 62)); // D
console.log(finalGradeA(75, 77, 79)); // C
console.log(finalGradeA(82, 88, 85)); // B
console.log(finalGradeA(95, 92, 90)); // A
console.log(finalGradeA(110, 90, 80)); // You have entered an invalid grade.
