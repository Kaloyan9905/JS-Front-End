function solve(array) {
  let object = {};
  let messages = [];
  let result = [];

  for (const param of array) {
    let [weekday, name] = param.split(" ");

    if (!Object.keys(object).includes(weekday)) {
      object[weekday] = name;
      messages.push(`Scheduled for ${weekday}`);
    } else {
      messages.push(`Conflict on ${weekday}!`);
    }
  }

  for (const [key, value] of Object.entries(object)) {
    result.push(`${key} -> ${value}`);
  }

  return messages.join("\n") + "\n" + result.join("\n");
}

console.log(
  solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"])
);
