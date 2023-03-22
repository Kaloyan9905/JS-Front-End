function addItem() {
  let inputText = document.getElementById("newItemText");
  let inputValue = document.getElementById("newItemValue");
  let text = inputText.value;
  let value = inputValue.value;
  let option = document.createElement("option");

  option.value = value
  option.text = text;
  document.getElementById("menu").appendChild(option);

  inputText.value = ""
  inputValue.value = ""
}
