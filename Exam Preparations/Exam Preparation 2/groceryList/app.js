function solve() {
  const buttonLoad = document.getElementById("load-product");
  const buttonAdd = document.getElementById("add-product");
  const buttonUpdateProduct = document.getElementById("update-product");
  const BASE_URL = `http://localhost:3030/jsonstore/grocery/`;

  let currentEventId = null;

  buttonLoad.addEventListener("click", onClickLoad);
  buttonAdd.addEventListener("click", onClickAdd);
  buttonUpdateProduct.addEventListener("click", onClickUpdateProduct);

  async function onClickLoad(event) {
    event.preventDefault();

    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();

      displayData(data);
    } catch (error) {
      console.error(error);
    }
  }

  function displayData(object) {
    let tableBody = document.getElementById("tbody");
    tableBody.innerHTML = "";

    for (const key in object) {
      let tr = document.createElement("tr");
      let tdName = document.createElement("td");
      tdName.classList = "name";
      tdName.textContent = object[key].product;
      let tdCount = document.createElement("td");
      tdCount.classList = "count-product";
      tdCount.textContent = object[key].count;
      let tdPrice = document.createElement("td");
      tdPrice.classList = "product-price";
      tdPrice.textContent = object[key].price;
      let tdBtn = document.createElement("td");
      tdBtn.classList = "btn";
      tdBtn.id = object[key]._id;
      let buttonUpdate = document.createElement("button");
      buttonUpdate.classList = "update";
      buttonUpdate.textContent = "Update";
      let buttonDelete = document.createElement("button");
      buttonDelete.classList = "delete";
      buttonDelete.textContent = "Delete";

      tdBtn.appendChild(buttonUpdate);
      tdBtn.appendChild(buttonDelete);

      tr.appendChild(tdName);
      tr.appendChild(tdCount);
      tr.appendChild(tdPrice);
      tr.appendChild(tdBtn);

      tableBody.appendChild(tr);
    }

    const deleteButtons = document.querySelectorAll(".btn .delete");
    const updateButtons = document.querySelectorAll(".btn .update");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", onClickDelete);
    });

    updateButtons.forEach((button) => {
      button.addEventListener("click", onClickUpdate);
    });
  }

  async function onClickAdd(event) {
    event.preventDefault();

    const productField = document.getElementById("product");
    const countField = document.getElementById("count");
    const priceField = document.getElementById("price");

    const objectData = {
      product: productField.value,
      count: countField.value,
      price: priceField.value,
    };

    productField.value = "";
    countField.value = "";
    priceField.value = "";

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectData),
      });

      if (response.ok) {
        const responseGet = await fetch(BASE_URL);
        const data = await responseGet.json();

        displayData(data);
      } else {
        console.error("Error: " + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function onClickUpdateProduct(event) {
    const id = currentEventId;
    const productField = document.getElementById("product");
    const countField = document.getElementById("count");
    const priceField = document.getElementById("price");

    const objectData = {
      product: productField.value,
      count: countField.value,
      price: priceField.value,
    };

    productField.value = "";
    countField.value = "";
    priceField.value = "";

    try {
      const response = await fetch(BASE_URL + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objectData),
      });

      if (response.ok) {
        const responseGet = await fetch(BASE_URL);
        const data = await responseGet.json();
        displayData(data);
      } else {
        console.error("Error: " + response.status);
      }

      buttonUpdateProduct.disabled = true;
      buttonAdd.disabled = false;
    } catch (error) {
      console.error(error);
    }
  }

  async function onClickUpdate(event) {
    buttonAdd.disabled = true;
    buttonUpdateProduct.disabled = false;
    currentEventId = event.target.parentElement.id;

    const productField = document.getElementById("product");
    const countField = document.getElementById("count");
    const priceField = document.getElementById("price");

    const tableRow = event.target.parentElement.parentElement;

    const product = tableRow.querySelector(".name").textContent;
    const count = tableRow.querySelector(".count-product").textContent;
    const price = tableRow.querySelector(".product-price").textContent;

    productField.value = product;
    countField.value = count;
    priceField.value = price;
  }

  async function onClickDelete(event) {
    const id = event.target.parentElement.id;

    try {
      await fetch(BASE_URL + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      event.target.parentElement.parentElement.remove();
    } catch (error) {
      console.error(error);
    }
  }
}

solve();
