function solve(sequence) {
  function countElement(arr, element) {
    return arr.reduce((acc, val) => {
      if (val === element) {
        acc++;
      }
      return acc;
    }, 0);
  }

  let resultSet = new Set();

  let wordsArray = sequence.split(" ");
  let lowerCaseWords = wordsArray.map((element) => element.toLowerCase());

  for (let word of lowerCaseWords) {
    let count = countElement(lowerCaseWords, word);

    if (count % 2 !== 0) {
      resultSet.add(word);
    }
  }

  return Array.from(resultSet).join(" ")
}

console.log(solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#"));
