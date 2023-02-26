function solve(array, n) {
  for (let i = 0; i < n; i++) {
    let toBeAdded = array.shift();
    array.push(toBeAdded);
  }
  return array.join(" ");
}

console.log(solve([51, 47, 32, 61, 21], 2));
