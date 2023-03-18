function focused() {
  Array.from(document.querySelectorAll("input")).forEach((ele) => {
    ele.addEventListener("focus", onFocus);
    ele.addEventListener("blur", onBlur);
  });

  function onFocus(event) {
    event.target.parentElement.className = "focused";
  }

  function onBlur(event) {
    event.target.parentElement.className = "";
  }
}
