function solve(start, end) {
  let array = [];
  let sumNumbers = 0;

  for (let i = start; i <= end; i++) {
    array.push(i);
    sumNumbers += i;
  }
  return array.join(" ") + "\n" + `Sum: ${sumNumbers}`;
}

console.log(solve(4, 10));
