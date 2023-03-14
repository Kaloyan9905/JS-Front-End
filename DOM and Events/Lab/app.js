function addItem() {
  let search = document.getElementById("newItemText");
  let value = search.value;
  let li = document.createElement("li");
  let anchor = document.createElement("a");
  anchor.href = "#"

  li.textContent = value;

  if (value === "") {
    return;
  }

  document.getElementById("items").appendChild(li);
  anchor.textContent = "[Delete]";
  li.appendChild(anchor);
  search.value = "";

  anchor.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
}
