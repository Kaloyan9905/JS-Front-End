function solve(firstNumber, secondNumber) {
  function factorial(number) {
    let result = 1;

    while (number > 0) {
      result *= number;
      number--;
    }

    return result
  }

  return (factorial(firstNumber) / factorial(secondNumber)).toFixed(2);
}

console.log(solve(5, 2));
