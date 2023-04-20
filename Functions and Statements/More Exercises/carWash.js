function solve(array) {
  let pattern = 0;

  commandsObject = {
    soap: (p) => (p += 10),
    water: (p) => (p *= 1.2),
    "vacuum cleaner": (p) => (p *= 1.25),
    mud: (p) => (p = p - p * 0.1),
  };

  for (const element of array) {
    pattern = commandsObject[element](pattern);
  }

  console.log(`The car is ${pattern.toFixed(2)}% clean.`);
}

solve(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
