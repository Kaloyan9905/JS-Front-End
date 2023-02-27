function solve(array) {
  let sortedArray = array.sort(function (a, b) {
    return a.localeCompare(b);
  });

  for (let i = 0; i < sortedArray.length; i++) {
    console.log(`${i + 1}.${sortedArray[i]}`);
  }
}

solve(["Bob", "Koko", "Krasi", "Adsa"]);
