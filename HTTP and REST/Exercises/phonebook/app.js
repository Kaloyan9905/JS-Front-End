function attachEvents() {
  const BASE_URL = `http://localhost:3030/jsonstore/phonebook`;
  const buttonCreate = document.getElementById("btnCreate");
  const buttonLoad = document.getElementById("btnLoad");
  let personNameInput = document.getElementById("person");
  let phoneNumberInput = document.getElementById("phone");
  buttonCreate.addEventListener("click", onClickCreate);
  buttonLoad.addEventListener("click", onClickLoad);

  async function onClickCreate(event) {
    const currentDataObject = {
      person: personNameInput.value,
      phone: phoneNumberInput.value,
    };

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentDataObject),
      });
      const data = await response.json();

      if (personNameInput.value === "" || phoneNumberInput.value === "") {
        return;
      }

      personNameInput.value = "";
      phoneNumberInput.value = "";
    } catch (error) {
      console.error(error);
    }
  }

  async function onClickLoad(event) {
    const phonebook = document.getElementById("phonebook");
    phonebook.textContent = "";

    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        for (let index in data) {
          let li = document.createElement("li");
          let deleteButton = document.createElement("button");

          deleteButton.textContent = "Delete";
          deleteButton.id = data[index]._id;
          li.textContent = `${data[index].person}: ${data[index].phone}`;

          phonebook.appendChild(li);
          li.appendChild(deleteButton);

          deleteButton.addEventListener("click", onClickDelete);
        }
      })
      .catch((error) => console.error(error));
  }

  async function onClickDelete(event) {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();

      for (const index in data) {
        if (data[index]._id === event.target.id) {
          const URL_DELETE_REQUEST = BASE_URL + `/${data[index]._id}`;
          event.target.parentElement.remove();

          fetch(URL_DELETE_REQUEST, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                console.log("Data deleted successfully");
              } else {
                console.error("Failed to delete data");
              }
            })
            .catch((error) => console.error(error));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

attachEvents();
