function solve(number, operator, anotherNumber) {
  const calculatorObject = {
    "+": (a, b) => (a + b).toFixed(2),
    "-": (a, b) => (a - b).toFixed(2),
    "*": (a, b) => (a * b).toFixed(2),
    "/": (a, b) => (a / b).toFixed(2),
  };
  
  return calculatorObject[operator](number, anotherNumber)
}

console.log(solve(5, "+", 10));
