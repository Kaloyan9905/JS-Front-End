function solve(array) {
  let result = [];

  function reverseNumber(param) {
    let paramToArray = param.toString().split("");
    return Number(paramToArray.reverse().join(""));
  }

  for (const number of array) {
    if (number === reverseNumber(number)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result.join("\n");
}

console.log(solve([12321, 323, 421, 121]));
