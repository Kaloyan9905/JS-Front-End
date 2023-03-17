function deleteByEmail() {
  let searchedEmail = document.getElementsByTagName("input")[0].value;
  let emails = document.querySelectorAll("#customers tr td:nth-child(2)");
  let deleted = false;
  document.getElementsByTagName("input")[0].value = "";

  for (let email of emails) {
    if (email.textContent === searchedEmail) {
      let row = email.parentNode;
      row.parentNode.removeChild(row);
      document.getElementById("result").textContent = "Deleted.";
      deleted = true;
      return;
    }
  }

  if (deleted === false) {
    document.getElementById("result").textContent = "Not found.";
  }
}
