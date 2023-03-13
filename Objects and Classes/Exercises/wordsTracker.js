function solve(array) {
  let object = {};
  let result = [];

  let words = array.shift().split(" ");

  for (let word of words) {
    object[word] = 0;
  }

  for (let element of array) {
    if (Object.keys(object).includes(element)) {
      object[element] += 1;
    }
  }

  const sortedArray = Object.entries(object).sort((a, b) => b[1] - a[1]);
  const sortedObject = Object.fromEntries(sortedArray);

  Object.entries(sortedObject).forEach(([key, value]) => {
    result.push(`${key} - ${value}`);
  });

  return result.join("\n");
}

console.log(
  solve([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
  ])
);
