async function getInfo() {
  const stopId = document.getElementById("stopId").value;
  const stopName = document.getElementById("stopName");
  const buses = document.getElementById("buses");
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    buses.textContent = ""
    stopName.textContent = data.name

    for (let key in data.buses) {
      let li = document.createElement("li");
      li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
      buses.appendChild(li)
    }

  } catch (error) {
    buses.textContent = ""
    stopName.textContent = "Error";
  }
}
