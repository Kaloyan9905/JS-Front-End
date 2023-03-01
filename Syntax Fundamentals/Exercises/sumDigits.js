function solve(number) {
  let result = 0;
  for (const key of number.toString()) {
    result += Number(key);
  }

  return result;
}

console.log(solve(21312));
