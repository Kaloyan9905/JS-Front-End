function solve(word, text) {
  let textToArray = text.split(" ");
  for (const item of textToArray) {
    if (item.toLowerCase() === word.toLowerCase()) {
      return word;
    }
  }
  return `${word} not found!`;
}

console.log(solve("javascript", "JavaScript is the best programming language"));
