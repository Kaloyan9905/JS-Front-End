function solve() {
  const BASE_URL = `http://localhost:3030/jsonstore/grocery/`;
  const buttonAdd = document.getElementById("add-product");
  const buttonUpdateMain = document.getElementById("update-product");
  const buttonLoad = document.getElementById("load-product");

  const productNameField = document.getElementById("product");
  const productCountField = document.getElementById("count");
  const productPriceField = document.getElementById("price");
  const display = document.getElementById("tbody");

  let id;

  buttonAdd.addEventListener("click", onClickAdd);
  buttonUpdateMain.addEventListener("click", onClickUpdateMain);
  buttonLoad.addEventListener("click", onClickLoad);

  function clearFields() {
    productNameField.value = "";
    productCountField.value = "";
    productPriceField.value = "";
  }

  async function onClickLoad(event) {
    if (event) {
      event.preventDefault();
    }

    const response = await fetch(BASE_URL);
    const data = await response.json();

    display.innerHTML = "";

    for (let key in data) {
      let tr = document.createElement("tr");

      let tdName = document.createElement("td");
      tdName.classList = "name";
      tdName.textContent = data[key].product;

      let tdCount = document.createElement("td");
      tdCount.classList = "count-product";
      tdCount.textContent = data[key].count;

      let tdPrice = document.createElement("td");
      tdPrice.classList = "product-price";
      tdPrice.textContent = data[key].price;

      let tdButtons = document.createElement("td");
      tdButtons.classList = "btn";
      tdButtons.id = data[key]._id;

      let buttonUpdate = document.createElement("button");
      buttonUpdate.classList = "update";
      buttonUpdate.textContent = "Update";

      let buttonDelete = document.createElement("button");
      buttonDelete.classList = "delete";
      buttonDelete.textContent = "Delete";

      buttonUpdate.addEventListener("click", onClickUpdate);
      buttonDelete.addEventListener("click", onClickDelete);

      tdButtons.appendChild(buttonUpdate);
      tdButtons.appendChild(buttonDelete);

      tr.appendChild(tdName);
      tr.appendChild(tdCount);
      tr.appendChild(tdPrice);
      tr.appendChild(tdButtons);

      display.appendChild(tr);
    }
  }

  async function onClickAdd(event) {
    if (event) {
      event.preventDefault();
    }

    let product = productNameField.value;
    let count = productCountField.value;
    let price = productPriceField.value;

    if (!product || !count || !price) {
      return;
    }

    const newProductInfo = {
      product: product,
      count: count,
      price: price,
    };

    await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(newProductInfo),
    })
      .then(onClickLoad())
      .then(clearFields());
  }

  async function onClickUpdateMain(event) {
    if (event) {
      event.preventDefault();
    }

    let product = productNameField.value;
    let count = productCountField.value;
    let price = productPriceField.value;

    const modified = {
      product: product,
      count: count,
      price: price,
    };

    await fetch(BASE_URL + id, {
      method: "PATCH",
      body: JSON.stringify(modified),
    });

    onClickLoad();
    clearFields();

    buttonAdd.disabled = false;
    buttonUpdateMain.disabled = true;
  }

  function onClickUpdate(event) {
    if (event) {
      event.preventDefault();
    }

    buttonUpdateMain.disabled = false;
    buttonAdd.disabled = true;

    id = event.target.parentElement.id;

    let parent = event.target.parentElement.parentElement;

    let product = parent.querySelectorAll(".name")[0].textContent;
    let count = parent.querySelectorAll(".count-product")[0].textContent;
    let price = parent.querySelectorAll(".product-price")[0].textContent;

    productNameField.value = product;
    productCountField.value = count;
    productPriceField.value = price;
  }

  async function onClickDelete(event) {
    if (event) {
      event.preventDefault();
    }

    id = event.target.parentElement.id;
    event.target.parentElement.parentElement.remove();

    await fetch(BASE_URL + id, {
      method: "DELETE",
    }).then(onClickLoad());
  }
}

solve();
