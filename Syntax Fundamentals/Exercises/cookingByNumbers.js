function solve(...args) {
    let number = parseInt(args.shift());
    let result = []
  
    let commands = {
      chop: (number) => number / 2,
      dice: (number) => Math.sqrt(number),
      spice: (number) => number += 1,
      bake: (number) => number *= 3,
      fillet: (number) => number -= number * 0.20,
    };
  
    for (let arg of args) {
      number = commands[arg](number);
      result.push(number)
    }
    return result.join("\n")
  }
  
  console.log(solve("32", "chop", "chop", "chop", "chop", "chop"));