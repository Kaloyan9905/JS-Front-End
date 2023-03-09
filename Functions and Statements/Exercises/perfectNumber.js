function solve(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num) {
    return "We have a perfect number!";
  }

  return "It's not so perfect.";
}

console.log(solve(28));
