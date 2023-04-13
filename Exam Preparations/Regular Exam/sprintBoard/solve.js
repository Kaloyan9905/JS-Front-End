function attachEvents() {
  const BASE_URL = `http://localhost:3030/jsonstore/tasks/`;

  const buttonLoad = document.getElementById("load-board-btn");
  const buttonAdd = document.getElementById("create-task-btn");

  const toDoDisplay = document.querySelectorAll("#todo-section .task-list")[0];
  const inProgressDisplay = document.querySelectorAll(
    "#in-progress-section .task-list"
  )[0];
  const codeReviewDisplay = document.querySelectorAll(
    "#code-review-section .task-list"
  )[0];
  const doneDisplay = document.querySelectorAll("#done-section .task-list")[0];

  buttonLoad.addEventListener("click", onClickLoad);
  buttonAdd.addEventListener("click", onClickAdd);

  function clearFields() {
    toDoDisplay.innerHTML = "";
    inProgressDisplay.innerHTML = "";
    codeReviewDisplay.innerHTML = "";
    doneDisplay.innerHTML = "";
  }

  function getNextStatus(status) {
    if (status === "Move to In Progress") {
      return "In Progress";
    } else if (status === "Move to Code Review") {
      return "Code Review";
    } else if (status === "Move to Done") {
      return "Done";
    }
  }

  function getButtonText(status) {
    if (status === "ToDo") {
      return "Move to In Progress";
    } else if (status === "In Progress") {
      return "Move to Code Review";
    } else if (status === "Code Review") {
      return "Move to Done";
    } else {
      return "Close";
    }
  }

  function getCurrentDisplay(status) {
    if (status === "ToDo") {
      return toDoDisplay;
    } else if (status === "In Progress") {
      return inProgressDisplay;
    } else if (status === "Code Review") {
      return codeReviewDisplay;
    } else {
      return doneDisplay;
    }
  }

  async function onClickLoad(event) {
    if (event) {
      event.preventDefault();
    }

    const response = await fetch(BASE_URL);
    const data = await response.json();

    clearFields();

    for (let key in data) {
      console.log(data[key]);
      let curr = data[key];

      let buttonText = getButtonText(curr.status);
      let display = getCurrentDisplay(curr.status);

      let li = document.createElement("li");
      li.classList = "task";
      let h3 = document.createElement("h3");
      h3.textContent = curr.title;
      let p = document.createElement("p");
      p.textContent = curr.description;
      let button = document.createElement("button");
      button.textContent = buttonText;
      button.id = curr._id;
      button.addEventListener("click", onClickMove);

      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(button);

      display.appendChild(li);
    }
  }

  async function onClickAdd(event) {
    if (event) {
      event.preventDefault();
    }

    const titleField = document.getElementById("title");
    const descField = document.getElementById("description");

    const title = titleField.value;
    const desc = descField.value;

    if (!title || !desc) {
      return;
    }

    const task = {
      title: title,
      description: desc,
      status: "ToDo",
    };

    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then(
      () => (titleField.value = ""),
      (descField.value = ""),
      onClickLoad(event)
    );
  }

  async function onClickMove(event) {
    if (event) {
      event.preventDefault();
    }

    let id = event.target.id;

    if (event.target.textContent === "Close") {
      fetch(BASE_URL + id, {
        method: "DELETE",
      }).then(() => onClickLoad(event));
    } else {
      let modData = getNextStatus(event.target.textContent);

      await fetch(BASE_URL + id, {
        method: "PATCH",
        body: JSON.stringify({ status: modData }),
      }).then(() => onClickLoad(event));
    }
  }
}

attachEvents();
