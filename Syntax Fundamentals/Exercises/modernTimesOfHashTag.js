function solve(text) {
  let textToArray = text.split(" ");
  result = [];

  for (const word of textToArray) {
    if (word[0] === "#" && word.length > 1) {
      let toBeAdded = word.slice(1);
      if (/^[a-zA-Z]+$/.test(toBeAdded)) {
        result.push(toBeAdded);
      }
    }
  }
  return result.join("\n");
}

console.log(
  solve("Nowadays everyone uses # to tag a #special word in #socialMedia")
);
