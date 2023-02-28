function solve(speed, area) {
  let difference;
  let status;

  let areaLimit = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let differenceLimit = {
    speeding: 20,
    "excessive speeding": 40,
    "reckless driving": 41,
  };

  if (speed <= areaLimit[area]) {
    return `Driving ${speed} km/h in a ${areaLimit[area]} zone`;
  }

  difference = Math.abs(areaLimit[area] - speed);

  for (let key in differenceLimit) {
    value = differenceLimit[key];
    if (difference <= value) {
      status = key;
      break;
    }
  }

  return `The speed is ${difference} km/h faster than the allowed speed of ${areaLimit[area]} - ${status}`;
}

console.log(solve(40, "city"));
console.log(solve(21, "residential"));
