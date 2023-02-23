function solve(text, word) {
  let textToArray = text.split(" ");
  let counter = 0;

  for (const element of textToArray) {
    if (element === word) {
      counter++;
    }
  }
  return counter;
}

console.log(solve("This is a word and it also is a sentence", "is"));
