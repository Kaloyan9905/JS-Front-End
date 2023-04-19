function solve(array) {
  let students = {
    // 1: { name: [], grade: [] },
  };

  for (let command of array) {
    let info = command.split(", ");

    let name = info[0].split(": ")[1];
    let grade = Number(info[1].split(": ")[1]);
    let score = Number(info[2].split(": ")[1]);

    if (score < 3) {
      continue;
    }

    let nextGrade = grade + 1;

    if (!students.hasOwnProperty(nextGrade)) {
      students[nextGrade] = { name: [], score: [] };
    }
    students[nextGrade].name.push(name);
    students[nextGrade].score.push(score);
  }

  for (let studentId in students) {
    if (
      students[studentId].name.length === 0 ||
      students[studentId].score.length === 0
    ) {
      delete students[studentId];
      continue;
    }

    let grades = students[studentId].score;
    let average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    students[studentId].average = average;
    delete students[studentId].score;
  }

  const sortedKeys = Object.keys(students).sort((a, b) => a - b);

  const sortedObject = {};
  for (let key of sortedKeys) {
    sortedObject[key] = students[key];
  }

  for (let key in sortedObject) {
    console.log(`${key} Grade`);
    console.log(`List of students: ${sortedObject[key].name.join(", ")}`);
    console.log(
      `Average annual score from last year: ${sortedObject[key].average.toFixed(
        2
      )}`
    );
    console.log();
  }
}
solve([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
