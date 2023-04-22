function validate() {
  const emailField = document.getElementById("email");

  emailField.addEventListener("change", (event) => {
    const email = emailField.value;
    const regex = /^[a-z]+@[a-z]+\.[a-z]+$/i;

    if (!regex.test(email)) {
      emailField.classList = "error";
    } else {
        emailField.classList = "";
    }
  });
}
