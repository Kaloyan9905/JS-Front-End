window.addEventListener("load", solve);

function solve() {
  let likes = 0;
  const genreField = document.getElementById("genre");
  const songField = document.getElementById("name");
  const authorField = document.getElementById("author");
  const dateField = document.getElementById("date");
  const displayCollection = document.querySelectorAll(
    "#all-hits .all-hits-container"
  )[0];

  const buttonAdd = document.getElementById("add-btn");

  buttonAdd.addEventListener("click", onClickAdd);

  function onClickAdd(event) {
    event.preventDefault();

    const genre = genreField.value;
    const song = songField.value;
    const author = authorField.value;
    const date = dateField.value;

    genreField.value = "";
    songField.value = "";
    authorField.value = "";
    dateField.value = "";

    if (!genre || !song || !author || !dateField) {
      return;
    }

    const div = document.createElement("div");
    div.classList = "hits-info";

    const image = document.createElement("img");
    image.src = "./static/img/img.png";

    const h2Genre = document.createElement("h2");
    const h2Song = document.createElement("h2");
    const h2Author = document.createElement("h2");
    const h3Date = document.createElement("h3");

    h2Genre.textContent = `Genre: ${genre}`;
    h2Song.textContent = `Name: ${song}`;
    h2Author.textContent = `Author: ${author}`;
    h3Date.textContent = `Date: ${date}`;

    const buttonSave = document.createElement("button");
    const buttonLike = document.createElement("button");
    const buttonDelete = document.createElement("button");

    buttonSave.textContent = "Save song";
    buttonLike.textContent = "Like song";
    buttonDelete.textContent = "Delete";

    buttonSave.classList = "save-btn";
    buttonLike.classList = "like-btn";
    buttonDelete.classList = "delete-btn";

    buttonSave.addEventListener("click", onClickSave);
    buttonLike.addEventListener("click", onClickLike);
    buttonDelete.addEventListener("click", onClickDelete);

    div.appendChild(image);
    div.appendChild(h2Genre);
    div.appendChild(h2Song);
    div.appendChild(h2Author);
    div.appendChild(h3Date);
    div.appendChild(buttonSave);
    div.appendChild(buttonLike);
    div.appendChild(buttonDelete);

    displayCollection.appendChild(div);
  }

  function onClickSave(event) {
    const display = event.target.parentElement;
    display.getElementsByClassName("save-btn")[0].remove();
    display.getElementsByClassName("like-btn")[0].remove();
    display.remove();
    document
      .querySelectorAll("#saved-hits .saved-container")[0]
      .appendChild(display);
  }

  function onClickLike(event) {
    const likesDisplay = document.querySelectorAll("#total-likes .likes p")[0];
    likes++;
    likesDisplay.textContent = `Total Likes: ${likes}`;
    event.target.disabled = true;
  }

  function onClickDelete(event) {
    event.target.parentElement.remove();
  }
}
