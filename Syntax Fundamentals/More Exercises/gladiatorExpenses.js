function solve(lostFights, helmetPrice, swordPrice, shildPrice, armorPrice) {
  let totalPrice = 0;
  let shieldBrokeCounter = 0;

  for (let index = 1; index <= lostFights; index++) {
    if (index % 2 === 0) {
      totalPrice += helmetPrice;
    }
    if (index % 3 === 0) {
      totalPrice += swordPrice;
    }

    if (index % 2 === 0 && index % 3 === 0) {
      totalPrice += shildPrice;
      shieldBrokeCounter++;
    }

    if (shieldBrokeCounter === 2) {
      totalPrice += armorPrice;
      shieldBrokeCounter = 0;
    }
  }

  return `Gladiator expenses: ${totalPrice.toFixed(2)} aureus`;
}

console.log(solve(7, 2, 3, 4, 5));
