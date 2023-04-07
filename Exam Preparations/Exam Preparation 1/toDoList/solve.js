// TODO
function attachEvents() {
  const BASE_URL = `http://localhost:3030/jsonstore/tasks/`;
  const buttonLoad = document.getElementById("load-button");
  const buttonAdd = document.getElementById("add-button");
  buttonLoad.addEventListener("click", onClickLoad);
  buttonAdd.addEventListener("click", onClickAdd);

  function displayItem(object) {
    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const buttonRemove = document.createElement("button");
    const buttonEdit = document.createElement("button");

    buttonRemove.textContent = "Remove";
    buttonEdit.textContent = "Edit";

    buttonRemove.addEventListener("click", onClickRemove);
    buttonEdit.addEventListener("click", onClickEdit);
    span.textContent = object.name;

    li.id = object._id;

    li.appendChild(span);
    li.appendChild(buttonRemove);
    li.appendChild(buttonEdit);

    ul.appendChild(li);
  }

  async function onClickLoad(event) {
    event.preventDefault();

    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();

      document.getElementById("todo-list").innerHTML = "";

      for (const index in data) {
        displayItem(data[index]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onClickAdd(event) {
    event.preventDefault();

    const titleField = document.getElementById("title");
    const title = titleField.value;
    titleField.value = "";

    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: title }),
    });
  }

  async function onClickRemove(event) {
    const id = event.target.parentElement.id;
    event.target.parentElement.remove();

    await fetch(BASE_URL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async function onClickEdit(event) {
    if (event.target.textContent === "Submit") {
      const id = event.target.parentElement.id;
      const inputField = event.target.parentElement.querySelector("input");
      const span = document.createElement("span");
      const parent = event.target.parentElement;

      span.textContent = inputField.value;
      parent.replaceChild(span, inputField);
      event.target.textContent = "Edit";

      await fetch(BASE_URL + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: inputField.value }),
      });
    } else {
      event.target.textContent = "Submit";
      const inputField = document.createElement("input");
      const parent = event.target.parentElement;
      const span = event.target.parentElement.querySelector("span");
      
      parent.replaceChild(inputField, span);
    }
  }
}

attachEvents();
