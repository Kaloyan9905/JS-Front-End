function solve(firstNum, secondNum, thirdNum) {
  function sum(first, second) {
    return first + second;
  }

  function subtract() {
    return sum(firstNum, secondNum) - thirdNum;
  }

  return subtract()
}

console.log(solve(20, 30, 40));
