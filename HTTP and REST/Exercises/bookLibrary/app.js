function attachEvents() {
  const buttonLoadAllBooks = document.getElementById("loadBooks");
  const buttonSubmit = document.querySelector("#form button");
  const tableBody = document.querySelector("tbody");

  const BASE_URL = `http://localhost:3030/jsonstore/collections/books`;

  buttonLoadAllBooks.addEventListener("click", onClickLoadAllBooks);
  buttonSubmit.addEventListener("click", onClickSubmitBook);

  async function onClickLoadAllBooks(event) {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    tableBody.innerHTML = "";

    for (let index in data) {
      if (data[index].author && data[index].title) {
        addBookToTable(data[index], index);
      }
    }
  }

  async function onClickSubmitBook(event) {
    const title = document.querySelector("#form input[name=title]").value;
    const author = document.querySelector("#form input[name=author]").value;

    document.querySelector("#form input[name=title]").value = "";
    document.querySelector("#form input[name=author]").value = "";

    if (!title || !author) {
      throw new Error("Detected one or more empty fields");
    }

    if (event.target.textContent === "Save") {
      event.target.addEventListener("click", (event) => console.log(1));
    }

    try {
      await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author: author, title: title }),
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function onClickEditBook(event) {
    if (buttonSubmit.textContent === "Submit") {
      const PUT_URL = BASE_URL + `/${event.target.id}`;

      const title = document.querySelector("#form input[name=title]").value;
      const author = document.querySelector("#form input[name=author]").value;

      document.querySelector("#form h3").textContent = "EDIT FORM";
      buttonSubmit.textContent = "Save";

      try {
        await fetch(PUT_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ author: author, title: title }),
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function onClickDeleteBook(event) {
    const DELETE_URL = BASE_URL + `/${event.target.id}`;
    event.target.parentElement.parentElement.remove();

    try {
      await fetch(DELETE_URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function addBookToTable(book, idToSet) {
    const tableRow = document.createElement("tr");
    const tableDataTitle = document.createElement("td");
    const tableDataAuthor = document.createElement("td");
    const tableDataActions = document.createElement("td");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");

    tableDataTitle.textContent = book.title;
    tableDataAuthor.textContent = book.author;
    buttonEdit.textContent = "Edit";
    buttonDelete.textContent = "Delete";
    buttonEdit.id = idToSet;
    buttonDelete.id = idToSet;

    buttonEdit.addEventListener("click", onClickEditBook);
    buttonDelete.addEventListener("click", onClickDeleteBook);

    tableDataActions.appendChild(buttonEdit);
    tableDataActions.appendChild(buttonDelete);
    tableRow.appendChild(tableDataTitle);
    tableRow.appendChild(tableDataAuthor);
    tableRow.appendChild(tableDataActions);
    tableBody.appendChild(tableRow);
  }
}

attachEvents();
