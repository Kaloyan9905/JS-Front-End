function solve(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    case "%":
      return firstNumber % secondNumber;
    case "**":
      return firstNumber ** secondNumber;
  }
}

console.log(solve(2, 5, "*"));
