function solve(array) {
  function cancelFlightIfExists(currentFlight) {
    for (let data of flights) {
      let [flight, destination] = data.split(" ");

      if (currentFlight === flight) {
        let returnData = [flight, destination];
        return returnData;
      }
    }

    return null;
  }
  function canceled(flightsArray, changesArray) {
    for (let data of changesArray) {
      let [flight, _] = data.split(" ");

      let result = cancelFlightIfExists(flight);

      if (result === null) {
        continue;
      }

      let [cancelled, destination] = result;

      flightsArray.push({ Destination: destination, Status: "Cancelled" });
    }
  }

  function readyToFly() {}

  let flights = array.shift();
  let changes = array.shift();
  let status = array.shift().join("");

  let flightsArray = [];

  if (status === "Cancelled") {
    canceled(flights, changes);
  } else {
    readyToFly(flights, changes);
  }
}

solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
