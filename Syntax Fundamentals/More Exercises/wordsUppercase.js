function transformStringToUppercaseWithCommas(str) {
  // split the string by spaces and punctuation
const words = str.split(/[ \,\.\!\?\'\"\(\)\[\]\{\}\+\-\*\/\@\#\$\%\^\&]+/);

  // map each word to uppercase and join them with commas
  const result = words
    .filter((word) => word.length > 0)
    .map((word) => word.toUpperCase());

  return result.join(", ");
}

console.log(transformStringToUppercaseWithCommas("Hi, how are you?"));
