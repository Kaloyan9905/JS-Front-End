function create(words) {
  for (const word of words) {
    let divContainer = document.getElementById("content");
    let div = document.createElement("div");
    let p = document.createElement("p");

    p.textContent = word;
    p.style.display = "none";
    div.appendChild(p);
    divContainer.appendChild(div);

    div.addEventListener("click", onClick);

    function onClick(event) {
      event.target.childNodes[0].style = "inline";
    }
  }
}
