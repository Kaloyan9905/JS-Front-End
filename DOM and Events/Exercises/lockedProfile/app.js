function lockedProfile() {
  let buttons = document.querySelectorAll("button");

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", onClick);
  });

  function onClick(event) {
    parent = event.target.parentElement;
    let input = parent.querySelector("input[value=unlock]");

    if (input.checked) {
      let text = parent.querySelector("div");

      if (event.target.textContent === "Show more") {
        text.style.display = "block";
        event.target.textContent = "Hide it";
      } else {
        text.style.display = "none";
        event.target.textContent = "Show more";
      }
    }
  }
}
