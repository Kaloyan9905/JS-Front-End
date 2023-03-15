function extractText() {
  let itemsCollection = document.querySelectorAll("li");
  let textArea = document.getElementById("result");

  for (let item of itemsCollection) {
    textArea.textContent += item.textContent + "\n";
  }
}
