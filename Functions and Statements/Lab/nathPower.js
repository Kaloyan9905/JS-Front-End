function solve(number, power) {
  //   return number ** power;
  let powFunc = (n, p) => n ** p;

  return powFunc(number, power);
}

console.log(solve(3, 4));
