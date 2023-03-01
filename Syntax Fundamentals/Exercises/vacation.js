function solve(peopleCount, groupType, dayOfWeek) {
  let pricePerPerson = 0;
  let totalPrice = 0;

  if (groupType === "Students") {
    if (dayOfWeek === "Friday") {
      pricePerPerson = 8.45;
    } else if (dayOfWeek === "Saturday") {
      pricePerPerson = 9.8;
    } else {
      pricePerPerson = 10.46;
    }
  } else if (groupType === "Business") {
    if (dayOfWeek === "Friday") {
      pricePerPerson = 10.9;
    } else if (dayOfWeek === "Saturday") {
      pricePerPerson = 15.6;
    } else {
      pricePerPerson = 16;
    }
  } else {
    if (dayOfWeek === "Friday") {
      pricePerPerson = 15;
    } else if (dayOfWeek === "Saturday") {
      pricePerPerson = 20;
    } else {
      pricePerPerson = 22.5;
    }
  }

  totalPrice = peopleCount * pricePerPerson;

  if (groupType === "Students" && peopleCount >= 30) {
    totalPrice -= totalPrice * 0.15;
  } else if (groupType == "Business" && peopleCount >= 100) {
    totalPrice -= pricePerPerson * 10;
  } else if (
    groupType === "Regular" &&
    10 <= peopleCount &&
    peopleCount <= 20
  ) {
    totalPrice -= totalPrice * 0.05;
  }

  return `Total price: ${totalPrice.toFixed(2)}`;
}

console.log(solve(30, "Students", "Sunday"));
