window.addEventListener("load", solve);

function solve() {
  let taskId = 1;
  let totalPoints = 0;

  let inputHidden = document.getElementById("task-id");
  let displayPoints = document.getElementById("total-sprint-points");

  const titleField = document.getElementById("title");
  const descriptionField = document.getElementById("description");
  const labelField = document.getElementById("label");
  const estimationPointsField = document.getElementById("points");
  const assigneeField = document.getElementById("assignee");
  const tasksDisplay = document.getElementById("tasks-section");

  let title;
  let label;
  let description;
  let points;
  let assignee;

  const buttonCreateTask = document.getElementById("create-task-btn");
  const buttonDeleteTask = document.getElementById("delete-task-btn");

  buttonCreateTask.addEventListener("click", onClickCreate);
  buttonDeleteTask.addEventListener("click", onClickDelete);

  function clearFields() {
    titleField.value = "";
    labelField.value = "";
    estimationPointsField.value = "";
    assigneeField.value = "";
    descriptionField.value = "";
  }

  function displayPointsFunc() {
    displayPoints.textContent = `Total Points ${totalPoints}pts`;
  }

  function onClickDeleteButton(event) {
    event.preventDefault();
    
    let parent = event.target.parentElement.parentElement;

    titleField.value = title;
    descriptionField.value = description;
    labelField.value = label;
    estimationPointsField.value = points;
    assigneeField.value = assignee;

    buttonDeleteTask.disabled = false;
    buttonCreateTask.disabled = true;

    titleField.disabled = true;
    descriptionField.disabled = true;
    labelField.disabled = true;
    estimationPointsField.disabled = true;
    assigneeField.disabled = true;

    inputHidden.value = parent.id;
  }

  function onClickCreate(event) {
    event.preventDefault();

    title = titleField.value;
    label = labelField.value;
    description = descriptionField.value;
    points = estimationPointsField.value;
    assignee = assigneeField.value;

    if (!title || !label || !points || !assignee || !description) {
      return;
    }

    totalPoints += Number(points);

    let icon = "";
    let currClass = "";

    if (label === "Feature") {
      icon = "⊡";
      currClass = "feature";
    } else if (label === "Low Priority Bug") {
      icon = "☉";
      currClass = "low-priority";
    } else if (label === "High Priority Bug") {
      icon = "⚠";
      currClass = "high-priority";
    }

    let article = document.createElement("article");
    article.id = `task-${taskId}`;
    article.classList = "task-card";

    let divTaskCardLabel = document.createElement("div");

    divTaskCardLabel.textContent = `${label} ${icon}`;
    divTaskCardLabel.classList = `task-card-label ${currClass}`;

    let h3 = document.createElement("h3");
    h3.classList = "task-card-title";
    h3.textContent = title;

    let p = document.createElement("p");
    p.classList = "task-card-description";
    p.textContent = description;

    let divPoints = document.createElement("div");
    divPoints.classList = "task-card-points";
    divPoints.textContent = `Estimated at ${points} pts`;

    let divAssignee = document.createElement("div");
    divAssignee.classList = "task-card-assignee";
    divAssignee.textContent = `Assigned to: ${assignee}`;

    let divActions = document.createElement("div");
    divActions.classList = "task-card-actions";

    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    buttonDelete.addEventListener("click", onClickDeleteButton);

    divActions.appendChild(buttonDelete);

    article.appendChild(divTaskCardLabel);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(divPoints);
    article.appendChild(divAssignee);
    article.appendChild(divActions);

    tasksDisplay.appendChild(article);

    clearFields();
    displayPointsFunc();
    taskId++;
  }

  function onClickDelete(event) {
    event.preventDefault();

    let id = document.getElementById("task-id").value;
    let allElements = tasksDisplay.querySelectorAll("article");

    let element = Array.from(allElements).find((e) => e.id === id);

    totalPoints -= Number(estimationPointsField.value);
    displayPointsFunc();

    element.remove();
    clearFields();

    titleField.disabled = false;
    descriptionField.disabled = false;
    labelField.disabled = false;
    estimationPointsField.disabled = false;
    assigneeField.disabled = false;

    buttonDeleteTask.disabled = true;
    buttonCreateTask.disabled = false;
  }
}
