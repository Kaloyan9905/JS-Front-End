function solve() {
  let generateButton = document.querySelectorAll("#exercise button")[0];
  let buyButton = document.querySelectorAll("#exercise button")[1];
  let tableBody = document.querySelector(".wrapper .table tbody");

  generateButton.addEventListener("click", onClickGenerate);
  buyButton.addEventListener("click", onClickBuy);

  function onClickGenerate(event) {
    function addPicture(tableData) {
      let newImage = document.createElement("img");
      newImage.src = objData.img;
      tableData.appendChild(newImage);
      newTableRow.appendChild(tableData);
    }

    function addName(tableData) {
      tableData.textContent = objData.name;
      newTableRow.appendChild(tableData);
    }

    function addPrice(tableData) {
      tableData.textContent = objData.price;
      newTableRow.appendChild(tableData);
    }

    function addDecorationFactor(tableData) {
      tableData.textContent = objData.decFactor;
      newTableRow.appendChild(tableData);
    }

    function addMark(tableData) {
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      tableData.appendChild(input);
      newTableRow.appendChild(tableData);
    }

    let functionsObject = {
      0: addPicture,
      1: addName,
      2: addPrice,
      3: addDecorationFactor,
      4: addMark,
    };

    let objData = {};
    let newTableRow = null;

    let textareaField = document.querySelectorAll("textarea")[0];
    let textareaValue = textareaField.value;
    textareaField.value = "";

    let jsonDataArray = JSON.parse(textareaValue);

    for (let i = 0; i < jsonDataArray.length; i++) {
      objData = {
        img: jsonDataArray[i].img,
        name: jsonDataArray[i].name,
        price: parseFloat(jsonDataArray[i].price),
        decFactor: parseFloat(jsonDataArray[i].decFactor),
      };

      newTableRow = document.createElement("tr");
      tableBody.appendChild(newTableRow);

      for (let index = 0; index < 5; index++) {
        let newTableData = document.createElement("td");
        functionsObject[index](newTableData);
      }
    }
  }

  function onClickBuy(event) {
    let purchaseInfo = {
      furniture: [],
      price: 0,
      decFactor: [],
    };

    let display = document.querySelectorAll("textarea")[1];
    let tableRowElements = tableBody.querySelectorAll("tr");

    for (const tableRow of tableRowElements) {
      let tableDataElements = tableRow.querySelectorAll("td");
      let checkbox = tableDataElements[4].querySelector("input");

      if (!checkbox.checked) {
        continue;
      }

      for (let index = 1; index < 4; index++) {
        let element = tableDataElements[index].textContent;
        console.log(element);

        if (index === 1) {
          purchaseInfo.furniture.push(element);
        } else if (index === 2) {
          purchaseInfo.price += Number(element);
        } else if (index === 3) {
          purchaseInfo.decFactor.push(Number(element));
        }
      }
    }

    if (
      purchaseInfo.furniture.length === 0 ||
      purchaseInfo.decFactor.length === 0
    ) {
      return;
    }

    let sumDecFactor = purchaseInfo.decFactor.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );

    let result =
      `Bought furniture: ${purchaseInfo.furniture.join(", ")}` + "\n";
    result += `Total price: ${purchaseInfo.price.toFixed(2)}` + "\n";
    result += `Average decoration factor: ${
      sumDecFactor / purchaseInfo.decFactor.length
    }`;

    display.value = result;
  }
}
