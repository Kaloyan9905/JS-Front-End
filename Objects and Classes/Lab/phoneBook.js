function solve(array) {
  let object = {};
  let result = "";

  for (let param of array) {
    let [name, phone] = param.split(" ");

    if (!Object.keys(object).includes(name)) {
      object[name] = null;
    }
    object[name] = phone;
  }

  for (const [name, phone] of Object.entries(object)) {
    result += `${name} -> ${phone}` + "\n";
  }

  return result.trim("")
}

console.log(
  solve([
    "Tim 0834212554",
    "Peter 0877547887",
    "Bill 0896543112",
    "Tim 0876566344",
  ])
);
