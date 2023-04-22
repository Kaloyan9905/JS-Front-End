function attachEvents() {
  const BASE_URL = `http://localhost:3030/jsonstore/tasks/`;

  const tasksDisplay = document.getElementById("list");

  let id = null;

  const buttonLoad = document.getElementById("load-course");
  const buttonAdd = document.getElementById("add-course");
  const buttonEdit = document.getElementById("edit-course");

  const titleField = document.getElementById("course-name");
  const courseTypeField = document.getElementById("course-type");
  const descriptionField = document.getElementById("description");
  const teacherNameField = document.getElementById("teacher-name");

  buttonLoad.addEventListener("click", onClickLoad);
  buttonAdd.addEventListener("click", onClickAdd);
  buttonEdit.addEventListener("click", onClickEdit);

  function clearFields() {
    titleField.value = "";
    courseTypeField.value = "";
    descriptionField.value = "";
    teacherNameField.value = "";
  }

  function onClickLoad(event) {
    if (event) {
      event.preventDefault();
    }

    buttonEdit.disabled = true;
    tasksDisplay.innerHTML = "";

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        for (let key in data) {
          let div = document.createElement("div");
          div.classList.add("container");
          div.id = data[key]._id;

          let h2Title = document.createElement("h2");
          h2Title.textContent = data[key].title;

          let h3Name = document.createElement("h3");
          h3Name.textContent = data[key].teacher;

          let h3Type = document.createElement("h3");
          h3Type.textContent = data[key].type;

          let h4Desc = document.createElement("h4");
          h4Desc.textContent = data[key].description;

          let buttonEditTask = document.createElement("button");
          buttonEditTask.classList = "edit-btn";
          buttonEditTask.textContent = "Edit Course";

          let buttonFinish = document.createElement("button");
          buttonFinish.classList = "finish-btn";
          buttonFinish.textContent = "Finish Course";

          buttonEditTask.addEventListener("click", onClickEditTask);
          buttonFinish.addEventListener("click", onClickFinish);

          div.appendChild(h2Title);
          div.appendChild(h3Name);
          div.appendChild(h3Type);
          div.appendChild(h4Desc);
          div.appendChild(buttonEditTask);
          div.appendChild(buttonFinish);

          tasksDisplay.appendChild(div);
        }
      });
  }

  function onClickAdd(event) {
    if (event) {
      event.preventDefault();
    }

    let title = titleField.value;
    let courseType = courseTypeField.value;
    let description = descriptionField.value;
    let teacher = teacherNameField.value;

    if (!title || !courseType || !description || !teacher) {
      return;
    }

    if (
      !courseType === "Short" ||
      !courseType === "Medium" ||
      !courseType === "Long"
    ) {
      return;
    }

    const newTask = {
      title: title,
      type: courseType,
      description: description,
      teacher: teacher,
    };

    fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(newTask),
    }).then(() => onClickLoad(event), clearFields());
  }

  function onClickEdit(event) {
    if (event) {
      event.preventDefault();
    }

    let title = titleField.value;
    let courseType = courseTypeField.value;
    let description = descriptionField.value;
    let teacher = teacherNameField.value;

    if (!title || !courseType || !description || !teacher) {
      return;
    }

    if (
      !courseType === "Short" ||
      !courseType === "Medium" ||
      !courseType === "Long"
    ) {
      return;
    }

    const newTask = {
      title: title,
      type: courseType,
      description: description,
      teacher: teacher,
      _id: id,
    };

    fetch(BASE_URL + id, {
      method: "PUT",
      body: JSON.stringify(newTask),
    }).then(() => onClickLoad(event), clearFields());

    buttonEdit.disabled = true;
    buttonAdd.disabled = false;
  }

  function onClickEditTask(event) {
    if (event) {
      event.preventDefault();
    }

    let parent = event.target.parentElement;
    parent.remove();

    let title = parent.querySelectorAll("h2")[0].textContent;
    let teacher = parent.querySelectorAll("h3")[0].textContent;
    let courseType = parent.querySelectorAll("h3")[1].textContent;
    let description = parent.querySelectorAll("h4")[0].textContent;

    titleField.value = title;
    courseTypeField.value = courseType;
    descriptionField.value = description;
    teacherNameField.value = teacher;

    buttonEdit.disabled = false;
    buttonAdd.disabled = true;

    id = parent.id;
  }

  function onClickFinish(event) {
    event.preventDefault();

    let parent = event.target.parentElement;

    let id = parent.id;
    parent.remove();

    fetch(BASE_URL + id, {
      method: "DELETE",
    }).then(() => onClickLoad(event));
  }
}

attachEvents();
