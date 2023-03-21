function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let info = document.getElementById("extra");

  if (window.getComputedStyle(info).display=== "none") {
    info.style.display = "block";
    button.textContent = "Less";
  } else {
    info.style.display = "none";
    button.textContent = "More";
  }
}
