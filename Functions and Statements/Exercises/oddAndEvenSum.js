function oddEvenSum(number) {
  let oddSum = 0;
  let evenSum = 0;

  for (const digit of number.toString()) {
    if (Number(digit) % 2 !== 0) {
      oddSum += Number(digit);
    } else {
      evenSum += Number(digit);
    }
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(oddEvenSum("31231"));
