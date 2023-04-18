function solve(yieldStart) {
  let yieldPerDay = parseInt(yieldStart);
  let totalSpice = 0;
  let daysOperated = 0;

  while (yieldPerDay >= 100) {
    totalSpice += yieldPerDay;
    yieldPerDay -= 10;
    daysOperated++;
    if (yieldPerDay < 100) {
      yieldPerDay = 0;
    }
    totalSpice -= 26;
  }

  totalSpice -= 26;

  if (totalSpice < 0) {
    totalSpice = 0;
  }

  return [daysOperated, totalSpice].join("\n");
}

console.log(solve(111));
