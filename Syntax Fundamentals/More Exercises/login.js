function solve(array) {
  let result = [];
  let attempts = 0;
  const username = array.shift();

  for (let password of array) {
    if (password.split("").reverse().join("") === username) {
      result.push(`User ${username} logged in.`);
      break;
    } else if (attempts < 3) {
      result.push(`Incorrect password. Try again.`);
    }
    if (attempts >= 3) {
      result.push(`User ${username} blocked!`);
      break;
    }
    attempts++;
  }

  return result.join("\n");
}

console.log(solve(["Acer", "login", "go", "let me in", "",  "recA"]));
