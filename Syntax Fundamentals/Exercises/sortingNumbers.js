function solve(numbers) {
  let result = [];
  let smallestNumber = 0;
  let biggestNumber;
  let endOfLoop = numbers.length / 2;

  for (i = 0; i < endOfLoop; i++) {
    smallestNumber = Math.min(...numbers);
    numbers.splice(numbers.indexOf(smallestNumber), 1);
    result.push(smallestNumber)

    if (numbers.length > 0) {
      biggestNumber = Math.max(...numbers);
      numbers.splice(numbers.indexOf(biggestNumber), 1);
      result.push(biggestNumber)
    }
  }

  return result;
}

console.log(solve([1, 3, -1]));
