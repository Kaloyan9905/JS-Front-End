function sumTable() {
  let rows = document.querySelectorAll(
    "tr:not(:first-child):not(:last-child) td:nth-child(2)"
  );
  console.log(rows);
  let displaySum = document.getElementById("sum");
  let sum = 0;

  for (let row of rows) {
    console.log(row.textContent);
    sum += Number(row.textContent);
  }
  displaySum.textContent = sum;
}
