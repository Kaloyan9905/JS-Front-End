function solve(grade) {
  switch (true) {
    case grade < 3:
      return `Fail (2)`;
    case 3 <= grade && grade < 3.5:
      return `Poor (${grade.toFixed(2)})`;
    case 3.5 <= grade && grade < 4.5:
      return `Good (${grade.toFixed(2)})`;
    case 4.5 <= grade && grade < 5.5:
      return `Very good (${grade.toFixed(2)})`;
    case 5.5 <= grade:
      return `Excellent (${grade.toFixed(2)})`;
    default:
      return "Wrong input";
  }
}

console.log(solve(2.9));
