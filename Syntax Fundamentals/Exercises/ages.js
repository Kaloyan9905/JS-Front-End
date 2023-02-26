function solve(age) {
  switch (true) {
    case 0 <= age && age <= 2:
      return "baby";
    case 3 <= age && age <= 13:
      return "child";
    case 14 <= age && age <= 19:
      return "teenager";
    case 20 <= age && age <= 65:
      return "adult";
    case 66 <= age:
      return "elder";
    default:
      return "out of bounds";
  }
}

console.log(solve(66));