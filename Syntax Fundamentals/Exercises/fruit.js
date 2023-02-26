function solve(fruit, grams, price) {
  let kilograms = grams / 1000;
  let totalPrice = price * kilograms;
  return `I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(
    2
  )} kilograms ${fruit}.`;
}

console.log(solve("apple", 1563, 2.349999));
