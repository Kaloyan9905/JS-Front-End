function solve(firstNum, secondNum, thirdNum) {
  function isPositive(number) {
    return number > 0;
  }

  let negativesCount = 0;
  let positiveCount = 0;

  if (isPositive(firstNum)) {
    positiveCount++;
  } else {
    negativesCount++;
  }

  if (isPositive(secondNum)) {
  } else {
    negativesCount++;
  }

  if (isPositive(thirdNum)) {
  } else {
    negativesCount++;
  }

  if (negativesCount === 0) {
    return "Positive";
  } else if (negativesCount === 1) {
    return "Negative";
  } else if (negativesCount === 2) {
    return "Positive";
  } else if (negativesCount === 3) {
    return "Negative";
  }
}

console.log(solve(5, 3, 2));
