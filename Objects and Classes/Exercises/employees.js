function solve(array) {
  let object = {};
  let result = [];
  let id = 0;

  for (let name of array) {
    object[id] = `Name: ${name} -- Personal Number: ${name.length}`;
    id++;
  }

  Object.values(object).forEach((element) => {
    result.push(element)
  });

  return result.join("\n")
}

console.log(
  solve([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
  ])
);
