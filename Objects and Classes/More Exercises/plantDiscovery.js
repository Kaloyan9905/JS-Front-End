function solve(array) {
  let n = Number(array.shift());
  let plants = {};

  for (let index = 0; index < n; index++) {
    let input = array.shift();
    let [plant, rarity] = input.split("<->");

    if (!plants.hasOwnProperty(plant)) {
      plants[plant] = { rarity: rarity, rating: [] };
    } else {
      plants[plant].rarity = rarity;
    }
  }

  for (let command of array) {
    if (command === "Exhibition") {
      console.log("Plants for the exhibition:");

      for (let key in plants) {
        let averageRating = 0;

        if (plants[key].rating.length > 0) {
          let ratings = plants[key].rating;
          averageRating = ratings.reduce((a, b) => a + b) / ratings.length;
        }

        console.log(
          `- ${key}; Rarity: ${
            plants[key].rarity
          }; Rating: ${averageRating.toFixed(2)}`
        );
      }
      break;
    }

    if (command.includes("Rate")) {
      let [_, plantAndRating] = command.split(": ");
      let [plant, rating] = plantAndRating.split(" - ");

      if (!plants.hasOwnProperty(plant)) {
        console.log("error");
        continue;
      }
      plants[plant].rating.push(Number(rating));
    } else if (command.includes("Update")) {
      let [_, plantAndNewRarity] = command.split(": ");
      let [plant, newRarity] = plantAndNewRarity.split(" - ");

      if (!plants.hasOwnProperty(plant)) {
        console.log("error");
        continue;
      }
      plants[plant].rarity = newRarity;
    } else {
      let [_, plant] = command.split(": ");

      if (!plants.hasOwnProperty(plant)) {
        console.log("error");
        continue;
      }
      plants[plant].rating = [];
    }
  }
}

solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
