function solve(string, times) {
  function repeatString(parameter, n) {
    result = "";
    
    for (let i = 0; i < n; i++) {
      result += parameter;
    }
    return result;
  }

  return repeatString(string, times);
}

console.log(solve("abc", 3));
