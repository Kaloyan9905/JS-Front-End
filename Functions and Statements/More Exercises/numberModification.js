function solve(number) {
  let currentAverage = 0;
  let average = 0;
  let numbersSum = 0;
  let numbersCount = 0;
  let numberToString = number.toString();
  let modifiedNumber = numberToString;

  while (true) {
    for (let digit of number) {
      numbersSum += Number(digit);
      numbersCount++;
    }
    currentAverage = numbersSum / numbersCount;

    if (currentAverage < 5) {
      average = currentAverage;
      currentAverage += 9;
      numbersCount++;
    } else {
      return average;
    }
  }
}

console.log(solve(101));
