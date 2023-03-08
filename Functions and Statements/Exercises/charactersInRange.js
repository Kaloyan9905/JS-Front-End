function solve(firstValue, secondValue) {
  let firstValueToAscii = firstValue.charCodeAt(0);
  let secondValueToAscii = secondValue.charCodeAt(0);

  let result = [];

  if (firstValue > secondValue) {
    for (
      let index = secondValueToAscii + 1;
      index < firstValueToAscii;
      index++
    ) {
      result.push(String.fromCharCode(index));
    }
  } else {
    for (
      let index = firstValueToAscii + 1;
      index < secondValueToAscii;
      index++
    ) {
      result.push(String.fromCharCode(index));
    }
  }
  return result.join(" ");
}

console.log(solve("#", ":"));
