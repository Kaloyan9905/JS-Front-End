function solve(firstNumber, secondNumber, thirdNumber) {
  let array = [firstNumber, secondNumber, thirdNumber];
  return `The largest number is ${Math.max(...array)}.`;
}

console.log(solve(-5, 10, 3));
