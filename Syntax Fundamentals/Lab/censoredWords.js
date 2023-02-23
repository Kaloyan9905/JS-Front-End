function solve(text, word) {
  while (text.includes(word)) {
    text = text.replace(word, repeat(word));
  }

  return text;

  function repeat(replacement) {
    return "*".repeat(replacement.length);
  }
}

console.log(solve("A small sentence smallwith some words small", "small"));
