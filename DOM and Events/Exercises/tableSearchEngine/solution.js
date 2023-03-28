function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    function addClassToData(allDataElements) {
      for (let data of allDataElements) {
        if (data.textContent.includes(passedInput)) {
          data.parentElement.className = "select";
        }
      }
    }

    function clearDataClass(allDataRows) {
      for (let dataRow of allDataRows) {
        if (dataRow.className === "select") {
          dataRow.className = "";
        }
      }
    }

    let names = document.querySelectorAll("tbody tr td:nth-child(1)");
    let emails = document.querySelectorAll("tbody tr td:nth-child(2)");
    let courses = document.querySelectorAll("tbody tr td:nth-child(3)");
    let passedInput = document.getElementById("searchField").value;

    let allData = [].concat(
      Array.from(names),
      Array.from(emails),
      Array.from(courses)
    );

    if (passedInput === "") {
      return;
    }

    clearDataClass(document.querySelectorAll("tbody tr"));
    addClassToData(allData);
  }
}
