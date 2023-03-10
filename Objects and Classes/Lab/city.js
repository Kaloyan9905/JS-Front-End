function solve(object) {
  let result = "";

  Object.entries(object).forEach(([key, value]) => {
    result += `${key} -> ${value}` + "\n";
  });

  return result.trim("");
}

console.log(
  solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
  })
);
