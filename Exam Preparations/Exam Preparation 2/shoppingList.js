function solve(array) {
  const groceriesString = array.shift();
  let groceries = groceriesString.split("!");

  for (const data of array) {
    if (data === "Go Shopping!") {
      return groceries.join(", ");
    } else if (data.includes("Urgent")) {
      let [_, item] = data.split(" ");

      if (!groceries.includes(item)) {
        groceries.unshift(item);
      }
    } else if (data.includes("Unnecessary")) {
      let [_, item] = data.split(" ");

      if (groceries.includes(item)) {
        const index = groceries.indexOf(item)
        groceries.splice(index, 1);
      }
    } else if (data.includes("Correct")) {
      let [_, oldItem, newItem] = data.split(" ");

      if (groceries.includes(oldItem)) {
        const index = groceries.indexOf(oldItem)
        groceries[index] = newItem;
      }
    } else if (data.includes("Rearrange")) {
      let [_, item] = data.split(" ");

      if (groceries.includes(item)) {
        const index = groceries.indexOf(item)
        groceries.push(groceries.splice(index, 1));
      }
    }
  }
}

console.log(
  solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
  ])
);
