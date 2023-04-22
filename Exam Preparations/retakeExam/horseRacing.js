function solve(array) {
  let horsesStr = array.shift();
  let horses = horsesStr.split("|");

  while (true) {
    let command = array.shift();
    let currCommand = command.split(" ")[0];

    if (currCommand === "Finish") {
      let winner = horses[horses.length - 1];

      console.log(horses.join("->"));
      console.log(`The winner is: ${winner}`);
      break;
    } else if (currCommand === "Retake") {
      let [_, overtaking, overtaken] = command.split(" ");

      let index1 = horses.indexOf(overtaking);
      let index2 = horses.indexOf(overtaken);

      if (index1 < index2) {
        const temp = horses[index1];
        horses[index1] = horses[index2];
        horses[index2] = temp;

        console.log(`${overtaking} retakes ${overtaken}.`);
      }
    } else if (currCommand === "Trouble") {
      let [_, horse] = command.split(" ");

      let index = horses.indexOf(horse);

      if (index > 0) {
        horses.splice(index, 1);
        horses.splice(index - 1, 0, horse);
        console.log(`Trouble for ${horse} - drops one position.`);
      }
    } else if (currCommand === "Rage") {
      let [_, horse] = command.split(" ");

      let index = horses.indexOf(horse);

      if (index === horses.length - 1) {
        let first = horses.pop();
        horses.push(first);
      } else if (index === horses.length - 2) {
        horses.splice(index, 1);
        horses.push(horse);
      } else if (index < horses.length - 2) {
        let newIndex = index + 2;
        horses.splice(index, 1);
        horses.splice(newIndex, 0, horse);
      }

      console.log(`${horse} rages 2 positions ahead.`);
    } else if (currCommand === "Miracle") {
      let last = horses.shift();
      horses.push(last);

      console.log(`What a miracle - ${last} becomes first.`);
    }
  }
}

solve([
  "Bella|Alexia|Sugar|Koko",
  "Retake Alexia Sugar",
  "Rage Bella",
  "Trouble Bella",
  "Finish",
]);
