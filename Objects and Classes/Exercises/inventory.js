function solve(array) {
  let heroes = [];
  let result = [];

  for (let element of array) {
    let [name, level, ...items] = element.split(" / ");
    heroes.push({ name, level, items });
  }

  const sortedHeroes = heroes.sort((a, b) => a.level - b.level);

  for (let object of sortedHeroes) {
    let toBeAdded = `Hero: ${object.name}` + "\n";
    toBeAdded += `level => ${object.level}` + "\n";
    toBeAdded += `items => ${object.items.join(", ")}`;
    result.push(toBeAdded);
  }

  return result.join("\n");
}

console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
