function solve(input) {
  let result = "";
  const jsonObject = JSON.parse(input);

  for (const [key, value] of Object.entries(jsonObject)) {
    result += `${key}: ${value}` + "\n";
  }

  return result.trim("");
}

console.log(solve('{"name": "George", "age": 40, "town": "Sofia"}'));
