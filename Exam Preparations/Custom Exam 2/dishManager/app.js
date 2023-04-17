window.addEventListener("load", solve);

function solve() {
  const firstNameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const ageField = document.getElementById("age");
  const genderField = document.getElementById("genderSelect");
  const dishDescriptionField = document.getElementById("task");

  const inProgressField = document.getElementById("in-progress");
  const finishedCookingField = document.getElementById("finished");
  const progressCountField = document.getElementById("progress-count");

  let currentCount;

  const buttonSubmit = document.getElementById("form-btn");
  buttonSubmit.addEventListener("click", onClickSubmit);

  const buttonClear = document.getElementById("clear-btn");
  buttonClear.addEventListener("click", onClickClear);

  function onClickSubmit(event) {
    if (event) {
      event.preventDefault();
    }

    if (
      !firstNameField.value ||
      !lastNameField.value ||
      !ageField.value ||
      !genderField.value ||
      !dishDescriptionField.value
    ) {
      return;
    }

    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let age = ageField.value;
    let gender = genderField.value;
    let dishDescription = dishDescriptionField.value;

    // template

    let li = document.createElement("li");
    li.classList = "each-line";

    let article = document.createElement("article");

    let h4 = document.createElement("h4");
    h4.textContent = `${firstName} ${lastName}`;

    let pAge = document.createElement("p");
    pAge.textContent = `${gender}, ${age}`;

    let pDesc = document.createElement("p");
    pDesc.textContent = `Dish description: ${dishDescription}`;

    let buttonEdit = document.createElement("button");
    buttonEdit.classList = "edit-btn";
    buttonEdit.textContent = "Edit";

    let buttonComplete = document.createElement("button");
    buttonComplete.classList = "complete-btn";
    buttonComplete.textContent = "Mark as complete";

    buttonEdit.addEventListener("click", onClickEdit);
    buttonComplete.addEventListener("click", onClickComplete);

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pDesc);

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonComplete);

    inProgressField.appendChild(li);

    currentCount = Number(progressCountField.textContent);
    progressCountField.textContent = "";
    progressCountField.textContent = currentCount + 1;

    firstNameField.value = "";
    lastNameField.value = "";
    genderField.value = "";
    ageField.value = "";
    dishDescriptionField.value = "";
  }

  function onClickEdit(event) {
    if (event) {
      event.preventDefault();
    }

    let parent = event.target.parentElement;
    let children = parent.children[0].children;

    let firstLastName = children[0].textContent;
    let nameArray = firstLastName.split(" ");

    let genderAge = children[1].textContent;
    let genderAgeArray = genderAge.split(", ");

    let dishDescriptionText = children[2].textContent;
    let dishDescriptionArray = dishDescriptionText.split(": ");
    dishDescriptionArray.shift();

    let firstName = nameArray[0];
    let lastName = nameArray[1];
    let gender = genderAgeArray[0];
    let age = genderAgeArray[1];
    let dishDescription = dishDescriptionArray.join(": ");

    firstNameField.value = firstName;
    lastNameField.value = lastName;
    genderField.value = gender;
    ageField.value = age;
    dishDescriptionField.value = dishDescription;

    parent.remove();

    currentCount = Number(progressCountField.textContent);
    progressCountField.textContent = "";
    progressCountField.textContent = currentCount - 1;
  }

  function onClickComplete(event) {
    if (event) {
      event.preventDefault();
    }

    let parent = event.target.parentElement;

    let firstChild = parent.children[1];
    let secondChild = parent.children[2];

    parent.removeChild(firstChild);
    parent.removeChild(secondChild);
    parent.remove();

    finishedCookingField.appendChild(parent);

    currentCount = Number(progressCountField.textContent);
    progressCountField.textContent = "";
    progressCountField.textContent = currentCount - 1;
  }

  function onClickClear(event) {
    if (event) {
      event.preventDefault();
    }

    finishedCookingField.innerHTML = "";
  }
}
