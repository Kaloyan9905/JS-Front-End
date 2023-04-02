function attachEvents() {
  let location = document.getElementById("location");
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", onClick);

  async function onClick(event) {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/forecaster/locations`
      );
      const data = await response.json();
      let code = null;

      for (let object of data) {
        if (object.name === location.value) {
          code = object.code;
          break;
        }
      }

      let url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

      let responseToday = await fetch(url);
      const dataToday = await responseToday.json();

      url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

      let responseAfter3Days = await fetch(url);
      const dataAfter3Days = await responseAfter3Days.json();

      console.log(dataAfter3Days);

      document.getElementById("forecast").style.display = "inline";
      let current = document.getElementById("current");
      let upcoming = document.getElementById("upcoming");

      // TODO add html elements to the screen
      let div = current.appendChild(document.createElement("div"));
      div.classList = "forecasts";
      let spanSymbol = div.appendChild(document.createElement("span"));
      spanSymbol.classList = "condition symbol";
      let spanCondition = div.appendChild(document.createElement("span"));
      spanCondition.classList = "condition";
      let spanData1 = spanCondition.appendChild(document.createElement("span"));
      let spanData2 = spanCondition.appendChild(document.createElement("span"));
      let spanData3 = spanCondition.appendChild(document.createElement("span"));

      spanData1.classList = "forecast-data";
      spanData2.classList = "forecast-data";
      spanData3.classList = "forecast-data";

      let condition = weatherCondition(dataToday.forecast.condition);
      let symbolDegrees = decodeURI("%C2%B0");
      spanSymbol.textContent = condition;

      spanData1.textContent = dataToday.name;
      spanData2.textContent =
        dataToday.forecast.low +
        symbolDegrees +
        "/" +
        dataToday.forecast.high +
        symbolDegrees;
      spanData3.textContent = dataToday.forecast.condition;

      // other display

      let divInfo = upcoming.appendChild(document.createElement("div"));
      divInfo.classList = "forecast-info";

      for (let index = 0; index < 3; index++) {
        let spanUpcoming = divInfo.appendChild(document.createElement("span"));
        spanUpcoming.classList = "upcoming";

        let spanData12 = spanUpcoming.appendChild(
          document.createElement("span")
        );
        let spanData22 = spanUpcoming.appendChild(
          document.createElement("span")
        );
        let spanData32 = spanUpcoming.appendChild(
          document.createElement("span")
        );

        spanData12.classList = "symbol";
        spanData22.classList = "forecast-data";
        spanData32.classList = "forecast-data";

        let current = dataAfter3Days.forecast[index];
        condition = weatherCondition(current.condition);
        spanData12.textContent = condition;

        spanData22.textContent =
          current.low + symbolDegrees + "/" + current.high + symbolDegrees;

        spanData32.textContent = current.condition;
      }
    } catch (error) {
      console.log(error);
    }

    function weatherCondition(data) {
      if (data === "Sunny") {
        return "☀";
      } else if (data === "Partly sunny") {
        return "⛅";
      } else if (data === "Overcast") {
        return "☁";
      } else if (data === "Rain") {
        return "☂";
      }
    }
  }
}

attachEvents();
