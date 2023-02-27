function solve(string) {
  let words = string.match(/[A-Z][a-z]+|[A-Z]/g);
  return words.join(", ")
}

console.log(solve("KokoEGotinPich"));
