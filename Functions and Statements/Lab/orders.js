function solve(product, quantity) {
  let orderTypes = {
    coffee: (q) => 1.5 * q,
    water: (q) => 1 * q,
    coke: (q) => 1.4 * q,
    snacks: (q) => 2 * q,
  };

  return orderTypes[product](quantity).toFixed(2);
}

console.log(solve("water", 5));
