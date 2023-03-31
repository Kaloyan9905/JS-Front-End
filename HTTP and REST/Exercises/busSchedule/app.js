function solve() {
  let nextStop = "depot";
  let stopName = "";

  const buttonDepart = document.getElementById("depart");
  const buttonArrive = document.getElementById("arrive");
  let display = document.getElementsByClassName("info")[0];

  async function depart() {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${nextStop}`
      );
      const data = await response.json();

      stopName = data.name;
      nextStop = data.next;
      display.textContent = `Next stop ${stopName}`;

      buttonDepart.disabled = true;
      buttonArrive.disabled = false;
    } catch (error) {
      display.textContent = "Error";
      buttonDepart.disabled = true;
      buttonArrive.disabled = true;
    }
  }

  async function arrive() {
    display.textContent = `Arriving at ${stopName}`;

    buttonDepart.disabled = false;
    buttonArrive.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
