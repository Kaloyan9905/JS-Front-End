function solve(array) {
  let object = [];
  let result = [];

  for (let element of array) {
    let [name, address] = element.split(":");

    if (!Object.keys(object).includes(name)) {
      object[name] = null;
    }
    object[name] = address;
  }

  let sortedKeys = Object.keys(object).sort();

  sortedKeys.forEach(key => {
    result.push(`${key} -> ${object[key]}`);
  });

  return result.join("\n")
}

console.log(
  solve([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
  ])
);
