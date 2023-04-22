window.addEventListener("load", solve);

function solve() {
  const firstNameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const peopleNumberField = document.getElementById("people-count");
  const dateField = document.getElementById("from-date");
  const daysCountField = document.getElementById("days-count");

  const ticketPreview = document.getElementsByClassName("ticket-info-list")[0];
  const confirmTicket = document.getElementsByClassName("confirm-ticket")[0];

  const buttonNext = document.getElementById("next-btn");
  buttonNext.addEventListener("click", onClickNext);

  let firstName;
  let lastName;
  let people;
  let date;
  let days;

  function onClickNext(event) {
    event.preventDefault();

    firstName = firstNameField.value;
    lastName = lastNameField.value;
    people = peopleNumberField.value;
    date = dateField.value;
    days = daysCountField.value;

    if (!firstName || !lastName || !people || !date || !days) {
      return;
    }

    buttonNext.disabled = true;

    let li = document.createElement("li");
    li.classList = "ticket";

    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName} ${lastName}`;

    let pDate = document.createElement("p");
    pDate.textContent = `From date: ${date}`;

    let pDays = document.createElement("p");
    pDays.textContent = `For ${days} days`;

    let pPeople = document.createElement("p");
    pPeople.textContent = `For ${people} people`;

    let buttonEdit = document.createElement("button");
    buttonEdit.classList = "edit-btn";
    buttonEdit.textContent = `Edit`;

    let buttonContinue = document.createElement("button");

    buttonContinue.classList = "continue-btn";
    buttonContinue.textContent = "Continue";

    buttonEdit.addEventListener("click", onClickEdit);
    buttonContinue.addEventListener("click", onClickContinue);

    article.appendChild(h3);
    article.appendChild(pDate);
    article.appendChild(pDays);
    article.appendChild(pPeople);

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonContinue);

    ticketPreview.appendChild(li);
  }

  function onClickEdit(event) {
    event.target.parentElement.remove();

    buttonNext.disabled = false;

    firstNameField.value = firstName;
    lastNameField.value = lastName;
    peopleNumberField.value = people;
    daysCountField.value = days;
    dateField.value = date;
  }

  function onClickContinue(event) {
    let parent = event.target.parentElement;

    ticketPreview.innerHTML = "";

    const firstButton = parent.children[1];
    const secondButton = parent.children[2];

    parent.removeChild(firstButton);
    parent.removeChild(secondButton);

    let buttonCancel = document.createElement("button");
    buttonCancel.textContent = "Cancel";
    buttonCancel.classList = "cancel-btn";

    let buttonConfirm = document.createElement("button");
    buttonConfirm.textContent = "Confirm";
    buttonConfirm.classList = "confirm-btn";

    buttonConfirm.addEventListener("click", onClickConfirm);
    buttonCancel.addEventListener("click", onClickCancel);

    parent.appendChild(buttonConfirm);
    parent.appendChild(buttonCancel);

    confirmTicket.appendChild(parent);
  }

  function onClickCancel(event) {
    event.target.parentElement.remove();
    buttonNext.disabled = false;
  }

  function onClickConfirm(event) {
    let divDisplay = document.getElementById("main");
    let body = document.getElementsByTagName("body")[0];

    divDisplay.remove();

    let h1 = document.createElement("h1");
    h1.id = "thank-you";
    h1.textContent = "Thank you, have a nice day! ";

    let button = document.createElement("button");
    button.id = "back-btn";
    button.textContent = "Back ";

    button.addEventListener("click", function () {
      location.reload();
    });

    body.appendChild(h1);
    body.appendChild(button);
  }
}
