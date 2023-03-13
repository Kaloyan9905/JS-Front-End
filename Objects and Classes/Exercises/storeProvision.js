function solve(currentStock, stockForDelivery) {
  let allProducts = currentStock.concat(stockForDelivery);
  let object = {};
  let result = [];

  while (allProducts.length > 0) {
    let product = allProducts.shift();
    let quantity = Number(allProducts.shift());

    if (!Object.keys(object).includes(product)) {
      object[product] = 0;
    }
    object[product] += quantity;
  }

  Object.entries(object).forEach(([key, value]) => {
    result.push(`${key} -> ${value}`);
  });

  return result.join("\n");
}

console.log(
  solve(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    [
      "Flour",
      "44",
      "Oil",
      "12",
      "Pasta",
      "7",
      "Tomatoes",
      "70",
      "Bananas",
      "30",
    ]
  )
);
