window.addEventListener("load", solve);

function solve() {
  const firstNameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const ageField = document.getElementById("age");
  const storyTitleField = document.getElementById("story-title");
  const genreField = document.getElementById("genre");
  const storyTextField = document.getElementById("story");

  const storyPreviewDisplay = document.getElementById("preview-list");

  const buttonPublish = document.getElementById("form-btn");
  buttonPublish.addEventListener("click", onClickPublish);

  function onClickPublish(event) {
    function onClickSave(event) {
      let div = document.getElementById("main");
      div.innerHTML = "";
      let h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      div.appendChild(h1);
    }

    function onClickEdit(event) {
      firstNameField.value = firstName;
      lastNameField.value = lastName;
      ageField.value = age;
      storyTitleField.value = storyTitle;
      genreField.value = genre;
      storyTextField.value = storyText;

      buttonPublish.disabled = false;

      document.getElementsByClassName("save-btn")[0].disabled = true;
      document.getElementsByClassName("edit-btn")[0].disabled = true;
      document.getElementsByClassName("delete-btn")[0].disabled = true;
      const toBeRemoved = document.getElementsByClassName("story-info")[0];
      toBeRemoved.parentElement.removeChild(toBeRemoved);

      onClickPublish;
    }

    function onClickDelete(event) {
      const toBeRemoved = document.getElementsByClassName("story-info")[0];
      toBeRemoved.parentElement.removeChild(toBeRemoved);
      buttonPublish.disabled = false;
    }

    function createStoryTemplate() {
      let li = document.createElement("li");
      li.classList = "story-info";

      let article = document.createElement("article");

      let h4Name = document.createElement("h4");
      h4Name.textContent = `Name: ${firstName} ${lastName}`;

      let pAge = document.createElement("p");
      pAge.textContent = `Age: ${age}`;

      let pTitle = document.createElement("p");
      pTitle.textContent = `Title: ${storyTitle}`;

      let pGenre = document.createElement("p");
      pGenre.textContent = `Genre: ${genre}`;

      let pStoryText = document.createElement("p");
      pStoryText.textContent = storyText;

      let buttonSave = document.createElement("button");
      let buttonEdit = document.createElement("button");
      let buttonDelete = document.createElement("button");

      buttonSave.textContent = "Save";
      buttonEdit.textContent = "Edit";
      buttonDelete.textContent = "Delete";

      buttonSave.classList = "save-btn";
      buttonEdit.classList = "edit-btn";
      buttonDelete.classList = "delete-btn";

      buttonSave.disabled = false;
      buttonEdit.disabled = false;
      buttonDelete.disabled = false;

      buttonEdit.addEventListener("click", onClickEdit);
      buttonSave.addEventListener("click", onClickSave);
      buttonDelete.addEventListener("click", onClickDelete);

      article.appendChild(h4Name);
      article.appendChild(pAge);
      article.appendChild(pTitle);
      article.appendChild(pGenre);
      article.appendChild(pStoryText);

      li.appendChild(article);
      li.appendChild(buttonSave);
      li.appendChild(buttonEdit);
      li.appendChild(buttonDelete);

      storyPreviewDisplay.appendChild(li);
    }

    const firstName = firstNameField.value;
    const lastName = lastNameField.value;
    const age = ageField.value;
    const storyTitle = storyTitleField.value;
    const genre = genreField.value;
    const storyText = storyTextField.value;

    firstNameField.value = "";
    lastNameField.value = "";
    ageField.value = "";
    storyTitleField.value = "";
    genreField.value = "";
    storyTextField.value = "";

    if (
      !firstName ||
      !lastName ||
      !age ||
      !storyTitle ||
      !genre ||
      !storyText
    ) {
      return;
    }

    buttonPublish.disabled = true;
    createStoryTemplate();
  }
}
