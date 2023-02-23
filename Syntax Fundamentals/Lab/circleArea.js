function solve(param) {
  if (typeof param !== "number") {
    return `We can not calculate the circle area, because we receive a ${typeof param}.`;
  }
  return (param ** 2 * Math.PI).toFixed(2);
}
