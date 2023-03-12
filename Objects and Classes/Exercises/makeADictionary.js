function solve(array) {
  let myDict = {};
  let result = [];

  for (let objectJSON of array) {
    let object = JSON.parse(objectJSON);

    let objectArray = Object.entries(object);
    let [key, value] = objectArray[0];

    myDict[key] = value;
  }

  const sortedDict = Object.fromEntries(Object.entries(myDict).sort());

  Object.entries(sortedDict).forEach(([term, definition]) => {
    result.push(`Term: ${term} => Definition: ${definition}`);
  });

  return result.join("\n");
}

console.log(
  solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  ])
);
