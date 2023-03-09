function solve(password) {
  let digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let result;
  let finalResult = [];

  function checkLength(param) {
    if (param.length >= 6 && param.length <= 10) {
      return true;
    }
    return "Password must be between 6 and 10 characters";
  }

  function checkContent(param) {
    if (/^[a-zA-Z0-9]+$/.test(param)) {
      return true;
    }
    return "Password must consist only of letters and digits";
  }

  function checkDigitContent(param) {
    let digitsCounter = 0;

    for (const element of param) {
      if (digitsArray.includes(Number(element))) {
        digitsCounter++;
      }
    }
    if (digitsCounter >= 2) {
      return true;
    }
    return "Password must have at least 2 digits";
  }

  result = checkLength(password);

  if (result !== true) {
    finalResult.push(result);
  }

  result = checkContent(password);

  if (result !== true) {
    finalResult.push(result);
  }

  result = checkDigitContent(password);

  if (result !== true) {
    finalResult.push(result);
  }

  if (finalResult.length > 0) {
    return finalResult.join("\n");
  }

  return "Password is valid";
}

console.log(solve("MyPass123"));
