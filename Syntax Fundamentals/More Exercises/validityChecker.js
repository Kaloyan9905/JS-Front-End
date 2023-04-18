function solve(x1, y1, x2, y2) {
    let values = {
      1: [x1, y1, 0, 0],
      2: [x2, y2, 0, 0],
      3: [x1, y1, x2, y2],
    };
  
    let resultArray = [];
  
    for (i = 1; i <= 3; i++) {
      x1 = values[i][0];
      y1 = values[i][1];
      x2 = values[i][2];
      y2 = values[i][3];
      
      let result = Math.sqrt(
        x2 ** 2 - 2 * x2 * x1 + x1 ** 2 + (y2 ** 2 - 2 * y2 * y1 + y1 ** 2)
      );
  
      if (Number.isInteger(result)) {
        resultArray.push(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
      } else {
        resultArray.push(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
      }
    }
    return resultArray.join("\n");
  }
  
  console.log(solve(2, 1, 1, 1));
  