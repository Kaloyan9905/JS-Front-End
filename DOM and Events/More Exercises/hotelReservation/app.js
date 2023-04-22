window.addEventListener("load", solve);

function solve() {
  const firstNameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const dateInField = document.getElementById("date-in");
  const dateOutField = document.getElementById("date-out");
  const peopleCountField = document.getElementById("people-count");

  let firstName;
  let lastName;
  let dateIn;
  let dateOut;
  let peopleCount;

  const reservationInfoUl = document.querySelectorAll(
    ".first-container .info-list"
  )[0];

  const confirmReservationUl = document.querySelectorAll(
    ".first-container .confirm-list"
  )[0];

  const buttonNext = document.getElementById("next-btn");
  buttonNext.addEventListener("click", onClickNext);

  function clearFields() {
    firstNameField.value = "";
    lastNameField.value = "";
    dateInField.value = "";
    dateOutField.value = "";
    peopleCountField.value = "";
  }

  function onClickNext(event) {
    event.preventDefault();

    firstName = firstNameField.value;
    lastName = lastNameField.value;
    dateIn = dateInField.value;
    dateOut = dateOutField.value;
    peopleCount = peopleCountField.value;

    if (!firstName || !lastName || !dateIn || !dateOut || !peopleCount) {
      return "Empty field!";
    }

    let li = document.createElement("li");
    li.classList = "reservation-content";

    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName} ${lastName}`;

    let pDateIn = document.createElement("p");
    pDateIn.textContent = `From date: ${dateIn}`;

    let pDateOut = document.createElement("p");
    pDateOut.textContent = `To date: ${dateOut}`;

    let pPeopleCount = document.createElement("p");
    pPeopleCount.textContent = `For ${peopleCount} people`;

    let buttonEdit = document.createElement("button");
    buttonEdit.classList = "edit-btn";
    buttonEdit.textContent = "Edit";

    let buttonContinue = document.createElement("button");
    buttonContinue.classList = "continue-btn";
    buttonContinue.textContent = "Continue";

    buttonEdit.disabled = false;
    buttonContinue.disabled = false;

    buttonEdit.addEventListener("click", onClickEdit);
    buttonContinue.addEventListener("click", onClickContinue);

    article.appendChild(h3);
    article.appendChild(pDateIn);
    article.appendChild(pDateOut);
    article.appendChild(pPeopleCount);

    li.appendChild(article);
    li.appendChild(buttonEdit);
    li.appendChild(buttonContinue);

    reservationInfoUl.appendChild(li);

    clearFields();
    buttonNext.disabled = true;
  }

  function onClickContinue(event) {
    event.preventDefault();
    let parent = event.target.parentElement;

    reservationInfoUl.innerHTML = "";

    let buttonConfirm = document.createElement("button");
    let buttonCancel = document.createElement("button");

    const secondChild = parent.children[1];
    const thirdChild = parent.children[2];

    parent.removeChild(secondChild);
    parent.removeChild(thirdChild);

    buttonConfirm.classList = "confirm-btn";
    buttonConfirm.textContent = "Confirm";

    buttonCancel.classList = "cancel-btn";
    buttonCancel.textContent = "Cancel";

    parent.appendChild(buttonConfirm)
    parent.appendChild(buttonCancel)

    buttonConfirm.addEventListener("click", onClickConfirm);
    buttonCancel.addEventListener("click", onClickCancel);

    confirmReservationUl.appendChild(parent);
  }

  function onClickEdit(event) {
    event.preventDefault();
    event.target.parentElement.remove();

    firstNameField.value = firstName;
    lastNameField.value = lastName;
    dateInField.value = dateIn;
    dateOutField.value = dateOut;
    peopleCountField.value = peopleCount;

    buttonNext.disabled = false;
  }

  function onClickConfirm(event) {
    event.preventDefault();
    event.target.parentElement.remove();

    buttonNext.disabled = false;

    let h1 = document.getElementById("verification");
    h1.classList = "reservation-confirmed";
    h1.textContent = "Confirmed.";
  }

  function onClickCancel(event) {
    event.preventDefault();
    event.target.parentElement.remove();

    buttonNext.disabled = false;

    let h1 = document.getElementById("verification");
    h1.classList = "reservation-cancelled";
    h1.textContent = "Cancelled.";
  }
}
