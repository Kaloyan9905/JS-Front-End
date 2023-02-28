function solve(string, text) {
  let stringArray = string.split(", ");
  text = text.split(" ");

  function lengthCheck(ele, stringArray) {
    for (let item of stringArray) {
      if (item.length === ele.length) {
        return item;
      }
    }
    return false;
  }

  for (let element of text) {
    if (element.includes("*")) {
      let result = lengthCheck(element, stringArray);

      if (result !== false) {
        text[text.indexOf(element)] = result;
      }
    }
  }
  return text.join(" ");
}

console.log(
  solve(
    "great, learning",
    "softuni is ***** place for ******** new programming languages"
  )
);
