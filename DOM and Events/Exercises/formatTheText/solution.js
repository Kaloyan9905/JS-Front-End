function solve() {
  let textHolder = document.getElementById("input");
  let output = document.getElementById("output");
  let text = Array.from(textHolder.value);

  let sentences = [];
  let currentSentence = "";
  let result = "";

  while (text.length > 0) {
    let char = text.shift();
    currentSentence += char;

    if (char === ".") {
      sentences.push(currentSentence);
      currentSentence = "";
    }
  }

  if (sentences.length < 3) {
    output.innerHTML = `<p>${sentences.join(" ")}</p>`;
    return;
  }

  for (let index = 1; index <= sentences.length; index++) {
    result += sentences[index - 1];

    if (index % 3 === 0) {
      output.innerHTML += `<p>${result}</p>`;
      result = "";
    }
  }

  if (result) {
    output.innerHTML += `<p>${result}</p>`;
  }
}
