function solve(array) {
  let n = Number(array.shift());
  let assigneeObject = {};

  let points = {
    ToDo: 0,
    "In Progress": 0,
    "Code Review": 0,
    Done: 0,
  };

  for (let index = 0; index < n; index++) {
    let [assignee, taskId, title, status, estimatedPoints] = array
      .shift()
      .split(":");

    if (!Object.keys(assigneeObject).includes(assignee)) {
      assigneeObject[assignee] = [];
    }

    assigneeObject[assignee].push({ taskId, title, status, estimatedPoints });
    points[status] += Number(estimatedPoints);
  }

  for (let command of array) {
    if (command.includes("Add New")) {
      let [_, assignee, taskId, title, status, estimatedPoints] =
        command.split(":");
      let added = false;

      for (let key in assigneeObject) {
        if (key === assignee) {
          assigneeObject[assignee].push({
            taskId,
            title,
            status,
            estimatedPoints,
          });
          added = true;
          points[status] += Number(estimatedPoints);
        }
      }

      if (added === false) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }
    } else if (command.includes("Change Status")) {
      let [_, assignee, taskId, newStatus] = command.split(":");
      let idExists = false;
      let assigneeExists = false;

      for (let key in assigneeObject) {
        if (key === assignee) {
          assigneeExists = true;

          for (let task in assigneeObject[assignee])
            if (assigneeObject[assignee][task].taskId === taskId) {
              let currStatus = assigneeObject[assignee][task].status;
              let currPoints = Number(
                assigneeObject[assignee][task].estimatedPoints
              );

              points[currStatus] -= currPoints;
              assigneeObject[assignee][task].status = newStatus;

              points[newStatus] += currPoints;
              idExists = true;
            }
        }
      }

      if (assigneeExists === false) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }

      if (idExists === false && assigneeExists === true) {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
      }
    } else {
      let [_, assignee, indexStr] = command.split(":");
      let index = parseInt(indexStr);
      let assigneeExists = false;

      for (let key in assigneeObject) {
        if (key === assignee) {
          assigneeExists = true;

          if (0 >= index && index < assigneeObject[assignee].length) {
            let currStatus = assigneeObject[assignee][index].status;
            points[currStatus] -= Number(
              assigneeObject[assignee][index].estimatedPoints
            );
            assigneeObject[assignee].splice(index, 1);
          } else {
            console.log(`Index is out of range!`);
          }
        }
      }

      if (assigneeExists === false) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
      }
    }
  }
  let toDoPts = Number(points["ToDo"]);
  let inProgressPts = Number(points["In Progress"]);
  let codeReviewPts = Number(points["Code Review"]);
  let donePts = Number(points["Done"]);

  console.log(`ToDo: ${toDoPts}pts`);
  console.log(`In Progress: ${inProgressPts}pts`);
  console.log(`Code Review: ${codeReviewPts}pts`);
  console.log(`Done Points: ${donePts}pts`);

  if (donePts >= toDoPts + codeReviewPts + inProgressPts) {
    console.log(`Sprint was successful!`);
  } else {
    console.log(`Sprint was unsuccessful...`);
  }
}

solve([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
