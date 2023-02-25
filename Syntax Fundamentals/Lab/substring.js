function solve(string, startIndex, count) {
    let stringToArray = string.split("")
    let reworkedString = stringToArray.splice(startIndex, count)
    return reworkedString.join("")
}

console.log(solve("ASentence", 1, 8));
