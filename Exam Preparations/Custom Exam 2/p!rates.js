function solve(array) {
  let targets = {};

  while (true) {
    command = array.shift();

    if (command === "Sail") {
      break;
    }

    let [city, population, gold] = command.split("||");

    if (!targets.hasOwnProperty(city)) {
      targets[city] = { population: Number(population), gold: Number(gold) };
    } else {
      targets[city].population += Number(population);
      targets[city].gold += Number(gold);
    }
  }

  while (true) {
    command = array.shift();

    if (command === "End") {
      if (Object.keys(targets).length > 0) {
        console.log(
          `Ahoy, Captain! There are ${Object.keys(targets).length} wealthy settlements to go to:`
        );

        for (let key in targets) {
          console.log(
            `${key} -> Population: ${targets[key].population} citizens, Gold: ${targets[key].gold} kg`
          );
        }
      } else {
        console.log(
          "Ahoy, Captain! All targets have been plundered and destroyed!"
        );
      }
      break;
    }

    if (command.includes("Plunder")) {
      let [_, town, people, gold] = command.split("=>");

      targets[town].population -= Number(people);
      targets[town].gold -= Number(gold);

      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );

      if (targets[town].population <= 0 || targets[town].gold <= 0) {
        delete targets[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (command.includes("Prosper")) {
      let [_, town, gold] = command.split("=>");

      if (Number(gold) < 0) {
        console.log("Gold added cannot be a negative number!");
        continue;
      }

      targets[town].gold += Number(gold);

      console.log(
        `${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`
      );
    }
  }
}

solve([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
