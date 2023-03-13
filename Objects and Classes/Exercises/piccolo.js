function solve(array) {
  let parking = new Set();

  for (let element of array) {
    let [direction, carNumber] = element.split(", ");
    
    if (direction === "IN") {
      parking.add(carNumber);
    } else {
      parking.delete(carNumber);
    }
  }

  const sortedParking = Array.from(parking).sort();

  if (sortedParking.length === 0) {
    return "Parking Lot is Empty";
  }

  return sortedParking.join("\n");
}

console.log(
  solve([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
  ])
);
