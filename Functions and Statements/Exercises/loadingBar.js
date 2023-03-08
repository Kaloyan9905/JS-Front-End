function solve(number) {
  let result;

  function loadingBar(num) {
    let percentValue = num / 10;
    let dotValue = 10 - percentValue;

    return "[" + "%".repeat(percentValue) + ".".repeat(dotValue) + "]";
  }

  function loadingCondition(num) {
    if (num === 100) {
      return "100% Complete!";
    }

    return "Still loading...";
  }

  if (number === 100) {
    result = loadingCondition(number) + "\n";
    result += loadingBar(number);
  } else {
    result = `${number}% ${loadingBar(number)}` + "\n";
    result += loadingCondition(number);
  }

  return result;
}

console.log(solve(100));
