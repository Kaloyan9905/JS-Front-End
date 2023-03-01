function solve(number) {
  let numbersArray = number.toString().split("");
  let reference = Number(numbersArray[0]);
  let containsSameDigits = true;
  let sumAllDigits = 0;

  for (const digit of numbersArray) {
    if (Number(digit) !== reference) {
      containsSameDigits = false;
    }
    sumAllDigits += Number(digit);
  }
  return containsSameDigits + "\n" + sumAllDigits;
}

console.log(solve(2222222));
